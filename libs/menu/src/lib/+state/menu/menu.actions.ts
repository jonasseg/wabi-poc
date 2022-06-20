import { createAction, props } from '@ngrx/store';
import { MenuEntity } from './menu.models';

export enum MenuActionTypes {
  menuInit = '[Menu Page] Init',
  menuApiLoadSuccess = '[Menu/API] Load Menu Success',
  menuApiLoadFailure = '[Menu/API] Load Menu Failure',
}

export const initMenu = createAction(MenuActionTypes.menuInit);

export const loadMenuSuccess = createAction(
  MenuActionTypes.menuApiLoadSuccess,
  props<{ menu: MenuEntity[] }>()
);

export const loadMenuFailure = createAction(
  MenuActionTypes.menuApiLoadFailure,
  props<{ error: string }>()
);
