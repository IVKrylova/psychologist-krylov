import React from "react";

function CookiesNotification(props) {
  return (
    <section className={`notification ${props.isNotificationOpen ? 'notification_opened' : ''}`}>
      <p className="notification__text">
        Для улучшения работы сайта и его взаимодействия с пользователями мы используем файлы cookie.
        Продолжая работу с сайтом, Вы разрешаете использование cookie-файлов. Вы всегда можете отключить
        файлы cookie в настройках Вашего браузера
      </p>
      <a href="#" className="notification__link">Политика конфиденциальности</a>
      <button className="button button_place_notification" type="button" onClick={props.onClickAccept}>Принять</button>
    </section>
  );
}

export default CookiesNotification;
