import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

const image = document.querySelector('.img-upload__preview img');
const effects = document.querySelectorAll('.effects__radio');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectLevelValue = sliderContainer.querySelector('.effect-level__value');

const MIN_RANGE = 0;
const MIN_RANGE_HEAT = 1;

const MAX_RANGE = 1;
const MAX_RANGE_MARVIN = 100;
const MAX_RANGE_PHOBOS = 3;
const MAX_RANGE_HEAT = 3;

const SLIDER_STEP = 0.1;
const SLIDER_STEP_MARVIN = 1;

const Filter = {
  DEFAULT: 'default',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const FilterSliderParams = {
  'default': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    start: MAX_RANGE,
    step: SLIDER_STEP,
  },

  'marvin': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE_MARVIN,
    },
    start: MAX_RANGE_MARVIN,
    step: SLIDER_STEP_MARVIN,
  },

  'phobos': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE_PHOBOS,
    },
    start: MAX_RANGE_PHOBOS,
    step: SLIDER_STEP,
  },

  'heat': {
    range: {
      min: MIN_RANGE_HEAT,
      max: MAX_RANGE_HEAT,
    },
    start: MAX_RANGE_HEAT,
    step: SLIDER_STEP,
  },
};

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    start: MAX_RANGE,
    step: SLIDER_STEP,
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

const changeSliderParams = (effect) => {
  switch (effect) {
    case Filter.MARVIN:
      slider.noUiSlider.updateOptions(FilterSliderParams[Filter.MARVIN]);
      break;
    case Filter.PHOBOS:
      slider.noUiSlider.updateOptions(FilterSliderParams[Filter.PHOBOS]);
      break;
    case Filter.HEAT:
      slider.noUiSlider.updateOptions(FilterSliderParams[Filter.HEAT]);
      break;
    default:
      slider.noUiSlider.updateOptions(FilterSliderParams[Filter.DEFAULT]);
  }
};

const getImageStyleFilter = (effect, values, handle) => {
  switch (effect) {
    case Filter.CHROME:
      return `grayscale(${values[handle]})`;
    case Filter.SEPIA:
      return `sepia(${values[handle]})`;
    case Filter.MARVIN:
      return `invert(${values[handle]}%)`;
    case Filter.PHOBOS:
      return `blur(${values[handle]}px)`;
    case Filter.HEAT:
      return `brightness(${values[handle]})`;
  }
};

const changeImageEffects = (effect) => {
  changeSliderParams(effect);

  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    image.style.filter = getImageStyleFilter(effect, values, handle);
  });
};

const renderFilterVariants = () => {
  effects.forEach((effect) => {
    effect.addEventListener('click', () => {
      if (effect.value === 'none') {
        sliderContainer.style.display = 'none';
        image.style.filter = 'none';
      } else {
        image.classList.add(`effects__preview--${effect.value}`);
        sliderContainer.style.display = 'block';
        changeImageEffects(effect.value);
      }
    });
  });
}

const addImageEffects = () => {
  createSlider();
  sliderContainer.style.display = 'none';
  renderFilterVariants();
}

const removeImageEffects = () => {
  slider.noUiSlider.destroy();
  image.style.filter = 'none';
};

export { addImageEffects, removeImageEffects };
