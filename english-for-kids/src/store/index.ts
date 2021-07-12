import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  CombinedState,
  Store,
  EmptyObject,
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {baseReducer} from './baseReducer';
import {currentGameReducer} from './currentGameReducer';
import {BaseStateAction, CurrentGameAction, RootState} from '../types/types';

const rootReducer: Reducer<
  CombinedState<RootState>,
  BaseStateAction | CurrentGameAction
> = combineReducers({
  baseReducer,
  currentGame: currentGameReducer,
});

export const store: Store<EmptyObject & RootState, CurrentGameAction | BaseStateAction> & {
  dispatch: unknown;
} = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
