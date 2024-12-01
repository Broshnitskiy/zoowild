/**
  |============================
  | animation for hero images
  |============================
*/

const timeline = anime.timeline({
  easing: 'easeOutQuad',
  duration: 2000,
});
const heroTitleRef = document.querySelector('.hero__title');

timeline
  .add({
    targets: '.hero__title',
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 2000,
    easing: 'easeOutBack',
  })
  .add({
    targets: '.hero__description',
    translateY: ['50px', '0px'],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutQuad',
  })
  .add(
    {
      targets: '.hero__button',
      translateY: ['50px', '0px'],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuad',
    },
    '-=1000'
  )
  .add(
    {
      targets: '.hero__image-caracal',
      translateX: ['-100%', '0%'],
      opacity: [0, 1],
      duration: 2500,
    },
    '-=1500'
  )
  .add(
    {
      targets: '.hero__image-snake',
      translateX: ['100%', '0%'],
      opacity: [0, 1],
      duration: 2500,
    },
    '-=2500'
  )
  .add(
    {
      targets: '.hero__image-parrot-secondary',
      translateY: ['-150%', '0%'],
      opacity: [1, 1],
      duration: 2000,
    },
    '-=1500'
  )
  .add(
    {
      targets: '.hero__image-parrot',
      translateY: ['-150%', '0%'],
      opacity: [1, 1],
      duration: 2000,
    },
    '-=2000'
  );

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
