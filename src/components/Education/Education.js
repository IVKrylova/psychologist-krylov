import Section from '../Section/Section';
import Diploma from '../Diploma/Diploma';
import Button from '../Button/Button';
import './Education.css';

function Education(props) {
  return (
    <Section classNameSection="education">
      <ul className="education__documents">
        {props.diplomas.map(diploma => {
          return (
            <Diploma img={diploma.img}
              title={diploma.title}
              id={diploma.id}
              key={diploma.id}
              isVisibleDiploma={props.isVisibleDiploma}
              onDiplomaClick={props.onDiplomaClick}
            />
          );
        })}
      </ul>
      <Button classNameButton="education__button"
        onClickButton={props.onClickButtonEducation}
        buttonType="button"
        buttonText={`${props.isVisibleDiploma ? 'Свернуть' : 'Больше об образовании'}`}
      />
    </Section>
  );
}

export default Education;
