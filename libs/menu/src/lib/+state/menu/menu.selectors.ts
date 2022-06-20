import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MENU_FEATURE_KEY, State, menuAdapter } from './menu.reducer';

// Lookup the 'Menu' feature state managed by NgRx
export const getMenuState = createFeatureSelector<State>(MENU_FEATURE_KEY);

const { selectAll } = menuAdapter.getSelectors();

export const getMenuLoaded = createSelector(
  getMenuState,
  (state: State) => state.loaded
);

export const getMenuError = createSelector(
  getMenuState,
  (state: State) => state.error
);

export const getAllMenu = createSelector(getMenuState, (state: State) =>
  selectAll(state)
);
