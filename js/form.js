import { sendForm } from './api.js';
import { showSuccess } from './message.js';

const form = document.querySelector('.img-upload__form');

const addImageSubmitHandler = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);

    sendForm(formData, showSuccess);
  });
}

export { addImageSubmitHandler };
