const imageSizeButtonSmaller = document.querySelector('.scale__control--smaller');
const imageSizeButtonBigger = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const INITIAL_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DIVIDER = 100;

let imageSizeValue = INITIAL_SCALE;

const checkScaleButtons = (borderValue, sizeButtonChangeDisabled) => {
  sizeButtonChangeDisabled.disabled = (imageSizeValue === borderValue);
};

const changeImageSize = (changeValue) => {
  imageSizeValue += changeValue;

  imageSize.value = `${imageSizeValue}%`;
  imageSize.setAttribute('value', `${imageSizeValue}%`);
  image.style.transform = `scale(${imageSizeValue/DIVIDER})`;

  checkScaleButtons(MAX_SCALE, imageSizeButtonBigger);
  checkScaleButtons(MIN_SCALE, imageSizeButtonSmaller);
}

const onIncreaseScale = () => {
  changeImageSize(SCALE_STEP);
};

const onDecreaseScale = () => {
  changeImageSize(-SCALE_STEP);
};

const addScaleHandlers = () => {
  imageSizeValue = INITIAL_SCALE;

  imageSize.setAttribute('value', `${imageSizeValue}%`);
  image.style.transform = `scale(${imageSizeValue/DIVIDER})`;
  imageSizeButtonBigger.disabled = true;

  imageSizeButtonBigger.addEventListener('click', onIncreaseScale);
  imageSizeButtonSmaller.addEventListener('click', onDecreaseScale);
};

const removeScaleHandlers = () => {
  imageSizeButtonBigger.removeEventListener('click', onIncreaseScale);
  imageSizeButtonSmaller.removeEventListener('click', onDecreaseScale);
  imageSize.value = `${INITIAL_SCALE}%`;
};

export { addScaleHandlers, removeScaleHandlers };
