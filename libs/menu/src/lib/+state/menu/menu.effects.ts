import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MenuService } from '../services/menu.service';

import * as MenuActions from './menu.actions';

@Injectable()
export class MenuEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenuActions.MenuActionTypes.menuInit),
      switchMap(() =>
        this.menuService.getMenu().pipe(
          map((menu) => MenuActions.loadMenuSuccess({ menu })),
          catchError((error) =>
            of(MenuActions.loadMenuFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly menuService: MenuService
  ) {}
}
