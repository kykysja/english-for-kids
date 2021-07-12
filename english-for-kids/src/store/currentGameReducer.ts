import {
  AddRateAction,
  CurrentGameAction,
  CurrentGameState,
  CurrentGameTypes,
  RemoveRatesAction,
  RemoveWordAction,
  SetCategoryWordsAction,
  SetCurrentWordAction,
  SetFinishedGameInFalseAction,
  SetFinishedGameInTrueAction,
  SetStartedGameInFalseAction,
  SetStartedGameInTrueAction,
  WordCardBody,
} from '../types/types';

const defaultState = {
  isGameStarted: false,
  categoryWords: [],
  currentWord: {} as WordCardBody,
  rates: [],
  isGameFinished: false,
};

export const currentGameReducer = (
  state = defaultState,
  action: CurrentGameAction,
): CurrentGameState => {
  switch (action.type) {
    case CurrentGameTypes.SET_STARTED_GAME_IN_TRUE:
      return {...state, isGameStarted: true};

    case CurrentGameTypes.SET_STARTED_GAME_IN_FALSE:
      return {...state, isGameStarted: false};

    case CurrentGameTypes.SET_CATEGORY_WORDS:
      state.categoryWords = [];
      return {...state, categoryWords: [...state.categoryWords, action.payload]};

    case CurrentGameTypes.SET_CURRENT_WORD:
      return {...state, currentWord: state.categoryWords[0][0]};

    case CurrentGameTypes.REMOVE_WORD:
      return {
        ...state,
        categoryWords: [...state.categoryWords[0].slice(0, 0), state.categoryWords[0].slice(1)],
      };

    case CurrentGameTypes.ADD_RATE:
      return {...state, rates: [...state.rates, action.payload]};

    case CurrentGameTypes.REMOVE_RATES:
      state.rates = [];
      return state;

    case CurrentGameTypes.SET_FINISHED_GAME_IN_TRUE:
      return {...state, isGameFinished: true};

    case CurrentGameTypes.SET_FINISHED_GAME_IN_FALSE:
      return {...state, isGameFinished: false};

    default:
      return state;
  }
};

export const setStartedGameInTrueAction = (): SetStartedGameInTrueAction => ({
  type: CurrentGameTypes.SET_STARTED_GAME_IN_TRUE,
});

export const setStartedGameInFalseAction = (): SetStartedGameInFalseAction => ({
  type: CurrentGameTypes.SET_STARTED_GAME_IN_FALSE,
});

export const setCategoryWordsAction = (payload: WordCardBody[]): SetCategoryWordsAction => ({
  type: CurrentGameTypes.SET_CATEGORY_WORDS,
  payload,
});

export const setCurrentWordAction = (): SetCurrentWordAction => ({
  type: CurrentGameTypes.SET_CURRENT_WORD,
});

export const removeWordAction = (): RemoveWordAction => ({type: CurrentGameTypes.REMOVE_WORD});

export const addRateAction = (payload: string): AddRateAction => ({
  type: CurrentGameTypes.ADD_RATE,
  payload,
});

export const removeRatesAction = (): RemoveRatesAction => ({type: CurrentGameTypes.REMOVE_RATES});

export const setFinishedGameInTrueAction = (): SetFinishedGameInTrueAction => ({
  type: CurrentGameTypes.SET_FINISHED_GAME_IN_TRUE,
});

export const setFinishedGameInFalseAction = (): SetFinishedGameInFalseAction => ({
  type: CurrentGameTypes.SET_FINISHED_GAME_IN_FALSE,
});
