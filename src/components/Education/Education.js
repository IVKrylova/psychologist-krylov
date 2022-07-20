import Section from '../Section/Section';
import Diploma from '../Diploma/Diploma';
import Button from '../Button/Button';
import { buttonMore } from '../../utils/content';
import './Education.css';

function Education(props) {
  // текст кнопки
  const buttonText = props.language === 'Ru' ?
    (props.isVisibleDiploma ? buttonMore.Ru[1] : buttonMore.Ru[0]) :
    (props.isVisibleDiploma ? buttonMore.En[1] : buttonMore.En[0]);

  return (
    <Section classNameSection="education">
      <ul className="education__documents">
        {props.diplomas.map(diploma => {
          return (
            <Diploma img={diploma.img}
              title={props.language === 'Ru' ? diploma.RuTitle : diploma.EnTitle}
              id={diploma.id}
              key={diploma.id}
              isVisibleDiploma={props.isVisibleDiploma}
              onDiplomaClick={props.onDiplomaClick}
              language={props.language}
            />
          );
        })}
      </ul>
      <Button classNameButton="education__button"
        onClickButton={props.onClickButtonEducation}
        buttonType="button"
        buttonText={buttonText}
      />
    </Section>
  );
}

export default Education;
