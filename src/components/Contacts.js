import React from "react";
import iconPhone from '../images/phone.svg';
import iconEmail from '../images/email.svg';
import iconSkype from '../images/skype.svg';

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="section-title section-title_place_contacts">Контакты</h2>
      <ul className="contacts__list">
        <li>
          <img src={iconPhone} alt="иконка телефон" className="contacts__icon" />
          <a href="" className="contacts__link">8 910 103 15 99</a>
        </li>
        <li>
          <img src={iconEmail} alt="иконка email" className="contacts__icon" />
          <a href="" className="contacts__link">basni_krylova@bk.ru</a>
        </li>
        <li>
          <img src={iconSkype} alt="иконка Skype" className="contacts__icon" />
          <a href="" className="contacts__link">basni_krylova</a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
