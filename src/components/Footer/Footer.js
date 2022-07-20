import { footer } from '../../utils/content';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <h4 className="footer__title">
        {props.language === 'Ru' ? footer.Ru.title : footer.En.title}
      </h4>
      <p className="footer__copyright">
        &copy;{`${new Date().getFullYear()} ${props.language === 'Ru' ? footer.Ru.copyright : footer.En.copyright}`}
      </p>
      <p className="footer__license">
        {props.language === 'Ru' ? footer.Ru.license : footer.En.license}:&ensp;
        <a className="footer__link" href="http://www.freepik.com" title="Freepik">Freepik </a>
        from <a className="footer__link" href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a>
      </p>
    </footer>
  );
}

export default Footer;
