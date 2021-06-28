import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../../data/categories';

function MainPage(): JSX.Element {
  const cards = categories.map((category, index) => (
    <li className="card-wrap" key={String(index + 1)}>
      <Link to={`/${category.name.split(' ').join('_').replace(/[()]/g, '')}`}>
        <div className="card">
          <div className="card-top">
            <div className="card__img-wrap">
              <img className="img" src={category.image} alt="!!!!!!!" />
            </div>
          </div>
          <div className="card-bottom">
            <h1 className="card__title">{category.name}</h1>
          </div>
        </div>
      </Link>
    </li>
  ));

  return <ul className="cards-container">{cards}</ul>;
}

export default MainPage;
