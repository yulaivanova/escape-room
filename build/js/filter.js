'use strict';

(function () {
  const FILTER_LIST = document.querySelectorAll('.filter__item');
  const ENTER_KEY = 13;
  let filterItem;

  FILTER_LIST.forEach(item => {
    item.addEventListener('click', selectTabNav);
    item.addEventListener('keydown', function (evt) {
      filterItem = this.getAttribute('data-tab-name');
      if (evt.keyCode === ENTER_KEY) selectTabNavOnEnter(tabName);
    });
  });

  function selectTabNav() {
    FILTER_LIST.forEach(item => {
      item.classList.remove('filter__item--active');
    });
    this.classList.add('filter__item--active');
  };

  function selectTabNavOnEnter() {
    FILTER_LIST.forEach(item => {
      item.dataset.filterItem === filterItem ? item.classList.add('filter__item--active') : item.classList.remove('filter__item--active');
    });
  };

})();