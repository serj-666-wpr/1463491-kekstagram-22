import { showErrorMessage } from './message.js';
import { showPopupSuccess } from './success-popup.js';
import { showPopupError } from './error-popup.js';
import { closePopup } from './download.js';

const form = document.querySelector('.img-upload__form');

const addImageSubmitHandler  = (url) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);

    fetch(
      url,
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
          throw new Error();
        }
      })
      .catch(() => {
        showPopupError();
      });
  });
}

const loadPhotos = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      showErrorMessage('Не удалось загрузить фотографии. Перезагрузите страницу');
    });
}

export { addImageSubmitHandler, loadPhotos };
