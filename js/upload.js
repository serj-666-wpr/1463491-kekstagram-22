const preview = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const upload = (imageFile) => {
  const image = imageFile.files[0];

  const imageName = image.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return imageName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(image);
  }
};

export { upload };
