// animation for hero images
document.addEventListener('DOMContentLoaded', () => {
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
});
