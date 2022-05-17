import React from 'react';
import { useEffect } from 'react';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

function Form(props) {
  // запускаем валидацию формы
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  // обраотчик формы
  function handleSubmit(evt) {
    // запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // передаём значения управляемых компонентов во внешний обработчик
    props.onMakeAppointment({
      name: values.name,
      phone: values.phone,
    });
  }

  // сброс значений инпутов формы
  useEffect(() => {
    resetForm();
  }, [props.isSent]);

  return (
    <form className="form" name="appointment" onSubmit={handleSubmit} isValid={isValid}>
      {/* поле Ваше имя */}
      <input type="text" name="name" minLength="2" maxLength="100" placeholder="Ваше имя" required className="form__input"
        value={values.name || ''}
        onChange={handleChange} />
      <span className={`form__input-error ${!isValid ? 'form__input-error_active' : ''}`}>
        {!isValid && errors.name}
      </span>
      {/* поле Ваш телефон */}
      <input type="tel" name="phone" minLength="11" maxLength="11" pattern="[0-9]{11}" placeholder="Ваш телефон в формате 89051112233" required className="form__input"
        value={values.phone || ''}
        onChange={handleChange} />
      <span className={`form__input-error ${!isValid ? 'form__input-error_active' : ''}`}>
        {!isValid && errors.phone}
      </span>
      {/* радиокнопки Формат консультации */}
      <fieldset className="form__fieldset" name="type">
        <legend className="form__legend">Формат консультации</legend>
        {/* Очно */}
        <input className="form__input-radio" type="radio" name="type" id="office" value="office"
          checked={props.isRadioOfflineChecked ? true : false}
          onChange={props.onClickButtonOffline} />
        <label htmlFor="office">Очно</label>
        {/* Skype */}
        <input className="form__input-radio" type="radio" name="type" id="skype" value="skype"
          checked={props.isRadioOnlineChecked ? true : false}
          onChange={props.onClickButtonOnline} />
        <label htmlFor="skype">Skype</label>
      </fieldset>
      {/* checkbox Пользовательское соглашение */}
      <fieldset className="form__fieldset" name="agreement">
        <input className="form__input-checkbox" type="checkbox" id="agreement" required
          checked={props.isChecked ? true : false}
          onChange={props.onToggleCheckbox} />
        <label htmlFor="agreement">
          Отправляя сообщение, я даю согласие на обработку своих персональных данных и подтверждаю, что ознакомлен(а)
          с Политикой конфиденциальности
        </label>
        <span className={`form__input-error ${!props.isChecked ? 'form__input-error_active' : ''}`}>
          {!props.isChecked && 'Чтобы записаться, установите этот флажок'}
        </span>
      </fieldset>
      <button type="submit"
        disabled={!isValid || !props.isChecked}
        className={`button form__button ${(!isValid || !props.isChecked) ? 'form__button_disabled' : ''}`}>
        Записаться
      </button>
    </form>
  );
}

export default Form;
