import { importImageData } from './import-data.js';
import { addUploadHandlers } from './image-download.js';
import { postImage } from './image-posting.js';

importImageData();
addUploadHandlers();
postImage();

