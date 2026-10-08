'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
if(menuButton && menu){
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }
  });
}
const email = typeof window.KOV_CONTACT_EMAIL === 'string' ? window.KOV_CONTACT_EMAIL.trim() : '';
if(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
  document.querySelectorAll('.js-email-link').forEach(link => {
    const subject = link.dataset.subject || 'Website project inquiry';
    link.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    link.hidden = false;
  });
  document.querySelectorAll('.js-contact-note').forEach(note => {
    note.textContent = 'Prefer email? Reach out and tell me about your business.';
  });
}
const year = document.getElementById('year'); if(year) year.textContent = String(new Date().getFullYear());