document.querySelectorAll('.product-card__button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
  });
});
