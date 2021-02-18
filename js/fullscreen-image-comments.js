const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

const fillFullScreenImageComments = (comments) => {
  const fragment = document.createDocumentFragment();
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentImage = commentTemplate.cloneNode(true);
    const commentImageAvatar = commentImage.querySelector('.social__picture');
    const commentImageText = commentImage.querySelector('.social__text');
    commentImageAvatar.src = comment.avatar;
    commentImageAvatar.alt = comment.name;
    commentImageText.textContent = comment.message;
    fragment.appendChild(commentImage);
  });
  commentsList.appendChild(fragment);
};

export { fillFullScreenImageComments };
