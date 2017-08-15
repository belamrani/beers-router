import {Action} from '@ngrx/store';
import {Beer} from '../models';


export const ADD_BEER = '[Beer] add a beer';

/**
 * Action to add a match on the store
 *
 * @export
 * @class addMatch
 * @implements {Action}
 */
export class AddBeer implements Action {
  readonly type = ADD_BEER;

  constructor(public payload: Beer) {
  }
}

export type All = AddBeer;
