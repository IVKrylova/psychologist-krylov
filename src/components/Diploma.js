import React from "react";

function Diploma(props) {
  return (
    <li className="education__document">
      <img src={props.img} alt={props.title} className="education__img" />
    </li>
  );
}

export default Diploma;
