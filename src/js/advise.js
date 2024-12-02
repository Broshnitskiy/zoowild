document.querySelectorAll('.advise__product-button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
  });
});
