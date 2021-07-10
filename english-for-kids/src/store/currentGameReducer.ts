import {WordCardBody} from '../types/types';

const defaultState = {
  isGameStarted: false,
  categoryWords: [],
  currentWord: {} as WordCardBody,
  rates: [],
  isGameFinished: false,
};

const SET_STARTED_GAME_IN_TRUE = 'SET_STARTED_GAME_IN_TRUE';
const SET_STARTED_GAME_IN_FALSE = 'SET_STARTED_GAME_IN_FALSE';
const SET_CATEGORY_WORDS = 'SET_CATEGORY_WORDS';
const SET_CURRENT_WORD = 'SET_CURRENT_WORD';
const REMOVE_WORD = 'REMOVE_WORD';
const ADD_RATE = 'ADD_RATE';
const REMOVE_RATES = 'REMOVE_RATES';
const SET_FINISHED_GAME_IN_TRUE = 'SET_FINISHED_GAME_IN_TRUE';
const SET_FINISHED_GAME_IN_FALSE = 'SET_FINISHED_GAME_IN_TRUE';

export const currentGameReducer = (state = defaultState, action: {type: string; payload?: any}) => {
  switch (action.type) {
    case SET_STARTED_GAME_IN_TRUE:
      return {...state, isGameStarted: true};

    case SET_STARTED_GAME_IN_FALSE:
      return {...state, isGameStarted: false};

    case SET_CATEGORY_WORDS:
      state.categoryWords = [];
      return {...state, categoryWords: [...state.categoryWords, action.payload]};

    case SET_CURRENT_WORD:
      return {...state, currentWord: state.categoryWords[0][0]};

    case REMOVE_WORD:
      return {
        ...state,
        categoryWords: [...state.categoryWords[0].slice(0, 0), state.categoryWords[0].slice(1)],
      };

    case ADD_RATE:
      return {...state, rates: [...state.rates, action.payload]};

    case REMOVE_RATES:
      state.rates = [];
      return state;

    case SET_FINISHED_GAME_IN_TRUE:
      return {...state, isGameFinished: true};

    case SET_FINISHED_GAME_IN_FALSE:
      return {...state, isGameFinished: false};

    default:
      return state;
  }
};

export const setStartedGameInTrueAction = () => ({type: SET_STARTED_GAME_IN_TRUE});

export const setStartedGameInFalseAction = () => ({type: SET_STARTED_GAME_IN_FALSE});

export const setCategoryWordsAction = (payload) => ({
  type: SET_CATEGORY_WORDS,
  payload,
});

export const setCurrentWordAction = (): {type: string} => ({
  type: SET_CURRENT_WORD,
});

export const removeWordAction = () => ({type: REMOVE_WORD});

export const addRateAction = (payload) => ({type: ADD_RATE, payload});

export const removeRatesAction = () => ({type: REMOVE_RATES});

export const setFinishedGameInTrueAction = () => ({type: SET_FINISHED_GAME_IN_TRUE});

export const setFinishedGameInFalseAction = () => ({type: SET_FINISHED_GAME_IN_FALSE});
