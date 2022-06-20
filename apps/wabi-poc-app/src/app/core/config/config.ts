import { Inject } from '@angular/core';
import { AppConfig, APP_CONFIG } from '@wabi-poc/shared/util/app-config';

export const CONFIGURATION_PROJECT_URL = {
  menu: {
    getAll: '',
  },
};

export class CongigurationURL {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  /**
   * @getBaseApi {environment.api}
   */
  get getBaseApi(): string {
    return `${this.appConfig.api}`;
  }

  /**
   * @getAllMenu ${this.getBaseApi}/api
   */
  get getAllMenuApi(): string {
    return `${this.getBaseApi}${CONFIGURATION_PROJECT_URL.menu.getAll}`;
  }
}
