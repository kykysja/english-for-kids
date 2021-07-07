import './Footer.scss';

import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p className="date">- 2021 -</p>
        <a className="github-link" href="https://github.com/kykysja">
          https://github.com/kykysja
        </a>
      </div>
      <a href="https://rs.school/js/" className="rsschool-logo">
        <img src="./assets/img/rs-school-logo.svg" alt="rsschool-logo" width="135" height="50" />
      </a>
    </footer>
  );
}

export default Footer;
