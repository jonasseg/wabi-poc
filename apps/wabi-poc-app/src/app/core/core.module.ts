import { NgModule, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal/modal.service';
import { ModalComponent } from './shell/commons/components/modal/modal.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';

@NgModule({
  declarations: [ModalComponent, ErrorPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ModalComponent, ErrorPageComponent],
  providers: [ModalService, { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    };
  }
}
