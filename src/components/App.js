import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NavMenu from './NavMenu';
import { problems, diplomas } from '../utils/constants';

function App() {
  // стейты разворачивающегося меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // стейты блока в фокусе
  const [isAboutMeFocused, setIsAboutMeFocused] = useState(false);
  const [isProblemsFocused, setIsProblemsFocused] = useState(false);
  const [isWorkFormatFocused, setIsWorkFormatFocused] = useState(false);

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

  // навешиваем обработчик на документ
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="site-background" onScroll={handleScroll}>
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
          isWorkFormatFocused={isWorkFormatFocused} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
