'use strict';
(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  window.util = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY
  };

  window.getRandomElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };
})();
