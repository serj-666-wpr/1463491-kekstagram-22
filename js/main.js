import { generateMultiplePhotoDescriptions } from './data.js';
import { renderImages } from './render-images.js';
import './image-download.js';
import './image-scale.js';
// import './image-effects.js';

const DESCRIPTIONS_COUNT = 25;
const photoDescriptions = generateMultiplePhotoDescriptions(DESCRIPTIONS_COUNT);
renderImages(photoDescriptions);
