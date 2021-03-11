import { loadPhotos } from './api.js';
import { addImageSubmitHandler } from './form.js';
import { addUploadHandlers } from './download.js';
import { renderImages } from './render.js';

const DESCRIPTIONS_COUNT = 25;

loadPhotos()
  .then((descriptions) => {
    renderImages(descriptions.slice(0, DESCRIPTIONS_COUNT));
  });

addUploadHandlers();
addImageSubmitHandler();

