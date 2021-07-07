import './CategoryCard.scss';

import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Category, RootState} from '../../../../types/types';

function CategoryCard(props: {category: Category; key: number}): JSX.Element {
  const currentMode = useSelector((state: RootState) => state.baseReducer.mode);
  return (
    <li className="card-wrap">
      <NavLink to={props.category.path}>
        <div className="card">
          <div className={`card-top ${currentMode}`}>
            <div className="card-img-wrap">
              <img className="img" src={props.category.image} alt={props.category.name} />
            </div>
          </div>
          <div className="card-bottom">
            <h1 className="card-title">{props.category.name}</h1>
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default CategoryCard;
