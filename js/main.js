import { generatePhotoDescription, generateMultiplePhotoDescriptions } from './data.js';
import { addImages } from './add-image.js';

const DESCRIPTIONS_COUNT = 25;
// eslint-disable-next-line no-console
console.log(generatePhotoDescription());
// eslint-disable-next-line no-console
console.log(generateMultiplePhotoDescriptions(DESCRIPTIONS_COUNT));

addImages(generateMultiplePhotoDescriptions(DESCRIPTIONS_COUNT));
