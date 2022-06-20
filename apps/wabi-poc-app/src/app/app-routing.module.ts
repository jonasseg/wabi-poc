import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './core/views/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'forbidden',
    component: ErrorPageComponent,
  },
  {
    path: 'unauthorized',
    component: ErrorPageComponent,
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !isIframe ? 'enabledNonBlocking' : 'disabled', // Don't perform initial navigation in iframes
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
