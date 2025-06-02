
  /* ハンバーガーメニュー */
document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.querySelector('.hamburger');
    const menu = document.querySelector('.main-nav');
    btn.addEventListener('click', () => menu.classList.toggle('active'));
  });


  /* ロケーションカルーセル */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.location-carousel');
  const prevBtn   = document.querySelector('.carousel-btn.prev');
  const nextBtn   = document.querySelector('.carousel-btn.next');
  const gap       = 16;


  const firstImg = carousel.querySelector('img');
  const imgWidth = firstImg.clientWidth;
  carousel.scrollLeft = (imgWidth + gap) * 2;

  const scrollToNext = dir => {
    carousel.scrollBy({ left: (imgWidth + gap) * dir,
                        behavior: 'smooth' });
  };
  prevBtn.addEventListener('click', () => scrollToNext(-1));
  nextBtn.addEventListener('click', () => scrollToNext( 1));

  const toggleArrows = () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth - 1;
    prevBtn.disabled = carousel.scrollLeft <= 0;
    nextBtn.disabled = carousel.scrollLeft >= maxScroll;
  };
  carousel.addEventListener('scroll', toggleArrows);
  toggleArrows();
});


  /* 画面下部CTAボタン表示非表示 */
  const cta = document.querySelector('.cta-btn-fixed');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollY + windowHeight >= documentHeight - 100) {
      cta.classList.add('hide');
    } else {
      cta.classList.remove('hide');
    }
  });