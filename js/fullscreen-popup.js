const page = document.querySelector('body');
const popup = document.querySelector('.big-picture');
const popupClose = document.querySelector('#picture-cancel');

const onPopupEscKeydown = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  page.classList.add('modal-open');
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  page.classList.remove('modal-open');
};

const onButtonPopupClick = () => {
  popupClose.addEventListener('click', () => {
    closePopup();
  });
};

export { openPopup, onButtonPopupClick };
