import { openPopup } from './popup.js';
import { addImageEffects } from './image-effects.js';

const uploadFile = document.querySelector('#upload-file');
const imageEditPopup = document.querySelector('.img-upload__overlay');
const imageEditPopupClose = document.querySelector('#upload-cancel');

uploadFile.addEventListener('change', () => {
  openPopup(imageEditPopup, imageEditPopupClose);
  addImageEffects();
});
