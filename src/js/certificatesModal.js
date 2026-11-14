import { certificates } from '../data/certificates.js';

export function initCertificatesModal() {
  const openModalBtn = document.querySelector('#open-certificates');
  if (!openModalBtn) return;

  const baseUrl = import.meta.env.BASE_URL;
  const modal = document.createElement('dialog');
  modal.className = 'modal';
  modal.setAttribute('aria-labelledby', 'modal-title');

  const cardsHTML = certificates
    .map((cert) => {
      const cleanImg = cert.image.replace(/^\//, '');
      const cleanFile = (cert.file || cert.image).replace(/^\//, '');

      return `
      <article class="certificate-card">
        <a href="${baseUrl}${cleanFile}" target="_blank" rel="noopener noreferrer">
          <img class="certificate-card__image" src="${baseUrl}${cleanImg}" alt="${cert.title}">
        </a>
        <div class="certificate-card__body">
          <h3 class="certificate-card__title">${cert.title}</h3>
          <p class="certificate-card__issuer">${cert.issuer}</p>
        </div>
      </article>
    `;
    })
    .join('');

  modal.innerHTML = `
    <div class="modal__content">
      <header class="modal__header">
        <h2 class="modal__title" id="modal-title">Certificates & Credentials</h2>
        <button type="button" class="modal__close" aria-label="Close modal">&times;</button>
      </header>
      <div class="modal__grid">
        ${cardsHTML}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModalBtn = modal.querySelector('.modal__close');

  openModalBtn.addEventListener('click', () => modal.showModal());
  closeModalBtn.addEventListener('click', () => modal.close());

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}