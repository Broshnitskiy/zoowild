const modalRefs = {
  socialLinks: {
    trigger: document.querySelector('[data-message-btn]'),
    modal: document.querySelector('[data-social-links-popup]'),
    close: document.querySelector('[data-close-media-links]'),
  },
  contacts: {
    trigger: document.querySelector('[data-tel-btn]'),
    modal: document.querySelector('[data-contacts-popup]'),
    close: document.querySelector('[data-contacts-popup-close]'),
  },
};

const locationRef = {
  trigger: document.querySelector('[data-location-btn]'),
  modal: document.querySelector('[data-location-popup]'),
  close: document.querySelector('[data-location-popup-close]'),
};

Object.values(modalRefs).forEach(({ trigger, modal, close }) => {
  trigger.addEventListener('click', () => {
    modal.classList.toggle('is-hidden');

    const closeHandler = () => {
      modal.classList.add('is-hidden');
      document.removeEventListener('click', outsideClickHandler);
      close.removeEventListener('click', closeHandler);
    };

    const outsideClickHandler = e => {
      if (!modal.contains(e.target) && !trigger.contains(e.target)) {
        closeHandler();
      }
    };

    close.addEventListener('click', closeHandler);
    document.addEventListener('click', outsideClickHandler);
  });
});

locationRef.trigger.addEventListener('click', openLocationModal);

function openLocationModal() {
  locationRef.modal.classList.remove('is-hidden');
  locationRef.modal.addEventListener('click', handleOverlayClick);
  document.body.style.overflowY = 'hidden';
  locationRef.close.addEventListener('click', closeLocationModal);
  document.addEventListener('keydown', handleKeyPress);
}

function closeLocationModal() {
  locationRef.modal.classList.add('is-hidden');
  locationRef.modal.removeEventListener('click', handleOverlayClick);
  document.body.style.overflowY = 'visible';
  document.removeEventListener('keydown', handleKeyPress);
  locationRef.close.removeEventListener('click', closeLocationModal);
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeLocationModal();
  }
}

function handleOverlayClick(e) {
  if (e.target === e.currentTarget) {
    closeLocationModal();
  }
}
