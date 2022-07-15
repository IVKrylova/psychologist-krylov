import React from 'react';
import Problem from '../Problem/Problem';
import AboutMe from '../AboutMe/AboutMe';
import WorkFormat from '../WorkFormat/WorkFormat';
import Price from '../Price/Price';
import Contacts from '../Contacts/Contacts';
import Education from '../Education/Education';
import Appointment from '../Appointment/Appointment';
import Section from '../Section/Section';

function Main(props) {
  return (
    <main className="content">
      <AboutMe />
      <Education
        diplomas={props.diplomas}
        isVisibleDiploma={props.isVisibleDiploma}
        onClickButtonEducation={props.onClickButtonEducation}
        onDiplomaClick={props.onDiplomaClick}
      />
      <Section
        classNameSection="problems"
        isProblemsFocused={props.isProblemsFocused}
      >
        <div className="problems__intro">
          <h2 className="section__title section__title_place_problems">Решение проблем</h2>
          <p className="problems__description">
            При встрече с проблемой мы испытываем дискомфорт или даже страдание. Проблема возникает тогда, когда наши
            представления или желания не совпадают с реальностью мира. В большинстве случаев из проблемы сложно найти выход с
            помощью собственного мышления, так как именно наша привычная стратегия мышления и привычное восприятие мира
            и являются причиной образования проблемы. Наше мышление в любой момент может не справиться со сложностью
            происходящих в жизни событий, и соответственно, проблема может проявиться в самых разных формах
          </p>
        </div>
        <ul className="problems__list">
          {props.problems.map(problem => {
            return (
              <Problem
                img={problem.img}
                text={problem.text}
                title={problem.title}
                key={problem.id}
              />
            );
          })}
        </ul>
      </Section>
      <WorkFormat
        isWorkFormatFocused={props.isWorkFormatFocused}
      />
      <Price
        onClickButtonOffline={props.onClickButtonOffline}
        onClickButtonOnline={props.onClickButtonOnline}
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
      />
      <Contacts />
    </main>
  );
}

export default Main;
