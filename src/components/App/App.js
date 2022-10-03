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
  // стейты разворачивающегося меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // стейты блока в фокусе
  const [isAboutMeFocused, setIsAboutMeFocused] = useState(false);
  const [isProblemsFocused, setIsProblemsFocused] = useState(false);
  const [isWorkFormatFocused, setIsWorkFormatFocused] = useState(false);
  const [isAppointmentFocused, setIsAppointmentFocused] = useState(false);
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
  // стейт сообщения об успешной отправке формы или об ошибке
  const [message, setMessage] = useState('');
  // стейты выбранного месяца в календаре
  const [isFirstMonthChecked, setIsFirstMonthChecked] = useState(true);
  const [isSecondMonthChecked, setIsSecondMonthChecked] = useState(false);
  // стейт выбранного дня в календаре
  const [selectedDay, setSelectedDay] = useState({ day: '', month: '' });
  // стейт popup с формой
  const [isOpenPopupWithForm, setIsOpenPopupWithForm] = useState(false);
  // стейт выбранного времени
  const [takenTime, setTakenTime] = useState('');
  // стейт типа косультации для записи через календарь
  const [typeConsultation, setTypeConsyltation] = useState('');
  // стейт формы в календаре
  const [isSentFromCalendar, setIsSentFromCalendar] = useState(false);

  // получаем текущий URL
  const location = useLocation();
  const currentUrl = location.pathname;

  // вызов функции счетчика Яндекс.Метрики при изменении url
  useEffect(_ => {
    window.ym(counterYandexMetrika, 'hit', window.location.href);
  }, currentUrl);

  // установка языка страницы при первой загрузке
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
    setIsAppointmentFocused(false);
  }

  // обработчик изменения стилей при переходу к якорю Problems
  const handleAddPaddingProblems = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(true);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

  // обработчик изменения стилей при переходу к якорю WorkFormat
  const handleAddPaddingWorkFormat = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(true);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

    // обработчик изменения стилей при переходу к якорю Appointment
    const handleAddPaddingAppointment = _ => {
      setIsAboutMeFocused(false);
      setIsProblemsFocused(false);
      setIsWorkFormatFocused(false);
      setIsMenuOpen(false);
      setIsAppointmentFocused(true);
    }

   // обработчик изменения стилей при переходу к остальным якорям
  const handleDeletePaddingAnchor = _ => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
    setIsAppointmentFocused(false);
  }

  // обработчик клика на кнопку "Больше об образовании"
  const toggleButtonEducation = _ => {
    isVisibleDiploma ? setIsVisibleDiploma(false) : setIsVisibleDiploma(true);
  }

  // открытие popup с дипломом
  const handleDiplomaClick = diploma => {
    setSelectedDiploma(diploma);
  }

  // закрытие всех popup
  const closePopup = _ => {
    setSelectedDiploma({...{RuTitle: '', EnTitle: '', img: '', id: ''}});
    setIsOpenPopupWithForm(false);
  }

  // обработчик закрытия popup при клике вне его
  const handleBackgroundClose = evt => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup();
    }
  }

  // обработчик формы записи на прием
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

  // обработчик клика по первому месяцу
  const handleClickFirstMonth = _ => {
    setIsFirstMonthChecked(true);
    setIsSecondMonthChecked(false);
  }

  // обработчик клика по второму месяцу
  const handleClickSecondMonth = _ => {
    setIsFirstMonthChecked(false);
    setIsSecondMonthChecked(true);
  }

  // обработчик клика по дню в календаре
  const handleClickDay = props => {
    setSelectedDay(props);
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

  // обработчик открытия popup c формой
  const handleClickTime = props => {
    setIsOpenPopupWithForm(true);
    setTakenTime(props.time);
    setTypeConsyltation(props.type);
    setMessage('');
  }

  // обработчик записи на прием через календарь
  const signUpInCalendar = props => {
    Promise.all([
      // отправляем форму в базу данных
      mainApi.signUpInCalendar(props.day, props.month, props.time, props.name, props.phone, props.type),
      // отправляем сообщение на почту
      mainApi.sendDataFromCalendar(props.day, props.month, props.time, props.name, props.phone, props.type)
    ])
      .then(([appointment, info]) => {
        setMessage(info);

        const { day, month, time } = appointment;
        // добавляем новую запись в localstorage
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
