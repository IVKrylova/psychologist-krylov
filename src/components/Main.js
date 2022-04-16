import React from 'react';
import Problem from './Problem';
import Diploma from './Diploma';
import AboutMe from './AboutMe';
import WorkFormat from './WorkFormat';
import Price from './Price';
import Form from './Form';
import Contacts from './Contacts';

function Main(props) {
  return (
    <main className="content">
      <AboutMe />
      <section className="education" id="education">
        <ul className="education__documents">
          {props.diplomas.map(diploma => {
            return (
              <Diploma img={diploma.img}
                      title={diploma.title} />
            );
          })}
        </ul>
        <button className="button education__button" type="button">Больше об образовании</button>
      </section>
      <section className="problems" id="problems">
        <div className="problems__intro">
          <h2 className="section-title section-title_place_problems">Решение проблем</h2>
          <p className="problems__description">При встрече с проблемой мы испытываем дискомфорт или даже страдание. Проблема возникает тогда, когда наши
            представления или желания не совпадают с реальностью мира. В большинстве случаев из проблемы сложно найти выход с
            помощью собственного мышления, так как именно наша привычная стратегия мышления и привычное восприятие мира
            и являются причиной образования проблемы. Наше мышление в любой момент может не справиться со сложностью
            происходящих в жизни событий, и соответственно, проблема может проявиться в самых разных формах</p>
        </div>
        <ul className="problems__list">
          {props.problems.map(problem => {
            return (
              <Problem img={problem.img}
                      text={problem.text}
                      title={problem.title} />
            );
          })}
        </ul>
      </section>
      <WorkFormat />
      <Price />
      <section className="appointment" id="appointment">
        <h2 className="section-title section-title_place_appointment">Записаться на консультацию</h2>
        <Form />
      </section>
      <Contacts />
    </main>
  );
}

export default Main;
