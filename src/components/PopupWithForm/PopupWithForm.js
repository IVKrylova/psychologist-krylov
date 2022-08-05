import ButtonClose from '../ButtonClose/ButtonClose';
import { sectionAppointment, popupWithForm } from '../../utils/content';
import Form from '../Form/Form';
import '../Popup/Popup.css';

function PopupWithForm(props) {
  // модификатор для класса popup
  const classModifier = props.isOpenPopupWithForm ? 'popup_opened': '';

  return (
    <section
      className={`popup popup__form popup_background_blue ${classModifier}`}
    >
      <ButtonClose
        onClose={props.onClose}
        classModifier='button-close_place_popup-with-form'
      />
      <h2 className='popup__header'>
        {props.language === 'Ru' ? popupWithForm.Ru.header : popupWithForm.En.header}
      </h2>
      <Form
        isRadioOfflineChecked={props.isRadioOfflineChecked}
        isRadioOnlineChecked={props.isRadioOnlineChecked}
        onClickButtonOffline={props.onClickButtonOffline}
        onClickButtonOnline={props.onClickButtonOnline}
        onMakeAppointment={props.onMakeAppointment}
        onToggleCheckbox={props.onToggleCheckbox}
        isChecked={props.isChecked}
        isSent={props.isSent}
        content={sectionAppointment}
        language={props.language}
        fieldsetModifier='form__fieldset_hidden'
      />
    </section>
  );
}

export default PopupWithForm;