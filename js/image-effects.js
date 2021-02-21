/* global noUiSlider:readonly */
const image = document.querySelector('.img-upload__preview').querySelector('img');
const effects = document.querySelectorAll('.effects__radio');
const slider= document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
}

const changeSliderOptionsForDefault = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
};

const changeSliderOptionsForMarvin = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  });
};

const changeSliderOptionsForPhobos = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
};

const changeSliderOptionsForHeat = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
};

const addSlider = (effect) => {

  if (effect == 'marvin') {
    changeSliderOptionsForMarvin();
  } else if (effect == 'phobos') {
    changeSliderOptionsForPhobos();
  } else if (effect == 'heat') {
    changeSliderOptionsForHeat();
  } else {
    changeSliderOptionsForDefault();
  }

  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];

    if (effect == 'chrome') {
      image.style.filter = `grayscale(${values[handle]})`;
    } else if (effect == 'sepia') {
      image.style.filter = `sepia(${values[handle]})`;
    } else if (effect == 'marvin') {
      image.style.filter = `invert(${values[handle]}%)`;
    } else if (effect == 'phobos') {
      image.style.filter = `blur(${values[handle]}px)`;
    } else if (effect == 'heat') {
      image.style.filter = `brightness(${values[handle]})`;
    }
  });
};

const addImageEffects = () => {
  createSlider();
  slider.style.display = 'none';
  effects.forEach((effect) => {
    effect.addEventListener('click', () => {
      if (effect.value == 'none') {
        slider.style.display = 'none';
        image.style.filter = 'none';
      } else {
        slider.noUiSlider.destroy();
        image.classList = '';

        image.classList.add(`effects__preview--${effect.value}`);
        slider.style.display = 'block';
        createSlider();
        addSlider(effect.value);
      }
    });
  });
}

export { addImageEffects };
