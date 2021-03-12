const generateRandomNumber = (min, max) => {
  let errorMessage;
  if (min < 0 || max < 0) {
    errorMessage = 'Диапазон может быть только положительным, включая ноль';
  }
  if (max < min) {
    errorMessage = 'Значение «до» диапазона меньше, чем значение «от»';
  }
  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const checkLengthString = (string, maxLength) => string.length <= maxLength

const stopEvent = (evt) => {
  evt.stopPropagation();
};

const isEscape = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { generateRandomNumber, checkLengthString, stopEvent, isEscape }
