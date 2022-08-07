import './PrivacyPolicyItem.css';

const PrivacyPolicyItem = props => {
  return (
    <li>
      <p className="privacy-policy__text">
        {props.children}
      </p>
    </li>
  );
}

export default PrivacyPolicyItem;
