import { fillFullScreenImageComments } from './fullscreen-comments.js'
import { openPopup } from './popup.js'

const popup = document.querySelector('.big-picture');
const popupImage = popup.querySelector('.big-picture__img img');
const likesCounter = popup.querySelector('.likes-count');
const captionImage = popup.querySelector('.social__caption');
const commentsCounter = popup.querySelector('.comments-count');

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
};

export { onPictureClick };
