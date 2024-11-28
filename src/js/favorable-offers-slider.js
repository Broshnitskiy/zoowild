const currentSlideNumberRef = document.querySelector(
  '[data-offer-current-slide]'
);
const totaltSlideNumberRef = document.querySelector('[data-offer-total-slide]');

const swiper = new Swiper('.offers__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '[data-offer-pagination-button-right]',
    prevEl: '[data-offer-pagination-button-left]',
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
