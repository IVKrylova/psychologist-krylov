import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import iconMenu from '../images/header-menu.png';
import buttonClose from '../images/button-close.svg';

function NavMenu(props) {
  return (
    <section className="nav-menu">
      <nav className={`menu ${props.isMenuOpen ? 'menu_visible' : ''}`}>
        <ul className="menu__items">
          <li className="menu__item">
            <NavHashLink onClick={props.onClickAboutMe} smooth to={'/#about-me'} className={`menu__link ${(isActive) =>(isActive && 'menu__link_activ')}`}>Кто я?</NavHashLink>
          </li>
          <li className="menu__item">
            <NavHashLink onClick={props.onClickProblems} smooth to={'/#problems'} className={`menu__link ${(isActive) =>(isActive && 'menu__link_activ')}`}>Решение проблем</NavHashLink>
          </li>
          <li className="menu__item">
            <NavHashLink onClick={props.onClickWorkFormat} smooth to={'/#work-format'} className={`menu__link ${(isActive) =>(isActive && 'menu__link_activ')}`}>Формат работы</NavHashLink>
          </li>
          <li className="menu__item">
            <NavHashLink onClick={props.onClickAnchor} smooth to={'/#price'} className={`menu__link ${(isActive) =>(isActive && 'menu__link_activ')}`}>Стоимость</NavHashLink>
          </li>
          <li className="menu__item">
            <NavHashLink onClick={props.onClickAnchor} smooth to={'/#contacts'} className={`menu__link ${(isActive) =>(isActive && 'menu__link_activ')}`}>Контакты</NavHashLink>
          </li>
        </ul>
      </nav>
      <img src={iconMenu} alt="иконка меню" className="nav-menu__icon-menu" onClick={props.onToggleMenu} />
      <img src={buttonClose} alt="кнопка закрыть" className="nav-menu__icon-menu nav-menu__icon-menu_invisible" />
    </section>
  );
}

export default NavMenu;
