const page = document.querySelector('body');

const isEscape = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const onPopupEscKeydown = (evt, popup, popupClose) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePopup(popup, popupClose);
  }
};

const openPopup = (popup, popupClose) => {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, popup, popupClose));
  page.classList.add('modal-open');
  popupClose.addEventListener('click', () => closePopup(popup, popupClose));
};

const closePopup = (popup, popupClose) => {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', (evt) => onPopupEscKeydown(evt, popup, popupClose));
  page.classList.remove('modal-open');
  popupClose.removeEventListener('click', () => closePopup(popup, popupClose));
};

export { openPopup };
