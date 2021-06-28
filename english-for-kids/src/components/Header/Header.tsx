import React from 'react';
import Menu from '../Menu/Menu';

function Header(): JSX.Element {
  return (
    <header className="header">
      <Menu />
      <label htmlFor="input-checkbox" className="toggle-switch">
        <input id="input-checkbox" type="checkbox" />
        <span className="slider" />
      </label>
    </header>
  );
}

export default Header;
