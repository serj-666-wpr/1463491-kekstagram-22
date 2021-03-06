import { closePopup } from './image-download.js';
import { isEscape } from './popup.js';

const mainBlock = document.querySelector('main');
const form = document.querySelector('.img-upload__form');

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
  mainBlock.removeEventListener('click', closeClickOutsideSuccess);
}

const closeClickOutsideSuccess = (evt) => {
  if (evt.target === popupSuccessInner) return;
  closePopupSuccess();
}

const showPopupSuccess = () => {
  mainBlock.appendChild(popupSuccess);

  const buttonClosePopupSuccess = document.querySelector('.success__button');
  buttonClosePopupSuccess.addEventListener('click', closePopupSuccess);

  document.addEventListener('keydown', onPopupEscKeydownSuccess);
  mainBlock.addEventListener('click', closeClickOutsideSuccess);
}

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
  mainBlock.removeEventListener('click', closeClickOutsideError);
}

const closeClickOutsideError = (evt) => {
  if (evt.target === popupErrorInner) return;
  closePopupError();
}

const showPopupError = () => {
  mainBlock.appendChild(popupError);
  const buttonClosePopupError = document.querySelector('.error__button');
  buttonClosePopupError.addEventListener('click', closePopupError);

  document.addEventListener('keydown', onPopupEscKeydownError);
  mainBlock.addEventListener('click', closeClickOutsideError);
}

const postImage = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        closePopup();
        if (response.ok) {
          showPopupSuccess();
        } else {
          showPopupError();
        }
      })
      .catch(() => {
        closePopup();
        showPopupError();
      });
  });
}

export { postImage };
