import {SyntheticEvent} from 'react';
import {GetWord, TableDataItem} from '../types/types';
import {categories} from '../data/categories';

export function addToLocalStorage(key: string, value: TableDataItem): void {
  let stringifyValue: string;
  if (typeof value !== 'string') {
    stringifyValue = JSON.stringify(value);
  } else {
    stringifyValue = value;
  }
  localStorage.setItem(key, stringifyValue);
}

export function getFromLocalStorage(key: string): TableDataItem {
  return JSON.parse(localStorage.getItem(key));
}

export function setBaseLocalStorage(): void {
  categories.map((category) =>
    category.words.map((item) => {
      if (!getFromLocalStorage(item.word)) {
        addToLocalStorage(item.word, {
          word: item.word,
          translation: item.translation,
          category: category.name,
          image: item.image,
          audioSrc: item.audioSrc,
          trainModeClick: 0,
          correctClick: 0,
          wrongClick: 0,
        });
      }
    }),
  );
}

export function getWord(event: SyntheticEvent): {word: string; wordObj: TableDataItem} {
  const word = (event.target as HTMLElement).id;
  const wordObj = getFromLocalStorage(word);
  return {word, wordObj};
}
setBaseLocalStorage();

export function addTrainModeClickToCount({word, wordObj}: GetWord): void {
  addToLocalStorage(word, {...wordObj, trainModeClick: +wordObj.trainModeClick + 1});
}
export function addCorrectClickToCount({word, wordObj}: GetWord): void {
  addToLocalStorage(word, {...wordObj, correctClick: +wordObj.correctClick + 1});
}
export function addWrongClickToCount({word, wordObj}: GetWord): void {
  addToLocalStorage(word, {...wordObj, wrongClick: +wordObj.wrongClick + 1});
}
