import { addImageEffects, removeImageEffects } from './effects.js';
import { addScaleHandlers, removeScaleHandlers } from './scale.js';
import { onEscKeydown, isEscape } from './utils.js';
import { initializeFileLoader } from './upload.js';

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_NUMBER = 5;
const ALLOWED_SYMBOLS =  /^#[a-z0-9а-я]+$/;

const page = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imageEditPopup = document.querySelector('.img-upload__overlay');
const imageEditPopupClose = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const addPropagation = () => {
  hashtagInput.addEventListener('keydown', onEscKeydown);
  commentInput.addEventListener('keydown', onEscKeydown);
};

const removePropagation = () => {
  hashtagInput.removeEventListener('keydown', onEscKeydown);
  commentInput.removeEventListener('keydown', onEscKeydown);
};

const onInputFill = () => {
  const hashtags = hashtagInput.value
    .split(' ')
    .map((hashtag) => {
      return hashtag.toLowerCase();
    });

  hashtags.forEach((hashtag) => {
    if (!hashtagInput.value) {
      hashtagInput.setCustomValidity('');
    } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хеш-тег должен быть не длинее ${MAX_HASHTAG_LENGTH} символов`);
    } else if (hashtags.length > MAX_HASHTAGS_NUMBER) {
      hashtagInput.setCustomValidity(`Хеш-тегов должно быть не больше ${MAX_HASHTAGS_NUMBER}`);
    } else if (!(hashtag[0] === '#')) {
      hashtagInput.setCustomValidity('Хеш-тег должен начинаться с #');
    } else if (hashtag.length === 1) {
      hashtagInput.setCustomValidity('Хеш-тег не может сосотоять только из #');
    } else if (hashtag.includes('#', 1)) {
      hashtagInput.setCustomValidity('Хеш-теги разделяются пробелами');
    } else if (!ALLOWED_SYMBOLS.test(hashtag)) {
      hashtagInput.setCustomValidity('Хеш-тег не может содержать спецсимволов и знаков пунктуации');
    } else if (hashtags.slice(0, -1).includes(hashtag)) {
      hashtagInput.setCustomValidity('Хеш-теги не могут быть одинаковыми');
    } else {
      hashtagInput.setCustomValidity('');
    }
  });

  hashtagInput.reportValidity();
};

const addValidForm = () => {
  hashtagInput.addEventListener('input', onInputFill);
};

const removeValidForm = () => {
  hashtagInput.removeEventListener('input', onInputFill);
};

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    onCloseFormPopupClick();
  }
};

const openFormPopup = () => {
  imageEditPopup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  page.classList.add('modal-open');
  imageEditPopupClose.addEventListener('click', onCloseFormPopupClick);
};

const onCloseFormPopupClick = () => {
  imageEditPopup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  page.classList.remove('modal-open');
  imageEditPopupClose.removeEventListener('click', onCloseFormPopupClick);
  uploadFile.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
  removeScaleHandlers();
  removeImageEffects();
  removePropagation();
  removeValidForm();
};

const addUploadHandlers = () => {
  uploadFile.addEventListener('change', () => {
    initializeFileLoader(uploadFile);
    openFormPopup();
    addScaleHandlers();
    addImageEffects();
    addPropagation();
    addValidForm();
  });
};

export { addUploadHandlers, onCloseFormPopupClick };
