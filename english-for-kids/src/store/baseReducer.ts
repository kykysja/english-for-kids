import {
  BaseState,
  BaseStateAction,
  BaseStateTypes,
  ChangeModeAction,
  SetDifficultWordsAction,
  TableDataItem,
} from '../types/types';

const defaultState = {
  mode: 'train-mode',
  difficultWords: [],
};

export const baseReducer = (state = defaultState, action: BaseStateAction): BaseState => {
  switch (action.type) {
    case BaseStateTypes.CHANGE_MODE:
      return state.mode === 'train-mode'
        ? {...state, mode: 'play-mode'}
        : {...state, mode: 'train-mode'};

    case BaseStateTypes.SET_DIFFICULT_WORDS:
      state.difficultWords = [];
      return {...state, difficultWords: [...state.difficultWords, action.payload]};

    default:
      return state;
  }
};

export const changeModeAction = (): ChangeModeAction => ({type: BaseStateTypes.CHANGE_MODE});

export const setDifficultWordsAction = (payload: TableDataItem[]): SetDifficultWordsAction => ({
  type: BaseStateTypes.SET_DIFFICULT_WORDS,
  payload,
});
