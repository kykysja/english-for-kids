import React, {SyntheticEvent, useState} from 'react';

function WordCard(props: {
  wordBody: {
    word: string;
    translation: string;
    image: string;
    audioSrc: string;
  };
  key: string;
}): JSX.Element {
  const [cardStatus, seCardStatus] = useState('');

  function playWord(event: SyntheticEvent, src: string): void {
    if (!(event.target as HTMLElement).classList.contains('rotate-btn')) {
      const audio = new Audio();
      audio.src = src;
      audio.currentTime = 0;
      audio.play();
    }
  }

  function flippToFront(): void {
    seCardStatus('');
  }
  function flippToBack(): void {
    console.log('hjkkj');
    seCardStatus('flipped');
  }

  const backgroundImage = {
    backgroundImage: `url(${props.wordBody.image})`,
  };

  return (
    <div className={`card-wrap word-card ${cardStatus}`} onMouseLeave={flippToFront}>
      <div className="card">
        <div className="card-front" onClick={(event) => playWord(event, props.wordBody.audioSrc)}>
          <div className="card-top">
            <div className="card-img" style={backgroundImage} />
          </div>
          <div className="card-bottom">
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

// <img className="img" src={props.wordBody.image} alt="!!!!!!!!" />
// <img className="img" src={props.wordBody.image} alt="!!!!!" />
