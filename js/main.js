/* global _:readonly */
import { loadPhotos } from './api.js';
import { addImageSubmitHandler } from './form.js';
import { addUploadHandlers } from './download.js';
import { renderImages } from './render.js';
import { showFiltersBlock, addFilterChangeHandler, renderImagesByFilter } from './filter.js';

const DESCRIPTIONS_COUNT = 25;
const RERENDER_DELAY = 500;

loadPhotos(
  (descriptions) => {
    renderImages(descriptions.slice(0, DESCRIPTIONS_COUNT));
    showFiltersBlock();
    addFilterChangeHandler(_.debounce(
      (filterType) => renderImagesByFilter(descriptions, filterType),
      RERENDER_DELAY,
    ));
  },
);

addUploadHandlers();
addImageSubmitHandler();

