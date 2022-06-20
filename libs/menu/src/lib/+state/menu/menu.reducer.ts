import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MenuActions from './menu.actions';
import { MenuEntity } from './menu.models';

export const MENU_FEATURE_KEY = 'menu';

export interface State extends EntityState<MenuEntity> {
  loaded: boolean; // has the Menu list been loaded
  error?: string | null; // last known error (if any)
}

export interface MenuPartialState {
  readonly [MENU_FEATURE_KEY]: State;
}

export const menuAdapter: EntityAdapter<MenuEntity> =
  createEntityAdapter<MenuEntity>();

export const initialState: State = menuAdapter.getInitialState({
  loaded: false,
});

const menuReducer = createReducer(
  initialState,
  on(MenuActions.initMenu, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MenuActions.loadMenuSuccess, (state, { menu }) =>
    menuAdapter.setAll(menu, { ...state, loaded: true, error: null })
  ),
  on(MenuActions.loadMenuFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return menuReducer(state, action);
}
