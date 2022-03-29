import myPhoto from '../images/photo-krylov.png';

// img section education
import educationDiploma from '../images/edc-1.jpg';
import educationBrc from '../images/edc-2.jpg';
import educationWopsaDiagnostic from '../images/edc-3.jpg';
import educationIgkbDependencies from '../images/edc-4.jpg';
import educationIgkbDiagnostic from '../images/edc-5.jpg';
import educationFsp from '../images/edc-6.jpg';
import educationImatonTraining from '../images/edc-7.jpg';
import educationImatonSummitXIII from '../images/edc-8.jpg';
import educationConferenceMes from '../images/edc-9.jpg';
import educationWopsaDependencies from '../images/edc-10.jpg';
import educationWopsaIntro from '../images/edc-11.jpg';
import educationAcademyMes from '../images/edc-12.jpg';
import educationWopsaPhenomenologyV from '../images/edc-13.jpg';
import educationWopsaHorror from '../images/edc-14.jpg';
import educationWopsaPhenomenologyI from '../images/edc-15.jpg';
import educationWopsaPhenomenologyIIPI from '../images/edc-16.jpg';
import educationWopsaPhenomenologyIII from '../images/edc-17.jpg';

// img section problems
import iconRelationship from '../images/icon-relationship.svg';
import iconDepression from '../images/icon-depression.svg';
import iconLaziness from '../images/icon-laziness.svg';
import iconPanic from '../images/icon-panic.svg';
import iconPhobia from '../images/icon-phobia.svg';
import iconSelfEsteem from '../images/icon-self-esteem.svg';
import iconGrief from '../images/icon-grief.svg';
import iconDesease from '../images/icon-desease.svg';
import iconLossControl from '../images/icon-loss-control.svg';
import iconSenselessness from '../images/icon-senselessness.svg';
import iconSelfRealization from '../images/icon-self-realization.svg';
import iconDependencies from '../images/icon-self-dependencies.svg';

// icon section contacts
import iconPhone from './images/phone.svg';
import iconEmail from './images/email.svg';
import iconSkype from './images/skype.svg';

