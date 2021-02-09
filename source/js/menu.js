'use strict';
(function () {

  var navMain = document.querySelector('.header__menu');
  var navToggle = document.querySelector('.header__toggle');
  var container = document.querySelector('.container');

  navMain.classList.remove('header__menu--nojs');
  navMain.classList.add('header__menu--closed');
  container.classList.remove('container--opened');
  container.classList.remove('container--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__menu--closed')) {
      navMain.classList.remove('header__menu--closed');
      navMain.classList.add('header__menu--opened');
      container.classList.toggle('container--opened');
    } else {
      navMain.classList.add('header__menu--closed');
      navMain.classList.remove('header__menu--opened');
      container.classList.toggle('container--opened');
    }
  });

  var closeMenu = function () {
    navMain.classList.add('header__menu--closed');
    navMain.classList.remove('header__menu--opened');
    container.classList.remove('container--opened');
  }

  window.menu = {
    close: closeMenu,
  }

})();
