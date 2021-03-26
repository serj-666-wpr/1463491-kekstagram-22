import { isEscape } from './utils.js';
import { removeButtonCommentsHandler, resetValueCurrentCounter } from './fullscreen-comments.js'

const page = document.querySelector('body');
const popup = document.querySelector('.big-picture');
const popupClose = document.querySelector('#picture-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    onClosePopupClick();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  page.classList.add('modal-open');
  popupClose.addEventListener('click', onClosePopupClick);
};

const onClosePopupClick = () => {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  page.classList.remove('modal-open');
  popupClose.removeEventListener('click', onClosePopupClick);
  removeButtonCommentsHandler();
  resetValueCurrentCounter();
};

export { openPopup };
