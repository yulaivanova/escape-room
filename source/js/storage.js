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
