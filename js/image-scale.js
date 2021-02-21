const imageSizeButtonSmaller = document.querySelector('.scale__control--smaller');
const imageSizeButtonBigger = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview').querySelector('img');


imageSize.value = 100 + '%';
let imageSizeValue = 100;

const checkBorderSize = (borderValue, sizeButtonChangeDisabled) => {
  if (imageSizeValue == borderValue) {
    sizeButtonChangeDisabled.disabled = true;
  } else {
    sizeButtonChangeDisabled.disabled = false;
  }
};

imageSizeButtonBigger.disabled = true;

const changeImageSize = (changeValue) => {
  imageSizeValue += changeValue;
  imageSize.value = imageSizeValue + '%';
  image.style.transform = `scale(${imageSizeValue/100})`;

  checkBorderSize(100, imageSizeButtonBigger);
  checkBorderSize(25, imageSizeButtonSmaller);
}

imageSizeButtonBigger.addEventListener('click', () => changeImageSize(25));
imageSizeButtonSmaller.addEventListener('click', () => changeImageSize(-25));
