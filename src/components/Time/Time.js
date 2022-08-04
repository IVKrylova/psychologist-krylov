import { useEffect, useState } from 'react';
import { calendar } from '../../utils/content';
import './Time.css';

function Time(props) {
  // стейт времени
 const [takenTime, setTakenTime] = useState('');

  useEffect(_ => {


    ///////////////// для разработки
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


    ///////////////// для разработки
    //  localStorage.setItem('calendarEntries', JSON.stringify([{month: "Август", day: 7, time: "15:00"}, {month: "August", day: 5, time: "12 p.m."}, {month: "September", day: 8, time: "12 p.m."}, {month: "Сентябрь", day: 10, time: "8:00"}]))

    // проверяем запись для каждого времени
    calendarEntries && calendarEntries.forEach(el => {
      ((monthRu === el.month || monthEn === el.month)
        && props.selectedDay.day === el.day
        && (hourRu === el.time || hourEn === el.time))
          && setTakenTime(props.hour);
    });
  }, [props.selectedDay.day, props.selectedDay.month, takenTime, props.language]);

  return (
    <li className="time">
      <button className={`time__hour ${takenTime === props.hour ? 'time__hour_disabled' : ''}`} type="button">
        {props.hour}
      </button>
    </li>
  );
}

export default Time;
