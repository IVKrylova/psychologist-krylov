import React from "react";

function WorkFormat(props) {
  return (
    <section className={`section work-format ${props.isWorkFormatFocused ? 'section_focused' : ''}`} id="work-format">
      <h2 className="section__title section__title_place_work-format">Формат работы</h2>
      <ul className={`work-format__list ${props.isWorkFormatFocused ? 'work-format__list_focused' : ''}`}>
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
  );
}

export default WorkFormat;
