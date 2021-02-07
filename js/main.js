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

const NAMES = [
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
const DESCRIPTION = [
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
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomArrayElement = (array) => {
  return array[generateRandomNumber(0, array.length - 1)];
};

const MIN_NUMBERS_AVATARS = 15;
const MAX_NUMBERS_AVATARS = 200;
const generateComments = (numberOfComments) => {
  let comments = [];
  for (let j = 0 ; j < generateRandomNumber(1,numberOfComments) ; j++) {
    comments.push({
      id: j + 1,
      avatar: 'img/avatar-' + generateRandomNumber(MIN_NUMBERS_AVATARS,MAX_NUMBERS_AVATARS) + '.svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    });
  }
  return comments;
};

const NUMBER_DESCRIPTIONS = 25;
const NUMBER_COMMENTS = 5;
const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;
const MIN_NUMBER_PHOTOS = 1;
const MAX_NUMBER_PHOTOS = 25;
const generateOnePhotoDescription = () => {
  let comments = generateComments(NUMBER_COMMENTS);
  let photoDescription = {
    id: 1,
    url: 'photos/' + generateRandomNumber(MIN_NUMBER_PHOTOS,MAX_NUMBER_PHOTOS) + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: generateRandomNumber(MIN_NUMBER_LIKES,  MAX_NUMBER_LIKES),
    comments,
  }
  return photoDescription;
};
const generatePhotoDescriptions = (numberOfDescriptions) => {
  let photoDescriptions = [];
  for (let i = 0 ; i < numberOfDescriptions ; i++) {
    let comments = generateComments(NUMBER_COMMENTS);
    photoDescriptions.push({
      id: i + 1,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(DESCRIPTION),
      likes: generateRandomNumber(MIN_NUMBER_LIKES,  MAX_NUMBER_LIKES),
      comments,
    })
  }
  return photoDescriptions;
};

// eslint-disable-next-line no-console
console.log(generateOnePhotoDescription());
// eslint-disable-next-line no-console
console.log(generatePhotoDescriptions(NUMBER_DESCRIPTIONS));
