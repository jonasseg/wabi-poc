import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from '@wabi-poc/menu';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { UiModule } from '@wabi-poc/ui';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    EffectsModule.forFeature([MenuEffects]),
    UiModule,
  ],
})
export class HomeModule {}
