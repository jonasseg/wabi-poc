import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuEntity } from '../menu/menu.models';
import { AppConfig, APP_CONFIG } from '@wabi-poc/shared/util/app-config';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {}

  public getMenu(): Observable<MenuEntity[]> {
    return this.http.get<MenuEntity[]>(`${this.appConfig.api}`);
  }
}
