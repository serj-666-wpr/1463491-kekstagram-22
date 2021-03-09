import { loadPhotos, addImageSubmitHandler } from './api.js';
import { addUploadHandlers } from './download.js';
import { renderImages } from './render.js';

const BASE_URL = 'https://22.javascript.pages.academy/kekstagram';
const DESCRIPTIONS_COUNT = 25;

loadPhotos(`${BASE_URL}/data`)
  .then((descriptions) => {
    renderImages(descriptions.slice(0, DESCRIPTIONS_COUNT));
  });

addUploadHandlers();
addImageSubmitHandler(BASE_URL);

