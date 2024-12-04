const openFormBtnRef = document.querySelectorAll('[data-modal-form-open]');
const closeFormBtnRef = document.querySelector('[data-close-form-modal]');
const closeGratitudeBtnRef = document.querySelector(
  '[data-close-gratitude-modal]'
);
const modalFormRef = document.querySelector('[data-form-modal]');
const contactsPopupRef = document.querySelector('[data-contacts-popup]');
const gratitudePopupRef = document.querySelector('[data-gratitude-modal]');
const formRef = document.querySelector('.form');

openFormBtnRef.forEach(btn => btn.addEventListener('click', openModal));
formRef.addEventListener('submit', handleFormSubmit);

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

function closeGraduateModal() {
  gratitudePopupRef.classList.add('is-hidden');
  closeGratitudeBtnRef.removeEventListener('click', closeGraduateModal);
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

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // console.log('Зібрані дані:', data);

  closeModal();

  formRef.reset();

  if (gratitudePopupRef.classList.contains('is-hidden')) {
    gratitudePopupRef.classList.remove('is-hidden');
    closeGratitudeBtnRef.addEventListener('click', closeGraduateModal);
  }

  setTimeout(() => {
    if (!gratitudePopupRef.classList.contains('is-hidden')) {
      gratitudePopupRef.classList.add('is-hidden');
    }
  }, 5000);
}
