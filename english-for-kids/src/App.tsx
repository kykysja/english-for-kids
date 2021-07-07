import './App.scss';

import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
  return (
    <div className="container">
      <div className="cover cover-active" />
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
