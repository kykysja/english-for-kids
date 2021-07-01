import React from 'react';

import {Switch, Route} from 'react-router-dom';
import {categories} from '../../data/categories';

import CategoryPage from './CategoryPage/CategoryPage';
import MainPage from './MainPage/MainPage';

function Main(): JSX.Element {
  const routess = categories.map((category, index) => (
    <Route
      key={String(index + 1)}
      exact
      path={`/${category.name.split(' ').join('_').replace(/[()]/g, '')}`}
      render={() => <CategoryPage index={index} />}
    />
  ));

  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={MainPage} />
        {routess}
      </Switch>
    </main>
  );
}

export default Main;
