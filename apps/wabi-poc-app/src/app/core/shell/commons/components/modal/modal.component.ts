import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
  Type,
  Inject,
} from '@angular/core';

import { ModalService } from '../../../../services/modal/modal.service';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

interface ModalButtonModel {
  text: string;
  callBack?: Subject<boolean>;
}

@Component({
  selector: 'wabi-poc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('bodyContainer', { read: ViewContainerRef })
  public bodyContainer!: ViewContainerRef;
  @HostBinding('class.animate') public addClassAnimate = false;

  public show = false;
  public buttons!: ModalButtonModel[];
  public title = 'Atención';
  public spinner = { text: '', load: false };
  public text!: string;

  constructor(
    @Inject(ModalService) private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.modalService.show$.subscribe((show: boolean) => {
      this.addClassAnimate = show;
      if (show) {
        this.show = show;
      } else {
        setTimeout(() => (this.show = show), 300);
      }
    });

    this.modalService.innerText$.subscribe((text: string) => {
      setTimeout(() => {
        this.text = text;
      }, 0);
    });

    this.modalService.buttons$.subscribe((buttons: ModalButtonModel[]) => {
      setTimeout(() => {
        this.buttons = buttons;
      }, 0);
    });

    this.modalService.title$.subscribe((title: string) => {
      setTimeout(() => {
        this.title = title;
      }, 0);
    });

    this.modalService.spinner$.subscribe(
      (spinner: { text: string; load: boolean }) => {
        setTimeout(() => {
          this.spinner = spinner;
        }, 0);
      }
    );

    this.modalService.bodyContainer$
      .pipe(filter((component) => !!component))
      .subscribe((component: { component: Type<any>; data: any }) => {
        setTimeout(() => {
          try {
            this.bodyContainer.clear();
            const factory =
              this.componentFactoryResolver.resolveComponentFactory(
                component.component
              );
            const cp = this.bodyContainer.createComponent(factory);
            cp.instance.data = component.data;
          } catch (error) {
            console.log(error);
          }
        }, 0);
      });
  }

  ngOnDestroy(): void {
    this.bodyContainer.remove();
  }

  public closeModal(callBack?: Subject<boolean>): void {
    if (callBack) {
      callBack.next(true);
    }
    this.show = false;
    this.bodyContainer.remove();
  }
}
