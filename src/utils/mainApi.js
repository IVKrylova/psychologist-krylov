import { checkResponse } from './utils';
import { MAIN_OPTIONS } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  sendDataFromForm(name, phone, type) {
    return fetch(`${this.baseUrl}/request`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, phone, type }),
    })
      .then(checkResponse);
  }

  getAppointments() {
    return fetch(`${this.baseUrl}/calendar`, {
      headers: this.headers,
    })
      .then(checkResponse);
  }

  signUpInCalendar(day, month, time, name, phone, type) {
    return fetch(`${this.baseUrl}/calendar`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ day, month, time, name, phone, type })
    })
      .then(checkResponse);
  }

  sendDataFromCalendar(day, month, time, name, phone, type) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ day, month, time, name, phone, type })
    })
      .then(checkResponse);
  }
}

export const mainApi = new MainApi(MAIN_OPTIONS);
