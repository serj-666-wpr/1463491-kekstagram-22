import { onPictureClick } from './fill-fullscreen.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderImages = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const newPicture = pictureTemplate.cloneNode(true);
    const newPictureImage = newPicture.querySelector('.picture__img');
    const newPictureComments = newPicture.querySelector('.picture__comments');
    const newPictureLikes = newPicture.querySelector('.picture__likes');

    newPictureImage.src = photo.url;
    newPictureComments.textContent = photo.comments.length;
    newPictureLikes.textContent = photo.likes;

    newPicture.addEventListener('click', () => onPictureClick(photo));

    fragment.appendChild(newPicture);
  });

  Array.from(picturesList.children).forEach((item) => {
    if (item.classList.contains('picture')) {
      item.remove();
    }
  });

  picturesList.appendChild(fragment);
};

export { renderImages };
