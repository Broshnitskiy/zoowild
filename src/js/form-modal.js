const openFormBtnRef = document.querySelectorAll('[data-modal-form-open]');
const closeFormBtnRef = document.querySelector('[data-close-form-modal]');
const modalFormRef = document.querySelector('[data-form-modal]');
const contactsPopupRef = document.querySelector('[data-contacts-popup]');

openFormBtnRef.forEach(btn => btn.addEventListener('click', openModal));

function openModal() {
  if (modalFormRef.classList.contains('is-hidden')) {
    modalFormRef.classList.remove('is-hidden');
    modalFormRef.addEventListener('click', handleOverlayClick);
    document.body.style.overflowY = 'hidden';
    closeFormBtnRef.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleKeyPress);
  }

  if (!contactsPopupRef.classList.contains('is-hidden')) {
    contactsPopupRef.classList.add('is-hidden');
  }
}

function closeModal() {
  modalFormRef.classList.add('is-hidden');
  modalFormRef.removeEventListener('click', handleOverlayClick);
  document.body.style.overflowY = 'visible';
  document.removeEventListener('keydown', handleKeyPress);
  closeFormBtnRef.removeEventListener('click', closeModal);
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
