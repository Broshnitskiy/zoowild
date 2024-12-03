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
  location: {
    trigger: document.querySelector('[data-location-btn]'),
    modal: document.querySelector('[data-location-popup]'),
    close: document.querySelector('[data-location-popup-close]'),
  },
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
