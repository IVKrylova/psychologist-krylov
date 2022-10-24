import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

const HomeButton = props => {
  const history = useHistory();

  const handleClickHomeButton = _ => {
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
