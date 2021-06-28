import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { categories } from '../../data/categories';

function Menu(): JSX.Element {
  const location = useLocation();

  document.querySelector('.cover')?.addEventListener('click', () => {
    openOrCloseMenu();
  });

  React.useEffect(() => {
    const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
    const currentLink = menuLinks.find((link) => (link as HTMLLinkElement).href === window.location.href);

    document.querySelector('.menu-items .active')?.classList.remove('active');
    currentLink?.classList.add('active');

    document.querySelector('.cover')?.classList.remove('cover-active');
  }, [location]);

  const [menuIcon, setMenuIcon] = useState('dehaze');
  const [menuStatus, setMenuStatus] = useState('closed');

  function openOrCloseMenu(): void {
    setMenuStatus(menuStatus === 'closed' ? 'opened' : 'closed');
    setMenuIcon(menuIcon === 'dehaze' ? 'close' : 'dehaze');
    const coverElement = document.querySelector('.cover');
    coverElement?.classList.toggle('cover-active');
  }

  function handleMunuItemClick(): void {
    openOrCloseMenu();
  }

  const categoryLinks = categories.map((category, index) => (
    <li className="menu-item" key={String(index + 1)} onClick={handleMunuItemClick}>
      <Link className="menu-link" to={`/${category.name.split(' ').join('_').replace(/[()]/g, '')}`}>
        {category.name}
      </Link>
    </li>
  ));

  return (
    <div className="menu">
      <div className="menu-toggle" onClick={openOrCloseMenu}>
        <span className="material-icons">{menuIcon}</span>
      </div>
      <nav className={`menu-items-wrap ${menuStatus}`}>
        <ul className="menu-items">
          <li className="menu-item" onClick={handleMunuItemClick}>
            <Link className="menu-link active" to="/">
              Main Page
            </Link>
          </li>
          {categoryLinks}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
