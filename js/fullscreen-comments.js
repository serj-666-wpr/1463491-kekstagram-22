const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const commentsCounterBlock = document.querySelector('.social__comment-count');
const commentsCurrentCounter = document.querySelector('.comments-current-count');
const commentsLoader = document.querySelector('.comments-loader');

const NUMBER_VISIBLE_COMMENTS = 5;

const hideCommentsLoader = () => {
  const checkHidenComments = Array.from(commentsList.children).some((comment) => {
    return comment.style.display === 'none';
  })

  if (!checkHidenComments) {
    commentsLoader.classList.add('hidden');
  }
};

const addMoreComments = () => {
  let i = 0;
  let shownComments = 0;

  Array.from(commentsList.children).forEach((comment) => {
    if (comment.style.display === 'none' && i < NUMBER_VISIBLE_COMMENTS) {
      comment.style.display = 'flex';
      i += 1;
    }
    if (comment.style.display !== 'none') {
      shownComments += 1;
    }
  })

  commentsCurrentCounter.textContent = shownComments;
  hideCommentsLoader();
};

const discardValueCurrentCounter = () => {
  commentsCurrentCounter.textContent = NUMBER_VISIBLE_COMMENTS;
};

const addButtonCommentsHandler = () => {
  commentsLoader.addEventListener('click', addMoreComments);
};

const removeButtonCommentsHandler = () => {
  commentsLoader.removeEventListener('click', addMoreComments);
};

const hideComments = (index, comment) => {
  if (index > NUMBER_VISIBLE_COMMENTS - 1) {
    comment.style.display = 'none';
  }
};

const hideCommentsMenuLoader = (comments) => {
  if (comments.length < 5) {
    commentsCounterBlock.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  } else {
    commentsCounterBlock.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  }
};

const fillFullScreenImageComments = (comments) => {
  const fragment = document.createDocumentFragment();
  commentsList.innerHTML = '';
  comments.forEach((comment, index) => {
    const commentImage = commentTemplate.cloneNode(true);
    const commentImageAvatar = commentImage.querySelector('.social__picture');
    const commentImageText = commentImage.querySelector('.social__text');
    commentImageAvatar.src = comment.avatar;
    commentImageAvatar.alt = comment.name;
    commentImageText.textContent = comment.message;

    hideComments(index, commentImage);

    fragment.appendChild(commentImage);
  });
  commentsList.appendChild(fragment);

  addButtonCommentsHandler();
  hideCommentsMenuLoader(comments);
};

export { fillFullScreenImageComments, removeButtonCommentsHandler, discardValueCurrentCounter };
