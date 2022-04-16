import React, { useEffect, useState } from 'react';
/* import { StickyContainer } from 'react-sticky'; */
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NavMenu from './NavMenu';
import { problems, diplomas } from '../utils/constants';

function App() {
  // стейты разворачивающегося меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // обработчик переключения меню
  function handleToggleMenu() {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  return (
    <div className="site-background">
      <div className="page">
        {/* <StickyContainer> */}
          <Header />
          <NavMenu isMenuOpen={isMenuOpen}
            onToggleMenu={handleToggleMenu} />
          <Main problems={problems}
            diplomas={diplomas} />
          <Footer />
        {/* </StickyContainer> */}
      </div>
    </div>
  );
}

export default App;
