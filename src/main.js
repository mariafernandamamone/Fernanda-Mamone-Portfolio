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

const copyEmailBtn = document.getElementById('copy-email-btn');

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('mariafrenchitas@gmail.com');
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
      }, 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  });
}