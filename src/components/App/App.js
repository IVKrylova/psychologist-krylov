import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavMenu from '../NavMenu/NavMenu';
import Popup from '../Popup/Popup';
import CookiesNotification from '../CookiesNotification/CookiesNotification';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { COOKIES_NAME } from '../../utils/constants';
import { diplomas, problems } from '../../utils/content';
import Cookies from 'js-cookie';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  // стейты разворачивающегося меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // стейты блока в фокусе
  const [isAboutMeFocused, setIsAboutMeFocused] = useState(false);
  const [isProblemsFocused, setIsProblemsFocused] = useState(false);
  const [isWorkFormatFocused, setIsWorkFormatFocused] = useState(false);
  // стейт дипломов в блоке об образовании
  const [isVisibleDiploma, setIsVisibleDiploma] = useState(false);
  // стейт выбранного диплома
  const [selectedDiploma, setSelectedDiploma] = useState({Rutitle: '', EnTitle: '', img: '', id: ''});
  // стейт выбранного значения радио-кнопки
  const [isRadioOfflineChecked, setIsRadioOfflineChecked] = useState(false);
  const [isRadioOnlineChecked, setIsRadioOnlineChecked] = useState(false);
  // стейт выбранного значения checkbox
  const [isChecked, setIsChecked] = useState(true);
  // стейт состояния формы
  const [isSent, setIsSent] = useState(false);
  // стейт уведомления о cookies
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  // стейт языка страницы
  const [language, setLanguage] = useState('');

  // установка языка страницы при первой загрузке
  useEffect(_=> {
    if(navigator.language === 'ru-RU' ||
      navigator.language === 'ru-Ru' ||
      navigator.language === 'ru' ||
      navigator.language === 'RU' ||
      navigator.language === 'Ru')
    {
      setLanguage('Ru');
    } else {
      setLanguage('En');
    }
  }, []);

  // обработчик переключения языка сайта на русский
  const handleClickOnLangRu = _ => {
    setLanguage('Ru');
  }

  // обработчик переключения языка сайта на английский
  const handleClickOnLangEn = _ => {
    setLanguage('En');
  }

  // обработчик переключения меню
  const handleToggleMenu = _ => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  // обработчик изменения стилей при переходу к якорю AboutMe
  const handleAddPaddingAboutMe = _ => {
    setIsAboutMeFocused(true);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
  }

  // обработчик изменения стилей при переходу к якорю Problems
  const handleAddPaddingProblems = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(true);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
  }

  // обработчик изменения стилей при переходу к якорю WorkFormat
  const handleAddPaddingWorkFormat = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(true);
    setIsMenuOpen(false);
  }

   // обработчик изменения стилей при переходу к остальным якорям
  const handleDeletePaddingAnchor = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
  }

  // обработчик клика на кнопку "Больше об образовании"
  const toggleButtonEducation = _ => {
    isVisibleDiploma ? setIsVisibleDiploma(false) : setIsVisibleDiploma(true);
  }

  // открытие popup с дипломом
  const handleDiplomaClick = diploma => {
    setSelectedDiploma(diploma);
  }

  // закрытие popup
  const closePopup = _ => {
    setSelectedDiploma({...{RuTitle: '', EnTitle: '', img: '', id: ''}});
  }

  // обработчик закрытия popup при клике вне его
  const handleBackgroundClose = evt => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup();
    }
  }

  // обработчик формы записи на прием
  const handleMakeAppointment = data => {
    setIsSent(true);
    /* TODO: запрос к API сервера для отправки данных на email */
    //console.log(data)
  }

  // обработчик клика по кнопке Очная сессия
  const handleClickButtonOffline = _ => {
    setIsRadioOfflineChecked(true);
    setIsRadioOnlineChecked(false);
  }

  // обработчик клика по кнопке Skype-сессия
  const handleClickButtonOnline = _ => {
    setIsRadioOnlineChecked(true);
    setIsRadioOfflineChecked(false);
  }

  // обработчик checkbox в форме
  const toggleCheckbox = _ => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  // обработчик клика по кнопке в уведомлении о cookies
  const handleClickAccept = _ => {
    Cookies.set(COOKIES_NAME, true, {
      expires: 7, // время хранение в днях
    });
    setIsNotificationOpen(false);
  }

  // изменение состояния окна уведомнелия о cookies
  useEffect(_ => {
    if (!Cookies.get(COOKIES_NAME)) setIsNotificationOpen(true);
  }, []);

  useEffect(_ => {
    // обработчик закрытия popup при нажатии на Esc
    const handleEscClose = evt => {
      if (evt.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleEscClose);

    return _ => document.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <div className="site-background"
      onClick={handleBackgroundClose}>
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
      </div>
    </div>
  );
}

export default App;
