import { sendForm } from './api.js';
import { showSuccess } from './message.js';
import { validHashtags } from './download.js';

const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');

const addImageSubmitHandler = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const valid = validHashtags();
    if (valid) {
      hashtagInput.style.outline = '2px solid red';
    } else {
      const formData = new FormData(form);
      sendForm(formData, showSuccess);
    }
  });
}

export { addImageSubmitHandler };
