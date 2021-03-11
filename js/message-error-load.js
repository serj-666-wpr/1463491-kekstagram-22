const ERROR_POPUP_TIME = 5000;

const showMessageErrorLoad = (message) => {
  const errorPopup = document.createElement('div');
  errorPopup.style.zIndex = 100;
  errorPopup.style.position = 'fixed';
  errorPopup.style.left = '50%';
  errorPopup.style.top = '50%';
  errorPopup.style.transform = 'translate(-50%, -50%)';
  errorPopup.style.border = '4px solid yellow';
  errorPopup.style.borderRadius = '10px';
  errorPopup.style.padding = '10px 5px';
  errorPopup.style.fontSize = '23px';
  errorPopup.style.lineHeight = '1.3em';
  errorPopup.style.color = 'black';
  errorPopup.style.backgroundColor = 'white';

  errorPopup.textContent = message;

  document.body.append(errorPopup);

  setTimeout(() => {
    errorPopup.remove();
  }, ERROR_POPUP_TIME);
}

export { showMessageErrorLoad };
