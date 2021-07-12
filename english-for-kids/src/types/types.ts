export type WordCardBody = {
  id: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
};

export type Category = {
  id: number;
  name: string;
  image: string;
  path: string;
  words: WordCardBody[];
};

export type TableDataItem = {
  word: string;
  translation: string;
  category: string;
  image: string;
  audioSrc: string;
  trainModeClick: number;
  correctClick: number;
  wrongClick: number;
  rating?: number;
};

export type GetWord = {
  word: string;
  wordObj: TableDataItem;
};

export type BaseState = {
  mode: string;
  difficultWords: WordCardBody[];
};

export enum BaseStateTypes {
  CHANGE_MODE = 'CHANGE_MODE',
  SET_DIFFICULT_WORDS = 'SET_DIFFICULT_WORDS',
}
export interface ChangeModeAction {
  type: BaseStateTypes.CHANGE_MODE;
}
export interface SetDifficultWordsAction {
  type: BaseStateTypes.SET_DIFFICULT_WORDS;
  payload: TableDataItem[];
}
export type BaseStateAction = ChangeModeAction | SetDifficultWordsAction;

export type CurrentGameState = {
  isGameStarted: boolean;
  categoryWords: WordCardBody[];
  currentWord: WordCardBody;
  rates: string[];
  isGameFinished: boolean;
};

export enum CurrentGameTypes {
  SET_STARTED_GAME_IN_TRUE = 'SET_STARTED_GAME_IN_TRUE',
  SET_STARTED_GAME_IN_FALSE = 'SET_STARTED_GAME_IN_FALSE',
  SET_CATEGORY_WORDS = 'SET_CATEGORY_WORDS',
  SET_CURRENT_WORD = 'SET_CURRENT_WORD',
  REMOVE_WORD = 'REMOVE_WORD',
  ADD_RATE = 'ADD_RATE',
  REMOVE_RATES = 'REMOVE_RATES',
  SET_FINISHED_GAME_IN_TRUE = 'SET_FINISHED_GAME_IN_TRUE',
  SET_FINISHED_GAME_IN_FALSE = 'SET_FINISHED_GAME_IN_TRUE',
}
export interface SetStartedGameInTrueAction {
  type: CurrentGameTypes.SET_STARTED_GAME_IN_TRUE;
}
export interface SetStartedGameInFalseAction {
  type: CurrentGameTypes.SET_STARTED_GAME_IN_FALSE;
}
export interface SetCategoryWordsAction {
  type: CurrentGameTypes.SET_CATEGORY_WORDS;
  payload: WordCardBody[];
}
export interface SetCurrentWordAction {
  type: CurrentGameTypes.SET_CURRENT_WORD;
}
export interface RemoveWordAction {
  type: CurrentGameTypes.REMOVE_WORD;
}
export interface AddRateAction {
  type: CurrentGameTypes.ADD_RATE;
  payload: string;
}
export interface RemoveRatesAction {
  type: CurrentGameTypes.REMOVE_RATES;
}
export interface SetFinishedGameInTrueAction {
  type: CurrentGameTypes.SET_FINISHED_GAME_IN_TRUE;
}
export interface SetFinishedGameInFalseAction {
  type: CurrentGameTypes.SET_FINISHED_GAME_IN_FALSE;
}
export type CurrentGameAction =
  | SetStartedGameInTrueAction
  | SetStartedGameInFalseAction
  | SetCategoryWordsAction
  | SetCurrentWordAction
  | RemoveWordAction
  | AddRateAction
  | RemoveRatesAction
  | SetFinishedGameInTrueAction
  | SetFinishedGameInFalseAction;

export type RootState = {
  baseReducer: BaseState;
  currentGame: CurrentGameState;
};
