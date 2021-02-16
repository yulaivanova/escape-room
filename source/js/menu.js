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
