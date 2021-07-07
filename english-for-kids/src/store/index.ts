import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {baseReducer} from './baseReducer';
import {currentGameReducer} from './currentGameReducer';

const rootReducer = combineReducers({baseReducer, currentGame: currentGameReducer});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
