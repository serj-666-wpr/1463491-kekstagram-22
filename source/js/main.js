import debounce from 'lodash.debounce';
import { loadPhotos } from './api.js';
import { addImageSubmitHandler } from './form.js';
import { addUploadHandlers } from './download.js';
import { renderImages } from './render.js';
import { showFiltersBlock, addFilterChangeHandler, renderImagesByFilter } from './filter.js';

const DESCRIPTIONS_COUNT = 25;
const DEBOUNCE_TIME = 500;

loadPhotos(
  (descriptions) => {
    renderImages(descriptions.slice(0, DESCRIPTIONS_COUNT));
    showFiltersBlock();
    addFilterChangeHandler(debounce(
      (filterType) => renderImagesByFilter(descriptions, filterType),
      DEBOUNCE_TIME,
    ));
  },
);

addUploadHandlers();
addImageSubmitHandler();

