import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MenuActions from './menu.actions';
import { MenuEffects } from './menu.effects';

describe('MenuEffects', () => {
  let actions: Observable<Action>;
  let effects: MenuEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MenuEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MenuEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MenuActions.init() });

      const expected = hot('-a-|', {
        a: MenuActions.loadMenuSuccess({ menu: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
