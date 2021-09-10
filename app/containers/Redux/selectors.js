import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the redux state domain
 */

const selectReduxDomain = state => state.redux || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Redux
 */

const makeSelectRedux = () =>
  createSelector(
    selectReduxDomain,
    substate => substate,
  );

export default makeSelectRedux;
export { selectReduxDomain };
