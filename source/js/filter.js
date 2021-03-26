import { renderImages } from './render.js';

const DESCRIPTIONS_COUNT = 25;
const RANDOM_IMAGES_COUNT = 10;

const FilterType = {
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filtersBlock = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');

const showFiltersBlock = () => {
  filtersBlock.classList.remove('img-filters--inactive');
};

const sortImagesByRandom = () => {
  return Math.random() - 0.5;
}

const sortImagesByDiscussion = (pictureA, pictureB) => {
  return pictureB.comments.length - pictureA.comments.length;
};

const addFilterChangeHandler = (callback) => {
  filterForm.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      const {id} = evt.target;
      filterButtons.forEach((button) => {
        if (button.id !== id) {
          button.classList.remove('img-filters__button--active');
        } else {
          button.classList.add('img-filters__button--active');
        }
      });

      callback(id);
    }
  });
};

const renderImagesByFilter = (images, filterType) => {
  switch(filterType) {
    case FilterType.RANDOM:
      renderImages(images.slice().sort(sortImagesByRandom).slice(0, RANDOM_IMAGES_COUNT));
      break;
    case FilterType.DISCUSSED:
      renderImages(images.slice().sort(sortImagesByDiscussion));
      break;
    default:
      renderImages(images.slice(0, DESCRIPTIONS_COUNT));
  }
};

export { showFiltersBlock, addFilterChangeHandler, renderImagesByFilter };
