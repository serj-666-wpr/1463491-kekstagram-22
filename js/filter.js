import { renderImages } from './render.js';

const filtersBlock = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');

const DESCRIPTIONS_COUNT = 25;
const RANDOM_IMAGES_COUNT = 10;

const showFiltersBlock = () => {
  filtersBlock.classList.remove('img-filters--inactive');
};

const renderTenRandomImages = (images) => {
  const imagesRandom = images.slice().sort(() => Math.random() - 0.5);
  renderImages(imagesRandom.slice(0, RANDOM_IMAGES_COUNT));
}

const sortImagesByDiscussion = (pictureA, pictureB) => {
  const discussionRankA = pictureA.comments.length;
  const discussionRankB = pictureB.comments.length;

  return discussionRankB - discussionRankA;
};

const addFilterChangeHandler = (callback) => {
  filterForm.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {

      filterButtons.forEach((button) => {
        if (button.id !== evt.target.id) {
          button.classList.remove('img-filters__button--active');
        } else {
          button.classList.add('img-filters__button--active');
        }
      });

      callback(evt.target.id);
    }
  });
};

const renderImagesByFilter = (images, filterType) => {
  switch(filterType) {
    case 'filter-random':
      renderTenRandomImages(images);
      break;
    case 'filter-discussed':
      renderImages(images.slice().sort(sortImagesByDiscussion));
      break;
    default:
      renderImages(images.slice(0, DESCRIPTIONS_COUNT));
  }
};

export { showFiltersBlock, addFilterChangeHandler, renderImagesByFilter };
