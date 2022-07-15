import myPhoto from '../../images/photo-krylov.png';
import { NavHashLink } from 'react-router-hash-link';
import Section from '../Section/Section';
import Button from '../Button/Button';
import './AboutMe.css';
import '../Link/Link.css';

function AboutMe() {
  return (
    <Section classNameSection="about-me">
      <div className="about-me__description">
        <p className="about-me__text">
          Меня зовут Алексей Крылов. Я являюсь практикующим психологом:
          провожу индивидуальные психологические консультации и
          групповые тренинги
        </p>
        <p className="about-me__text">
          В своей работе я учитываю индивидуальность каждого человека и считаю,
          что истина о другом человеке не может быть дана изначально, взята
          из каких бы то ни было книжек и предыдущего опыта, истину, а,
          следовательно, и решение проблемы можно обнаружить только
          в совместном творческом поиске и осмыслении
        </p>
        <NavHashLink smooth to={'/#appointment'} className="link">
          <Button
            classNameButton="about-me__button"
            buttonType="button"
            buttonText="Записаться"
          />
        </NavHashLink>
      </div>
      <img className="about-me__photo" src={myPhoto} alt="Психолог Алексей Крылов" />
    </Section>
  );
}

export default AboutMe;
