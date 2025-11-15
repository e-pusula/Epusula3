document.querySelector('.left-arrow').addEventListener('click', () => {
  document.querySelector('.testimonials-carousel').scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  document.querySelector('.testimonials-carousel').scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});
