import React from "react";

function Price() {
  return (
    <section className="section price" id="price">
      <h2 className="section__title section__title_place_price">Стоимость</h2>
      <ul className="price__button-list">
        <li>
          <button type="button" className="button">Очная сессия 1500 руб.</button>
        </li>
        <li>
          <button type="button" className="button">Skype-сессия 1000 руб.</button>
        </li>
      </ul>
      <p className="price__discount">Студентам скидка 30%</p>
    </section>
  );
}

export default Price;
