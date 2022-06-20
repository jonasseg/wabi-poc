import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMenu from './+state/menu/menu.reducer';
import { MenuEffects } from './+state/menu/menu.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMenu.MENU_FEATURE_KEY, fromMenu.reducer),
    EffectsModule.forFeature([MenuEffects]),
  ],
})
export class MenuModule {}
