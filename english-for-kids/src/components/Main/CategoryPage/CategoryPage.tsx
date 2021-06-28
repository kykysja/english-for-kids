import React from 'react';
import { categories } from '../../../data/categories';

function CategoryPage(props: { index: number }): JSX.Element {
  const cards = categories[props.index].words.map((word, idx) => (
    <div className="card-wrap word-card" key={String(idx + 1)}>
      <div className="card">
        <div className="card-front">
          <div className="card-top">
            <img className="img" src={word.image} alt="!!!!!!!!" />
          </div>
          <div className="card-bottom">
            <h1 className="card__title">{word.word}</h1>
            <button className="rotate-btn" type="button">
              <span className="material-icons">cached</span>
            </button>
          </div>
        </div>
        <div className="card-back">
          <div className="card-top">
            <img className="img" src={word.image} alt="!!!!!" />
          </div>
          <div className="card-bottom">
            <h1 className="card__title">{word.translation}</h1>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div className="cards-container ">{cards}</div>;
}

export default CategoryPage;
