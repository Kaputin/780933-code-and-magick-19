'use strict';
// На сколько мелко делить текс? На лекции упоминали, что нет предела совершенству и лучше уточнить у наставника.
// Поразделял для примера, чтобы понять что к чему и поиграться с областями видимости

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (setup.querySelector('.setup-user-name') === document.activeElement) {
      // evt.preventDefault(); не дает вводить текст, хотя пробовал иначе раньше давал, не понимаю где ошибка
      return;
    } else if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  setupOpen.removeEventListener('click', closePopup);
  // Удаляет ли обработчик? Идею понимаю, но на всякий случай уточню: если например навесить alert на openPopup, то при открытом попапе всеравно выводит alert.
  // делал в предыдущий раз как раз, чтобы такого не было.

  setupOpen.removeEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  setupClose.removeEventListener('click', openPopup);

  setupClose.removeEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

})();
