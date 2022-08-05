import { useEffect, useState } from 'react';
import Section from '../Section/Section';
import Month from '../Month/Month';
import { calendar } from '../../utils/content';
import { getMonth } from '../../utils/utils';
import { mainApi } from '../../utils/mainApi';
import './Calendar.css';
import Time from '../Time/Time';
import Message from '../Message/Message';

function Calendar(props) {
  // стейты данных в календаре
  const [calendarEntries, setCalendarEntries] = useState([]);
  // текущая дата
  const data = new Date();
  // номер текущего месяца
  const numberOfCurrentMonth = data.getMonth();
  // номер следующего месяца
  const numberOfNextMonth = data.getMonth() === 11 ? 0 : data.getMonth() + 1;
  // данные о текущем месяце
  const currentMonth = getMonth(data.getFullYear(), numberOfCurrentMonth);
  // данные о следующем месяце
  const nextMonth = data.getMonth() + 1 === 11
    ? getMonth(data.getFullYear() + 1, 11) : getMonth(data.getFullYear(), data.getMonth() + 1);
  // модификатор для первого месяца
  const modifierFirstMonth = !props.isFirstMonthChecked ? 'month_hidden' : '';
  // модификатор для второго месяца
  const modifierSecondMonth = !props.isSecondMonthChecked ? 'month_hidden' : '';
  // модификатор для названия первого месяца
  const modifierNameFirstMonth = props.isFirstMonthChecked ? 'calendar__month-name_selected' : '';
  // модификатор для названия второго месяца
  const modifierNameSecondMonth = props.isSecondMonthChecked ? 'calendar__month-name_selected' : '';
  // название первого месяца
  const nameFirstMonth = props.language === 'Ru' ? calendar.Ru.year[numberOfCurrentMonth] : calendar.En.year[numberOfCurrentMonth];
  // название второго месяца
  const nameSecondtMonth = props.language === 'Ru' ? calendar.Ru.year[numberOfNextMonth] : calendar.En.year[numberOfNextMonth];

  // загрузка данных о записи при открытии страницы
  useEffect(_ => {
    props.setMessage('');
    mainApi.getAppointments()
      .then(data => {
        setCalendarEntries(data);

        ///////////////// для разработки
        localStorage.setItem('calendarEntries', JSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
        props.setMessage('При загрузке данных произошла ошибка');
      });
  }, []);

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
