// =====================
// INTRO / PRELOADER — 3 atos
// Exibida em todo carregamento da página.
// =====================
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var intro = document.getElementById('intro');
  if (!intro) return;

  if (prefersReduced) {
    intro.remove();
    return;
  }

  document.body.classList.add('intro-active');

  var letters = intro.querySelectorAll('.intro__letters span');
  var phase1  = intro.querySelector('[data-phase="1"]');
  var phase2  = intro.querySelector('[data-phase="2"]');
  var phase3  = intro.querySelector('[data-phase="3"]');
  var phase4  = intro.querySelector('[data-phase="4"]');
  var skip    = intro.querySelector('.intro__skip');
  var timers  = [];
  var done    = false;

  function at(t, fn) { timers.push(setTimeout(fn, t)); }

  function finish() {
    if (done) return;
    done = true;
    timers.forEach(clearTimeout);
    intro.classList.add('intro--exit');
    document.body.classList.remove('intro-active');
    setTimeout(function () { intro.remove(); }, 750);
  }

  // Ato 1 — KOLTREX letra a letra
  letters.forEach(function (span, i) {
    at(200 + i * 90, function () { span.classList.add('visible'); });
  });
  at(2200, function () { phase1.classList.add('leave'); });

  // Ato 2 — "Soluções Digitais Personalizadas"
  at(2650, function () { phase2.classList.add('enter'); });
  at(4500, function () { phase2.classList.add('leave'); });

  // Ato 3 — "Dê um salto para outro nível"
  at(4950, function () { phase3.classList.add('enter'); });
  at(6800, function () { phase3.classList.add('leave'); });

  // Ato 4 — frase final com "o futuro" em vermelho, depois revela o site
  at(7250, function () { phase4.classList.add('enter'); });
  at(9400, finish);

  skip.addEventListener('click', finish);
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

// =====================
// CHATBOT DEMO
// =====================
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var chatBody = document.getElementById('chat-body');
  if (!chatBody) return;

  var messages = [
    { type: 'client', text: 'Oi! Vocês fazem site pra clínica? 😊' },
    { type: 'bot',    text: 'Olá! Fazemos sim 🙌 Sites, chatbots e automações sob medida. Qual o nome da sua clínica?' },
    { type: 'client', text: 'Clínica Bella Pele, aqui de Conquista' },
    { type: 'bot',    text: 'Perfeito! E hoje vocês recebem agendamentos por onde?' },
    { type: 'client', text: 'Só pelo WhatsApp mesmo, mas perdemos muita mensagem...' },
    { type: 'bot',    text: 'Entendi! Conseguimos automatizar isso: o robô responde na hora, agenda e confirma consultas 24h. Posso te enviar uma proposta agora?' },
    { type: 'client', text: 'Pode sim! 🔥' },
    { type: 'bot',    text: 'Fechado! Em menos de 24h ela chega no seu WhatsApp ✅' },
  ];

  if (prefersReduced) {
    messages.forEach(function (msg) {
      var bubble = document.createElement('div');
      bubble.className = 'chat-bubble chat-bubble--' + msg.type + ' visible';
      bubble.textContent = msg.text;
      chatBody.appendChild(bubble);
    });
    return;
  }

  var timers = [];

  function schedule(fn, delay) {
    timers.push(setTimeout(fn, delay));
  }

  function clearAll() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function showBubble(msg, idx) {
    if (msg.type === 'bot') {
      var typing = document.createElement('div');
      typing.className = 'chat-typing';
      typing.dataset.id = idx;
      typing.innerHTML = '<span></span><span></span><span></span>';
      chatBody.appendChild(typing);
      chatBody.scrollTop = chatBody.scrollHeight;
      return typing;
    }
    return null;
  }

  function runChat() {
    chatBody.innerHTML = '';
    var delay = 500;

    messages.forEach(function (msg, idx) {
      if (msg.type === 'bot') {
        // typing indicator appears
        schedule(function (i, d) {
          return function () {
            var typing = document.createElement('div');
            typing.className = 'chat-typing';
            typing.id = 'typing-' + i;
            typing.innerHTML = '<span></span><span></span><span></span>';
            chatBody.appendChild(typing);
            chatBody.scrollTop = chatBody.scrollHeight;
          };
        }(idx, delay), delay);
        delay += 950;
        // typing replaced by bubble
        schedule(function (i, txt) {
          return function () {
            var t = document.getElementById('typing-' + i);
            if (t) t.remove();
            var bubble = document.createElement('div');
            bubble.className = 'chat-bubble chat-bubble--bot';
            bubble.textContent = txt;
            chatBody.appendChild(bubble);
            requestAnimationFrame(function () {
              requestAnimationFrame(function () { bubble.classList.add('visible'); });
            });
            chatBody.scrollTop = chatBody.scrollHeight;
          };
        }(idx, msg.text), delay);
        delay += 700;
      } else {
        schedule(function (txt) {
          return function () {
            var bubble = document.createElement('div');
            bubble.className = 'chat-bubble chat-bubble--client';
            bubble.textContent = txt;
            chatBody.appendChild(bubble);
            requestAnimationFrame(function () {
              requestAnimationFrame(function () { bubble.classList.add('visible'); });
            });
            chatBody.scrollTop = chatBody.scrollHeight;
          };
        }(msg.text), delay);
        delay += 750;
      }
    });

    // loop after 3s pause
    schedule(function () { runChat(); }, delay + 3000);
  }

  var section = document.getElementById('demo-chatbot');
  var started = false;

  var chatObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !started) {
        started = true;
        runChat();
      } else if (!entry.isIntersecting && started) {
        started = false;
        clearAll();
        chatBody.innerHTML = '';
      }
    });
  }, { threshold: 0.25 });

  if (section) chatObserver.observe(section);
})();

// Fade-in ao fazer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// =====================
// FAQ ACCORDION
// =====================
(function () {
  var questions = document.querySelectorAll('.faq__question');

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));

      // close all
      questions.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        var a = document.getElementById(b.getAttribute('aria-controls'));
        if (a) a.classList.remove('open');
      });

      // open clicked (if it was closed)
      if (!isOpen && answer) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });
})();

document.querySelectorAll('.bento__card, .step, .metric').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
