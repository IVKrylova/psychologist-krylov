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
      body: JSON.stringify({ name, phone, type })
    })
    .then(checkResponse)
  }
}

// создание экземпляра класса MainApi
export const mainApi = new MainApi(MAIN_OPTIONS);
