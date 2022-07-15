import './Section.css';

function Section(props) {
  return (
    <section
      className={`section ${props.classNameSection} ${props.isProblemsFocused ? 'section_focused' : ''} ${props.isWorkFormatFocused ? 'section_focused' : ''}`}
      id={props.classNameSection}
    >
      {props.children}
    </section>
  );
}

export default Section;
