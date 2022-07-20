import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

function HomeButton(props) {
  // доступ к истории
  const history = useHistory();

  // обработчик клика на копку На главную
  function handleClickHomeButton() {
    history.push('/');
  }

  return (
    <Button
      classNameButton="button_place_privacy-policy"
      buttonType="button"
      onClickButton={handleClickHomeButton}
      buttonText={props.buttontext}
    />
  );
}

export default HomeButton;
