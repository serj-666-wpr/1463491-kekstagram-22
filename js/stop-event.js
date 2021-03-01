const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const stopEvent = (evt) => {
  evt.stopPropagation();
};

const stopEventKeydownEscOnInputFocus = () => {
  hashtagInput.addEventListener('keydown', stopEvent);
  commentInput.addEventListener('keydown', stopEvent);
};

const continueEventKeydownEscOnInputFocus = () => {
  hashtagInput.removeEventListener('keydown', stopEvent);
  commentInput.removeEventListener('keydown', stopEvent);
};

export { stopEventKeydownEscOnInputFocus, continueEventKeydownEscOnInputFocus };
