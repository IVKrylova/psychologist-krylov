import Section from '../Section/Section';
import { sectionContacts } from '../../utils/content';
import iconPhone from '../../images/phone.svg';
import iconEmail from '../../images/email.svg';
import iconSkype from '../../images/skype.svg';
import './Contacts.css';

const Contacts = props => {
  return (
    <Section classNameSection="contacts">
      <h2 className="section__title section__title_place_contacts">
        {props.language === 'Ru' ? sectionContacts.Ru.title : sectionContacts.En.title}
      </h2>
      <ul className="contacts__list">
        <li>
          <img src={iconPhone} alt="иконка телефон" className="contacts__icon" />
          <a href="tel:+79200780106" className="contacts__link">8 920 078 01 06</a>
        </li>
        <li>
          <img src={iconEmail} alt="иконка email" className="contacts__icon" />
          <a href="mailto:basni_krylova@bk.ru" className="contacts__link" subject="Письмо с сайта">basni_krylova@bk.ru</a>
        </li>
        <li>
          <img src={iconSkype} alt="иконка Skype" className="contacts__icon" />
          <a href="https://join.skype.com/invite/h70XDqDThlth" rel="author" target="_blank" className="contacts__link">basni_krylova</a>
        </li>
      </ul>
    </Section>
  );
}

export default Contacts;
