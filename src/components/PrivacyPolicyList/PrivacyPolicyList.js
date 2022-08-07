import './PrivacyPolicyList.css';

const PrivacyPolicyList = props => {
  return (
    <ul className="privacy-policy__list">
      {props.children}
    </ul>
  );
}

export default PrivacyPolicyList;
