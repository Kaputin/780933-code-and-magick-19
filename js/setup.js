'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomWizarElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var wizards = [];

var getRandomArrayWizards = function (numberWizards) {
  for (var i = 0; i < numberWizards; i++) {
    wizards[i] = {
      name: getRandomWizarElement(WIZARD_NAMES) + ' ' + getRandomWizarElement(WIZARD_SURNAMES),
      coatColor: getRandomWizarElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomWizarElement(WIZARD_EYES_COLOR)
    };
  }
};

var numberWizards = 4;

getRandomArrayWizards(numberWizards);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// ---------------------------------------Настройка открытия, закрытия формы---------------------------------- //
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var inputWizardCoat = document.querySelector('input[name = coat-color]');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputWizardEyes = document.querySelector('input[name = eyes-color]');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var inputFireballColor = setupFireballWrap.querySelector('input[name = fireball-color]');

var onPopupEscPress = function (evt) {
  if (setup.querySelector('.setup-user-name') === document.activeElement) {
    return; // тут ругается если нет return
  } else {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  }
};

// далее сделал на каждую часть мага отдельную функцию, пытался сделать одну ниверсальную, но там у меня получилось слишком много if else

var getRandomWizardCoat = function () {
  var randomColor = getRandomWizarElement(WIZARD_COAT_COLOR);
  setupWizardCoat.style.fill = randomColor;
  inputWizardCoat.value = randomColor;
};

var getRandomWizardEyes = function () {
  var randomColor = getRandomWizarElement(WIZARD_EYES_COLOR);
  setupWizardEyes.style.fill = randomColor;
  inputWizardEyes.value = randomColor;
};

var getRandomFireballColor = function () {
  var randomColor = getRandomWizarElement(WIZARD_FIREBALL_COLOR);
  setupFireballWrap.style.background = randomColor;
  inputFireballColor.value = randomColor;
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function () {
  getRandomWizardCoat();
});

setupWizardEyes.addEventListener('click', function () {
  getRandomWizardEyes();
});

setupFireballWrap.addEventListener('click', function () {
  getRandomFireballColor();
});
