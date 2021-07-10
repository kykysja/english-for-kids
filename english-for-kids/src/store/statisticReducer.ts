import {getFromLocalStorage} from '../local-storage/local-storage-wrap';

export function handleCalculation(result) {
  switch (String(result)) {
    case '1':
      return 100;
    case 'NaN':
      return 0;
    default:
      return parseFloat((+result * 100).toFixed(2));
  }
}

export function generateTableData() {
  const tableDataArr = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    tableDataArr.push(getFromLocalStorage(key));
    tableDataArr[i].rating = handleCalculation(
      tableDataArr[i].correctClick / (tableDataArr[i].correctClick + tableDataArr[i].wrongClick),
    );
  }
  return tableDataArr.sort((a, b) => (a.word > b.word ? 1 : -1));
}

const defaultState = {
  difficultWords: [],
  tableData: generateTableData(),
};

const SET_DIFFICULT_WORDS = 'SET_DIFFICULT_WORDS';
const SET_TABLE_DATA = 'SET_TABLE_DATA';

export const statisticReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DIFFICULT_WORDS:
      state.difficultWords = [];
      return {...state, difficultWords: [...state.difficultWords, action.payload]};

    case SET_TABLE_DATA:
      state.tableData = action.payload;
      return state;

    default:
      return state;
  }
};

export const setDifficultWords = (payload) => ({type: SET_DIFFICULT_WORDS, payload});

export const setTableData = (payload) => ({type: SET_TABLE_DATA, payload});
