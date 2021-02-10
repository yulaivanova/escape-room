'use strict';

(function () {
  const ESC_KEY = 'Escape';
  const HEADER_LINK_CITY = document.querySelector('.header__link--city');
  const POPUP_CITY = document.querySelector('.popup__city-popup');
  const POPUP_FORM = document.querySelector('.popup__form');
  const FORM = document.querySelector('.popup__wrapper form');
  const FOOTER_LINK = document.querySelector('.footer__link');
  const USER_NAME = document.querySelector('#name');
  const EMAIL = document.querySelector('#email');
  const QUESTION = document.querySelector('#question');
  const CONTAINER = document.querySelector('.container');
  const ERROR_INPUT_MSG = document.querySelector('.fieldset__input-error');

  const closePopup = function () {
    POPUP_CITY.classList.remove('popup__city-popup--opened');
    POPUP_FORM.classList.remove('popup__form--opened');
    document.body.style.overflow = 'scroll';

    if (CONTAINER.classList.contains('container--opened')) {
      window.menu.close();
    }
  };

  const openCityPopup = function () {
    POPUP_CITY.classList.add('popup__city-popup--opened');
    document.body.style.overflow = 'hidden';
  };

  const openFormPopup = function () {
    POPUP_FORM.classList.add('popup__form--opened');
    document.body.style.overflow = 'hidden';

    if (USER_NAME) {
      USER_NAME.focus();
      USER_NAME.value = window.storage.name;
    }

    if (EMAIL) {
      EMAIL.value = window.storage.email;
    }

    if (QUESTION) {
      QUESTION.value = window.storage.question;
    }
  };

  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  const onOverlayClick = function (event) {
    const target = event.target;
    if (target.classList.contains('popup__city-popup--opened') || target.classList.contains('popup__form--opened')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  const onToggleClick = function (event) {
    const target = event.target;
    if (target.classList.contains('popup__toggle')) {
      closePopup();
      document.removeEventListener('keydown', onEscPress);
    }
  }

  EMAIL.addEventListener('input', function () {
    ERROR_INPUT_MSG.classList.add('fieldset__input-error--show');
    if (EMAIL.validity.valid) {
      ERROR_INPUT_MSG.classList.remove('fieldset__input-error--show');
    }
  }, false);

  FORM.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (window.storage.isSupport) {
      localStorage.setItem('userName', USER_NAME.value);
      localStorage.setItem('email', EMAIL.value);
      localStorage.setItem('question', QUESTION.value);
    }
    closePopup();
  });

  POPUP_CITY.addEventListener('click', onOverlayClick);
  POPUP_FORM.addEventListener('click', onOverlayClick);
  POPUP_CITY.addEventListener('click', onToggleClick);
  POPUP_FORM.addEventListener('click', onToggleClick);

  HEADER_LINK_CITY.addEventListener('click', function (evt) {
    evt.preventDefault();
    openCityPopup();
    document.addEventListener('keydown', onEscPress);
  });

  FOOTER_LINK.addEventListener('click', function (evt) {
    evt.preventDefault();
    openFormPopup();
    document.addEventListener('keydown', onEscPress);
  });

})();
