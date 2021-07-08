import './FinishGameModal.scss';

import React from 'react';

function FinishGameModal(props: {
  gameResult: string;
  isGameFinished: boolean;
  numberOfErrors: number;
}): JSX.Element {
  function ErrorsMessage() {
    if (props.numberOfErrors) {
      return <div className="errors-message">{props.numberOfErrors} errors</div>;
    }
    return <></>;
  }

  if (props.isGameFinished) {
    return (
      <div className="finish-game-modal">
        <ErrorsMessage />
        <img src={`./assets/img/${props.gameResult}.jpg`}></img>
      </div>
    );
  }
  return <></>;
}

export default FinishGameModal;
