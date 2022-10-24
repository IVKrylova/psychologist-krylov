import { useState, useEffect } from 'react';
import { defineTakenDay } from '../../utils/utils';
import './Day.css';

const Day = props => {
  const [isTakenDay, setIsTakenDay] = useState(false);
  const [isPastDay, setIsPastDay] = useState(false);
  const classNameModifier = (props.day === '' || isTakenDay || isPastDay) ? 'cell__day_disabled' : '';
  const buttonDisabled = (props.day === '' || isTakenDay || isPastDay) ? true : false;

  useEffect(_ => {
    setIsTakenDay(defineTakenDay(props.calendarEntries, props.nameMonthRu, props.nameMonthEn, props.day));
  }, []);

  useEffect(_ => {
    setIsPastDay(props.pastDays && props.pastDays.includes(props.day) ? true : false);
  }, []);

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
