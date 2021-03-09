import { isEscape } from './utils.js';

const mainBlock = document.querySelector('main');
const popupError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const popupErrorInner = popupError.querySelector('.error__inner');

const onPopupEscKeydownError = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePopupError();
  }
};

const closePopupError = () => {
  mainBlock.removeChild(popupError);
  document.removeEventListener('keydown', onPopupEscKeydownError);
  mainBlock.removeEventListener('click', onCloseClickOutsideError);
}

const onCloseClickOutsideError = (evt) => {
  if (evt.target === popupErrorInner) return;
  closePopupError();
}

const showPopupError = () => {
  mainBlock.appendChild(popupError);

  const buttonClosePopupError = document.querySelector('.error__button');
  buttonClosePopupError.addEventListener('click', closePopupError);

  document.addEventListener('keydown', onPopupEscKeydownError);
  mainBlock.addEventListener('click', onCloseClickOutsideError);
}

export { showPopupError };
