import React from 'react';

import CategoryCard from './CategoryCard/CategoryCard';

import {categories} from '../../../data/categories';

function MainPage(): JSX.Element {
  const cards = categories.map((category) => (
    <CategoryCard category={category} key={category.id}></CategoryCard>
  ));

  return <ul className="cards-container">{cards}</ul>;
}

export default MainPage;
