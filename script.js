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
