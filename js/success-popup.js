import { isEscape } from './utils.js';

const mainBlock = document.querySelector('main');
const popupSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const popupSuccessInner = popupSuccess.querySelector('.success__inner');

const onPopupEscKeydownSuccess = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePopupSuccess();
  }
};

const closePopupSuccess = () => {
  mainBlock.removeChild(popupSuccess);
  document.removeEventListener('keydown', onPopupEscKeydownSuccess);
  mainBlock.removeEventListener('click', onCloseClickOutsideSuccess);
}

const onCloseClickOutsideSuccess = (evt) => {
  if (evt.target === popupSuccessInner) return;
  closePopupSuccess();
}

const showPopupSuccess = () => {
  mainBlock.appendChild(popupSuccess);

  const buttonClosePopupSuccess = document.querySelector('.success__button');
  buttonClosePopupSuccess.addEventListener('click', closePopupSuccess);

  document.addEventListener('keydown', onPopupEscKeydownSuccess);
  mainBlock.addEventListener('click', onCloseClickOutsideSuccess);
}

export { showPopupSuccess };
