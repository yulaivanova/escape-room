'use strict';

(function () {
  const ESC_KEY = 'Escape';
  const HEADER_LINK_CITY = document.querySelector('.header__link--city');
  const POPUP_CITY = document.querySelector('.popup__city-popup');
  //const POPUP_FORM = document.querySelector('.popup__wrapper form');
  const POPUP_TOGGLE = document.querySelector('.popup__toggle');
  // const USER_NAME = document.querySelector('#name-popup');
  // const PHONE = document.querySelector('#phone-popup');
  // const QUESTION = document.querySelector('#question-popup');
  const container = document.querySelector('.container');

  const closePopup = function () {
    POPUP_CITY.classList.remove('popup__city-popup--opened');
    document.body.style.overflow = 'scroll';

    if (container.classList.contains('container--opened')) {
      window.menu.close();
    }
  };

  const openPopup = function () {
    POPUP_CITY.classList.add('popup__city-popup--opened');
    document.body.style.overflow = 'hidden';

    // if (USER_NAME) {
    //   USER_NAME.focus();
    //   USER_NAME.value = window.storage.name;
    // }

    // if (PHONE) {
    //   PHONE.value = window.storage.phone;
    // }

    // if (QUESTION) {
    //   QUESTION.value = window.storage.question;
    // }
  };

  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  const onOverlayClick = function (event) {
    const target = event.target;
    if (target.classList.contains('popup__city-popup--opened')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  // POPUP_FORM.addEventListener('submit', function () {
  //   // if (window.storage.isSupport) {
  //   //   localStorage.setItem('userName', USER_NAME.value);
  //   //   localStorage.setItem('phone', PHONE.value);
  //   //   localStorage.setItem('question', QUESTION.value);
  //   // }

  //   closePopup();
  // });

  POPUP_TOGGLE.addEventListener('click', function () {
    closePopup();
    document.removeEventListener('keydown', onEscPress);
  });

  POPUP_CITY.addEventListener('click', onOverlayClick);

  HEADER_LINK_CITY.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
    document.addEventListener('keydown', onEscPress);
  });

})();
