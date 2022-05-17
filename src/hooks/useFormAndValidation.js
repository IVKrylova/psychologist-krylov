import {useState, useCallback} from 'react';

export function useFormAndValidation() {
  // хуки состояния значения инпутов
  const [ values, setValues ] = useState({});
  // хуки состояния ошибок инпутов
  const [ errors, setErrors ] = useState({});
  // хуки состояния валидности формы
  const [ isValid, setIsValid ] = useState(true);

  // обработчик проверки изменения инпута
  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: evt.target.validationMessage});
    setIsValid(evt.target.closest('form').checkValidity());
  };

  // возвращаем мемоизированный колбэк
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}

