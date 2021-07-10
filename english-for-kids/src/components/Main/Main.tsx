import './Main.scss';

import React from 'react';

import {Switch, Route} from 'react-router-dom';

import CategoryPage from './CategoryPage/CategoryPage';
import MainPage from './MainPage/MainPage';

import {categories} from '../../data/categories';
import StatisticPage from '../Statistic/Statistic';

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
        <Route exact path="/statistic" component={StatisticPage} />
        <Route exact path="/difficult_words" component={CategoryPage} />
      </Switch>
    </main>
  );
}

export default Main;
