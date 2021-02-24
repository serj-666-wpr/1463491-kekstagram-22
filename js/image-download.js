import { isEscape } from './popup.js';
import { addImageEffects, removeImageEffects } from './image-effects.js';
import { resetScale, removeScaleOptions } from './image-scale.js';

const page = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imageEditPopup = document.querySelector('.img-upload__overlay');
const imageEditPopupClose = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  imageEditPopup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  page.classList.add('modal-open');
  imageEditPopupClose.addEventListener('click', closePopup);
};

const closePopup = () => {
  imageEditPopup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  page.classList.remove('modal-open');
  imageEditPopupClose.removeEventListener('click', closePopup);
  removeScaleOptions();
  removeImageEffects();
};

const loadFile = () => {
  uploadFile.addEventListener('change', () => {
    openPopup();
    resetScale();
    addImageEffects();
  });
};

export { loadFile };
