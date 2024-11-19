/**
  |============================
  | animation for hero images
  |============================
*/
const props = {
  opacity: [1, 1],
  duration: 3000,
  delay: 500,
  easing: 'easeOutQuad',
};
// animation for .hero__image-caracal
anime({
  targets: '.hero__image-caracal',
  translateX: ['-200%', '-50%'],
  ...props,
});

// animation for .hero__image-snake
anime({
  targets: '.hero__image-snake',
  translateX: ['100%', '0%'],
  ...props,
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
