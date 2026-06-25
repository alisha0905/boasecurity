// ===========================================================
// BOA SECURITY — main.js
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Sticky header background on scroll ----
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // ---- Mobile menu toggle ----
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ---- Reveal-on-scroll animation ----
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Contact form ----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const type = document.getElementById('type').value;
      const message = document.getElementById('message').value.trim();

      // Build a WhatsApp message — replace the number below with the real business number
      const whatsappNumber = '18095550123'; // sin '+', sin espacios
      const text = encodeURIComponent(
        `Hola BOA Security, soy ${name}.\nTeléfono: ${phone}\nTipo de propiedad: ${type}\nMensaje: ${message || 'Quisiera más información.'}`
      );

      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

      form.reset();
    });
  }

});
