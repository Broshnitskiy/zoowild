const mapPopupBackdrop = document.querySelector('[data-map-modal]');
const mapPopupCloseBtn = document.querySelector('[data-close-map-modal]');
const mapPopupIframe = document.querySelector('.map-popup__iframe');
const mapButtons = document.querySelectorAll('.location-popup__map-link');

const mapUrls = {
  1: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6292.075215840377!2d34.97193218772823!3d48.466280613119125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bbd93132d7%3A0x86d2be4d506c0512!2z0L_RgNC-0YHQvy4g0JjQstCw0L3QsCDQnNCw0LfQtdC_0YssIDM5LCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1733425828470!5m2!1sru!2sua',
  2: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.665907241469!2d34.97965777593749!3d48.462939428454945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bb304132cd%3A0xb618d60c0c4e7386!2z0YPQuy4g0J3QvtCy0L7QvtGA0LvQvtCy0YHQutCw0Y8sIDQsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1733425929589!5m2!1sru!2sua',
  3: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.8179130949306!2d34.93690727593732!3d48.46002312865894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3eff2eae10f%3A0x6bdc25de7986b16e!2z0YPQuy4g0JTQsNC90LjQu9CwINCT0LDQu9C40YbQutC-0LPQviwgMjUsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1733425986437!5m2!1sru!2sua',
};

mapButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const mapId = index + 1;
    mapPopupIframe.src = mapUrls[mapId] || '';
    mapPopupBackdrop.classList.remove('is-hidden');
  });
});

mapPopupCloseBtn.addEventListener('click', () => {
  mapPopupBackdrop.classList.add('is-hidden');
  mapPopupIframe.src = '';
});

mapPopupBackdrop.addEventListener('click', event => {
  if (event.target === mapPopupBackdrop) {
    mapPopupBackdrop.classList.add('is-hidden');
    mapPopupIframe.src = '';
  }
});
