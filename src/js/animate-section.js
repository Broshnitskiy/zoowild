/**
  |============================
  | Universal Animation Observer
  |============================
*/

function createAnimationObserver({
  targetsSelector,
  animationProps,
  threshold = 0.2,
}) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            ...animationProps,
          });
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  const elements = document.querySelectorAll(targetsSelector);
  elements.forEach(element => observer.observe(element));
}

// Fade up animation
createAnimationObserver({
  targetsSelector: '.animate-up',
  animationProps: {
    translateY: ['50px', '0px'],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad',
  },
});

// Zoom up animation
createAnimationObserver({
  targetsSelector: '.zoom-up',
  animationProps: {
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 1300,
    easing: 'easeOutQuad',
  },
  threshold: 0.4,
});

// Zoom up with rotate animation
createAnimationObserver({
  targetsSelector: '.zoom-up-rotate',
  animationProps: {
    scale: [0.5, 1],
    opacity: [0, 1],
    rotate: ['240deg', '-30deg'],
    duration: 1300,
    easing: 'easeOutQuad',
  },
  threshold: 0.4,
});

// Fade right animation
createAnimationObserver({
  targetsSelector: '.animate-right',
  animationProps: {
    translateX: ['100%', '0%'],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutQuad',
    delay: 500,
  },
  threshold: 0.3,
});

// Fade left animation
createAnimationObserver({
  targetsSelector: '.animate-left',
  animationProps: {
    translateX: ['-100%', '0%'],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutQuad',
    delay: 500,
  },
  threshold: 0.3,
});
