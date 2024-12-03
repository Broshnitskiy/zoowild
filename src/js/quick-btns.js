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

Object.values(modalRefs).forEach(({ trigger, modal, close }) => {
  trigger.addEventListener('click', () => {
    Object.values(modalRefs).forEach(({ modal: inModal }) => {
      if (!inModal.classList.contains('is-hidden') && modal !== inModal) {
        inModal.classList.add('is-hidden');
      }
    });

    modal.classList.toggle('is-hidden');

    const closeHandler = () => {
      modal.classList.add('is-hidden');
      close.removeEventListener('click', closeHandler);
    };

    close.addEventListener('click', closeHandler);
  });
});
