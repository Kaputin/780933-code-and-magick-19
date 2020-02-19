'use strict';
(function () {

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(window.constants.WIZARD_COAT_COLOR);
    wizardElement.querySelector('.wizard-coat').style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(window.constants.WIZARD_EYES_COLOR);
    wizardElement.querySelector('.wizard-eyes').style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
})();
