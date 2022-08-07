import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = props => {
  const location = useLocation();

  // скролл при изменении маршрута
  useEffect(_ => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {props.children}
    </>
  );
};

export default ScrollToTop;
