// функция проверки ошибок запроса к API
export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// функция получения количества дней в месяце
export const getMonth = (year, month) => {
  // первый день текущего месяца
  const firstDayMonth = new Date(year, month, 1);
  // первый день следующего месяца
  const firstDayNextMonth = month === 11
    ? new Date(year + 1, 0) : new Date(year, month + 1);
  // количество дней в месяце, переведенное из милисекунд в дни
  const days = (firstDayNextMonth - firstDayMonth) / 1000 / 3600 / 24;
  // день недели первого дня месяца (0 соответствует воскресенью)
  const dayOfWeek = firstDayMonth.getDay();

  return { days, dayOfWeek }
};

// функция получения массива дней месяца
export const getArrayOfDays = (amountOfDays, firstDayOfMonth) => {
  const days = [];

  for (let i = 1; i <= amountOfDays; i++) {
    days.push(i);
  }
  if (firstDayOfMonth === 0) {
    for (let i = 0; i < 6; i++) {
      days.unshift('');
    }
  } else {
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      days.unshift('');
    }
  }

  return days;
};

// функция определения занятости дня
export const defineTakenDay = (appointments, monthRu, monthEn, day) => {
  let countAppointments = 0;
  appointments.forEach(el => {
    if ((el.month === monthRu || el.month === monthEn) && toString(el.day) === day) {
      countAppointments += 1;
    }
  });

  return (countAppointments === 12);
}
