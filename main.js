/* eslint-env browser */

// Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// Nav scroll tint
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(8, 13, 26, 0.98)'
      : 'rgba(8, 13, 26, 0.88)';
  }, { passive: true });
}

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

const revealSelectors = [
  '.service-card', '.why-card', '.team-card',
  '.value-card', '.service-item', '.cv-card',
  '.contact-email-card', '.contact-note',
  '.process-step', '.trust-card'
];

document.querySelectorAll(revealSelectors.join(', ')).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  const delay = Math.min(i * 0.05, 0.3);
  el.style.transition = `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`;
  observer.observe(el);
});
