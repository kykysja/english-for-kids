import {createStore} from 'redux';

import {appModeReducer} from './appModeReducer';

export const store = createStore(appModeReducer);
