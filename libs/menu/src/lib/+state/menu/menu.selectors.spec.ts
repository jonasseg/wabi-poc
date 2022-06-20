import { MenuEntity } from './menu.models';
import { menuAdapter, MenuPartialState, initialState } from './menu.reducer';
import * as MenuSelectors from './menu.selectors';

describe('Menu Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMenuId = (it: MenuEntity) => it.id;
  const createMenuEntity = (
    id: number,
    name = '',
    parentId = null,
    child = []
  ) =>
    ({
      id,
      name,
      parentId,
      child,
    } as MenuEntity);

  let state: MenuPartialState;

  beforeEach(() => {
    state = {
      menu: menuAdapter.setAll(
        [createMenuEntity(1), createMenuEntity(2), createMenuEntity(3)],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Menu Selectors', () => {
    it('getAllMenu() should return the list of Menu', () => {
      const results = MenuSelectors.getAllMenu(state);
      const selId = getMenuId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMenuLoaded() should return the current "loaded" status', () => {
      const result = MenuSelectors.getMenuLoaded(state);

      expect(result).toBe(true);
    });

    it('getMenuError() should return the current "error" state', () => {
      const result = MenuSelectors.getMenuError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
