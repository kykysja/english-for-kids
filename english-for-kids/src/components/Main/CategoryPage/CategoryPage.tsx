import './CategoryPage.scss';

import React, {SyntheticEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import WordCard from './WordCard/WordCard';

import {categories} from '../../../data/categories';
import {RootState} from '../../../types/types';
import {
  changeGameStatusAction,
  setCurrentWordAction,
  setCategoryWordsAction,
  addRateAction,
  removeWordAction,
  // setFinishedGameInTrueAction,
} from '../../../store/currentGameReducer';
import {store} from '../../../store/index';

function CategoryPage(props: {categoryId: number}): JSX.Element {
  const dispatch = useDispatch();
  const currentMode = useSelector((state: RootState) => state.baseReducer.mode);
  const isGameStarted = useSelector((state: RootState) => state.currentGame.isGameStarted);
  const isGameFinished = useSelector((state: RootState) => state.currentGame.isGameFinished);

  function play(src: string): void {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  function handleCardClick(event: SyntheticEvent, audioSrs: string) {
    switch (currentMode) {
      case 'train-mode':
        if (!(event.target as HTMLElement).classList.contains('rotate-btn')) {
          play(audioSrs);
        }
        break;

      case 'play-mode':
        if (!(event.target as HTMLElement).classList.contains('inactive')) {
          if ((event.target as HTMLElement).id === store.getState().currentGame.currentWord.word) {
            (event.target as HTMLElement).classList.add('inactive');
            const correctCardClickedSoundSrc = './assets/audio/correct.mp3';
            play(correctCardClickedSoundSrc);

            dispatch(addRateAction('success'));
            dispatch(removeWordAction());
            dispatch(setCurrentWordAction());

            if (store.getState().currentGame.categoryWords[0].length) {
              setTimeout(() => {
                play(store.getState().currentGame.currentWord.audioSrc);
              }, 700);
            } else if (store.getState().currentGame.rates.indexOf('error') !== -1) {
              /* const numberOfErrors = store
                .getState()
                .currentGame.rates.filter((el) => el === 'error').length; */
              const errorEndGameSoundSrc = './assets/audio/failure.mp3';
              setTimeout(() => {
                play(errorEndGameSoundSrc);
                setTimeout(() => {
                  window.location.href = '/';
                }, 2500);
              }, 700);
            } else {
              // dispatch(setFinishedGameInTrueAction);
              const successEndGameSoundSrc = './assets/audio/success.mp3';
              setTimeout(() => {
                play(successEndGameSoundSrc);
                setTimeout(() => {
                  window.location.href = '/';
                }, 2500);
              }, 700);
              play(successEndGameSoundSrc);
            }
          } else {
            const wrangCardClickedSoundSrc = './assets/audio/error.mp3';
            setTimeout(() => {
              play(wrangCardClickedSoundSrc);
            }, 500);
            dispatch(addRateAction('error'));
          }
        }
        break;

      default:
    }
  }

  const ratesArray = useSelector((state: RootState) => state.currentGame.rates);
  const rates = ratesArray.map((rate, index) => (
    <div
      className={`star-${rate}`}
      style={{backgroundImage: `url('./assets/img/star-${rate}.svg')`}}
      key={String(index)}></div>
  ));

  const currentCategory = categories.find((category) => category.id === props.categoryId);
  const cards = currentCategory.words.map((word) => (
    <WordCard wordBody={word} handleCardClick={handleCardClick} key={word.id}></WordCard>
  ));

  function initGame() {
    dispatch(changeGameStatusAction());

    const currentWords = currentCategory.words
      .map((a) => ({...a}))
      .sort(() => Math.round(Math.random() * 100) - 50);

    dispatch(setCategoryWordsAction(currentWords));
    dispatch(setCurrentWordAction());

    setTimeout(() => {
      play(store.getState().currentGame.currentWord.audioSrc);
    }, 700);
  }

  function repeatWord() {
    setTimeout(() => {
      play(store.getState().currentGame.currentWord.audioSrc);
    }, 300);
  }

  function GameButton(): JSX.Element {
    if (currentMode === 'play-mode') {
      if (isGameStarted) {
        return (
          <button className="button repeat-button" type="button" onClick={repeatWord}>
            <span className="material-icons">cached</span>
          </button>
        );
      }
      return (
        <button className="button start-button" type="button" onClick={initGame}>
          Start Game
        </button>
      );
    }
    return <></>;
  }
  function FinishGameModal(): JSX.Element {
    if (isGameFinished)
      return (
        <div className="finish-game-modal">
          <img src="./assets/img/success.jpg"></img>
        </div>
      );
    return <></>;
  }

  return (
    <>
      <h2 className="category-page-title">{currentCategory.name}</h2>
      <div className="cards-container">
        <div className="rating">{rates}</div>
        {cards}
      </div>
      <GameButton />
      <FinishGameModal />
    </>
  );
}

export default CategoryPage;
