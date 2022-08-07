import Section from '../Section/Section';
import { sectionWorkFormat } from '../../utils/content';
import './WorkFormat.css';

const WorkFormat = props => {
  return (
    <Section
      classNameSection="work-format"
      isWorkFormatFocused={props.isWorkFormatFocused}
    >
      <h2 className="section__title section__title_place_work-format">
        {props.language === 'Ru' ? sectionWorkFormat.Ru.title : sectionWorkFormat.En.title}
      </h2>
      <ul className={`work-format__list ${props.isWorkFormatFocused ? 'work-format__list_focused' : ''}`}>
        <li className="work-format__item">
          <h3 className="item-title work-format__title">
            {props.language === 'Ru' ? sectionWorkFormat.Ru.types[0].title : sectionWorkFormat.En.types[0].title}
          </h3>
          <p className="item-text work-format__text">
            {props.language === 'Ru' ? sectionWorkFormat.Ru.types[0].text : sectionWorkFormat.En.types[0].text}
          </p>
        </li>
        <li className="work-format__item">
          <h3 className="item-title work-format__title">
            {props.language === 'Ru' ? sectionWorkFormat.Ru.types[1].title : sectionWorkFormat.En.types[1].title}
          </h3>
          <p className="item-text work-format__text">
            {props.language === 'Ru' ? sectionWorkFormat.Ru.types[1].text : sectionWorkFormat.En.types[1].text}
          </p>
        </li>
        <li className="work-format__item">
          <h3 className="item-title work-format__title">
            {props.language === 'Ru' ? sectionWorkFormat.Ru.types[2].title : sectionWorkFormat.En.types[2].title}
          </h3>
          <p className="item-text work-format__text">
            {props.language === 'Ru' ? sectionWorkFormat.Ru.types[2].text : sectionWorkFormat.En.types[2].text}
          </p>
        </li>
      </ul>
    </Section>
  );
}

export default WorkFormat;
