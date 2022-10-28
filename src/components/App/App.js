import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Cookies from 'js-cookie';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavMenu from '../NavMenu/NavMenu';
import Popup from '../Popup/Popup';
import CookiesNotification from '../CookiesNotification/CookiesNotification';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Calendar from '../Calendar/Calendar';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { mainApi } from '../../utils/mainApi';
import { COOKIES_NAME } from '../../utils/constants';
import { diplomas, problems } from '../../utils/content';
import { counterYandexMetrika } from '../../utils/metrics';
import './App.css';

const App = _ => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutMeFocused, setIsAboutMeFocused] = useState(false);
  const [isProblemsFocused, setIsProblemsFocused] = useState(false);
  const [isWorkFormatFocused, setIsWorkFormatFocused] = useState(false);
  const [isAppointmentFocused, setIsAppointmentFocused] = useState(false);
  const [isVisibleDiploma, setIsVisibleDiploma] = useState(false);
  const [selectedDiploma, setSelectedDiploma] = useState({Rutitle: '', EnTitle: '', img: '', id: ''});
  const [isRadioOfflineChecked, setIsRadioOfflineChecked] = useState(false);
  const [isRadioOnlineChecked, setIsRadioOnlineChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [language, setLanguage] = useState('');
  const [message, setMessage] = useState('');
  const [isFirstMonthChecked, setIsFirstMonthChecked] = useState(true);
  const [isSecondMonthChecked, setIsSecondMonthChecked] = useState(false);
  const [selectedDay, setSelectedDay] = useState({ day: '', month: '' });
  const [isOpenPopupWithForm, setIsOpenPopupWithForm] = useState(false);
  const [takenTime, setTakenTime] = useState('');
  const [typeConsultation, setTypeConsyltation] = useState('');
  const [isSentFromCalendar, setIsSentFromCalendar] = useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(_ => {
    window.ym(counterYandexMetrika, 'hit', window.location.href);
  }, [currentUrl]);

  useEffect(_=> {
    if (
      navigator.language === 'ru-RU' ||
      navigator.language === 'ru-Ru' ||
      navigator.language === 'ru' ||
      navigator.language === 'RU' ||
      navigator.language === 'Ru'
    ) {
      setLanguage('Ru');
    } else {
      setLanguage('En');
    }
  }, []);

  const handleClickOnLangRu = _ => {
    setLanguage('Ru');
  }

  const handleClickOnLangEn = _ => {
    setLanguage('En');
  }

  const handleToggleMenu = _ => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  const handleAddPaddingAboutMe = _ => {
    setIsAboutMeFocused(true);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

  const handleAddPaddingProblems = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(true);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

  const handleAddPaddingWorkFormat = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(true);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

  const handleAddPaddingAppointment = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
    setIsAppointmentFocused(true);
  }

  const handleDeletePaddingAnchor = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

  const toggleButtonEducation = _ => {
    isVisibleDiploma ? setIsVisibleDiploma(false) : setIsVisibleDiploma(true);
  }

  const handleDiplomaClick = diploma => {
    setSelectedDiploma(diploma);
  }

  const closePopup = _ => {
    setSelectedDiploma({...{RuTitle: '', EnTitle: '', img: '', id: ''}});
    setIsOpenPopupWithForm(false);
  }

  const handleBackgroundClose = evt => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup();
    }
  }

  const handleMakeAppointment = data => {
    mainApi.sendDataFromForm(data.name, data.phone, data.type)
      .then(_ => {
        setMessage('Спасибо! Ваша заявка отправлена');
        setIsSent(true);
      })
      .catch(err => {
        console.log(err);
        setMessage('Что-то пошло не так...')
      });
  }

  const handleClickButtonOffline = _ => {
    setIsRadioOfflineChecked(true);
    setIsRadioOnlineChecked(false);
  }

  const handleClickButtonOnline = _ => {
    setIsRadioOnlineChecked(true);
    setIsRadioOfflineChecked(false);
  }

  const toggleCheckbox = _ => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  const handleClickAccept = _ => {
    Cookies.set(COOKIES_NAME, true, {
      expires: 7, // время хранение в днях
    });
    setIsNotificationOpen(false);
  }

  const handleClickFirstMonth = _ => {
    setIsFirstMonthChecked(true);
    setIsSecondMonthChecked(false);
  }

  const handleClickSecondMonth = _ => {
    setIsFirstMonthChecked(false);
    setIsSecondMonthChecked(true);
  }

  const handleClickDay = props => {
    setSelectedDay(props);
  }

  useEffect(_ => {
    if (!Cookies.get(COOKIES_NAME)) setIsNotificationOpen(true);
  }, []);

  useEffect(_ => {
    const handleEscClose = evt => {
      if (evt.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleEscClose);

    return _ => document.removeEventListener("keydown", handleEscClose);
  }, []);

  const handleClickTime = props => {
    setIsOpenPopupWithForm(true);
    setTakenTime(props.time);
    setTypeConsyltation(props.type);
    setMessage('');
  }

  const signUpInCalendar = props => {
    Promise.all([
      mainApi.signUpInCalendar(props.day, props.month, props.time, props.name, props.phone, props.type),
      mainApi.sendDataFromCalendar(props.day, props.month, props.time, props.name, props.phone, props.type)
    ])
      .then(([appointment, info]) => {
        if (info) setMessage('Ваша заявка отправлена! Спасибо');

        const { day, month, time } = appointment;
        const calendarEntries = JSON.parse(localStorage.calendarEntries).push({ day, month, time });

        localStorage.setItem('calendarEntries', JSON.stringify(calendarEntries));
        setIsSentFromCalendar(true);
      })
      .catch(err => {
        console.log(err);
        setMessage('Что-то пошло не так...');
      });
  }

  return (
    <div className="site-background" onClick={handleBackgroundClose}>
      <div className="page">
        <Helmet htmlAttributes={{ lang : language === 'Ru' ? 'ru' : 'en' }} />
        <Header
          language={language}
          clickOnLangRu={handleClickOnLangRu}
          clickOnLangEn={handleClickOnLangEn}
        />
        <Switch>
          <Route exact path="/">
            <NavMenu
              isMenuOpen={isMenuOpen}
              onToggleMenu={handleToggleMenu}
              onClickAboutMe={handleAddPaddingAboutMe}
              onClickProblems={handleAddPaddingProblems}
              onClickWorkFormat={handleAddPaddingWorkFormat}
              onClickAnchor={handleDeletePaddingAnchor}
              isAboutMeFocused={isAboutMeFocused}
              language={language}
            />
            <Main
              problems={problems}
              diplomas={diplomas}
              isProblemsFocused={isProblemsFocused}
              isWorkFormatFocused={isWorkFormatFocused}
              onClickButtonEducation={toggleButtonEducation}
              isVisibleDiploma={isVisibleDiploma}
              onDiplomaClick={handleDiplomaClick}
              onClickButtonOffline={handleClickButtonOffline}
              isRadioOfflineChecked={isRadioOfflineChecked}
              onClickButtonOnline={handleClickButtonOnline}
              isRadioOnlineChecked={isRadioOnlineChecked}
              onMakeAppointment={handleMakeAppointment}
              isChecked={isChecked}
              onToggleCheckbox={toggleCheckbox}
              isSent={isSent}
              language={language}
              message={message}
              onClickButtonSignUp={handleAddPaddingAppointment}
              isAppointmentFocused={isAppointmentFocused}
            />
            </Route>
            <Route path="/calendar">
              <Calendar
                language={language}
                isFirstMonthChecked={isFirstMonthChecked}
                isSecondMonthChecked={isSecondMonthChecked}
                onClickFirstMonth={handleClickFirstMonth}
                onClickSecondMonth={handleClickSecondMonth}
                message={message}
                setMessage={setMessage}
                selectedDay={selectedDay}
                onClickDay={handleClickDay}
                onClickTime={handleClickTime}
              />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy
                language={language}
              />
            </Route>
          </Switch>
        <Footer
          language={language}
        />
        <Popup
          diploma={selectedDiploma}
          onClose={closePopup}
        />
        <CookiesNotification
          isNotificationOpen={isNotificationOpen}
          onClickAccept={handleClickAccept}
          language={language}
        />
        <PopupWithForm
          onClickButtonOffline={handleClickButtonOffline}
          isRadioOfflineChecked={isRadioOfflineChecked}
          onClickButtonOnline={handleClickButtonOnline}
          isRadioOnlineChecked={isRadioOnlineChecked}
          onMakeAppointment={signUpInCalendar}
          isChecked={isChecked}
          onToggleCheckbox={toggleCheckbox}
          isSent={isSent}
          language={language}
          onClose={closePopup}
          isOpenPopupWithForm={isOpenPopupWithForm}
          selectedDay={selectedDay}
          takenTime={takenTime}
          typeConsultation={typeConsultation}
          message={message}
          isSentFromCalendar={isSentFromCalendar}
        />
      </div>
    </div>
  );
}

export default withRouter(App);
