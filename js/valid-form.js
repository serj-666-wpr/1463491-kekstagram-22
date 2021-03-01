const hashtagInput = document.querySelector('.text__hashtags');

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_NUMBER = 5;
const SPECIAL_SYMBOLS = '!@#$%^&*()+=-[]\';,./{}|":<>?';

const checkSymbolsInString = (symbols, string) => {
  for (let i = 0 ; i < symbols.length ; i++) {
    if (string.split('').includes(symbols[i], 1)) {
      return true;
    }
  }
}

const validForm = () => {
  let hashtags = hashtagInput.value.split(' ');

  hashtags = hashtags.map((hashtag) => {
    return hashtag.toLowerCase();
  });

  hashtags.forEach((hashtag) => {
    if (!hashtagInput.value) {
      hashtagInput.setCustomValidity('');
    } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хеш-тег должен быть не длинее ${MAX_HASHTAG_LENGTH} символов`);
    } else if (hashtags.length > MAX_HASHTAGS_NUMBER) {
      hashtagInput.setCustomValidity(`Хеш-тегов должно быть не больше ${MAX_HASHTAGS_NUMBER}`);
    } else if (!(hashtag[0] === '#')) {
      hashtagInput.setCustomValidity('Хеш-тег должен начинаться с #');
    } else if (hashtag.length === 1) {
      hashtagInput.setCustomValidity('Хеш-тег не может сосотоять только из #');
    } else if (hashtag.includes('#', 1)) {
      hashtagInput.setCustomValidity('Хеш-теги разделяются пробелами');
    } else if (checkSymbolsInString(SPECIAL_SYMBOLS, hashtag)) {
      hashtagInput.setCustomValidity('Хеш-тег не может содержать спецсимволов и знаков пунктуации');
    } else if (hashtags.reverse().includes(hashtag, 1)) {
      hashtagInput.setCustomValidity('Хеш-теги не могут быть одинаковыми');
      hashtags.reverse();
    } else {
      hashtagInput.setCustomValidity('');
    }
  });

  hashtagInput.reportValidity();
};

const addValidForm = () => {
  hashtagInput.addEventListener('input', validForm);
};

const removeValidForm = () => {
  hashtagInput.removeEventListener('input', validForm);
};

export { addValidForm, removeValidForm };
