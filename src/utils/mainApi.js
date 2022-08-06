import { checkResponse } from './utils';
import { MAIN_OPTIONS } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // метод отправки заявки через форму
  sendDataFromForm(name, phone, type) {
    return fetch(`${this.baseUrl}/request`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, phone, type }),
    })
      .then(checkResponse);
  }

  // метод загрузки данных для календаря
  getAppointments() {
    return fetch(`${this.baseUrl}/calendar`, {
      headers: this.headers,
    })
      .then(checkResponse);
  }

  // метод записи через календарь
  signUpInCalendar(day, month, time, name, phone, type) {
    return fetch(`${this.baseUrl}/calendar`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ day, month, time, name, phone, type })
    })
      .then(checkResponse);
  }

  // метод отправки заявки из календаря на почту
  sendDataFromCalendar(day, month, time, name, phone, type) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ day, month, time, name, phone, type })
    })
      .then(checkResponse);
  }
}

// создание экземпляра класса MainApi
export const mainApi = new MainApi(MAIN_OPTIONS);
