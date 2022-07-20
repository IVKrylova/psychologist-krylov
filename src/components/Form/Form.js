import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import InputError from '../InputError/InputError';
import { buttonSignUp } from '../../utils/content';
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
      type: values.type,
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
        placeholder={
          props.language === 'Ru' ?
          props.content.Ru.inputName : props.content.En.inputName
        }
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
        placeholder={
          props.language === 'Ru' ?
          props.content.Ru.inputPhone : props.content.En.inputPhone
        }
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
          {props.language === 'Ru' ? props.content.Ru.inputFormat : props.content.En.inputFormat}
        </legend>
        {/* Очно */}
        <FormInput
          className="form__input-radio"
          type="radio"
          name="type"
          id="office"
          value="office"
          checked={props.isRadioOfflineChecked ? true : false}
          onClick={props.onClickButtonOffline}
          onChange={handleChange}
        />
        <label htmlFor="office">
          {props.language === 'Ru' ? props.content.Ru.formatOffline : props.content.En.formatOffline}
        </label>
        {/* Skype */}
        <FormInput
          className="form__input-radio"
          type="radio"
          name="type"
          id="skype"
          value="skype"
          checked={props.isRadioOnlineChecked ? true : false}
          onClick={props.onClickButtonOnline}
          onChange={handleChange}
        />
        <label htmlFor="skype">
          {props.language === 'Ru' ? props.content.Ru.formatOnline : props.content.En.formatOnline}
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
          {props.language === 'Ru' ? props.content.Ru.privacyPolicy : props.content.En.privacyPolicy}
          &ensp;
          <Link to="/privacy-policy" className="link link_place_form">
            {props.language === 'Ru' ? props.content.Ru.link : props.content.En.link}
          </Link>
        </label>
        <InputError
          classModifier={!props.isChecked ? 'form__input-error_active' : ''}
          text={
            !props.isChecked &&
              props.language === 'Ru' ? props.content.Ru.privacyError : props.content.En.privacyError
          }
        />
      </fieldset>
      <Button
        buttonType="submit"
        disabled={!isValid || !props.isChecked}
        classNameButton={`form__button ${(!isValid || !props.isChecked) ? 'form__button_disabled' : ''}`}
        buttonText={props.language === 'Ru' ? buttonSignUp.Ru : buttonSignUp.En}
      />
    </form>
  );
}

export default Form;
