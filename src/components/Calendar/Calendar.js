import { useEffect, useState } from 'react';
import Section from '../Section/Section';
import Month from '../Month/Month';
import Time from '../Time/Time';
import Message from '../Message/Message';
import { mainApi } from '../../utils/mainApi';
import { calendar } from '../../utils/content';
import { getMonth, getPastDays } from '../../utils/utils';
import './Calendar.css';

const Calendar = props => {
  const [calendarEntries, setCalendarEntries] = useState([]);
  const data = new Date();
  const numberOfCurrentMonth = data.getMonth();
  const numberOfNextMonth = data.getMonth() === 11 ? 0 : data.getMonth() + 1;
  const currentMonth = getMonth(data.getFullYear(), numberOfCurrentMonth);
  const nextMonth = data.getMonth() + 1 === 11
    ? getMonth(data.getFullYear() + 1, 11)
    : getMonth(data.getFullYear(), data.getMonth() + 1);
  const modifierFirstMonth = !props.isFirstMonthChecked ? 'month_hidden' : '';
  const modifierSecondMonth = !props.isSecondMonthChecked ? 'month_hidden' : '';
  const modifierNameFirstMonth = props.isFirstMonthChecked ? 'calendar__month-name_selected' : '';
  const modifierNameSecondMonth = props.isSecondMonthChecked ? 'calendar__month-name_selected' : '';
  const nameFirstMonth = props.language === 'Ru'
    ? calendar.Ru.year[numberOfCurrentMonth]
    : calendar.En.year[numberOfCurrentMonth];
  const nameSecondtMonth = props.language === 'Ru'
    ? calendar.Ru.year[numberOfNextMonth]
    : calendar.En.year[numberOfNextMonth];
  const pastDays = getPastDays();

  useEffect(_ => {
    props.setMessage('');
    mainApi.getAppointments()
      .then(data => {
        setCalendarEntries(data);
        localStorage.setItem('calendarEntries', JSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
        props.setMessage('При загрузке данных произошла ошибка');
      });
  }, []);

  useEffect(_ => {
    const today = new Date();

    localStorage.setItem('todayDay', today.getDate());
    localStorage.setItem('todayMonth', props.language === 'Ru' ? calendar.Ru.year[today.getMonth()] : calendar.En.year[today.getMonth()]);
  }, [props.language]);

  return (
    <Section classNameSection="calendar">
      <ul className="calendar__month-names-list">
        <li className={`calendar__month-name ${modifierNameFirstMonth}`} onClick={props.onClickFirstMonth}>
          {nameFirstMonth}
        </li>
        <li className={`calendar__month-name ${modifierNameSecondMonth}`} onClick={props.onClickSecondMonth}>
          {nameSecondtMonth}
        </li>
      </ul>
      <ul className="calendar__month-list">
        <Month
          amountOfDays={currentMonth.days}
          firstDayOfMonth={currentMonth.dayOfWeek}
          language={props.language}
          content={calendar}
          classModifier={modifierFirstMonth}
          calendarEntries={calendarEntries}
          nameMonth={nameFirstMonth}
          nameMonthRu={calendar.Ru.year[numberOfCurrentMonth]}
          nameMonthEn={calendar.En.year[numberOfCurrentMonth]}
          onClickDay={props.onClickDay}
          pastDays={pastDays}
        />
        <Month
          amountOfDays={nextMonth.days}
          firstDayOfMonth={nextMonth.dayOfWeek}
          language={props.language}
          content={calendar}
          classModifier={modifierSecondMonth}
          calendarEntries={calendarEntries}
          nameMonth={nameSecondtMonth}
          nameMonthRu={calendar.Ru.year[numberOfNextMonth]}
          nameMonthEn={calendar.En.year[numberOfNextMonth]}
          onClickDay={props.onClickDay}
        />
      </ul>
      <ul className={`calendar__timing ${props.selectedDay.day ? '' : 'calendar__timing_hidden'}`}>
        {
          props.language === 'Ru'
            ? calendar.Ru.time.map((hour, index) => {
              return (
                <Time
                  hour={hour}
                  key={index}
                  language={props.language}
                  selectedDay={props.selectedDay}
                  onClickTime={props.onClickTime}
                />
              );
            })
            : calendar.En.time.map((hour, index) => {
              return (
                <Time
                  hour={hour}
                  key={index}
                  language={props.language}
                  selectedDay={props.selectedDay}
                  onClickTime={props.onClickTime}
                />
              );
            })
          }
      </ul>
      <Message
        message={props.message}
      />
    </Section>
  );
}

export default Calendar;
