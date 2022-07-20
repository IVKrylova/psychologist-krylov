import iconSkype from '../../images/skype.svg';
import { header } from '../../utils/content';
import './Header.css';

function Header(props) {
  // модификаторы класса активного языка страницы
  const classModifierRu = props.language === 'Ru' ? 'header__lang-link_focused' : '';
  const classModifierEn = props.language === 'En' ? 'header__lang-link_focused' : '';

  return (
    <header className="header">
      <ul className="header__lang-links">
        <li>
          <a className={`header__lang-link ${classModifierRu}`} href="#" onClick={props.clickOnLangRu}>Ru</a>
        </li>
        <li>
          <a className={`header__lang-link ${classModifierEn}`} href="#" onClick={props.clickOnLangEn}>En</a>
        </li>
      </ul>
      <h1 className="header__title">
        {props.language === 'Ru' ? header.Ru : header.En}
      </h1>
      <ul className="header__contacts">
        <li>
          <a className="header__contact" href="tel:+79200780106">8 920 078 01 06</a>
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
