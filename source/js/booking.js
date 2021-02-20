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
