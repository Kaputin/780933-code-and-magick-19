'use strict';
(function () {
  window.wizards = [];
  var NUMBER_WIZARDS = 4;

  var getRandomArrayWizards = function (numberWizards) {
    for (var i = 0; i < numberWizards; i++) {
      window.wizards[i] = {
        name: window.getRandomElement(window.WIZARD_NAMES) + ' ' + window.getRandomElement(window.WIZARD_SURNAMES),
        coatColor: window.getRandomElement(window.WIZARD_COAT_COLOR),
        eyesColor: window.getRandomElement(window.WIZARD_EYES_COLOR)
      };
    }
  };

  getRandomArrayWizards(NUMBER_WIZARDS);
})();
