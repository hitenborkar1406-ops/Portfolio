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
    /* If tapping inside flip bar but not directly on a link node */
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
