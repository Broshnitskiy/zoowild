/**
  |============================
  | fade up
  |============================
*/

const observerFadeUp = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          translateY: ['50px', '0px'],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutQuad',
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

const textRefs = document.querySelectorAll('.animate-up');
textRefs.forEach(element => observerFadeUp.observe(element));

/**
  |============================
  | zoom up
  |============================
*/

const observerZoom = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          scale: [0.5, 1],
          opacity: [0, 1],
          duration: 1300,
          easing: 'easeOutQuad',
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

const zoomRefEl = document.querySelectorAll('.zoom-up');
zoomRefEl.forEach(element => observerZoom.observe(element));

/**
  |============================
  | fade right
  |============================
*/

const observerFadeRight = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          translateX: ['100%', '0%'],
          opacity: [0, 1],
          duration: 1500,
          easing: 'easeOutQuad',
          delay: 500,
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const rightRefs = document.querySelectorAll('.animate-right');
rightRefs.forEach(element => observerFadeRight.observe(element));

/**
  |============================
  | fade left
  |============================
*/

const observerFadeLeft = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          translateX: ['-100%', '0%'],
          opacity: [0, 1],
          duration: 1500,
          easing: 'easeOutQuad',
          delay: 500,
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const leftRefs = document.querySelectorAll('.animate-left');
leftRefs.forEach(element => observerFadeLeft.observe(element));
