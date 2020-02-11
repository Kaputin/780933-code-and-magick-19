'use strict';
(function () {

  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var inputWizardCoat = document.querySelector('input[name = coat-color]');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var inputWizardEyes = document.querySelector('input[name = eyes-color]');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupFireballWrap.querySelector('input[name = fireball-color]');

  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var onWizardCoatClick = function () {
    var randomColor = window.getRandomWizarElement(WIZARD_COAT_COLOR);
    setupWizardCoat.style.fill = randomColor;
    inputWizardCoat.value = randomColor;
  };

  var onWizardEyesClick = function () {
    var randomColor = window.getRandomWizarElement(WIZARD_EYES_COLOR);
    setupWizardEyes.style.fill = randomColor;
    inputWizardEyes.value = randomColor;
  };

  var onWizardFireballClick = function () {
    var randomColor = window.getRandomWizarElement(WIZARD_FIREBALL_COLOR);
    setupFireballWrap.style.background = randomColor;
    inputFireballColor.value = randomColor;
  };

  setupWizardCoat.addEventListener('click', onWizardCoatClick);

  setupWizardEyes.addEventListener('click', onWizardEyesClick);

  setupFireballWrap.addEventListener('click', onWizardFireballClick);
})();
