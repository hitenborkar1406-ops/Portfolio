/* main.js — Editorial Aubergine & Ice Silver Portfolio Motion System */

/* ── Mobile nav toggle ─────────────────────────────── */
(function () {
  var nav = document.querySelector('.nav');
  var links = document.querySelector('.nav__links');
  if (!nav || !links) return;

  /* Create burger */
  var burger = document.createElement('button');
  burger.className = 'nav__burger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.innerHTML = '<span></span><span></span><span></span>';
  nav.querySelector('.nav__inner').appendChild(burger);

  burger.addEventListener('click', function () {
    var open = links.classList.toggle('nav__links--open');
    burger.classList.toggle('nav__burger--open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  /* Close on link click */
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('nav__links--open');
      burger.classList.remove('nav__burger--open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── Smart Auto-Hiding Navigation ──────────────────── */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  var lastY = window.pageYOffset || 0;
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var y = window.pageYOffset || 0;
        nav.classList.toggle('nav--stuck', y > 40);

        if (y > 180 && y > lastY + 6) {
          nav.classList.add('nav--hide');
        } else if (y < lastY - 6 || y <= 50) {
          nav.classList.remove('nav--hide');
        }

        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ── Active Nav Links & Progress Rail Tracker ──────── */
(function () {
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('.nav__link');
  var rail = document.getElementById('rail');
  var railDots = rail ? rail.querySelectorAll('.rail__dot') : [];

  if (!sections.length) return;

  function onScroll() {
    var scrollPos = window.pageYOffset + 180;
    var currentId = '';

    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (!currentId && window.pageYOffset < 300) {
      currentId = 'hero';
    }

    if (currentId) {
      navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        link.classList.toggle('nav__link--active', href === '#' + currentId);
      });

      if (railDots.length) {
        railDots.forEach(function (dot) {
          dot.classList.toggle('on', dot.getAttribute('data-target') === currentId);
        });
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Rail dots smooth scroll click */
  if (railDots.length) {
    railDots.forEach(function (dot) {
      dot.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = dot.getAttribute('data-target');
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
})();

/* ── Scroll Reveal & Masked Line Typography ────────── */
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll('[data-rv], .mask-line, .reveal');

  if (!revealTargets.length) return;

  if (prefersReduced) {
    revealTargets.forEach(function (el) {
      el.classList.add('rv-in', 'reveal--visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('rv-in', 'reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ── Stacked Scroll Animation (Projects & Skills One-by-One) ── */
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  function initStack(containerId, itemSelector) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var items = Array.from(container.querySelectorAll(itemSelector));
    if (items.length < 2) return;

    function updateStack() {
      var vh = window.innerHeight;
      items.forEach(function (item, index) {
        if (index === items.length - 1) return;

        var nextItem = items[index + 1];
        var itemRect = item.getBoundingClientRect();
        var nextRect = nextItem.getBoundingClientRect();

        var diff = nextRect.top - itemRect.top;

        if (diff <= vh && diff > 0) {
          var progress = 1 - (diff / vh);
          var scale = 1 - 0.05 * progress;
          var opacity = 1 - 0.5 * progress;
          var translateY = -14 * progress;
          item.style.transform = 'translate3d(0, ' + translateY + 'px, 0) scale(' + scale + ')';
          item.style.opacity = String(opacity);
          item.style.filter = 'blur(' + (progress * 1.5) + 'px)';
        } else if (diff <= 0) {
          item.style.transform = 'translate3d(0, -14px, 0) scale(0.95)';
          item.style.opacity = '0.5';
          item.style.filter = 'blur(1.5px)';
        } else {
          item.style.transform = 'translate3d(0, 0, 0) scale(1)';
          item.style.opacity = '1';
          item.style.filter = 'none';
        }
      });
    }

    window.addEventListener('scroll', updateStack, { passive: true });
    updateStack();
  }

  initStack('projectsStack', '.project-card');
  initStack('skillsStack', '.skills__group');
})();

/* ── Creepy Eyes Button (Peeking & Pupil Tracking) ──── */
(function () {
  var buttons = document.querySelectorAll('.creepy-btn');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    var eyes = btn.querySelector('.creepy-btn__eyes');
    var pupils = btn.querySelectorAll('.creepy-btn__pupil');
    if (!eyes || !pupils.length) return;

    function updateEyes(clientX, clientY) {
      var rect = eyes.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;

      var dx = clientX - centerX;
      var dy = clientY - centerY;
      var angle = Math.atan2(-dy, dx) + Math.PI / 2;

      var visionRangeX = 180;
      var visionRangeY = 75;
      var distance = Math.hypot(dx, dy);

      var x = (Math.sin(angle) * Math.min(distance, visionRangeX)) / visionRangeX;
      var y = (Math.cos(angle) * Math.min(distance, visionRangeY)) / visionRangeY;

      var transformStr = 'translate(calc(-50% + ' + (x * 50) + '%), calc(-50% + ' + (y * 50) + '%))';
      pupils.forEach(function (pupil) {
        pupil.style.transform = transformStr;
      });
    }

    function resetEyes() {
      pupils.forEach(function (pupil) {
        pupil.style.transform = 'translate(-50%, -50%)';
      });
    }

    btn.addEventListener('mousemove', function (e) {
      updateEyes(e.clientX, e.clientY);
    });

    btn.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) {
        updateEyes(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    btn.addEventListener('mouseleave', resetEyes);
    btn.addEventListener('blur', resetEyes);

    window.addEventListener('mousemove', function (e) {
      var btnRect = btn.getBoundingClientRect();
      var d = Math.hypot(
        e.clientX - (btnRect.left + btnRect.width / 2),
        e.clientY - (btnRect.top + btnRect.height / 2)
      );
      if (d < 300) {
        updateEyes(e.clientX, e.clientY);
      }
    }, { passive: true });
  });
})();

/* ── Back-to-top visibility ────────────────────────── */
(function () {
  var btn = document.getElementById('backToTop');
  if (!btn) return;

  var visible = false;
  window.addEventListener('scroll', function () {
    var show = window.scrollY > 600;
    if (show !== visible) {
      visible = show;
      btn.classList.toggle('back-to-top--visible', show);
    }
  }, { passive: true });
})();

/* ── Social Flip Button Mobile Touch Support ───────── */
(function () {
  var flip = document.getElementById('social-flip');
  if (!flip) return;

  flip.addEventListener('touchstart', function (e) {
    if (!e.target.closest('.social-flip__node')) {
      flip.classList.toggle('is-flipped');
    }
  }, { passive: true });

  document.addEventListener('touchstart', function (e) {
    if (!flip.contains(e.target)) {
      flip.classList.remove('is-flipped');
    }
  }, { passive: true });
})();
