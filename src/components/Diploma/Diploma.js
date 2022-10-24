const Diploma = props => {
  const handleClick = _ => {
    props.onDiplomaClick(props);
  }

  return (
    <li className={`education__document ${(Number(props.id) > 3 && !props.isVisibleDiploma) ? 'education__document_invisible' : ''}`}>
      <a href="#">
        <img onClick={handleClick} src={props.img} alt={props.title} className="education__img" />
      </a>
    </li>
  );
}

export default Diploma;
