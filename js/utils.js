'use strict';
(function () {
  window.util = {
    ESC_KEY: 'Escape',
    ENTER_KEY: 'Enter',
    getRandomElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }
  };

})();
