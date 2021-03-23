import { generateRandomNumber } from './utils.js';

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
//Случайный элемент массива
const getRandomArrayElement = (array) => {
  return array[generateRandomNumber(0, array.length - 1)];
};

const Avatars = {
  MIN: 1,
  MAX: 6,
}
//Генерация комментария
const generateComment = (id = 1, numberOfComments = 1, itemOnAccount = 1) => {
  const comment = {
    id: id + numberOfComments * (itemOnAccount - 1),
    avatar: `img/avatar-${generateRandomNumber(Avatars.MIN,Avatars.MAX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
  return comment;
};
//Генерация комментариев
const generateMultipleComments = (numberOfComments, itemOnAccount) => {
  const comments = [];
  for (let j = 1 ; j < numberOfComments + 1 ; j++) {
    comments.push(generateComment(j, numberOfComments, itemOnAccount));
  }
  return comments;
};

const NUMBER_COMMENTS = 5;
const Likes = {
  MIN: 15,
  MAX: 200,
};
//Генерация описания
const generatePhotoDescription = (id = 1) => {
  const photoDescription = {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: generateRandomNumber(Likes.MIN, Likes.MAX),
    comments: generateMultipleComments(NUMBER_COMMENTS, id),
  };
  return photoDescription;
};
//Генерация описаний
const generateMultiplePhotoDescriptions = (numberOfDescriptions) => {
  const photoDescriptions = [];
  for (let i = 1 ; i < numberOfDescriptions + 1 ; i++) {
    photoDescriptions.push(generatePhotoDescription(i))
  }
  return photoDescriptions;
};

export { generatePhotoDescription, generateMultiplePhotoDescriptions };
