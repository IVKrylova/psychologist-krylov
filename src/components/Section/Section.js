import './Section.css';

const Section = props => {
  const classProblems = props.isProblemsFocused ? 'section_focused' : '';
  const classWorkFormat = props.isWorkFormatFocused ? 'section_focused' : '';
  const classAppointment = props.isAppointmentFocused ? 'section_focused' : '';

  return (
    <section
      className={`section ${props.classNameSection} ${classProblems} ${classWorkFormat} ${classAppointment}`}
      id={props.classNameSection}
    >
      {props.children}
    </section>
  );
}

export default Section;
