import './sass/main.scss';
import { initCertificatesModal } from './js/certificatesModal.js';

// Mobile Menu Toggle
const toggleBtn = document.querySelector('.navbar__toggle');
const menuWrapper = document.querySelector('.navbar__menu-wrapper');

toggleBtn.addEventListener('click', () => {
  menuWrapper.classList.toggle('is-open');
  toggleBtn.classList.toggle('is-active');
});

// Initialize Certificates Modal
initCertificatesModal();