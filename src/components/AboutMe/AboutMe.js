import myPhoto from '../../images/photo-krylov.png';
import { NavHashLink } from 'react-router-hash-link';
import Section from '../Section/Section';
import Button from '../Button/Button';
import { aboutMe, buttonSignUp } from '../../utils/content';
import './AboutMe.css';
import '../Link/Link.css';

const AboutMe = props => {
  return (
    <Section classNameSection="about-me">
      <div className="about-me__description">
        <p className="about-me__text">
          {props.language === 'Ru' ? aboutMe.Ru[0] : aboutMe.En[0]}
        </p>
        <p className="about-me__text">
          {props.language === 'Ru' ? aboutMe.Ru[1] : aboutMe.En[1]}
        </p>
        <NavHashLink smooth to={'/#appointment'} className="link about-me__link">
          <Button
            classNameButton="about-me__button"
            buttonType="button"
            buttonText={props.language === 'Ru' ? buttonSignUp.Ru : buttonSignUp.En}
            onClickButton={props.onClickButtonSignUp}
          />
        </NavHashLink>
      </div>
      <img
        className="about-me__photo"
        src={myPhoto}
        alt={props.language === 'Ru' ? aboutMe.Ru[2] : aboutMe.En[2]}
      />
    </Section>
  );
}

export default AboutMe;
