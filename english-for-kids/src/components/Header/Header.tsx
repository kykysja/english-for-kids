import './Header.scss';

import React from 'react';

import Menu from './Menu/Menu';
import ModeToggle from './ModeToggle/ModeToggle';

function Header(): JSX.Element {
  return (
    <header className="header">
      <Menu />
      <ModeToggle />
    </header>
  );
}

export default Header;
