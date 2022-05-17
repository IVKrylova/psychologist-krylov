function Popup(props) {
  return (
    <section className={`popup popup_background_opacity ${Boolean(props.diploma.img) ? 'popup_opened' : ''}`}>
      <div className="popup__diploma">
        <button type="button" className="button-close" aria-label="Кнопка закрыть" onClick={props.onClose}></button>
        <img className="popup__image" alt={props.diploma.title} src={props.diploma.img} />
      </div>
    </section>
  );
}

export default Popup;
