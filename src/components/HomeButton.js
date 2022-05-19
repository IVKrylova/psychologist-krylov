import { useHistory } from 'react-router-dom';

function HomeButton() {
  const history = useHistory();

  // обработчик клика на копку На главную
  function handleClickHomeButton() {
    history.push('/');
  }

  return (
    <button className="button button_place_privacy-policy" type="button" onClick={handleClickHomeButton}>На главную</button>
  );
}

export default HomeButton;
