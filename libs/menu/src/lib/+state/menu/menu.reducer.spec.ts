import { Action } from '@ngrx/store';

import * as MenuActions from './menu.actions';
import { MenuEntity } from './menu.models';
import { State, initialState, reducer } from './menu.reducer';

describe('Menu Reducer', () => {
  const createMenuEntity = (id: number, name = ''): MenuEntity => ({
    id,
    name: name || `name-${id}`,
    parentId: null,
    child: [],
  });

  describe('valid Menu actions', () => {
    it('loadMenuSuccess should return the list of known Menu', () => {
      const menu = [createMenuEntity(1), createMenuEntity(2)];
      const action = MenuActions.loadMenuSuccess({ menu });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
