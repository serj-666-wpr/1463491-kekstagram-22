import { sendForm } from './api.js';
import { closePopup } from './download.js';

const form = document.querySelector('.img-upload__form');

const addImageSubmitHandler = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);

    sendForm(formData, closePopup);
  });
}

export { addImageSubmitHandler };
