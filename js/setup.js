'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var START_DIALOG_Y = '80px';
  var START_DIALOG_X = '50%';


  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (setup.querySelector('.setup-user-name') === document.activeElement) {
      return;
    } else if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', onClosePopupClick);
    setupClose.addEventListener('keydown', onClosePopupKeydown);
    setupOpen.removeEventListener('click', onOpenPopupClick);
    setupOpen.removeEventListener('keydown', onOpenPopupKeydown);
  };

  var onOpenPopupClick = function () {
    openPopup();
  };

  var onOpenPopupKeydown = function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupOpen.addEventListener('click', onOpenPopupClick);
    setupOpen.addEventListener('keydown', onOpenPopupKeydown);
    setupClose.removeEventListener('click', onClosePopupClick);
    setupClose.removeEventListener('keydown', onClosePopupKeydown);
    setup.style.top = START_DIALOG_Y;
    setup.style.left = START_DIALOG_X;
  };

  var onClosePopupClick = function () {
    closePopup();
  };

  var onClosePopupKeydown = function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  };

  setupOpen.addEventListener('click', onOpenPopupClick);

  setupOpen.addEventListener('keydown', onOpenPopupKeydown);
})();
