import './App.scss';

import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App(): JSX.Element {
  return (
    <div className="container">
      <div className="cover cover-active" />
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
