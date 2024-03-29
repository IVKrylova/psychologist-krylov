import './ButtonClose.css';

const ButtonClose = props => {
  return (
    <button type="button" className={`button-close ${props.classModifier}`} aria-label="Кнопка закрыть" onClick={props.onClose}></button>
  );
}

export default ButtonClose;
