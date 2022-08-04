import Day from '../Day/Day';
import { getArrayOfDays } from '../../utils/utils';
import './Month.css';

function Month(props) {
  // получаем массив с днями
  const days = getArrayOfDays(props.amountOfDays, props.firstDayOfMonth);

  return (
    <li className={`month ${props.classModifier}`}>
      <ul className="month__days-of-week-list">
        {
          props.language === 'Ru'
            ? props.content.Ru.week.map((day, index) => {
              return (
                <li className="month__day-of-week" key={index}>
                  {day}
                </li>
              );
            })
            : props.content.En.week.map((day, index) => {
              return (
                <li className="month__day-of-week" key={index}>
                  {day}
                </li>
              );
            })
        }
      </ul>
      <ul className="month__days">
        {
          days.map((day, index) => {
            return (
              <Day
                day={day}
                key={index}
                calendarEntries={props.calendarEntries}
                nameMonthRu={props.nameMonthRu}
                nameMonthEn={props.nameMonthEn}
                onClickDay={props.onClickDay}
                nameMonth={props.nameMonth}
              />
            );
          })
        }
      </ul>
    </li>
  );
}

export default Month;
