import React from 'react';
import Section from '../Section/Section';
import PrivacyPolicyItem from '../PrivacyPolicyItem/PrivacyPolicyItem';
import HomeButton from '../HomeButton/HomeButton';
import MainLink from '../MainLink/MainLink';
import PrivacyPolicyList from '../PrivacyPolicyList/PrivacyPolicyList';
import { privacyPolicy } from '../../utils/content';
import './PrivacyPolicy.css';

function PrivacyPolicy(props) {
  return (
    <Section classNameSection="privacy-policy">
      <h3 className="privacy-policy__title">
        {props.language === 'Ru' ? privacyPolicy.Ru.title : privacyPolicy.En.title}
      </h3>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[0] : privacyPolicy.En[0]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[1] : privacyPolicy.En[1]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[2] : privacyPolicy.En[2]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[3] : privacyPolicy.En[3]}
          &ensp;
          <MainLink />.
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[4] : privacyPolicy.En[4]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[5] : privacyPolicy.En[5]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[6] : privacyPolicy.En[6]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[7] : privacyPolicy.En[7]}
          &ensp;
          <MainLink />
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[8] : privacyPolicy.En[8]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[9] : privacyPolicy.En[9]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[10] : privacyPolicy.En[10]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[11] : privacyPolicy.En[11]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[12] : privacyPolicy.En[12]}
          &ensp;
          <MainLink />;
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[13] : privacyPolicy.En[13]}
          &ensp;
          <MainLink />;
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[14] : privacyPolicy.En[14]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[15] : privacyPolicy.En[15]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[16] : privacyPolicy.En[16]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[17] : privacyPolicy.En[17]}
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[18] : privacyPolicy.En[18]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[19] : privacyPolicy.En[19]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[20] : privacyPolicy.En[20]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[21] : privacyPolicy.En[21]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[22] : privacyPolicy.En[22]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[23] : privacyPolicy.En[23]}
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[24] : privacyPolicy.En[24]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[25] : privacyPolicy.En[25]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[26] : privacyPolicy.En[26]}
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[27] : privacyPolicy.En[27]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[28] : privacyPolicy.En[28]}
          &ensp;
          <MainLink />.&ensp;
          {props.language === 'Ru' ? privacyPolicy.Ru[29] : privacyPolicy.En[29]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[30] : privacyPolicy.En[30]}
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[31] : privacyPolicy.En[31]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[32] : privacyPolicy.En[32]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[33] : privacyPolicy.En[33]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[34] : privacyPolicy.En[34]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[35] : privacyPolicy.En[35]}
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[36] : privacyPolicy.En[36]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[37] : privacyPolicy.En[37]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[38] : privacyPolicy.En[38]}
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <PrivacyPolicyList>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[39] : privacyPolicy.En[39]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[40] : privacyPolicy.En[40]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[41] : privacyPolicy.En[41]}
        </PrivacyPolicyItem>
        <PrivacyPolicyItem>
          {props.language === 'Ru' ? privacyPolicy.Ru[42] : privacyPolicy.En[42]}
          &ensp;
          <MainLink />.
        </PrivacyPolicyItem>
      </PrivacyPolicyList>
      <HomeButton
        buttontext={props.language === 'Ru' ? privacyPolicy.Ru.button : privacyPolicy.En.button}
      />
    </Section>
  );
}

export default PrivacyPolicy;
