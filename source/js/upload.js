const preview = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const initializeFileLoader = (imageFile) => {
  const image = imageFile.files[0];

  const imageName = image.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return imageName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    const onLoad = (event) => {
      preview.src = event.target.result;
    }

    reader.addEventListener('load', onLoad);

    reader.readAsDataURL(image);
  }
};

export { initializeFileLoader };
