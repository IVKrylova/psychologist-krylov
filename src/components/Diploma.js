import React from "react";

function Diploma(props) {
  return (
    <li className={`education__document ${(Number(props.id) > 3 && !props.isVisibleDiploma) ? 'education__document_invisible' : ''}`}>
      <img src={props.img} alt={props.title} className="education__img" />
    </li>
  );
}

export default Diploma;
