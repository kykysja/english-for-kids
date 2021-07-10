import {SyntheticEvent} from 'react';
import {categories} from '../data/categories';

export function addToLocalStorage(key, value) {
  let stringifyValue = value;
  if (typeof value !== 'string') {
    stringifyValue = JSON.stringify(stringifyValue);
  }
  localStorage.setItem(key, stringifyValue);
}

export function getFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return localStorage.getItem(key);
  }
}

export function setBaseLocalStorage() {
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

export function getWord(event: SyntheticEvent) {
  const word = (event.target as HTMLElement).id;
  const wordObj = getFromLocalStorage(word);
  return {word, wordObj};
}
setBaseLocalStorage();

export function addTrainModeClickToCount({word, wordObj}) {
  addToLocalStorage(word, {...wordObj, trainModeClick: +wordObj.trainModeClick + 1});
}
export function addCorrectClickToCount({word, wordObj}) {
  addToLocalStorage(word, {...wordObj, correctClick: +wordObj.correctClick + 1});
}
export function addWrongClickToCount({word, wordObj}) {
  addToLocalStorage(word, {...wordObj, wrongClick: +wordObj.wrongClick + 1});
}
