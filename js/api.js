import { showError, showTextMessage } from './message.js';
import { closePopup } from './download.js';

const BASE_URL = 'https://22.javascript.pages.academy/kekstagram';

const sendForm = (formData, onSuccess) => {
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
        return onSuccess();
      }
      throw new Error();
    })
    .catch(showError);
}

const loadPhotos = (onSuccess) => {
  fetch(`${BASE_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((descriptions) => onSuccess(descriptions))
    .catch(() => {
      showTextMessage('Не удалось загрузить фотографии. Перезагрузите страницу');
    });
}

export { sendForm, loadPhotos };
