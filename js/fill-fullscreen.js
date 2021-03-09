import { fillFullScreenImageComments } from './fullscreen-comments.js'
import { openPopup } from './popup.js'

const popup = document.querySelector('.big-picture');
const popupImage = popup.querySelector('.big-picture__img img');
const likesCounter = popup.querySelector('.likes-count');
const captionImage = popup.querySelector('.social__caption');
const commentsCounter = popup.querySelector('.comments-count');
const commentsCounterBlock = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const fillFullScreenImage = (photo) => {
  popupImage.src = photo.url;
  commentsCounter.textContent = photo.comments.length;
  likesCounter.textContent = photo.likes;
  captionImage.textContent = photo.description;
  fillFullScreenImageComments(photo.comments);
};

const onPictureClick = (photo) => {
  openPopup();
  fillFullScreenImage(photo);
  commentsCounterBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

export { onPictureClick };