const container = document.querySelector('.hero');
const imageCaracal = document.querySelector('.hero__image-caracal');
const imageSnake = document.querySelector('.hero__image-snake');

container.addEventListener('mousemove', function (event) {
  const isDesktop = window.innerWidth >= 1200;

  if (event.target.closest('.hero') && isDesktop) {
    const moveX = (event.clientX / window.innerWidth) * 20 - 10;
    const moveY = (event.clientY / window.innerHeight) * 20 - 10;

    imageCaracal.style.transform = `translateX(-50%) translate(${moveX}px, ${moveY}px)`;
    imageSnake.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  } else {
    imageCaracal.style.transform = 'translateX(-50%)';
    imageSnake.style.transform = 'translate(0px, 0px)';
  }
});
