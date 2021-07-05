import React from 'react';
import {useSelector} from 'react-redux';

import WordCard from './WordCard/WordCard';

import {categories} from '../../../data/categories';

function CategoryPage(props: {categoryId: number}): JSX.Element {
  const currentCategory = categories.find((category) => category.id === props.categoryId);
  const cards = currentCategory.words.map((word) => (
    <WordCard wordBody={word} key={word.id}></WordCard>
  ));

  function GameButton() {
    const mode = useSelector((state: {mode: string}) => state.mode);
    if (mode === 'play-mode') {
      return (
        <button className="button start-button" type="button">
          Start Game
        </button>
      );
    }
    return <></>;
  }

  return (
    <>
      <div className="cards-container ">{cards}</div>
      <GameButton />
    </>
  );
}

export default CategoryPage;
