const onEscKeydown = (evt) => {
  evt.stopPropagation();
};

const isEscape = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { onEscKeydown, isEscape };
