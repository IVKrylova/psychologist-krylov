import ButtonClose from '../ButtonClose/ButtonClose';
import Message from '../Message/Message';
import Form from '../Form/Form';
import { sectionAppointment, popupWithForm } from '../../utils/content';
import '../Popup/Popup.css';

const PopupWithForm = props => {
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
        isSentFromCalendar={props.isSentFromCalendar}
        content={sectionAppointment}
        language={props.language}
        fieldsetModifier='form__fieldset_hidden'
        selectedDay={props.selectedDay}
        takenTime={props.takenTime}
        typeConsultation={props.typeConsultation}
      />
      <Message
        message={props.message}
      />
    </section>
  );
}

export default PopupWithForm;
