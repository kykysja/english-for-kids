import './Main.scss';

import React from 'react';

import {Switch, Route} from 'react-router-dom';

import CategoryPage from './CategoryPage/CategoryPage';
import MainPage from './MainPage/MainPage';

import {categories} from '../../data/categories';

function Main(): JSX.Element {
  const routess = categories.map((category) => (
    <Route
      key={category.id}
      exact
      path={category.path}
      render={() => <CategoryPage categoryId={category.id} />}
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
