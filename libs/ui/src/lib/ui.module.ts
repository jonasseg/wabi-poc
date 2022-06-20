import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WabiPocComponent } from './wabi-poc/wabi-poc.component';
import { SharedPrimengModule } from '@wabi-poc/shared/primeng';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, SharedPrimengModule],
  declarations: [WabiPocComponent, HeaderComponent],
  exports: [WabiPocComponent, HeaderComponent],
})
export class UiModule {}
