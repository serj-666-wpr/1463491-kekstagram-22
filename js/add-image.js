import { onPictureClick } from './fullscreen-image.js';
const pictureTamplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const addImages = (photoDescriptions) => {
  photoDescriptions.forEach((item) => {
    const newPicture = pictureTamplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = item.url;
    newPicture.querySelector('.picture__comments').textContent = item.comments.length;
    newPicture.querySelector('.picture__likes').textContent = item.likes;
    const newPictureContent = newPicture.querySelector('.picture');
    newPictureContent.description = item.description;
    newPictureContent.comments = item.comments;
    onPictureClick(newPictureContent);
    fragment.appendChild(newPicture);
  });
  picturesList.appendChild(fragment);
};

export { addImages };
