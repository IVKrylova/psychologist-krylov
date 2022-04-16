import React from 'react';
import iconSkype from '../images/skype.svg';

function Header() {
  return (
    <header className="header">
      <ul className="header__lang-links">
        <li>
          <a className="header__lang-link header__lang-link_focused" href="#">Ru</a>
        </li>
        <li>
          <a className="header__lang-link" href="#">En</a>
        </li>
      </ul>
      <h1 className="header__title">Психолог Алексей Крылов</h1>
      <ul className="header__contacts">
        <li>
          <a className="header__contact" href="#">8 910 103 15 99</a>
        </li>
        <li>
          <a className="header__contact" href="#">
            <img src={iconSkype} className="header__icon" alt="skype" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
