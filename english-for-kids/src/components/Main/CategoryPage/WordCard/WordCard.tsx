import './WordCard.scss';

import React, {SyntheticEvent, useState} from 'react';
import {useSelector} from 'react-redux';

import {RootState, WordCardBody} from '../../../../types/types';

function WordCard(props: {
  wordBody: WordCardBody;
  key: number;
  handleCardClick: (event: SyntheticEvent, audioSts: string) => void;
}): JSX.Element {
  const [cardStatus, setCardStatus] = useState('');

  const currentMode: string = useSelector((state: RootState): string => state.baseReducer.mode);

  function flippToFront(): void {
    setCardStatus('');
  }
  function flippToBack(): void {
    setCardStatus('flipped');
  }

  const backgroundImage = {
    backgroundImage: `url(${props.wordBody.image})`,
  };

  return (
    <div className={`card-wrap word-card ${cardStatus}`} onMouseLeave={flippToFront}>
      <div className="card">
        <div
          className="card-front"
          onClick={(event) => props.handleCardClick(event, props.wordBody.audioSrc)}>
          <div className="card-top">
            <div className="card-img" id={props.wordBody.word} style={backgroundImage} />
          </div>
          <div className={`card-bottom ${currentMode}`}>
            <h1 className="card-title">{props.wordBody.word}</h1>
            <button className="rotate-btn" type="button" onClick={flippToBack}>
              <span className="material-icons">cached</span>
            </button>
          </div>
        </div>
        <div className="card-back">
          <div className="card-top">
            <div className="card-img" style={backgroundImage} />
          </div>
          <div className="card-bottom">
            <h1 className="card-title">{props.wordBody.translation}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordCard;
