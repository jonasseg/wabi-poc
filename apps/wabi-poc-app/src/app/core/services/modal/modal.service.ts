import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

interface ModalObjectModel {
  title?: string;
  innerText?: string;
  buttons?: ModalButtonModel[];
  spinner?: { text: string; load: boolean };
  bodyContainer?: { component: Type<any>; data?: any };
}

interface ModalButtonModel {
  text: string;
  callBack?: Subject<boolean>;
}

@Injectable()
export class ModalService {
  public show$ = new Subject<boolean>();
  public innerText$ = new Subject<string>();
  public buttons$ = new Subject<ModalButtonModel[]>();
  public title$ = new Subject<string>();
  public spinner$ = new Subject<{ text: string; load: boolean }>();
  public bodyContainer$ = new Subject<{ component: Type<any>; data: any }>();

  public riseMessage(config: ModalObjectModel): void {
    this.show$.next(true);
    this.innerText$.next(config?.innerText ?? '');
    this.buttons$.next(config?.buttons ?? []);
    this.title$.next(config?.title ?? '');
    this.spinner$.next(config?.spinner ?? { text: '', load: false });
    if (config.bodyContainer?.component) {
      this.bodyContainer$.next({
        component: config.bodyContainer.component,
        data: config.bodyContainer.data,
      });
    }
  }
}
