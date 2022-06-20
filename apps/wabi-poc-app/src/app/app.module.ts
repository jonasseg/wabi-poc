import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { getAppConfigProvider } from '@wabi-poc/shared/util/app-config';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MENU_FEATURE_KEY, reducer } from '@wabi-poc/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

const appReducers = {
  [MENU_FEATURE_KEY]: reducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    environment.devTools,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    getAppConfigProvider(environment),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
