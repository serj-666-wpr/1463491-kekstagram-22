import { fillFullScreenImageComments } from './fullscreen-image-comments.js'
import { openPopup } from './fullscreen-popup.js'

const popup = document.querySelector('.big-picture');
const popupImage = popup.querySelector('.big-picture__img').querySelector('img');
const likesCounter = popup.querySelector('.likes-count');
const captionImage = popup.querySelector('.social__caption');
const commentsCounter = popup.querySelector('.comments-count');
const commentsCounterBlock = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const fillFullScreenImage = (picture, pictureDescription, pictureComments) => {
  popupImage.src = picture.querySelector('.picture__img').src;
  commentsCounter.textContent = picture.querySelector('.picture__comments').textContent;
  likesCounter.textContent = picture.querySelector('.picture__likes').textContent;
  captionImage.textContent = pictureDescription;
  fillFullScreenImageComments(pictureComments);
};

const onPictureClick = (picture, pictureDescription, pictureComments) => {
  openPopup();
  fillFullScreenImage(picture, pictureDescription, pictureComments);
  commentsCounterBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

export { onPictureClick };
