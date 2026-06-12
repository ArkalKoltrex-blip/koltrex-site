// =====================
// INTRO / PRELOADER
// =====================
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var alreadyShown   = sessionStorage.getItem('koltrex-intro');
  var intro          = document.getElementById('intro');

  if (!intro) return;

  if (prefersReduced || alreadyShown) {
    intro.remove();
    return;
  }

  sessionStorage.setItem('koltrex-intro', '1');
  document.body.classList.add('intro-active');

  var letters = intro.querySelectorAll('.intro__letters span');
  var LETTER_DELAY    = 80;   // ms between each letter
  var LETTER_DURATION = 350;  // ms — matches CSS transition
  var HOLD            = 600;  // ms after full name forms
  var FADE            = 700;  // ms — matches CSS transition

  letters.forEach(function (span, i) {
    setTimeout(function () { span.classList.add('visible'); }, i * LETTER_DELAY);
  });

  var exitAt = (letters.length - 1) * LETTER_DELAY + LETTER_DURATION + HOLD;

  setTimeout(function () {
    intro.classList.add('intro--exit');
    document.body.classList.remove('intro-active');
  }, exitAt);

  setTimeout(function () { intro.remove(); }, exitAt + FADE);
})();

// Nav transparente enquanto o hero está visível
const nav = document.querySelector('.nav');
function atualizarNav() {
  if (window.scrollY < window.innerHeight * 0.85) {
    nav.classList.add('nav--over-hero');
  } else {
    nav.classList.remove('nav--over-hero');
  }
}
window.addEventListener('scroll', atualizarNav, { passive: true });
atualizarNav(); // estado inicial

// Ano dinâmico no footer
document.getElementById('footer-year').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav__toggle');
const mobile = document.querySelector('.nav__mobile');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  mobile.classList.toggle('open');
});

// Fecha menu ao clicar em link
mobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    mobile.classList.remove('open');
  });
});

// Fade-in ao fazer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.bento__card, .step, .metric').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
