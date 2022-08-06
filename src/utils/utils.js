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
};

// функция получения прошедших дней
export const getPastDays = _ => {
  // получаем текущий день
  const today = new Date();
  // получаем текущий месяц
  const month = today.getMonth();
  // получаем текущий год
  const year = today.getFullYear();
  // получаем первый день месяца
  const firstDay = new Date(year, month, 1);
  // получаем разницу в милесекундах, переводим в дни
  const residualDays = Math.trunc((today - firstDay) / 1000 / 3600 / 24);
  // получаем массив прошедших дней
  const days = [];
  for (let i = 1; i <= residualDays; i++) {
    days.push(i);
  }

  return days;
}

// функция получения прошедшего времени
export const getPastTime = _ => {
  // получаем текущий день
  const today = new Date();

  // получаем текущий час
  return today.getHours();
}
