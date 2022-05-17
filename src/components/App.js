import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NavMenu from './NavMenu';
import Popup from './Popup';
import { problems, diplomas } from '../utils/constants';

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
  const [selectedDiploma, setSelectedDiploma] = useState({title: '', img: '', id: ''});

  // обработчик переключения меню
  const handleToggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  // обработчик изменения стилей при переходу к якорю AboutMe
  const handleAddPaddingAboutMe = () => {
    setIsAboutMeFocused(true);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
  }

  // обработчик изменения стилей при переходу к якорю Problems
  const handleAddPaddingProblems = () => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(true);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
  }

  // обработчик изменения стилей при переходу к якорю WorkFormat
  const handleAddPaddingWorkFormat = () => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(true);
    setIsMenuOpen(false);
  }

   // обработчик изменения стилей при переходу к остальным якорям
  const handleDeletePaddingAnchor = () => {
    setIsAboutMeFocused(false);
    setIsProblemsFocused(false);
    setIsWorkFormatFocused(false);
    setIsMenuOpen(false);
  }

  // обработчик изменения padding-top для AboutMe при скролле
  const handleScroll = () => {
    window.pageYOffset <= 200 && setIsAboutMeFocused(false);
  }

  // обработчик клика на кнопку "Больше об образовании"
  const toggleButtonEducation = () => {
    isVisibleDiploma ? setIsVisibleDiploma(false) : setIsVisibleDiploma(true);
  }

  // открытие popup с дипломом
  const handleDiplomaClick = (diploma) => {
    setSelectedDiploma(diploma);
  }

  // закрытие popup
  const closePopup = () => {
    setSelectedDiploma({...{title: '', img: '', id: ''}});
  }

  // обработчик закрытия popup при клике вне его
  const handleBackgroundClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup();
    }
  }

  // обработчик скролла страницы
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // обработчик закрытия popup при нажатии на Esc
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <div className="site-background"
      onScroll={handleScroll}
      onClick={handleBackgroundClose}>
      <div className="page">
        <Header />
        <NavMenu isMenuOpen={isMenuOpen}
          onToggleMenu={handleToggleMenu}
          onClickAboutMe={handleAddPaddingAboutMe}
          onClickProblems={handleAddPaddingProblems}
          onClickWorkFormat={handleAddPaddingWorkFormat}
          onClickAnchor={handleDeletePaddingAnchor} />
        <Main problems={problems}
          diplomas={diplomas}
          isAboutMeFocused={isAboutMeFocused}
          isProblemsFocused={isProblemsFocused}
          isWorkFormatFocused={isWorkFormatFocused}
          onClickButtonEducation={toggleButtonEducation}
          isVisibleDiploma={isVisibleDiploma}
          onDiplomaClick={handleDiplomaClick} />
        <Footer />
        <Popup diploma={selectedDiploma}
          onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;
