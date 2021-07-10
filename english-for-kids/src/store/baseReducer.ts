const defaultState = {
  mode: 'train-mode',
  difficultWords: [],
};

const CHANGE_MODE = 'CHANGE_MODE';
const SET_DIFFICULT_WORDS = 'SET_DIFFICULT_WORDS';

export const baseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return state.mode === 'train-mode'
        ? {...state, mode: 'play-mode'}
        : {...state, mode: 'train-mode'};

    case SET_DIFFICULT_WORDS:
      state.difficultWords = [];
      return {...state, difficultWords: [...state.difficultWords, action.payload]};

    default:
      return state;
  }
};

export const changeModeAction = () => ({type: CHANGE_MODE});

export const setDifficultWords = (payload) => ({type: SET_DIFFICULT_WORDS, payload});
