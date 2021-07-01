import React from 'react';
import {categories} from '../../../data/categories';
import WordCard from './Card/Card';

function CategoryPage(props: {index: number}): JSX.Element {
  const cards = categories[props.index].words.map((word, idx) => (
    <WordCard wordBody={word} key={String(idx + 1)}></WordCard>
  ));

  return <div className="cards-container ">{cards}</div>;
}

export default CategoryPage;
