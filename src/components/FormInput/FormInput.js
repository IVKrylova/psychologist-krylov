import './FormInput.css';

function FormInput(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      required={props.required}
      className={props.className}
      value={props.value}
      onChange={props.onChange}
      pattern={props.pattern}
      id={props.id}
      checked={props.checked}
    />
  );
}

export default FormInput;
