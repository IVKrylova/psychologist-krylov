import Problem from '../Problem/Problem';
import AboutMe from '../AboutMe/AboutMe';
import WorkFormat from '../WorkFormat/WorkFormat';
import Price from '../Price/Price';
import Contacts from '../Contacts/Contacts';
import Education from '../Education/Education';
import Appointment from '../Appointment/Appointment';
import Section from '../Section/Section';
import { sectionProblem } from '../../utils/content';

const Main = props => {
  return (
    <main className="content">
      <AboutMe
        language={props.language}
      />
      <Education
        diplomas={props.diplomas}
        isVisibleDiploma={props.isVisibleDiploma}
        onClickButtonEducation={props.onClickButtonEducation}
        onDiplomaClick={props.onDiplomaClick}
        language={props.language}
      />
      <Section
        classNameSection="problems"
        isProblemsFocused={props.isProblemsFocused}
      >
        <div className="problems__intro">
          <h2 className="section__title section__title_place_problems">
            {props.language === 'Ru' ? sectionProblem.Ru.title : sectionProblem.En.title}
          </h2>
          <p className="problems__description">
            {props.language === 'Ru' ? sectionProblem.Ru.text : sectionProblem.En.text}
          </p>
        </div>
        <ul className="problems__list">
          {props.problems.map(problem => {
            return (
              <Problem
                img={problem.img}
                text={props.language === 'Ru' ? problem.RuText : problem.EnText}
                title={props.language === 'Ru' ? problem.RuTitle : problem.EnTitle}
                key={problem.id}
              />
            );
          })}
        </ul>
      </Section>
      <WorkFormat
        isWorkFormatFocused={props.isWorkFormatFocused}
        language={props.language}
      />
      <Price
        onClickButtonOffline={props.onClickButtonOffline}
        onClickButtonOnline={props.onClickButtonOnline}
        language={props.language}
      />
      <Appointment
        isRadioOfflineChecked={props.isRadioOfflineChecked}
        isRadioOnlineChecked={props.isRadioOnlineChecked}
        onClickButtonOffline={props.onClickButtonOffline}
        onClickButtonOnline={props.onClickButtonOnline}
        onMakeAppointment={props.onMakeAppointment}
        onToggleCheckbox={props.onToggleCheckbox}
        isChecked={props.isChecked}
        isSent={props.isSent}
        language={props.language}
        message={props.message}
      />
      <Contacts
        language={props.language}
      />
    </main>
  );
}

export default Main;
