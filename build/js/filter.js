'use strict';

(function () {
  const TAB_NAV = document.querySelectorAll('.filter__item');
  var ENTER_KEY = 13;
  let tabName;

  TAB_NAV.forEach(item => {
    item.addEventListener('click', selectTabNav);
    item.addEventListener('keydown', function (evt) {
      tabName = this.getAttribute('data-tab-name');
      if (evt.keyCode === ENTER_KEY) selectTabNavOnEnter(tabName);
    });
  });

  function selectTabNav() {
    TAB_NAV.forEach(item => {
      item.classList.remove('filter__item--active');
    });
    this.classList.add('filter__item--active');
  };

  function selectTabNavOnEnter() {
    TAB_NAV.forEach(item => {
      item.dataset.tabName === tabName ? item.classList.add('filter__item--active') : item.classList.remove('filter__item--active');
    });
  };

})();