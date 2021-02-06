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

const names = [
  'Артём',
  'Павел',
  'Екатерина',
  'Илья',
  'Ирина',
  'Денис',
  'Дмитрий',
  'Елена',
  'Анна',
  'Сергей',
  'Александр',
  'Анастасия',
  'Евгений',
  'Светлана',
  'Анатолий',
  'Данил',
  'Татьяна',
  'Владимир',
  'Алина',
  'Андрей',
  'Маргарита',
  'Тимофей',
  'Виктория',
  'Константин',
  'Игорь',
];
const descriptions = [
  'Цветочный магазин',
  'Зеленые просторы Кубани',
  'Хроника пикируещего бомбардировщика',
  'Знойный июль',
  'Реставрация Мейдзи',
  'Первый день рождения',
  'Короли абстракта',
  'Тихий Дон',
  'Великий инквизитор',
  'Часть чего-то большего',
  'Прибавочная стоимость',
  'Битва при Ватерлоо',
  'Полет фантазии',
  'Один день на Голгофе',
  'Облачный день',
  'Вечера Касталии',
];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomArrayElement = (elements) => {
  return elements[generateRandomNumber(0, elements.length - 1)];
};

const getRandomNotRepeatNumberArray = (length) => {
  let NotRepeatNumberArray = [];
  for (let i = 1 ; i <= length ; i++) {
    NotRepeatNumberArray.push(i);
  }
  let RandomNotRepeatNumberArray = [];
  while (NotRepeatNumberArray.length) {
    let pos = Math.random()*NotRepeatNumberArray.length;
    let element = NotRepeatNumberArray.splice(pos, 1)[0];
    RandomNotRepeatNumberArray.push(element);
  }
  return RandomNotRepeatNumberArray;
};

const generatePhotoDescription = () => {
  let photoDescriptions = [];
  let randomPhoto = getRandomNotRepeatNumberArray(25);
  for (let i = 1 ; i < 26 ; i++) {
    let comments = [];
    let randomId = getRandomNotRepeatNumberArray(100);
    for (let j = 0 ; j < generateRandomNumber(1,5) ; j++) {
      comments.push({
        id: randomId[j],
        avatar: 'img/avatar-' + generateRandomNumber(1,6) + '.svg',
        message: getRandomArrayElement(messages),
        name: getRandomArrayElement(names),
      });
    }
    photoDescriptions.push({
      id: i,
      url: 'photos/' + randomPhoto[i - 1] + '.jpg',
      description: getRandomArrayElement(descriptions),
      likes: generateRandomNumber(15, 200),
      comments,
    })
  }
  return photoDescriptions;
};

// eslint-disable-next-line no-console
console.log(generatePhotoDescription());
