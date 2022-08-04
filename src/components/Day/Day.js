import { useState, useEffect } from 'react';
import { defineTakenDay } from '../../utils/utils';
import './Day.css';

function Day(props) {
  // стейт записей на день
  const [isTakenDay, setIsTakenDay] = useState(false);
  // модификатор для ячейки
  const classNameModifier = (props.day === '' || isTakenDay) ? 'cell__day_disabled' : '';
  // активная/неактивная кнопка
  const buttonDisabled = (props.day === '' || isTakenDay) ? true : false;

  // при загрузке проверяем, является ли день занятым
  useEffect(_ => {
    setIsTakenDay(defineTakenDay(props.calendarEntries, props.nameMonthRu, props.nameMonthEn, props.day));
  }, []);

  // обработчик клика по дню в календаре
  const handleClick = _ => {
    props.onClickDay({ day: props.day, month: props.nameMonth });
  }

  return (
    <li className="cell">
      <button
        className={`cell__day ${classNameModifier}`}
        type="button"
        disabled={buttonDisabled}
        onClick={handleClick}
      >
        {props.day}
      </button>
    </li>
  );
}

export default Day;
