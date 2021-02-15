const pictureTamplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const addImages = (photoDescriptions) => {
  photoDescriptions.forEach((description) => {
    const newPicture = pictureTamplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = description.url;
    newPicture.querySelector('.picture__comments').textContent = description.comments.length;
    newPicture.querySelector('.picture__likes').textContent = description.likes;
    fragment.appendChild(newPicture);
  });
  picturesList.appendChild(fragment);
};

export { addImages };
