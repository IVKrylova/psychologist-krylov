export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMonth = (year, month) => {
  const firstDayMonth = new Date(year, month, 1);
  const firstDayNextMonth = month === 11
    ? new Date(year + 1, 0) : new Date(year, month + 1);
  const days = (firstDayNextMonth - firstDayMonth) / 1000 / 3600 / 24;
  const dayOfWeek = firstDayMonth.getDay();

  return { days, dayOfWeek }
};

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

export const defineTakenDay = (appointments, monthRu, monthEn, day) => {
  let countAppointments = 0;
  appointments.forEach(el => {
    if ((el.month === monthRu || el.month === monthEn) && toString(el.day) === day) {
      countAppointments += 1;
    }
  });

  return (countAppointments === 12);
};

export const getPastDays = _ => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const firstDay = new Date(year, month, 1);
  const residualDays = Math.trunc((today - firstDay) / 1000 / 3600 / 24);
  const days = [];
  for (let i = 1; i <= residualDays; i++) {
    days.push(i);
  }

  return days;
}

export const getPastTime = _ => {
  const today = new Date();

  return today.getHours();
}
