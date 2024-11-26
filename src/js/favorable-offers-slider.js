const currentSlideNumberRef = document.querySelector(
  '.offers__pagination-text'
);
const totaltSlideNumberRef = document.querySelector(
  '.offers__pagination-total'
);

const swiper = new Swiper('.offers__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.offers__pagination-button--right',
    prevEl: '.offers__pagination-button--left',
  },
  loop: false,
  on: {
    slideChange: function () {
      const currentSlide = this.realIndex + 1;
      const totalSlides = this.slides.length;
      currentSlideNumberRef.textContent = String(currentSlide).padStart(2, '0');
      totaltSlideNumberRef.textContent = `/${String(totalSlides).padStart(
        2,
        '0'
      )}`;
    },
  },
});
