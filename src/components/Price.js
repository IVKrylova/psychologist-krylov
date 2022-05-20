import { NavHashLink } from 'react-router-hash-link';

function Price(props) {
  return (
    <section className="section price" id="price">
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
    </section>
  );
}

export default Price;
