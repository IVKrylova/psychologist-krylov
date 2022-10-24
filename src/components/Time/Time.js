import { useEffect, useState } from 'react';
import { calendar } from '../../utils/content';
import { getPastTime } from '../../utils/utils';
import { TIME, INACTIVE_HOURS } from '../../utils/constants';
import './Time.css';

const Time = props => {
  const [takenTime, setTakenTime] = useState('');
  const [pastTime, setPastTime] = useState(false);
  const classModifier = (takenTime === props.hour || pastTime) ? 'time__hour_disabled' : '';
  const buttonDisabled = (takenTime === props.hour || pastTime) ? true : false;

  useEffect(_ => {
    setTakenTime('');
    setPastTime(false);
    const calendarEntries = localStorage.calendarEntries && JSON.parse(localStorage.calendarEntries);
    const monthRu = props.language === 'Ru'
      ? props.selectedDay.month
      : calendar.Ru.year[calendar.En.year.indexOf(props.selectedDay.month)];
    const monthEn = props.language === 'En'
      ? props.selectedDay.month
      : calendar.En.year[calendar.Ru.year.indexOf(props.selectedDay.month)];
    const hourRu = props.language === 'Ru'
      ? props.hour
      : calendar.Ru.time[calendar.En.time.indexOf(props.hour)];
    const hourEn = props.language === 'En'
      ? props.hour
      : calendar.En.time[calendar.Ru.time.indexOf(props.hour)];
    const todayMonthRu = props.language === 'Ru'
      ? localStorage.todayMonth
      : calendar.Ru.year[calendar.En.year.indexOf(localStorage.todayMonth)];
    const todayMonthEn = props.language === 'En'
      ? localStorage.todayMonth
      : calendar.En.year[calendar.Ru.year.indexOf(localStorage.todayMonth)];
    const currentTime = getPastTime();
    const indexCurrentTimeEn = calendar.En.time.indexOf(TIME.En[currentTime]);
    const indexCurrentTimeRu = calendar.Ru.time.indexOf(TIME.Ru[currentTime]);
    const pastHours = props.language === 'Ru'
      ? (indexCurrentTimeRu !== -1 && calendar.Ru.time.slice(0, (indexCurrentTimeRu + INACTIVE_HOURS)))
      : (indexCurrentTimeEn !== -1 && calendar.En.time.slice(0, (indexCurrentTimeEn + INACTIVE_HOURS)));

    calendarEntries && calendarEntries.forEach(el => {
      ((monthRu === el.month || monthEn === el.month)
        && props.selectedDay.day === el.day
        && (hourRu === el.time || hourEn === el.time))
          && setTakenTime(props.hour);
    });

    if ((TIME.returned.indexOf(currentTime) > 20)
      && (todayMonthEn === props.selectedDay.month || todayMonthRu === props.selectedDay.month)
      && localStorage.todayDay === props.selectedDay.day.toString()
    ) {
      setPastTime(true);
    } else {
      pastHours && pastHours.forEach(el => {
        ((todayMonthEn === props.selectedDay.month || todayMonthRu === props.selectedDay.month)
          && localStorage.todayDay === props.selectedDay.day.toString()
          && props.hour === el)
            && setPastTime(true);
      });
    }
  }, [props.selectedDay.day, props.selectedDay.month, takenTime, props.language]);

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
        disabled={buttonDisabled}
      >
        {props.hour}
      </button>
    </li>
  );
}

export default Time;
