import { NavHashLink } from 'react-router-hash-link';
import Section from '../Section/Section';
import './Price.css';

function Price(props) {
  return (
    <Section classNameSection="price">
      <h2 className="section__title section__title_place_price">Стоимость</h2>
      <ul className="price__button-list">
        <li>
          <NavHashLink smooth to={'/#appointment'} className="link">
            <button type="button" className="button" onClick={props.onClickButtonOffline}>Очная сессия 1500 руб.</button>
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={'/#appointment'} className="link">
            <button type="button" className="button" onClick={props.onClickButtonOnline}>Skype-сессия 1000 руб.</button>
          </NavHashLink>
        </li>
      </ul>
      <p className="price__discount">Студентам скидка 30%</p>
    </Section>
  );
}

export default Price;
