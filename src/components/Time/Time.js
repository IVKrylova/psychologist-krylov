import { useEffect, useState } from 'react';
import { calendar } from '../../utils/content';
import { getPastTime } from '../../utils/utils';
import { TIME, INACTIVE_HOURS } from '../../utils/constants';
import './Time.css';

function Time(props) {
  // стейт занятого времени
  const [takenTime, setTakenTime] = useState('');
  // стейт прошедшего времени
  const [pastTime, setPastTime] = useState(false);
  // модификатор для времени
  const classModifier = (takenTime === props.hour || pastTime) ? 'time__hour_disabled' : '';

  // проверяем каждое время
  useEffect(_ => {
    // сбрасываем значение выбранного времени для каждого нового выбранного дня
    setTakenTime('')
    // сбрасываем значение для прошедшего времени
    setPastTime(false);
    // получаем записи в календаре
    const calendarEntries = localStorage.calendarEntries && JSON.parse(localStorage.calendarEntries);
    // получаем имя месяца на русском
    const monthRu = props.language === 'Ru'
      ? props.selectedDay.month
      : calendar.Ru.year[calendar.En.year.indexOf(props.selectedDay.month)];
    // получаем имя месяца на английском
    const monthEn = props.language === 'En'
      ? props.selectedDay.month
      : calendar.En.year[calendar.Ru.year.indexOf(props.selectedDay.month)];
    // получаем время для русского языка
    const hourRu = props.language === 'Ru'
      ? props.hour
      : calendar.Ru.time[calendar.En.time.indexOf(props.hour)];
    // получаем время для английского языка
    const hourEn = props.language === 'En'
      ? props.hour
      : calendar.En.time[calendar.Ru.time.indexOf(props.hour)];
    // получаем название текущего месяца на русском
    const todayMonthRu = props.language === 'Ru'
      ? localStorage.todayMonth
      : calendar.Ru.year[calendar.En.year.indexOf(localStorage.todayMonth)];
    // получаем название текущего месяца на английском
    const todayMonthEn = props.language === 'En'
      ? localStorage.todayMonth
      : calendar.En.year[calendar.Ru.year.indexOf(localStorage.todayMonth)];
    // получаем текущий час
    const currentTime = getPastTime();
    // получаем индекс текущего часа для английского языка
    const indexCurrentTimeEn = calendar.En.time.indexOf(TIME.En[currentTime]);
    // получаем индекс текущего часа для русского языка
    const indexCurrentTimeRu = calendar.Ru.time.indexOf(TIME.Ru[currentTime]);
    // получаем массив с прошедшим временем
    const pastHours = props.language === 'Ru'
      ? (indexCurrentTimeRu !== -1 && calendar.Ru.time.slice(0, (indexCurrentTimeRu + INACTIVE_HOURS)))
      : (indexCurrentTimeEn !== -1 && calendar.En.time.slice(0, (indexCurrentTimeEn + INACTIVE_HOURS)));

    // проверяем запись для каждого времени
    calendarEntries && calendarEntries.forEach(el => {
      ((monthRu === el.month || monthEn === el.month)
        && props.selectedDay.day === el.day
        && (hourRu === el.time || hourEn === el.time))
          && setTakenTime(props.hour);
    });

    // проверяем прошедшее время текущего дня
    pastHours && pastHours.forEach(el => {
      ((todayMonthEn === props.selectedDay.month || todayMonthRu === props.selectedDay.month)
        && localStorage.todayDay === props.selectedDay.day.toString()
        && props.hour === el)
          && setPastTime(true);
    });

  }, [props.selectedDay.day, props.selectedDay.month, takenTime, props.language]);

  // обработчик клика кнопке с временем
  const handleClick = _ => {
    props.onClickTime({
      day: props.selectedDay.time,
      month: props.selectedDay.month,
      type: 'online',
      time: props.hour,
    });
  }

  return (
    <li className="time">
      <button
        className={`time__hour ${classModifier}`}
        type="button"
        onClick={handleClick}
      >
        {props.hour}
      </button>
    </li>
  );
}

export default Time;
