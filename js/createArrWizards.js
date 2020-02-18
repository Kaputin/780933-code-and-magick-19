'use strict';
(function () {
  window.getRandomArrayWizards = function (numberWizards, wizards) {
    for (var i = 0; i < numberWizards; i++) {
      wizards[i] = {
        name: window.getRandomElement(window.constants.WIZARD_NAMES) + ' ' + window.getRandomElement(window.constants.WIZARD_SURNAMES),
        coatColor: window.getRandomElement(window.constants.WIZARD_COAT_COLOR),
        eyesColor: window.getRandomElement(window.constants.WIZARD_EYES_COLOR)
      };
    }
    return wizards;
  };
})();
