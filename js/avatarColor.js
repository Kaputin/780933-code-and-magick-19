'use strict';
(function () {

  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var inputWizardCoat = document.querySelector('input[name = coat-color]');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var inputWizardEyes = document.querySelector('input[name = eyes-color]');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupFireballWrap.querySelector('input[name = fireball-color]');

  var onWizardCoatClick = function () {
    var randomColor = window.util.getRandomElement(window.constants.WIZARD_COAT_COLOR);
    setupWizardCoat.style.fill = randomColor;
    inputWizardCoat.value = randomColor;
  };

  var onWizardEyesClick = function () {
    var randomColor = window.util.getRandomElement(window.constants.WIZARD_EYES_COLOR);
    setupWizardEyes.style.fill = randomColor;
    inputWizardEyes.value = randomColor;
  };

  var onWizardFireballClick = function () {
    var randomColor = window.util.getRandomElement(window.constants.WIZARD_FIREBALL_COLOR);
    setupFireballWrap.style.background = randomColor;
    inputFireballColor.value = randomColor;
  };

  setupWizardCoat.addEventListener('click', onWizardCoatClick);

  setupWizardEyes.addEventListener('click', onWizardEyesClick);

  setupFireballWrap.addEventListener('click', onWizardFireballClick);
})();
