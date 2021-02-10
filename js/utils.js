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
// eslint-disable-next-line no-console
console.log(generateRandomNumber(30, 40));


const checkLengthString = (string, maxLength) => string.length <= maxLength
// eslint-disable-next-line no-console
console.log(checkLengthString('Hello my friend', 20));

export { generateRandomNumber,checkLengthString }