function Main() {
  return (
    <main className="content">
      <section className="about-me">
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
      <section className="education">
        <ul className="education__documents">
          <li className="education__document">
            <img src={educationDiploma} alt="Диплом. Психолог, Преподаватель психологии" className="education__img" />
          </li>
          <li className="education__document">
            <img src={educationBrc} alt="Повышение квалификации. Психофизиологические методы диагностики и коррекции" className="education__img" />
          </li>
          <li className="education__document">
            <img src={educationWopsaDiagnostic} alt="Сертификат. Фундаментальная диагностика личности в проблемно-символическом подходе" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationIgkbDependencies} alt="Сертификат. Зависимости: диагностика и психотерапия" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationIgkbDiagnostic} alt="Сертификат. Психоаналитическая диагностика" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationFsp} alt="Сертификат. Личностный рост и командообразование" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationImatonTraining} alt="Удостоверение. XIII Санкт-Петербургский саммит психологов" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationImatonSummitXIII} alt="Сертификат. XIII Санкт-Петербургский саммит психологов" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationConferenceMes} alt="Сертификат. Конференция психологов МЧС России" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaDependencies} alt="Сертификат. Зависимость и созависимость в контексте проблемно-символического подхода" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaIntro} alt="Сертификат. Введение в проблемно-символический подход" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationAcademyMes} alt="Удостоверение. Психологическое сопровождение деятельности профессиональных контингентов МЧС России" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaPhenomenologyV} alt="Сертификат. Введение в феноменологию. Семинар V" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaHorror} alt="Сертификат. Тревога и ужас у истоков творчества и психоза. Дух и тело" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaPhenomenologyI} alt="Сертификат. Введение в феноменологию. Семинар I" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaPhenomenologyIIPI} alt="Сертификат. Введение в феноменологию. Семинар II (Часть I)" className="education__img" />
          </li>
          <li className="education__document education__document_invisible">
            <img src={educationWopsaPhenomenologyIII} alt="Сертификат. Введение в феноменологию. Семинар III" className="education__img" />
          </li>
        </ul>
        <button className="button education__button" type="button">Больше об образовании</button>
      </section>
      <section className="problems">
        <div className="problems__intro">
          <h2 className="section-title section-title_place_problems">Решение проблем</h2>
          <p className="problems__description">При встрече с проблемой мы испытываем дискомфорт или даже страдание. Проблема возникает тогда, когда наши
            представления или желания не совпадают с реальностью мира. В большинстве случаев из проблемы сложно найти выход с
            помощью собственного мышления, так как именно наша привычная стратегия мышления и привычное восприятие мира
            и являются причиной образования проблемы. Наше мышление в любой момент может не справиться со сложностью
            происходящих в жизни событий, и соответственно, проблема может проявиться в самых разных формах</p>
        </div>
        <ul className="problems__list">
          <li className="problems__item">
            <img src={iconRelationship} alt="Отношения с окружающими" className="problems__icon" />
            <h3 className="item-title problems__title">Отношения с окружающими</h3>
            <p className="item-text">Непонимание и неудовлетворенность в личных отношениях с партнером или супругом,
              барьеры и неудачи в общении с противоположным полом, переживание по поводу расставания или развода,
              конфликты на работе, трудности во взаимоотношениях с родителями и т.д.</p>
          </li>
          <li className="problems__item">
            <img src={iconDepression} alt="Депрессия и апатия" className="problems__icon" />
            <h3 className="item-title problems__title">Депрессия и апатия</h3>
            <p className="item-text">Подавленное настроение, потеря интереса к происходящему вокруг, отсутствие каких бы
              то ни было желаний, ожидание того, что в будущем будет только хуже</p>
          </li>
          <li className="problems__item">
            <img src={iconLaziness} alt="Лень и прокрастинация" className="problems__icon" />
            <h3 className="item-title problems__title">Лень и прокрастинация</h3>
            <p className="item-text">Трудности с самомотиваицей – не получается направить свои силы  на достижение
              приоритетных целей и задач, важные дела постоянно откладываются «на завтра», многое из того
              что задумывается в итоге не реализуется и остается на уровне идей</p>
          </li>
          <li className="problems__item">
            <img src={iconPanic} alt="Панические атаки" className="problems__icon" />
            <h3 className="item-title problems__title">Панические атаки</h3>
            <p className="item-text">Внезапно возникающий страх за свою жизнь и здоровье, сопровождающийся повышением
              частоты сердечных сокращений, одышкой, онемением, тошнотой и другими ощущениями в собственном теле</p>
          </li>
          <li className="problems__item">
            <img src={iconPhobia} alt="Тревожно-фобические состояния" className="problems__icon" />
            <h3 className="item-title problems__title">Тревожно-фобические состояния</h3>
            <p className="item-text">Постоянная тревожность и напряжение без объективных, конкретных причин для
              переживания или же часто возникающий страх перед конкретными ситуациями или людьми</p>
          </li>
          <li className="problems__item">
            <img src={iconDependencies} alt="Зависимости" className="problems__icon" />
            <h3 className="item-title problems__title">Зависимости</h3>
            <p className="item-text">Эмоциональная зависимость от другого человека. Сильное и регулярно повторяющееся
              желание еды, алкоголя, интернет-игр и т.д. Отсутствие или временная недоступность желаемого приводит к
              болезненному переживанию негативных эмоций</p>
          </li>
          <li className="problems__item">
            <img src={iconSelfEsteem} alt="Самооценка и идентификация" className="problems__icon" />
            <h3 className="item-title problems__title">Самооценка и идентификация</h3>
            <p className="item-text">Неуверенность в собственных силах и  возможностях, сложности с определением
              своих сильных и слабых качеств, поиск себя и своего места, боязнь оценки и критики окружающих, отсутствие
              ясного видения того, как лучше вести себя в той или иной ситуации</p>
          </li>
          <li className="problems__item">
            <img src={iconGrief} alt="Переживание горя утраты" className="problems__icon" />
            <h3 className="item-title problems__title">Переживание горя утраты</h3>
            <p className="item-text">Причинами могут быть смерть близкого человека, угрожающее жизни заболевание, развод с
              любимым человеком, потеря имущества, работы и статуса. В следствие этих причин возникает ощущение нереальности
              случившегося и всего что происходит в данный момент, сильная и непрекращающаяся душевная боль, проблемы с
              аппетитом, бессонница, ощущение собственной беззащитности</p>
          </li>
          <li className="problems__item">
            <img src={iconDesease} alt="Психосоматические заболевания" className="problems__icon" />
            <h3 className="item-title problems__title">Психосоматические заболевания</h3>
            <p className="item-text">Частыми причинами возникновения телесных (соматических) заболеваний являются подавленные
              негативные эмоции. К заболеваниям, причинами которых могли быть негативные переживания, относят: мигрени,
              гипертонию, тахикардию, частые простудные заболевания, вегетососудистую дистонию т.д.</p>
          </li>
          <li className="problems__item">
            <img src={iconLossControl} alt="Потеря контроля над ситуацией" className="problems__icon" />
            <h3 className="item-title problems__title">Потеря контроля над ситуацией</h3>
            <p className="item-text">Происходящие вокруг события кажутся неопределенными и непредсказуемыми, что приводит
              к суетливости в действиях и постоянному прокручиванию в голове любых вероятных (и невероятных) неприятностей
              в будущем</p>
          </li>
          <li className="problems__item">
            <img src={iconSenselessness} alt="Ощущение бессмысленности" className="problems__icon" />
            <h3 className="item-title problems__title">Ощущение бессмысленности</h3>
            <p className="item-text">Опустошенность, отсутствие ответа на вопросы зачем и ради чего? Отсутствие четких
              жизненных ориентиров и целей, дающих понимание куда двигаться дальше</p>
          </li>
          <li className="problems__item">
            <img src={iconSelfRealization} alt="Ограничения самореализации" className="problems__icon" />
            <h3 className="item-title problems__title">Ограничения самореализации</h3>
            <p className="item-text">Неумение ставить цели, невыполнение поставленных перед собой задач, сомнения, затрудняющие осуществление
              выбора и принятие решений, ощущение собственной беспомощности и восприятие сложившейся ситуации как безвыходной</p>
          </li>
        </ul>
      </section>
      <section className="work-format">
        <h2 className="section-title section-title_place_work-format">Формат работы</h2>
        <ul className="work-format__list">
          <li className="work-format__item">
            <h3 className="item-title work-format__title">Единичная консультация</h3>
            <p className="item-text work-format__text">Диагностика проблемы и обозначение возможных направлений её решения, определение формата
              работы (частота, продолжительность, периодичность встреч).</p>
          </li>
          <li className="work-format__item">
            <h3 className="item-title work-format__title">Краткосрочное консультирование</h3>
            <p className="item-text work-format__text">Помощь в нахождении способов и ресурсов для преодоления трудной ситуации, работа с
              конкретным запросом (подготовка к важному событию, принятие решения, снижение тревожности) - средняя продолжительность
              от 5 до 15 сессий</p>
          </li>
          <li className="work-format__item">
            <h3 className="item-title work-format__title">Анализ</h3>
            <p className="item-text work-format__text">Когда проблема носит постоянный и повторяющийся характер, наиболее оптимальным решением  является
              долгосрочная аналитическая работа, дающая ключ к пониманию собственной личности и возможность осознанно выстраивать свою
              жизнь по-новому – от 30 сессий</p>
          </li>
        </ul>
      </section>
      <section className="price">
        <h2 className="section-title section-title_place_price">Стоимость</h2>
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
      <section className="appointment">
        <h2 className="section-title section-title_place_appointment">Записаться на консультацию</h2>
        <form className="form">
          <input className="form__input" type="text" name="name" minLength="2" maxLength="100" placeholder="Ваше имя" required />
          <input className="form__input" type="tel" name="phone" placeholder="Ваш телефон" required />
          <fieldset className="form__fieldset" name="type">
            <legend className="form__legend">Формат консультации</legend>
            <input className="form__input-radio" type="radio" name="type" id="office" value="office" />
            <label for="office">Очно</label>
            <input className="form__input-radio" type="radio" name="type" id="skype" value="skype" />
            <label for="skype">Skype</label>
          </fieldset>
          <fieldset className="form__fieldset" name="agreement">
            <input className="form__input-checkbox" type="checkbox" id="agreement" required />
            <label for="agreement">Отправляя сообщение, я даю согласие на обработку своих персональных данных и подтверждаю, что ознакомлен(а)
              с Политикой конфиденциальности</label>
          </fieldset>
          <button className="button form__button" type="submit">Записаться</button>
        </form>
      </section>
      <section className="contacts">
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
    </main>
  );
}

export default Main;
