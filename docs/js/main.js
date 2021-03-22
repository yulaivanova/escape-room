/*  eslint no-var: "error"  */
/*  eslint-env es6  */

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
  const LABEL_NAME = document.querySelector('.fieldset__label-name');
  const LABEL_EMAIL = document.querySelector('.fieldset__label-email');
  const POPUP_GPS_LINK = document.querySelector('.popup__gps-link');

  const closePopup = function () {
    POPUP_CITY.classList.remove('popup__city-popup--opened');
    POPUP_FORM.classList.remove('popup__form--opened');
    document.body.style.overflow = 'scroll';

    if (ERROR_INPUT_MSG.classList.contains('fieldset__input-error--show')) {
      ERROR_INPUT_MSG.classList.remove('fieldset__input-error--show');
    }

    if (CONTAINER.classList.contains('container--opened')) {
      window.menu.close();
    }
  };

  const openCityPopup = function () {
    POPUP_CITY.classList.add('popup__city-popup--opened');
    POPUP_GPS_LINK.focus();
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

    if (EMAIL.value.length > 0) {
      LABEL_EMAIL.classList.add('fieldset__label-email--fill');
    }

    if (USER_NAME.value.length > 0) {
      LABEL_NAME.classList.add('fieldset__label-name--fill');
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
  };

  EMAIL.addEventListener('input', function () {
    ERROR_INPUT_MSG.classList.add('fieldset__input-error--show');
    if (EMAIL.validity.valid) {
      ERROR_INPUT_MSG.classList.remove('fieldset__input-error--show');
    }
  }, false);


  USER_NAME.addEventListener('input', function () {
    if (USER_NAME.value.length > 0) {
      LABEL_NAME.classList.add('fieldset__label-name--fill');
    } else {
      LABEL_NAME.classList.remove('fieldset__label-name--fill');
    }
  });

  EMAIL.addEventListener('input', function () {
    if (EMAIL.value.length > 0) {
      LABEL_EMAIL.classList.add('fieldset__label-email--fill');
    } else {
      LABEL_EMAIL.classList.remove('fieldset__label-email--fill');
    }
  });

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

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const NAV_MAIN = document.querySelector('.header__menu');
  const NAV_TOGGLE = document.querySelector('.header__toggle');
  const CONTAINER = document.querySelector('.container');

  NAV_MAIN.classList.remove('header__menu--nojs');
  NAV_MAIN.classList.add('header__menu--closed');
  CONTAINER.classList.remove('container--opened');
  CONTAINER.classList.remove('container--nojs');

  NAV_TOGGLE.addEventListener('click', function () {
    if (NAV_MAIN.classList.contains('header__menu--closed')) {
      NAV_MAIN.classList.remove('header__menu--closed');
      NAV_MAIN.classList.add('header__menu--opened');
      CONTAINER.classList.toggle('container--opened');
    } else {
      NAV_MAIN.classList.add('header__menu--closed');
      NAV_MAIN.classList.remove('header__menu--opened');
      CONTAINER.classList.toggle('container--opened');
    }
  });

  const closeMenu = function () {
    NAV_MAIN.classList.add('header__menu--closed');
    NAV_MAIN.classList.remove('header__menu--opened');
    CONTAINER.classList.remove('container--opened');
  };

  window.menu = {
    close: closeMenu,
  };

})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {
  let isStorageSupport = true;
  let storageName = '';
  let storageEmail = '';
  let storageQuestion = '';

  try {
    storageName = localStorage.getItem('userName');
    storageEmail = localStorage.getItem('email');
    storageQuestion = localStorage.getItem('question');
  } catch (err) {
    isStorageSupport = false;
  }

  window.storage = {
    isSupport: isStorageSupport,
    name: storageName,
    email: storageEmail,
    question: storageQuestion,
  };

})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {
  const TAB_NAV = document.querySelectorAll('.filter__item');
  const ENTER_KEY = 13;
  let tabName;

  TAB_NAV.forEach(item => {
    item.addEventListener('click', selectTabNav);
    item.addEventListener('keydown', function (evt) {
      tabName = this.getAttribute('data-tab-name');
      if (evt.keyCode === ENTER_KEY) {
        selectTabNavOnEnter(tabName);
      }
    });
  });

  function selectTabNav() {
    TAB_NAV.forEach(item => {
      item.classList.remove('filter__item--active');
    });
    this.classList.add('filter__item--active');
  }

  function selectTabNavOnEnter() {
    TAB_NAV.forEach(item => {
      item.dataset.tabName === tabName ? item.classList.add('filter__item--active') : item.classList.remove('filter__item--active');
    });
  }

})();

/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';

(function () {

  const BOOKING_ITEM = document.querySelectorAll('.booking__item');
  const ENTER_KEY = 'Enter';

  BOOKING_ITEM.forEach(item => {
    let input = item.querySelector('input');
    item.addEventListener('keydown', function (evt) {
      if (evt.key === ENTER_KEY) {
        input.checked = true;
      }
    });
  });

})();
