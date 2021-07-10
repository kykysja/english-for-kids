import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {baseReducer} from './baseReducer';
import {currentGameReducer} from './currentGameReducer';
import {statisticReducer} from './statisticReducer';

const rootReducer = combineReducers({
  baseReducer,
  currentGame: currentGameReducer,
  statistic: statisticReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
