import ButtonClose from '../ButtonClose/ButtonClose';
import './Popup.css';

function Popup(props) {
  return (
    <section className={`popup popup_background_opacity ${Boolean(props.diploma.img) ? 'popup_opened' : ''}`}>
      <div className="popup__diploma">
        <ButtonClose onClose={props.onClose} />
        <img className="popup__image" alt={props.diploma.title} src={props.diploma.img} />
      </div>
    </section>
  );
}

export default Popup;
