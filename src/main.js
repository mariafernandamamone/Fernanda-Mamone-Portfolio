import './sass/main.scss'

const toggleBtn = document.querySelector('.navbar__toggle');
const menuWrapper = document.querySelector('.navbar__menu-wrapper');

toggleBtn.addEventListener('click', () => {
  menuWrapper.classList.toggle('is-open');
  toggleBtn.classList.toggle('is-active');
});