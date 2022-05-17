import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input className="form__input" type="text" name="name" minLength="2" maxLength="100" placeholder="Ваше имя" required />
      <input className="form__input" type="tel" name="phone" placeholder="Ваш телефон" required />

      <fieldset className="form__fieldset" name="type">
        <legend className="form__legend">Формат консультации</legend>

        <input className="form__input-radio" type="radio" name="type" id="office" value="office" checked={props.isRadioOfflineChecked ? true : false} onChange={props.onClickButtonOffline} />
        <label htmlFor="office">Очно</label>

        <input className="form__input-radio" type="radio" name="type" id="skype" value="skype" checked={props.isRadioOnlineChecked ? true : false} onChange={props.onClickButtonOnline} />
        <label htmlFor="skype">Skype</label>
      </fieldset>

      <fieldset className="form__fieldset" name="agreement">
        <input className="form__input-checkbox" type="checkbox" id="agreement" required />
        <label htmlFor="agreement">Отправляя сообщение, я даю согласие на обработку своих персональных данных и подтверждаю, что ознакомлен(а)
          с Политикой конфиденциальности</label>
      </fieldset>

      <button className="button form__button" type="submit">Записаться</button>
    </form>
  );
}

export default Form;
