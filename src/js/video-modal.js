const openModalBtn = document.querySelector('[data-open-video-modal]');
const closeModalBtn = document.querySelector('[data-close-video-modal]');
const modal = document.querySelector('[data-video-modal]');
const videoIframe = document.querySelector('.video-iframe iframe');

openModalBtn.addEventListener('click', openModal);

function openModal() {
  modal.classList.remove('is-hidden');
  modal.addEventListener('click', handleOverlayClick);
  document.body.style.overflowY = 'hidden';
  closeModalBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
  modal.classList.add('is-hidden');
  modal.removeEventListener('click', handleOverlayClick);
  document.body.style.overflowY = 'visible';
  document.removeEventListener('keydown', handleKeyPress);
  closeModalBtn.removeEventListener('click', closeModal);
  stopVideo();
}

function stopVideo() {
  const currentSrc = videoIframe.src;
  videoIframe.src = ''; // Очистити `src`
  videoIframe.src = currentSrc; // Відновити, якщо потрібно перезапустити
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleOverlayClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
