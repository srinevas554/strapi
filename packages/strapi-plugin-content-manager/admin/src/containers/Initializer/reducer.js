/*
 *
 * Initializer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INITIALIZE_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  menu: false,
  shouldUpdate: false,
});

function initializerReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_SUCCEEDED:
      return state
        .updateIn(['menu'], () => action.data)
        .update('shouldUpdate', v => !v);
    default:
      return state;
  }
}

export default initializerReducer;