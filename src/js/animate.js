/**
  |============================
  | animation for hero images
  |============================
*/

// const props = {
//   opacity: [1, 1],
//   duration: 3000,
//   easing: 'easeOutQuad',
// };
// // animation for .hero__image-caracal
// anime({
//   targets: '.hero__image-caracal',
//   translateX: ['-100%', '0'],
//   ...props,
// });

// // animation for .hero__image-snake
// anime({
//   targets: '.hero__image-snake',
//   translateX: ['100%', '0%'],
//   delay: 1000,
//   ...props,
// });

const timeline = anime.timeline({
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 2000,
});

// Step 1: Animate caracal and snake images
timeline.add({
  targets: ['.hero__image-caracal', '.hero__image-snake'],
  translateX: (el, i) => (i === 0 ? ['-100%', '0%'] : ['100%', '0%']),
  opacity: [0, 1],
  duration: 2500,
});

// Step 2: Animate the h1 text (hero__title)
timeline.add({
  targets: '.hero__title',
  scale: [0.9, 1],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutBack',
});

// Step 3: Animate the description (hero__description)
timeline.add({
  targets: '.hero__description',
  translateY: ['50px', '0px'],
  opacity: [0, 1],
  duration: 1000,
});

// Step 4: Animate the button (hero__button)
timeline.add({
  targets: '.hero__button',
  translateY: ['50px', '0px'],
  opacity: [0, 1],
  duration: 1000,
});

/**
  |============================
  | animation for statistics section
  | increase numbers (counter)
  |============================
*/

const numbers = document.querySelectorAll('.statistics__number');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const number = entry.target;
        const targetValue = parseInt(number.getAttribute('data-target'), 10);
        const startValue = parseInt(number.textContent, 10);

        const step = targetValue > 1000 ? 10 : 1;

        anime({
          targets: number,
          innerHTML: [startValue, targetValue],
          easing: 'easeOutExpo',
          duration: 2000,
          round: 1,
          update: function (anim) {
            const currentValue = Math.floor(anim.animations[0].currentValue);
            const stepValue = Math.floor(currentValue / step) * step;

            if (targetValue === 100) {
              number.innerHTML = `${stepValue}%`;
            } else if (targetValue > 1000) {
              number.innerHTML = `${stepValue}<span aria-hidden="true" class="statistics__plus">+</span>`;
            } else {
              number.innerHTML = stepValue;
            }
          },
        });

        observer.unobserve(number);
      }
    });
  },
  { threshold: 0.5 }
);

numbers.forEach(number => observer.observe(number));
