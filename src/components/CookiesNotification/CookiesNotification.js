import { Link } from 'react-router-dom';
import { cookiesNotification } from '../../utils/content';
import './CookiesNotification.css';
import '../Link/Link.css';

function CookiesNotification(props) {
  return (
    <section className={`notification ${props.isNotificationOpen ? 'notification_opened' : ''}`}>
      <p className="notification__text">
        {props.language === 'Ru' ? cookiesNotification.Ru.text : cookiesNotification.En.text}
      </p>
      <Link to="/privacy-policy" className="link link_place_notification">
        {props.language === 'Ru' ? cookiesNotification.Ru.link : cookiesNotification.En.link}
      </Link>
      <button className="button button_place_notification" type="button" onClick={props.onClickAccept}>
        {props.language === 'Ru' ? cookiesNotification.Ru.button : cookiesNotification.En.button}
      </button>
    </section>
  );
}

export default CookiesNotification;
