import { isEscape } from './utils.js';

const mainBlock = document.querySelector('main');

const MessageType = {
  SUCCESS: document.querySelector('#success').content.querySelector('.success').cloneNode(true),
  ERROR: document.querySelector('#error').content.querySelector('.error').cloneNode(true),
}

const showMessage = (messageType) => {
  const fillMessage = () => {
    mainBlock.appendChild(messageType);

    const buttonClosePopup = messageType.querySelector('button');

    buttonClosePopup.addEventListener('click', closePopup);
    document.addEventListener('keydown', onPopupEscKeydown);
    mainBlock.addEventListener('click', onCloseClickOutside);
  }

  const onPopupEscKeydown = (evt) => {
    if (isEscape(evt)) {
      evt.preventDefault();
      closePopup();
    }
  };

  const closePopup = () => {
    mainBlock.removeChild(messageType);
    document.removeEventListener('keydown', onPopupEscKeydown);
    mainBlock.removeEventListener('click', onCloseClickOutside);
  }

  const onCloseClickOutside = (evt) => {
    if (evt.target === messageType.querySelector('div')) return;
    closePopup();
  }

  fillMessage();
}

const showError = () => {
  showMessage(MessageType.ERROR);
}

const showSuccess = () => {
  showMessage(MessageType.SUCCESS);
}

export { showError, showSuccess };
