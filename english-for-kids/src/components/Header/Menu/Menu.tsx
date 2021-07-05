import './Menu.scss';

import React, {useState} from 'react';
import {useLocation, NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {categories} from '../../../data/categories';

function Menu(): JSX.Element {
  const [menuIcon, setMenuIcon] = useState('dehaze');
  const [menuStatus, setMenuStatus] = useState('closed');
  const location = useLocation();

  function openOrCloseMenu(): void {
    setMenuStatus(menuStatus === 'closed' ? 'opened' : 'closed');
    setMenuIcon(menuIcon === 'dehaze' ? 'close' : 'dehaze');
    const coverElement = document.querySelector('.cover');
    coverElement?.classList.toggle('cover-active');
  }

  function handleMunuItemClick(): void {
    openOrCloseMenu();
  }
  document.querySelector('.cover')?.addEventListener('click', () => {
    openOrCloseMenu();
  });

  React.useEffect(() => {
    document.querySelector('.cover')?.classList.remove('cover-active');
  }, [location]);

  const links = categories.map((category) => (
    <li className="menu-item" key={category.id} onClick={handleMunuItemClick}>
      <NavLink className="menu-link" to={category.path} exact>
        {category.name}
      </NavLink>
    </li>
  ));

  const mode = useSelector((state: {mode: string}) => state.mode);

  return (
    <div className="menu">
      <div className="menu-toggle" onClick={openOrCloseMenu}>
        <span className="material-icons">{menuIcon}</span>
      </div>
      <nav className={`menu-items-wrap ${menuStatus} ${mode}`}>
        <ul className="menu-items">
          <li className="menu-item" onClick={handleMunuItemClick}>
            <NavLink className="menu-link" to="/" exact>
              Main Page
            </NavLink>
          </li>
          {links}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

// `/${category.name.split(' ').join('_').replace(/[()]/g, '')}`
