import { NavHashLink } from 'react-router-hash-link';
import Section from '../Section/Section';
import { sectionPrice } from '../../utils/content';
import './Price.css';

const Price = props => {
  return (
    <Section classNameSection="price">
      <h2 className="section__title section__title_place_price">
        {props.language === 'Ru' ? sectionPrice.Ru.title : sectionPrice.En.title}
      </h2>
      <ul className="price__button-list">
        <li>
          <NavHashLink smooth to={'/#appointment'} className="link">
            <button type="button" className="button" onClick={props.onClickButtonOffline}>
              {props.language === 'Ru' ? sectionPrice.Ru.buttonOffline : sectionPrice.En.buttonOffline}
            </button>
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={'/#appointment'} className="link">
            <button type="button" className="button" onClick={props.onClickButtonOnline}>
              {props.language === 'Ru' ? sectionPrice.Ru.buttonOnline : sectionPrice.En.buttonOnline}
            </button>
          </NavHashLink>
        </li>
      </ul>
      <p className="price__discount">
        {props.language === 'Ru' ? sectionPrice.Ru.discount : sectionPrice.En.discount}
      </p>
    </Section>
  );
}

export default Price;
