import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import './Form.css';
import '../Link/Link.css';

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
  useEffect(_ => {
    resetForm();
  }, [props.isSent]);

  return (
    <form className="form" name="appointment" onSubmit={handleSubmit}>
      {/* поле Ваше имя */}
      <FormInput
        type="text"
        name="name"
        minLength="2"
        maxLength="100"
        placeholder="Ваше имя"
        required={true}
        className="form__input"
        value={values.name || ''}
        onChange={handleChange}
      />
      <InputError
        classModifier={!isValid ? 'form__input-error_active' : ''}
        text={!isValid && errors.name}
      />
      {/* поле Ваш телефон */}
      <InputMask
        type="tel"
        name="phone"
        minLength="18"
        maxLength="18"
        placeholder="Ваш телефон"
        required={true}
        className="form__input"
        value={values.phone || ''}
        onChange={handleChange}
        mask="+7 (999) 999 99 99"
        maskChar={null}
      />
      <InputError
        classModifier={!isValid ? 'form__input-error_active' : ''}
        text={!isValid && errors.phone}
      />
      {/* радиокнопки Формат консультации */}
      <fieldset className="form__fieldset" name="type">
        <legend className="form__legend">
          Формат консультации
        </legend>
        {/* Очно */}
        <FormInput
          className="form__input-radio"
          type="radio"
          name="type"
          id="office"
          value="office"
          checked={props.isRadioOfflineChecked ? true : false}
          onChange={props.onClickButtonOffline}
        />
        <label htmlFor="office">
          Очно
        </label>
        {/* Skype */}
        <FormInput
          className="form__input-radio"
          type="radio"
          name="type"
          id="skype"
          value="skype"
          checked={props.isRadioOnlineChecked ? true : false}
          onChange={props.onClickButtonOnline}
        />
        <label htmlFor="skype">
          Skype
        </label>
      </fieldset>
      {/* checkbox Пользовательское соглашение */}
      <fieldset className="form__fieldset" name="agreement">
        <FormInput
          className="form__input-checkbox"
          type="checkbox"
          id="agreement"
          required={true}
          checked={props.isChecked ? true : false}
          onChange={props.onToggleCheckbox}
        />
        <label htmlFor="agreement">
          Отправляя сообщение, я даю согласие на обработку своих персональных данных и подтверждаю, что ознакомлен(а)
          с&ensp;<Link to="/privacy-policy" className="link link_place_form">Политикой конфиденциальности</Link>
        </label>
        <InputError
          classModifier={!props.isChecked ? 'form__input-error_active' : ''}
          text={!props.isChecked && 'Чтобы записаться, установите этот флажок'}
        />
      </fieldset>
      <Button
        buttonType="submit"
        disabled={!isValid || !props.isChecked}
        classNameButton={`form__button ${(!isValid || !props.isChecked) ? 'form__button_disabled' : ''}`}
        buttonText="Записаться"
      />
    </form>
  );
}

export default Form;
