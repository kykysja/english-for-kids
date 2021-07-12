import './Menu.scss';

import React, {useState} from 'react';
import {useLocation, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';

import {categories} from '../../../data/categories';
import {BaseStateAction, CurrentGameAction, RootState} from '../../../types/types';
import {setStartedGameInFalseAction, removeRatesAction} from '../../../store/currentGameReducer';

function Menu(): JSX.Element {
  const dispatch: Dispatch<BaseStateAction | CurrentGameAction> = useDispatch();
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
    dispatch(setStartedGameInFalseAction());
    dispatch(removeRatesAction());
    openOrCloseMenu();
  }

  document.querySelector('.cover')?.addEventListener('click', () => {
    openOrCloseMenu();
  });

  React.useEffect(() => {
    document.querySelector('.cover')?.classList.remove('cover-active');
  }, [location]);

  const links: JSX.Element[] = categories.map((category) => (
    <li className="menu-item" key={category.id} onClick={handleMunuItemClick}>
      <NavLink className="menu-link" to={category.path} exact>
        {category.name}
      </NavLink>
    </li>
  ));

  const currentMode = useSelector((state: RootState): string => state.baseReducer.mode);

  return (
    <div className="menu">
      <div className="menu-toggle" onClick={openOrCloseMenu}>
        <span className="material-icons">{menuIcon}</span>
      </div>
      <nav className={`menu-items-wrap ${menuStatus} ${currentMode}`}>
        <ul className="menu-items">
          <li className="menu-item" onClick={handleMunuItemClick}>
            <NavLink className="menu-link" to="/" exact>
              Main Page
            </NavLink>
          </li>
          {links}
          <li className="menu-item" onClick={handleMunuItemClick}>
            <NavLink className="menu-link" to="/statistic" exact>
              Statistic
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
