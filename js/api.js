import { showMessageErrorLoad } from './message-error-load.js';
import { showError, showSuccess } from './message.js';
import { closePopup } from './download.js';

const BASE_URL = 'https://22.javascript.pages.academy/kekstagram';

const sendForm = (formData) => {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      closePopup();
      if (response.ok) {
        showSuccess();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      showError();
    });
}

const loadPhotos = () => {
  return fetch(`${BASE_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      showMessageErrorLoad('Не удалось загрузить фотографии. Перезагрузите страницу');
    });
}

export { sendForm, loadPhotos };
