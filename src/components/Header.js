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
          <a className="header__contact" href="tel:+79101031599">8 920 078 01 06</a>
        </li>
        <li>
          <a className="header__contact" href="https://join.skype.com/invite/h70XDqDThlth" target="_blank">
            <img src={iconSkype} className="header__icon" alt="skype" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
