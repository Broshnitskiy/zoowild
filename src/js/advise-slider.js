const currentSlideNumberRef = document.querySelector(
  '[data-advise-current-slide]'
);
const totaltSlideNumberRef = document.querySelector(
  '[data-advise-total-slide]'
);

const paginationRef = document.querySelector('.advise-pagination');

const swiper = new Swiper('.advise__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '[data-advise-nav-next-btn]',
    prevEl: '[data-advise-nav-prev-btn]',
  },
  loop: false,
  on: {
    init: function () {
      checkPaginationVisibility.call(this);
    },
    slideChange: function () {
      const visibleSlides = this.params.slidesPerView;
      const currentSlide = this.realIndex + 1;
      const totalSlides = this.slides.length;
      const totalCount = Math.ceil(totalSlides / visibleSlides);

      currentSlideNumberRef.textContent = String(currentSlide).padStart(2, '0');
      totaltSlideNumberRef.textContent = `/${String(totalCount).padStart(
        2,
        '0'
      )}`;
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 23,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

function checkPaginationVisibility() {
  const totalSlides = this.slides.length;
  const visibleSlides = this.params.slidesPerView;

  if (totalSlides <= visibleSlides) {
    paginationRef.style.display = 'none';
  } else {
    paginationRef.style.display = '';
  }
}
