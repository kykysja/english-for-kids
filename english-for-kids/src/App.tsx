import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

export class App extends React.Component {
  render = (): JSX.Element => (
    <div className="container">
      <div className="cover cover-active" />
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}
