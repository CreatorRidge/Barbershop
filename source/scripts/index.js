const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const advantagesWrapper = document.querySelector('.advantages');
  if (!advantagesWrapper) {
    return;
  }

  const advantagesList = advantagesWrapper.querySelector('.slider__list');
  const advantagesSlides = Array.from(advantagesList.querySelectorAll('.slider__item'));
  // ← Важно: ищем точки ТОЛЬКО внутри advantages
  const toggles = Array.from(advantagesWrapper.querySelectorAll('.slider__toggle'));

  if (!advantagesSlides.length || !toggles.length) {
    return;
  }

  function setActiveToggle(index) {
    toggles.forEach((btn, i) => {
      btn.classList.toggle('slider__toggle--current', i === index);
    });
  }

  toggles.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      advantagesList.scrollTo({
        left: advantagesSlides[0].offsetWidth * index,
        behavior: 'smooth'
      });
      setActiveToggle(index);
    });
  });

  advantagesList.addEventListener('scroll', () => {
    const index = Math.round(
      advantagesList.scrollLeft / advantagesSlides[0].offsetWidth
    );
    setActiveToggle(index);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const reviewsWrapper = document.querySelector('.reviews');
  if (!reviewsWrapper) {
    return;
  }

  const reviewsList = reviewsWrapper.querySelector('.slider__list');
  const reviewsSlides = Array.from(reviewsList.querySelectorAll('.slider__item'));
  // ← Важно: ищем точки ТОЛЬКО внутри reviews
  const toggles = Array.from(reviewsWrapper.querySelectorAll('.slider__toggle'));

  if (!reviewsSlides.length || !toggles.length) {
    return;
  }

  function setActiveToggle(index) {
    toggles.forEach((btn, i) => {
      btn.classList.toggle('slider__toggle--current', i === index);
    });
  }

  toggles.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      reviewsList.scrollTo({
        left: reviewsSlides[0].offsetWidth * index,
        behavior: 'smooth'
      });
      setActiveToggle(index);
    });
  });

  reviewsList.addEventListener('scroll', () => {
    const index = Math.round(
      reviewsList.scrollLeft / reviewsSlides[0].offsetWidth
    );
    setActiveToggle(index);
  });
});


const newsButton = document.querySelector('.news__to-all');
const newsList = document.querySelector('.news__list');

if (newsButton && newsList) {
  newsButton.addEventListener('click', (e) => {
    e.preventDefault();
    newsList.classList.toggle('news__list--closed');

    // Меняем текст кнопки
    const isClosed = newsList.classList.contains('news__list--closed');
    newsButton.textContent = isClosed ? 'Показать все' : 'Свернуть';
  });
}
