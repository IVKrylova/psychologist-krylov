import Section from '../Section/Section';
import Form from '../Form/Form';
import Message from '../Message/Message';
import { sectionAppointment } from '../../utils/content';
import './Appointment.css';

function Appointment(props) {
  return (
    <Section classNameSection="appointment">
      <h2 className="section__title section__title_place_appointment">
        {props.language === 'Ru' ? sectionAppointment.Ru.title : sectionAppointment.En.title}
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
      />
    <Message
      message={props.message}
    />
    </Section>
  );
}

export default Appointment;
