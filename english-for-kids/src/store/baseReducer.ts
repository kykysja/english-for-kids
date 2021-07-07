const defaultState = {
  mode: 'train-mode',
};

const CHANGE_MODE = 'CHANGE_MODE';

export const baseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return state.mode === 'train-mode'
        ? {...state, mode: 'play-mode'}
        : {...state, mode: 'train-mode'};
    default:
      return state;
  }
};

export const changeModeAction = () => ({type: CHANGE_MODE});
