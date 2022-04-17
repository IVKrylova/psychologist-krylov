import React from "react";
import myPhoto from '../images/photo-krylov.png';

function AboutMe(props) {
  return (
    <section className={`section about-me ${props.isAboutMeFocused ? 'section_focused' : ''}`} id="about-me">
      <div className="about-me__description">
        <p className="about-me__text">Меня зовут Алексей Крылов. Я являюсь практикующим психологом:
          провожу индивидуальные психологические консультации и
          групповые тренинги</p>
        <p className="about-me__text">В своей работе я учитываю индивидуальность каждого человека и считаю,
          что истина о другом человеке не может быть дана изначально, взята
          из каких бы то ни было книжек и предыдущего опыта, истину, а,
          следовательно, и решение проблемы можно обнаружить только
          в совместном творческом поиске и осмыслении</p>
        <button className="button about-me__button" type="button">Записаться</button>
      </div>
      <img className="about-me__photo" src={myPhoto} alt="Психолог Алексей Крылов" />
    </section>
  );
}

export default AboutMe;
