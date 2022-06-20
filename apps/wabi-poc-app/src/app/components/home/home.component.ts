import { Component, OnDestroy, OnInit } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { getAllMenu, initMenu, MenuEntity } from '@wabi-poc/menu';
import { MenuItem } from 'primeng/api';
import { distinctUntilChanged, skipWhile, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'wabi-poc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public menu!: MenuItem[];
  private unsubscribe$ = new Subject<void>();

  constructor(private readonly store: Store<EntityState<MenuEntity>>) {}

  ngOnInit(): void {
    this.store.dispatch(initMenu());
    this.store
      .pipe(
        select(getAllMenu),
        distinctUntilChanged(),
        skipWhile((value) => value === null),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((menu) => {
        const menuOptions = menu.reduce((acc, item) => {
          const itemChangeValue = {
            label: item.name,
            id: item.id,
            parentId: item.parentId,
          };
          acc[itemChangeValue.id] = acc[itemChangeValue.id] || {};
          acc[itemChangeValue.id] = itemChangeValue;

          if (itemChangeValue.parentId && acc[itemChangeValue.parentId] && acc[itemChangeValue.parentId].id) {
            const itemChangeValue2 = acc[itemChangeValue.id];
            (acc[itemChangeValue.parentId]['items'] = acc[itemChangeValue.parentId]['items'] || []).push(
              itemChangeValue2
            );
          }
          return acc;
        }, Object.create(null));

        this.menu = Object.values(menuOptions);
        console.log(this.menu);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
