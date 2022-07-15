import './Problem.css';

function Problem(props) {
  return (
    <li className="problems__item">
      <img src={props.img} alt={props.title} className="problems__icon" />
      <h3 className="item-title problems__title">{props.title}</h3>
      <p className="item-text">{props.text}</p>
    </li>
  );
}

export default Problem;
