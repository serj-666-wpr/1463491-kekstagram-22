import { renderImages } from './render-images.js';
import { showErrorPopup } from './utils.js';

const DESCRIPTIONS_COUNT = 25;

const importImageData = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        showErrorPopup('Не удалось загрузить фотографии. Перезагрузите страницу');
      }
    })
    .then((descriptions) => {
      renderImages(descriptions.slice(0, DESCRIPTIONS_COUNT));
    })
    .catch(() => {
      showErrorPopup('Не удалось загрузить фотографии. Перезагрузите страницу');
    });
}

export { importImageData };
