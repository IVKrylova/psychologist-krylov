import iconSkype from '../images/skype.svg';
import iconMenu from '../images/header-menu.png';
import buttonClose from '../images/button-close.svg';

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
      <nav className="header__menu">
        <ul className="header__menu-items">
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Кто я?</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Решение проблем</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Формат работы</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Стоимость</a>
          </li>
          <li className="header__menu-item">
            <a href="#" className="header__menu-link">Контакты</a>
          </li>
        </ul>
      </nav>
      <img src={iconMenu} alt="иконка меню" className="header__icon-menu" />
      <img src={buttonClose} alt="кнопка закрыть" className="header__icon-menu header__icon-menu_invisible" />
    </header>
  );
}

export default Header;
