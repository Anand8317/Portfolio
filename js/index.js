const navMenu = document.querySelector('.menu-bar');
const headerItem = document.getElementsByClassName('header-item');
const closeme = document.querySelector('.closeme');
const menuItem = document.getElementsByClassName('menu-items');
const hamburger = document.querySelector('.header-item4');

hamburger.addEventListener('click', () => {
  Array.from(headerItem).forEach((element) => {
    element.classList.toggle('active');
  });
  navMenu.classList.toggle('active');
});

closeme.addEventListener('click', () => {
  Array.from(headerItem).forEach((element) => {
    element.classList.toggle('active');
  });
  navMenu.classList.toggle('active');
});

Array.from(menuItem).forEach((element) => {
  element.addEventListener('click', () => {
    Array.from(headerItem).forEach((element) => {
      element.classList.toggle('active');
    });
    navMenu.classList.toggle('active');
  });
});
