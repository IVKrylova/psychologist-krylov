import './Section.css';

const Section = props => {
  // классы секций
  const classProblems = props.isProblemsFocused ? 'section_focused' : '';
  const classWorkFormat = props.isWorkFormatFocused ? 'section_focused' : '';

  return (
    <section
      className={`section ${props.classNameSection} ${classProblems} ${classWorkFormat}`}
      id={props.classNameSection}
    >
      {props.children}
    </section>
  );
}

export default Section;
