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

export type BaseState = {
  mode: string;
};

export type CurrentGameState = {
  isGameStarted: boolean;
  currentCategory: WordCardBody[];
  currentWord: WordCardBody;
  rates: string[];
  isGameFinished: boolean;
};

export type Statistic = {
  difficultWords: [];
  tableData: any;
};

export type RootState = {
  baseReducer: BaseState;
  currentGame: CurrentGameState;
  statistic: Statistic;
};
