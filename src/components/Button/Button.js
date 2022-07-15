import './Button.css';

function Button(props) {
  return (
    <button
      className={`button ${props.classNameButton}`}
      type={props.buttonType}
      onClick={props.onClickButton}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
