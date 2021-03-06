import { generateMultiplePhotoDescriptions } from './data.js';
import { renderImages } from './render-images.js';
import { addUploadHandlers } from './image-download.js';

const DESCRIPTIONS_COUNT = 25;
const photoDescriptions = generateMultiplePhotoDescriptions(DESCRIPTIONS_COUNT);
renderImages(photoDescriptions);
addUploadHandlers();
