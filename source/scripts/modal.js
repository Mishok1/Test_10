
const modal = document.querySelector('#modal');
const modalWrapper = document.querySelector('#modal-wrapper');

function modalCloseEscHandler(evt) {
  if (evt.key === 'Escape') {
    modal.classList.toggle('modal--close');
    modal.removeEventListener('click', modalCloseClickHandler);
  }
}

function modalCloseClickHandler(evt) {
  const withinBoundaries = evt.composedPath().includes(modalWrapper);
  if (!withinBoundaries) {
    modal.classList.toggle('modal--close');
    document.removeEventListener('keydown', modalCloseEscHandler);
    modal.removeEventListener('click', modalCloseClickHandler);
  }
}


document.addEventListener('keydown', modalCloseEscHandler, { once: true });

modal.addEventListener('click', modalCloseClickHandler);
