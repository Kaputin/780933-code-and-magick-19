'use strict';

(function () {
  var START_DIALOG_Y = '80px';
  var START_DIALOG_X = '50%';


  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (setup.querySelector('.setup-user-name') === document.activeElement) {
      return;
    } else if (evt.key === window.util.ESC_KEY) {
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
    if (evt.key === window.util.ENTER_KEY) {
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
    if (evt.key === window.util.ENTER_KEY) {
      closePopup();
    }
  };

  setupOpen.addEventListener('click', onOpenPopupClick);

  setupOpen.addEventListener('keydown', onOpenPopupKeydown);

  var form = setup.querySelector('.setup-wizard-form');


  var onSuccess = function () {
    setup.classList.add('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  form.addEventListener('submit', function (evt) {
    window.backendSave(new FormData(form), onSuccess, onError);
    evt.preventDefault();
  });

})();
