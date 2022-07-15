import Section from '../Section/Section';
import Form from '../Form/Form';
import './Appointment.css';

function Appointment(props) {
  return (
    <Section classNameSection="appointment">
      <h2 className="section__title section__title_place_appointment">Записаться на консультацию</h2>
      <Form
        isRadioOfflineChecked={props.isRadioOfflineChecked}
        isRadioOnlineChecked={props.isRadioOnlineChecked}
        onClickButtonOffline={props.onClickButtonOffline}
        onClickButtonOnline={props.onClickButtonOnline}
        onMakeAppointment={props.onMakeAppointment}
        onToggleCheckbox={props.onToggleCheckbox}
        isChecked={props.isChecked}
        isSent={props.isSent}
      />
    </Section>
  );
}

export default Appointment;
