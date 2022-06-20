import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { DockModule } from 'primeng/dock';

@NgModule({
  imports: [CommonModule, TieredMenuModule, DockModule],
  exports: [TieredMenuModule, DockModule],
})
export class SharedPrimengModule {}
