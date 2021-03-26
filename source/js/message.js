import { isEscape } from './utils.js';
import { onCloseFormPopupClick } from './download.js';

const ERROR_POPUP_TIME = 5000;

const MessageTypeTemplate = {
  SUCCESS: document.querySelector('#success').content.querySelector('.success').cloneNode(true),
  ERROR: document.querySelector('#error').content.querySelector('.error').cloneNode(true),
}

const mainBlock = document.querySelector('main');

const showMessage = (messageType) => {
  const fillMessage = () => {
    mainBlock.appendChild(messageType);

    const buttonClosePopup = messageType.querySelector('button');

    buttonClosePopup.addEventListener('click', onClosePopupClick);
    document.addEventListener('keydown', onPopupEscKeydown);
    mainBlock.addEventListener('click', onCloseClickOutside);
  }

  const onPopupEscKeydown = (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      onClosePopupClick();
    }
  };

  const onClosePopupClick = () => {
    messageType.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
    mainBlock.removeEventListener('click', onCloseClickOutside);
  }

  const onCloseClickOutside = (evt) => {
    if (!(evt.target === messageType)) {
      return;
    }
    onClosePopupClick();
  }

  fillMessage();
}

const showError = () => {
  onCloseFormPopupClick();
  showMessage(MessageTypeTemplate.ERROR);
}

const showSuccess = () => {
  onCloseFormPopupClick();
  showMessage(MessageTypeTemplate.SUCCESS);
}

const showTextMessage = (message) => {
  const errorPopup = document.createElement('div');
  errorPopup.style.zIndex = 100;
  errorPopup.style.position = 'fixed';
  errorPopup.style.left = '50%';
  errorPopup.style.top = '50%';
  errorPopup.style.transform = 'translate(-50%, -50%)';
  errorPopup.style.border = '4px solid yellow';
  errorPopup.style.borderRadius = '10px';
  errorPopup.style.padding = '10px 5px';
  errorPopup.style.fontSize = '23px';
  errorPopup.style.lineHeight = '1.3em';
  errorPopup.style.color = 'black';
  errorPopup.style.backgroundColor = 'white';

  errorPopup.textContent = message;

  document.body.append(errorPopup);

  setTimeout(() => {
    errorPopup.remove();
  }, ERROR_POPUP_TIME);
}

export { showError, showSuccess, showTextMessage };
