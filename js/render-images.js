import { onPictureClick } from './fill-fullscreen-image.js';
import { generateMultiplePhotoDescriptions } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const renderImages = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((item) => {
    const newPicture = pictureTemplate.cloneNode(true);
    const newPictureImage = newPicture.querySelector('.picture__img');
    const newPictureComments = newPicture.querySelector('.picture__comments');
    const newPictureLikes = newPicture.querySelector('.picture__likes');

    newPictureImage.src = item.url;
    newPictureComments.textContent = item.comments.length;
    newPictureLikes.textContent = item.likes;

    const newPictureContent = newPicture.querySelector('.picture');
    newPictureContent.addEventListener('click', () => onPictureClick(newPictureContent, item.description, item.comments));

    fragment.appendChild(newPicture);
  });
  picturesList.appendChild(fragment);
};

const DESCRIPTIONS_COUNT = 25;
renderImages(generateMultiplePhotoDescriptions(DESCRIPTIONS_COUNT));
