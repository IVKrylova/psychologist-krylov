import './InputError.css';

function InputError(props) {
  return (
    <span className={`form__input-error ${props.classModifier}`}>
      {props.text}
    </span>
  );
}

export default InputError;
