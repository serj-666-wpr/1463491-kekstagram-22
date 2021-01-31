// Random number function
const randomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('Диапазон может быть только положительным, включая ноль');
    return
  }
  if (max < min) {
    // eslint-disable-next-line no-console
    console.log('Значение «до» диапазона меньше, чем значение «от»');
  } else {
    let number = min + Math.random() * (max + 1 - min);//https://learn.javascript.ru/task/random-int-min-max
    return Math.floor(number);
  }
}
// eslint-disable-next-line no-console
console.log(randomNumber(30, 40));



// Count line length function
const countLineLength = (line, maxLength) => {
  let lineLength = line.length;
  if (lineLength <= maxLength) {
    return true;
  } else {
    return false;
  }
}
// eslint-disable-next-line no-console
console.log(countLineLength('Hello my friend', 20));
