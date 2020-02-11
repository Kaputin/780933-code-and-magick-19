'use strict';
(function () {
  window.getRandomWizarElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };
})();
