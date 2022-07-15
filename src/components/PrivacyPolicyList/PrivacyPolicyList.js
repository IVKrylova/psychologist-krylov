import './PrivacyPolicyList.css';

function PrivacyPolicyList(props) {
  return (
    <ul className="privacy-policy__list">
      {props.children}
    </ul>
  );
}

export default PrivacyPolicyList;
