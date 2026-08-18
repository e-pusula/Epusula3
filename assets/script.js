document.getElementById('year').textContent = new Date().getFullYear();

function toggleMenu() {
  document.querySelector('.nav').classList.toggle('active');
}

document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('active');
  }
});

const carousel = document.querySelector('.testimonials-carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (carousel && leftArrow && rightArrow) {
  function getScrollAmount() {
    const cardWidth = carousel.querySelector('.card').offsetWidth;
    return cardWidth + 16;
  }

  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth'
    });
  });

  function updateArrows() {
    const scrollLeft = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    leftArrow.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
    leftArrow.style.cursor = scrollLeft <= 0 ? 'default' : 'pointer';
    
    rightArrow.style.opacity = scrollLeft >= maxScroll - 1 ? '0.5' : '1';
    rightArrow.style.cursor = scrollLeft >= maxScroll - 1 ? 'default' : 'pointer';
  }

  carousel.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
}
