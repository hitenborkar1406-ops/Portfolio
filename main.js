/* main.js — Editorial Aubergine & Ice Silver Portfolio Motion System */

/* ── Mobile nav toggle ─────────────────────────────── */
(function () {
  var nav = document.querySelector('.nav');
  var links = document.querySelector('.glass-dock__items') || document.querySelector('.nav__links');
  if (!nav || !links) return;

  var openClass = links.classList.contains('glass-dock__items') ? 'glass-dock__items--open' : 'nav__links--open';

  /* Create burger */
  var burger = document.createElement('button');
  burger.className = 'nav__burger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.innerHTML = '<span></span><span></span><span></span>';
  nav.querySelector('.nav__inner').appendChild(burger);

  burger.addEventListener('click', function () {
    var open = links.classList.toggle(openClass);
    burger.classList.toggle('nav__burger--open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  /* Close on link click */
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove(openClass);
      burger.classList.remove('nav__burger--open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── GlassDock Interactive Magnetic Tooltip System ── */
(function () {
  var dock = document.getElementById('glassDock');
  var tooltip = document.getElementById('dockTooltip');
  var tooltipText = document.getElementById('dockTooltipText');
  if (!dock || !tooltip || !tooltipText) return;

  var items = dock.querySelectorAll('.glass-dock__item');
  var lastIndex = null;
  var hideTimeout = null;

  items.forEach(function (item, index) {
    item.addEventListener('mouseenter', function () {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }

      var title = item.getAttribute('data-title');
      if (!title) return;

      var direction = 0;
      if (lastIndex !== null && lastIndex !== index) {
        direction = index > lastIndex ? 1 : -1;
      }

      // Set text first so tooltip dynamically sizes itself
      tooltipText.textContent = title;

      // Animate text transition if direction changed
      if (direction !== 0) {
        tooltipText.className = 'glass-dock__tooltip-text ' + (direction > 0 ? 'glass-dock__tooltip-text--slide-in-right' : 'glass-dock__tooltip-text--slide-in-left');
        void tooltipText.offsetWidth; // Force reflow
        tooltipText.className = 'glass-dock__tooltip-text glass-dock__tooltip-text--active';
      } else {
        tooltipText.className = 'glass-dock__tooltip-text glass-dock__tooltip-text--active';
      }

      // Compute exact position relative to dock
      var dockRect = dock.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var tooltipWidth = tooltip.offsetWidth || 84;

      var x = (itemRect.left - dockRect.left) + (itemRect.width / 2) - (tooltipWidth / 2);

      tooltip.style.transform = 'translate3d(' + Math.round(x) + 'px, 0, 0) scale(1)';
      tooltip.classList.add('glass-dock__tooltip--visible');

      lastIndex = index;
    });
  });

  dock.addEventListener('mouseleave', function () {
    hideTimeout = setTimeout(function () {
      tooltip.classList.remove('glass-dock__tooltip--visible');
      tooltip.style.transform = tooltip.style.transform.replace(/scale\(1\)/, 'scale(0.92)');
      lastIndex = null;
    }, 100);
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
  var navLinks = document.querySelectorAll('.nav__link, .glass-dock__item');
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
        var isActive = href === '#' + currentId;
        link.classList.toggle('nav__link--active', isActive);
        link.classList.toggle('glass-dock__item--active', isActive);
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

/* ── Scroll Motion Engine ───────────────────────────
   One rAF loop, started by scroll/resize and stopped when everything
   has settled. Drives: progress bar, hero parallax, section-head rules,
   stacked Projects/Skills cards, and scrubbed (reversible) reveals.
   Only transform / opacity / CSS variables are written per frame. */
(function () {
  var root = document.documentElement;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  try {
    var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
    var smooth = function (t) { return t * t * (3 - 2 * t); };

    /* Smoothed value: t = target, v = eased current value */
    function Sm(v) { this.v = v; this.t = v; }
    Sm.prototype.step = function (k) {
      this.v += (this.t - this.v) * k;
      if (Math.abs(this.t - this.v) < 0.0006) this.v = this.t;
      return this.v !== this.t;
    };

    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var sy = window.pageYOffset;
    var compact = vw < 700;

    var bar = document.getElementById('scrollProgress');
    var hero = document.getElementById('hero');
    var heroContent = hero && hero.querySelector('.hero__content');
    var heroHeadline = hero && hero.querySelector('.hero__headline');
    var heroPortrait = hero && hero.querySelector('.hero__portrait');
    var heroCue = hero && hero.querySelector('.hero__cue');
    var heroH = hero ? hero.offsetHeight : 1;
    var heroS = new Sm(0);

    var heads = Array.prototype.map.call(document.querySelectorAll('.section__head'), function (el) {
      return { el: el, d: new Sm(0), last: -1 };
    });

    var stacks = ['projectsStack', 'skillsStack'].map(function (id) {
      var box = document.getElementById(id);
      if (!box) return [];
      return Array.prototype.map.call(box.querySelectorAll('[data-stack]'), function (el) {
        return { el: el, e: new Sm(0), r: new Sm(0), seen: false, top: 0 };
      });
    });

    var scrubs = Array.prototype.map.call(document.querySelectorAll('[data-scrub]'), function (el) {
      return {
        el: el,
        type: el.getAttribute('data-scrub') || 'rise',
        stagger: parseFloat(el.getAttribute('data-stagger')) || 0,
        e: new Sm(0),
        top: 0,
        done: false
      };
    });

    /* Layout positions of scrubbed elements, measured with our own
       transforms removed so the animation can't feed back into itself. */
    function measure() {
      vh = window.innerHeight;
      vw = window.innerWidth;
      compact = vw < 700;
      if (hero) heroH = Math.max(1, hero.offsetHeight);

      var saved = scrubs.map(function (s) {
        var t = s.el.style.transform;
        s.el.style.transform = 'none';
        return t;
      });
      scrubs.forEach(function (s) {
        s.top = s.el.getBoundingClientRect().top + window.pageYOffset;
      });
      scrubs.forEach(function (s, i) {
        s.el.style.transform = saved[i];
      });
    }

    function scrubTransform(type, k) {
      var m = compact ? 0.6 : 1;
      switch (type) {
        case 'tilt':
          return 'translate3d(0,' + (k * 60 * m).toFixed(2) + 'px,0) rotateX(' + (k * 14).toFixed(2) + 'deg)';
        case 'left':
          return 'translate3d(' + (k * -70 * m).toFixed(2) + 'px,0,0)';
        case 'right':
          return 'translate3d(' + (k * 70 * m).toFixed(2) + 'px,0,0)';
        case 'scale':
          return 'translate3d(0,' + (k * 36 * m).toFixed(2) + 'px,0) scale(' + (1 - k * 0.08).toFixed(4) + ')';
        default:
          return 'translate3d(0,' + (k * 56 * m).toFixed(2) + 'px,0)';
      }
    }

    var running = false;
    var last = 0;
    var snap = true;

    function tick(now) {
      var dt = Math.min(Math.max((now - last) / 1000, 0.001), 0.05);
      last = now;
      var k = snap ? 1 : 1 - Math.exp(-dt * 11);
      sy = window.pageYOffset;
      var moving = false;

      /* ── Phase 1: reads ── */
      var headTops = heads.map(function (h) { return h.el.getBoundingClientRect().top; });
      var stackRects = stacks.map(function (list) {
        return list.map(function (it) { return it.el.getBoundingClientRect().top; });
      });
      var maxScroll = root.scrollHeight - vh;

      /* ── Targets ── */
      heroS.t = clamp(sy / heroH, 0, 1);

      heads.forEach(function (h, i) {
        h.d.t = clamp((vh * 0.9 - headTops[i]) / (vh * 0.3), 0, 1);
      });

      stacks.forEach(function (list, si) {
        var tops = stackRects[si];
        list.forEach(function (it, i) {
          it.top = tops[i];
          it.e.t = clamp((vh * 0.99 - tops[i]) / (vh * 0.4), 0, 1);
          if (i < list.length - 1) {
            var diff = tops[i + 1] - tops[i];
            it.r.t = diff <= vh ? clamp(1 - diff / vh, 0, 1) : 0;
          } else {
            it.r.t = 0;
          }
        });
      });

      scrubs.forEach(function (s) {
        s.e.t = clamp((vh * 0.92 - (s.top - sy)) / (vh * 0.4) - s.stagger * 0.18, 0, 1);
        /* At the very bottom nothing can scroll further, so let it finish */
        if (maxScroll > 0 && sy >= maxScroll - 4) s.e.t = 1;
      });

      /* ── Phase 2: ease + writes ── */
      if (bar) {
        bar.style.transform = 'scaleX(' + (maxScroll > 0 ? clamp(sy / maxScroll, 0, 1) : 0).toFixed(4) + ')';
      }

      if (heroS.step(k)) moving = true;
      if (hero) {
        var hp = heroS.v;
        if (heroContent) {
          heroContent.style.transform = 'translate3d(0,' + (-hp * 70).toFixed(2) + 'px,0)';
          heroContent.style.opacity = (1 - smooth(clamp((hp - 0.12) / 0.7, 0, 1))).toFixed(3);
        }
        if (heroHeadline) {
          heroHeadline.style.transform = 'translate3d(0,' + (-hp * 36).toFixed(2) + 'px,0)';
        }
        if (heroPortrait) {
          heroPortrait.style.transform =
            'translate3d(0,' + (hp * 54).toFixed(2) + 'px,0) scale(' + (1 - hp * 0.14).toFixed(4) + ') rotate(' + (-hp * 4).toFixed(2) + 'deg)';
          heroPortrait.style.opacity = (1 - hp * 0.55).toFixed(3);
        }
        if (heroCue) {
          heroCue.style.opacity = clamp(1 - hp * 8, 0, 1).toFixed(3);
        }
      }

      heads.forEach(function (h) {
        if (h.d.step(k)) moving = true;
        if (Math.abs(h.d.v - h.last) > 0.002 || (h.d.v === h.d.t && h.d.v !== h.last)) {
          h.el.style.setProperty('--draw', h.d.v.toFixed(3));
          h.last = h.d.v;
        }
      });

      stacks.forEach(function (list) {
        list.forEach(function (it) {
          if (it.e.step(k)) moving = true;
          if (it.r.step(k)) moving = true;
          var ee = smooth(it.e.v);
          var rr = smooth(it.r.v);
          var ty = (1 - ee) * (compact ? 24 : 40) - rr * 22;
          var sc = (0.96 + 0.04 * ee) * (1 - 0.055 * rr);
          it.el.style.transform = 'translate3d(0,' + ty.toFixed(2) + 'px,0) scale(' + sc.toFixed(4) + ')';
          it.el.style.opacity = clamp(ee * 1.4, 0, 1).toFixed(3);
          it.el.style.setProperty('--dim', rr.toFixed(3));

          if (!it.seen && ee > 0.85 && it.top < vh * 0.7) {
            it.seen = true;
            it.el.classList.add('is-seen');
            if (it.el.classList.contains('skills__group')) it.el.classList.add('is-peek');
          }
        });
      });

      scrubs.forEach(function (s) {
        if (s.e.step(k)) moving = true;
        var ee = smooth(s.e.v);
        var el = s.el;
        if (ee >= 0.999) {
          if (!s.done) {
            s.done = true;
            el.style.transform = '';
            el.style.opacity = '';
            el.style.transition = '';
            el.classList.add('is-done');
          }
        } else {
          if (s.done) {
            s.done = false;
            el.classList.remove('is-done');
          }
          el.style.transition = 'none';
          el.style.opacity = ee.toFixed(3);
          el.style.transform = scrubTransform(s.type, 1 - ee);
        }
      });

      snap = false;
      if (moving) {
        requestAnimationFrame(tick);
      } else {
        running = false;
      }
    }

    function kick() {
      if (running) return;
      running = true;
      last = performance.now();
      requestAnimationFrame(tick);
    }

    function remeasure() {
      measure();
      snap = true;
      kick();
    }

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', remeasure);
    window.addEventListener('load', remeasure);

    measure();
    kick();
  } catch (err) {
    /* Never leave content hidden if the engine fails */
    root.classList.remove('js');
    if (window.console) console.warn('Scroll engine disabled', err);
  }
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

/* ── ShareSheet Dialog Controller ──────────────────── */
(function () {
  var root = document.getElementById('shareSheetRoot');
  var backdrop = document.getElementById('shareSheetBackdrop');
  var dialog = document.getElementById('shareSheetDialog');
  var closeBtn = document.getElementById('shareSheetClose');
  var backBtn = document.getElementById('shareSheetBack');
  var titleEl = document.getElementById('shareSheetTitle');
  var subtitleEl = document.getElementById('shareSheetSubtitle');
  var feedbackEl = document.getElementById('shareSheetFeedback');
  var doneBtn = document.getElementById('shareSheetDone');
  var qrContainer = document.getElementById('shareSheetQrContainer');
  var downloadQrBtn = document.getElementById('shareSheetDownloadQr');

  var viewShare = document.getElementById('kssViewShare');
  var viewCopied = document.getElementById('kssViewCopied');
  var viewMore = document.getElementById('kssViewMore');
  var viewQr = document.getElementById('kssViewQr');

  var triggers = document.querySelectorAll('#shareSheetTrigger, #footerShareBtn');

  if (!root || !dialog) return;

  var currentQrSvg = '';
  var returnFocusEl = null;
  var bodyScrollLocks = 0;
  var previousBodyOverflow = '';

  function lockScroll() {
    if (bodyScrollLocks === 0) {
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    bodyScrollLocks++;
  }

  function unlockScroll() {
    bodyScrollLocks = Math.max(0, bodyScrollLocks - 1);
    if (bodyScrollLocks === 0) {
      document.body.style.overflow = previousBodyOverflow;
    }
  }

  function getShareUrl() {
    var u = window.location.href;
    if (!u || u.startsWith('file:') || u.includes('localhost') || u.includes('127.0.0.1')) {
      return 'https://hitenborkar1406-ops.github.io/Portfolio/';
    }
    return u;
  }

  function getShareTitle() {
    return document.title || 'Hiten Borkar — Portfolio';
  }

  function setView(viewName) {
    if (feedbackEl) {
      feedbackEl.textContent = '';
      feedbackEl.style.display = 'none';
    }

    viewShare.style.display = viewName === 'share' ? 'block' : 'none';
    viewCopied.style.display = viewName === 'copied' ? 'block' : 'none';
    viewMore.style.display = viewName === 'more' ? 'block' : 'none';
    viewQr.style.display = viewName === 'qr' ? 'block' : 'none';

    if (viewName === 'share') {
      backBtn.style.display = 'none';
      titleEl.textContent = 'Share';
      subtitleEl.textContent = 'Choose where to share';
    } else if (viewName === 'copied') {
      backBtn.style.display = 'none';
      titleEl.textContent = 'Link copied!';
      subtitleEl.textContent = 'You can now paste it anywhere';
    } else if (viewName === 'more') {
      backBtn.style.display = 'inline-flex';
      titleEl.textContent = 'More Options';
      subtitleEl.textContent = 'Additional ways to share';
    } else if (viewName === 'qr') {
      backBtn.style.display = 'inline-flex';
      titleEl.textContent = 'Share via QR';
      subtitleEl.textContent = 'Scan the QR code to open the link';
      generateQr();
    }
  }

  function showFeedback(msg) {
    if (!feedbackEl) return;
    feedbackEl.textContent = msg;
    feedbackEl.style.display = 'block';
  }

  function openSheet(triggerEl) {
    returnFocusEl = triggerEl || document.activeElement;
    lockScroll();
    setView('share');
    root.style.display = 'flex';
    void root.offsetHeight;
    root.classList.add('is-open');

    var focusable = dialog.querySelector('button:not(:disabled)');
    if (focusable) focusable.focus();
  }

  function closeSheet() {
    root.classList.remove('is-open');
    unlockScroll();
    setTimeout(function () {
      root.style.display = 'none';
      if (returnFocusEl && typeof returnFocusEl.focus === 'function') {
        returnFocusEl.focus();
      }
    }, 250);
  }

  triggers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openSheet(btn);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSheet);
  if (doneBtn) doneBtn.addEventListener('click', closeSheet);
  if (backdrop) backdrop.addEventListener('click', closeSheet);
  if (backBtn) backBtn.addEventListener('click', function () { setView('share'); });

  /* Escape key and tab trapping */
  document.addEventListener('keydown', function (e) {
    if (!root.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeSheet();
      return;
    }

    if (e.key === 'Tab') {
      var nodes = Array.from(dialog.querySelectorAll('button:not(:disabled), a[href]')).filter(function (el) {
        return el.offsetParent !== null;
      });
      if (!nodes.length) return;
      var first = nodes[0];
      var last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* Copy Link Function */
  function copyLink() {
    var url = getShareUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        setView('copied');
      }).catch(function () {
        fallbackCopy(url);
      });
    } else {
      fallbackCopy(url);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      var ok = document.execCommand('copy');
      if (ok) {
        setView('copied');
      } else {
        showFeedback('Could not copy link automatically.');
      }
    } catch (err) {
      showFeedback('Could not copy link automatically.');
    } finally {
      document.body.removeChild(ta);
    }
  }

  /* Channel Click Actions */
  var channelButtons = dialog.querySelectorAll('.kss-dest');
  channelButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var channel = btn.getAttribute('data-channel');
      var url = getShareUrl();
      var title = getShareTitle();
      var encUrl = encodeURIComponent(url);
      var encText = encodeURIComponent(title);

      if (channel === 'link') {
        copyLink();
      } else if (channel === 'whatsapp') {
        window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(title + ' ' + url), '_blank', 'noopener,noreferrer');
      } else if (channel === 'telegram') {
        window.open('https://t.me/share/url?url=' + encUrl + '&text=' + encText, '_blank', 'noopener,noreferrer');
      } else if (channel === 'x') {
        window.open('https://twitter.com/intent/tweet?url=' + encUrl + '&text=' + encText, '_blank', 'noopener,noreferrer');
      } else if (channel === 'instagram') {
        if (navigator.share) {
          navigator.share({ title: title, url: url }).catch(function () {});
        } else {
          copyLink();
          showFeedback('Link copied! Paste it in Instagram.');
        }
      } else if (channel === 'more') {
        setView('more');
      }
    });
  });

  /* More List Actions */
  var moreButtons = dialog.querySelectorAll('.kss-list button');
  moreButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var act = btn.getAttribute('data-action');
      var url = getShareUrl();
      var title = getShareTitle();

      if (act === 'mail') {
        window.location.assign('mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(title + '\n' + url));
      } else if (act === 'sms') {
        window.location.assign('sms:?body=' + encodeURIComponent(title + ' ' + url));
      } else if (act === 'browser') {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else if (act === 'qr') {
        setView('qr');
      }
    });
  });

  /* Generate SVG QR Code using qrcode-generator */
  function generateQr() {
    if (!qrContainer) return;
    try {
      if (typeof window.qrcode !== 'function') {
        qrContainer.innerHTML = '<p style="padding:12px;font-size:12px;color:#DDE3E8;">QR generator loading...</p>';
        return;
      }
      var url = getShareUrl();
      var qr = window.qrcode(0, 'M');
      qr.addData(url);
      qr.make();
      var cells = qr.getModuleCount();
      var margin = 4;
      var n = cells + margin * 2;
      var rects = '';
      for (var y = 0; y < cells; y++) {
        for (var x = 0; x < cells; x++) {
          if (qr.isDark(y, x)) {
            rects += '<rect x="' + (x + margin) + '" y="' + (y + margin) + '" width="1" height="1"/>';
          }
        }
      }
      currentQrSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + (n * 10) + '" height="' + (n * 10) + '" viewBox="0 0 ' + n + ' ' + n + '" shape-rendering="crispEdges"><path fill="#fff" d="M0 0h' + n + 'v' + n + 'H0z"/><g fill="#1F071B">' + rects + '</g></svg>';
      qrContainer.innerHTML = currentQrSvg;
    } catch (e) {
      qrContainer.innerHTML = '<p style="padding:12px;font-size:12px;color:#DDE3E8;">Could not generate QR code.</p>';
    }
  }

  /* Download QR SVG */
  if (downloadQrBtn) {
    downloadQrBtn.addEventListener('click', function () {
      if (!currentQrSvg) return;
      var blob = new Blob([currentQrSvg], { type: 'image/svg+xml;charset=utf-8' });
      var href = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = href;
      a.download = 'portfolio-qr.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () {
        URL.revokeObjectURL(href);
      }, 1000);
    });
  }
})();

/* ── 3D Achievements Books Showcase ──────────────── */
(function () {
  var root = document.getElementById('bookShowcase');
  var canvasEl = document.getElementById('showcaseCanvas');
  if (!root || !canvasEl || typeof THREE === 'undefined') return;

  var openBtn = document.getElementById('showcaseOpenBtn');
  var closeBtn = document.getElementById('showcaseCloseBtn');
  var actionCloseBtn = document.getElementById('showcaseActionClose');
  var badgeEl = document.getElementById('showcaseBadge');
  var titleEl = document.getElementById('showcaseTitle');
  var descEl = document.getElementById('showcaseDesc');
  var yearEl = document.getElementById('showcaseYear');
  var sourceEl = document.getElementById('showcaseSource');
  var actionPrimary = document.getElementById('showcaseActionPrimary');

  var ACHIEVEMENT_BOOKS = [
    {
      id: 'hacksagon-2026',
      title: 'Hacksagon 2026',
      mainTitle: 'HACKSAGON',
      yearText: '2026',
      author: '2nd Place Winner',
      subtitle: '2ND PLACE WINNER',
      team: 'Smart IV Drip',
      badge: '2nd Place',
      headerOrnament: '★ HACKSAGON 2026 ★',
      footerText: 'SMART IV DRIP MONITOR',
      source: 'Hacksagon 2026',
      year: '2026',
      stars: 5,
      desc: '2nd place at Hacksagon 2026 among 2,100+ participants, for the Smart IV Drip Monitoring System.',
      photos: [
        {
          id: 'hacksagon-podium',
          number: '01',
          title: 'Team podium',
          subtitle: '2nd place',
          image: 'HACKSAGON_TEAM_MAIN_IMAGE.jpeg',
          src: 'HACKSAGON_TEAM_MAIN_IMAGE.jpeg',
          href: 'HACKSAGON_TEAM_MAIN_IMAGE.jpeg'
        },
        {
          id: 'hacksagon-demo',
          number: '02',
          title: 'Hardware Prototype Demo',
          subtitle: 'Smart IV System',
          image: 'HACKSAGON_SOLO_IMAGE.jpeg',
          src: 'HACKSAGON_SOLO_IMAGE.jpeg',
          href: 'HACKSAGON_SOLO_IMAGE.jpeg'
        }
      ],
      coverBg: '#280724',
      backBg: '#1B0518',
      spineBg: '#20071C',
      spineInk: '#EAAA00',
      spineFont: '700 36px Georgia',
      chapters: ['Hacksagon 2026', '2,100+ Participants', '2nd Place', 'Smart IV Drip Monitor', 'Fluid-level Sensing', 'Real-time Alerts']
    },
    {
      id: 'ideathon-cyberster',
      title: 'Ideathon RCOEM TBI',
      mainTitle: 'IDEATHON',
      yearText: '2026',
      author: '2nd Runner-up',
      subtitle: '2ND RUNNER-UP',
      team: 'Smart IV Drip',
      badge: '2nd Runner-up',
      headerOrnament: '★ IDEATHON, RCOEM TBI ★',
      footerText: 'SMART IV DRIP MONITOR',
      source: 'Ideathon, RCOEM TBI',
      year: '2026',
      stars: 5,
      desc: '2nd runner-up at the RCOEM TBI Ideathon for the Smart IV Drip Monitoring System.',
      photos: [
        {
          id: 'ideathon-award',
          number: '01',
          title: 'Award presentation',
          subtitle: '2nd runner-up',
          image: 'IDEATHON_IMAGE.jpeg',
          src: 'IDEATHON_IMAGE.jpeg',
          href: 'IDEATHON_IMAGE.jpeg'
        }
      ],
      coverBg: '#21061D',
      backBg: '#170414',
      spineBg: '#250820',
      spineInk: '#EAAA00',
      spineFont: '700 34px Georgia',
      chapters: ['Ideathon', 'RCOEM TBI', '2nd Runner-up', 'Smart IV Drip Monitor', 'Patient Safety', 'Real-time Alerts']
    }
  ];

  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lowPowerDevice = RM || (window.matchMedia && window.matchMedia('(max-width: 900px)').matches);

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function Spring(v, k, d) {
    this.v = v;
    this.t = v;
    this.vel = 0;
    this.k = k || 120;
    this.d = d || 14;
  }
  Spring.prototype.set = function (v) {
    this.v = v;
    this.t = v;
    this.vel = 0;
    return this;
  };
  Spring.prototype.update = function (dt) {
    var a = this.k * (this.t - this.v) - this.d * this.vel;
    this.vel += a * dt;
    this.v += this.vel * dt;
    return this.v;
  };

  function mkCanvas(w, h) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }

  function drawSpaced(x, text, cx, y, ls) {
    var prev = x.textAlign;
    x.textAlign = 'left';
    var chars = Array.from(text);
    var tot = 0;
    var ws = chars.map(function (ch) {
      var w = x.measureText(ch).width;
      tot += w;
      return w;
    });
    tot += ls * (chars.length - 1);
    var px = cx - tot / 2;
    chars.forEach(function (ch, i) {
      x.fillText(ch, px, y);
      px += ws[i] + ls;
    });
    x.textAlign = prev;
  }

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: !lowPowerDevice, alpha: true });
  } catch (err) {
    console.warn('BooksShowcase WebGL not available', err);
    return;
  }

  var dims = { w: 0, h: 0 };
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPowerDevice ? 1 : 1.3));
  if (renderer.outputColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
  else renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = !lowPowerDevice;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  var ANISO = (renderer.capabilities && renderer.capabilities.getMaxAnisotropy) ? renderer.capabilities.getMaxAnisotropy() : 1;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);
  camera.position.set(0, 0.1, 9.6);

  var hemi = new THREE.HemisphereLight(0xeddce6, 0x1f071b, 0.45);
  scene.add(hemi);

  var key = new THREE.DirectionalLight(0xfff5e6, 0.95);
  key.position.set(3.5, 5, 6);
  key.castShadow = !lowPowerDevice;
  scene.add(key);

  var fillLight = new THREE.DirectionalLight(0xd9c2d5, 0.35);
  fillLight.position.set(-4, 1, 4);
  scene.add(fillLight);

  var rim = new THREE.DirectionalLight(0xeaaa00, 0.4);
  rim.position.set(-2, 3, -5);
  scene.add(rim);

  var bookRoot = new THREE.Group();
  scene.add(bookRoot);

  function tex(c) {
    var t = new THREE.CanvasTexture(c);
    t.anisotropy = ANISO;
    return t;
  }

  function noiseTexture(base, amp, scratches) {
    var s = 256;
    var c = mkCanvas(s, s);
    var x = c.getContext('2d');
    var img = x.createImageData(s, s);
    var d = img.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = base + (Math.random() - 0.5) * 2 * amp;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    if (scratches) {
      x.strokeStyle = 'rgba(200,200,200,.25)';
      x.lineWidth = 1;
      for (var j = 0; j < 4; j++) {
        x.beginPath();
        var y = Math.random() * s;
        x.moveTo(0, y);
        x.lineTo(s, y + (Math.random() - 0.5) * 20);
        x.stroke();
      }
    }
    return new THREE.CanvasTexture(c);
  }

  var laminateBump = noiseTexture(128, 10, true);
  var clothBump = (function () {
    var s = 128;
    var c = mkCanvas(s, s);
    var x = c.getContext('2d');
    x.fillStyle = '#808080';
    x.fillRect(0, 0, s, s);
    for (var i = 0; i < s; i += 2) {
      x.fillStyle = i % 4 === 0 ? 'rgba(255,255,255,.22)' : 'rgba(0,0,0,.22)';
      x.fillRect(i, 0, 1, s);
      x.fillRect(0, i, s, 1);
    }
    return new THREE.CanvasTexture(c);
  })();

  function striationTexture(vertical) {
    var s = 512;
    var c = mkCanvas(s, s);
    var x = c.getContext('2d');
    x.fillStyle = '#ece4d2';
    x.fillRect(0, 0, s, s);
    var p = 0;
    while (p < s) {
      var w = 1 + Math.random() * 2.4;
      var tone = Math.random();
      x.fillStyle = tone < 0.12 ? 'rgba(140,125,95,.5)' : tone < 0.5 ? 'rgba(255,255,252,.55)' : 'rgba(190,178,150,.45)';
      if (vertical) x.fillRect(p, 0, w, s);
      else x.fillRect(0, p, s, w);
      p += w + 0.6 + Math.random() * 1.6;
    }
    return tex(c);
  }
  var striV = striationTexture(true);
  var striH = striationTexture(false);

  var endpaperTex = (function () {
    var s = 512;
    var c = mkCanvas(s, s);
    var x = c.getContext('2d');
    x.fillStyle = '#f3edde';
    x.fillRect(0, 0, s, s);
    var g = x.createLinearGradient(0, 0, s, 0);
    g.addColorStop(0, 'rgba(0,0,0,.08)');
    g.addColorStop(0.12, 'rgba(0,0,0,0)');
    g.addColorStop(0.88, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,.08)');
    x.fillStyle = g;
    x.fillRect(0, 0, s, s);
    return tex(c);
  })();

  var blobTex = (function () {
    var s = 256;
    var c = mkCanvas(s, s);
    var x = c.getContext('2d');
    var g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(0,0,0,.85)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, s, s);
    return new THREE.CanvasTexture(c);
  })();

  function makeIndexPageTex(chapters) {
    var w = 1024, h = 1536;
    var c = mkCanvas(w, h);
    var x = c.getContext('2d');
    x.fillStyle = '#f4efdf';
    x.fillRect(0, 0, w, h);
    x.fillStyle = '#20071c';
    x.textAlign = 'center';
    x.font = '700 82px Georgia';
    x.fillText('RECORD & DETAILS', w / 2, 190);
    x.fillStyle = '#eaaa00';
    x.fillRect(200, 226, w - 400, 4);

    var list = chapters || ['Introduction', 'Main Ideas', 'Demo', 'Awards', 'Takeaways'];
    x.textAlign = 'left';
    x.font = '500 44px Georgia';
    var y = 330;
    for (var i = 0; i < list.length; i++) {
      var n = String(i + 1).padStart(2, '0');
      var pageNo = String(10 + i * 12);
      x.fillStyle = '#20071c';
      x.fillText(n + '. ' + list[i], 140, y);
      x.textAlign = 'right';
      x.fillStyle = '#5a224a';
      x.fillText(pageNo, w - 140, y);
      x.textAlign = 'left';
      x.fillStyle = 'rgba(58,15,52,0.18)';
      x.fillRect(140, y + 16, w - 280, 2);
      y += 114;
    }
    return tex(c);
  }

  function paintBookCover(cfg) {
    var w = 1024, h = 1536;
    var c = mkCanvas(w, h);
    var x = c.getContext('2d');

    // 1. Rich Aubergine base with radial gradient
    var grad = x.createRadialGradient(w / 2, h * 0.42, 80, w / 2, h / 2, h * 0.72);
    grad.addColorStop(0, cfg.coverBg || '#2A0826');
    grad.addColorStop(0.7, '#190416');
    grad.addColorStop(1, '#0D020C');
    x.fillStyle = grad;
    x.fillRect(0, 0, w, h);

    // 2. Elegant Outer Gold Frame
    x.strokeStyle = '#EAAA00';
    x.lineWidth = 6;
    x.strokeRect(52, 52, w - 104, h - 104);

    // Fine inner frame
    x.strokeStyle = 'rgba(234, 170, 0, 0.55)';
    x.lineWidth = 2;
    x.strokeRect(68, 68, w - 136, h - 136);

    // Corner diamond accents
    function drawCornerDiamond(cx, cy, s) {
      x.save();
      x.translate(cx, cy);
      x.rotate(Math.PI / 4);
      x.fillStyle = '#EAAA00';
      x.fillRect(-s / 2, -s / 2, s, s);
      x.restore();
    }
    drawCornerDiamond(68, 68, 14);
    drawCornerDiamond(w - 68, 68, 14);
    drawCornerDiamond(68, h - 68, 14);
    drawCornerDiamond(w - 68, h - 68, 14);

    // 3. Top Header Ornament
    x.fillStyle = '#EAAA00';
    x.font = '600 24px Georgia, serif';
    drawSpaced(x, cfg.headerOrnament || '★ HONORS & ACHIEVEMENTS ★', w / 2, 190, 8);

    // Gold divider rule
    x.strokeStyle = 'rgba(234, 170, 0, 0.45)';
    x.lineWidth = 2;
    x.beginPath();
    x.moveTo(220, 235);
    x.lineTo(w - 220, 235);
    x.stroke();
    drawCornerDiamond(w / 2, 235, 12);

    // 4. Main Title
    x.fillStyle = '#EAAA00';
    x.font = '700 86px Georgia, serif';
    x.textAlign = 'center';
    x.fillText(cfg.mainTitle || cfg.title, w / 2, 480);

    x.font = '700 68px Georgia, serif';
    x.fillStyle = 'rgba(234, 170, 0, 0.9)';
    x.fillText(cfg.yearText || cfg.year, w / 2, 570);

    // Center divider
    x.strokeStyle = 'rgba(234, 170, 0, 0.4)';
    x.beginPath();
    x.moveTo(260, 660);
    x.lineTo(w - 260, 660);
    x.stroke();
    drawCornerDiamond(w / 2, 660, 10);

    // 5. Award & Team Subtitle
    x.fillStyle = '#DDE3E8';
    x.font = '700 36px Georgia, serif';
    drawSpaced(x, (cfg.subtitle || cfg.author).toUpperCase(), w / 2, 780, 6);

    x.fillStyle = 'rgba(221, 227, 232, 0.85)';
    x.font = 'italic 34px Georgia, serif';
    x.textAlign = 'center';
    x.fillText(cfg.team || '', w / 2, 850);

    // 6. Ornamental Gold Medallion in Lower Section
    x.strokeStyle = 'rgba(234, 170, 0, 0.5)';
    x.lineWidth = 2;
    x.beginPath();
    x.arc(w / 2, 1060, 68, 0, Math.PI * 2);
    x.stroke();

    x.beginPath();
    x.arc(w / 2, 1060, 58, 0, Math.PI * 2);
    x.stroke();

    x.fillStyle = '#EAAA00';
    x.font = '700 34px Georgia, serif';
    x.textAlign = 'center';
    x.fillText('★', w / 2, 1072);

    // 7. Footer text
    x.fillStyle = 'rgba(221, 227, 232, 0.7)';
    x.font = '600 22px Georgia, serif';
    drawSpaced(x, (cfg.footerText || 'PORTFOLIO EDITION').toUpperCase(), w / 2, 1260, 6);

    x.strokeStyle = 'rgba(234, 170, 0, 0.4)';
    x.beginPath();
    x.moveTo(260, 1310);
    x.lineTo(w - 260, 1310);
    x.stroke();

    return c;
  }

  function paintBookBack(cfg) {
    var w = 1024, h = 1536;
    var c = mkCanvas(w, h);
    var x = c.getContext('2d');

    x.fillStyle = cfg.backBg || '#180415';
    x.fillRect(0, 0, w, h);

    x.strokeStyle = 'rgba(234, 170, 0, 0.4)';
    x.lineWidth = 4;
    x.strokeRect(52, 52, w - 104, h - 104);

    x.strokeStyle = 'rgba(234, 170, 0, 0.2)';
    x.lineWidth = 1.5;
    x.strokeRect(68, 68, w - 136, h - 136);

    x.fillStyle = '#EAAA00';
    x.font = '600 26px Georgia, serif';
    drawSpaced(x, 'HITEN BORKAR', w / 2, 700, 8);

    x.fillStyle = 'rgba(221, 227, 232, 0.75)';
    x.font = 'italic 28px Georgia, serif';
    x.textAlign = 'center';
    x.fillText('Engineering & Innovation Records', w / 2, 760);

    x.strokeStyle = 'rgba(234, 170, 0, 0.3)';
    x.lineWidth = 2;
    x.beginPath();
    x.moveTo(340, 810);
    x.lineTo(w - 340, 810);
    x.stroke();

    return c;
  }

  function paintSpine(spineBg, spineInk, spineFont, title, author) {
    var w = 220, h = 1536;
    var c = mkCanvas(w, h);
    var x = c.getContext('2d');
    x.fillStyle = spineBg || '#20071C';
    x.fillRect(0, 0, w, h);

    // Gold decorative bands across the spine
    x.strokeStyle = 'rgba(234, 170, 0, 0.55)';
    x.lineWidth = 4;
    var bands = [120, 240, h - 240, h - 120];
    bands.forEach(function (by) {
      x.beginPath();
      x.moveTo(20, by);
      x.lineTo(w - 20, by);
      x.stroke();
    });

    x.save();
    x.translate(w / 2, h / 2);
    x.rotate(Math.PI / 2);
    x.fillStyle = spineInk || '#EAAA00';
    x.font = spineFont || '700 38px Georgia, serif';
    drawSpaced(x, title.toUpperCase(), -h * 0.1, 12, 6);
    x.font = '600 24px Arial, sans-serif';
    x.fillStyle = '#DDE3E8';
    drawSpaced(x, author.toUpperCase(), h * 0.28, 10, 4);
    x.restore();
    return c;
  }

  function std(o) {
    return new THREE.MeshStandardMaterial(Object.assign({ metalness: 0.02 }, o));
  }

  var W = 1.42, H = 2.14, T = 0.34, CT = 0.032, OV = 0.05;
  var PAGE_N = lowPowerDevice ? 5 : 8;
  var PW = W - 0.02, PH = H - 0.02;
  var BLOCK_D = 0.245, BLOCK_Z = -0.0205, PIVOT_Z = T / 2 + CT / 2, BPIVOT_Z = -(T / 2 + CT / 2), HINGE_OVERLAP = 0.05;

  var coverGeo = new THREE.BoxGeometry(W + OV, H + OV * 2, CT);
  var blockGeo = new THREE.BoxGeometry(W - 0.015, H, BLOCK_D);
  var pageGeo = new THREE.PlaneGeometry(PW, PH);
  var spineGeo = new THREE.BoxGeometry(0.028, H + OV * 2, T + CT * 2 + 0.006);
  var hitGeo = new THREE.BoxGeometry(1.8, 2.5, 1.15);
  var blobGeo = new THREE.PlaneGeometry(1, 1);
  var hitMat = new THREE.MeshBasicMaterial({ visible: false });

  var paperFlat = std({ color: 0xf2ecdd, roughness: 0.95, envMapIntensity: 0.2 });
  var striMatV = std({ map: striV, roughness: 0.95, envMapIntensity: 0.2 });
  var striMatH = std({ map: striH, roughness: 0.95, envMapIntensity: 0.2 });
  var endpaperMat = std({ map: endpaperTex, roughness: 0.9, envMapIntensity: 0.25 });
  var pageMats = [0xf4eee0, 0xf1ebdb, 0xf6f0e3].map(function (col) {
    return std({ color: col, roughness: 0.92, side: THREE.DoubleSide });
  });

  var books = [];
  var hitMeshes = [];

  ACHIEVEMENT_BOOKS.forEach(function (cfg, index) {
    var bRoot = new THREE.Group();
    var floatGroup = new THREE.Group();
    bRoot.add(floatGroup);
    bookRoot.add(bRoot);

    var indexPageMat = std({ map: makeIndexPageTex(cfg.chapters), roughness: 0.92, side: THREE.DoubleSide });
    var mEdge = std({ color: '#eee4cf', bumpMap: laminateBump, bumpScale: 0.003, roughness: 0.68 });
    var mFront = std({ bumpMap: laminateBump, bumpScale: 0.003, roughness: 0.54 });
    var mBack = std({ bumpMap: laminateBump, bumpScale: 0.003, roughness: 0.58 });
    var mSpine = std({ bumpMap: clothBump, bumpScale: 0.006, roughness: 0.78 });

    // Paint normal published book cover and back
    mFront.map = tex(paintBookCover(cfg));
    mFront.needsUpdate = true;

    mBack.map = tex(paintBookBack(cfg));
    mSpine.map = tex(paintSpine(cfg.spineBg, cfg.spineInk, cfg.spineFont, (cfg.mainTitle || cfg.title) + ' ' + (cfg.yearText || cfg.year), cfg.subtitle || cfg.author));

    // Back cover
    var backPivot = new THREE.Group();
    backPivot.position.set(-W / 2 - HINGE_OVERLAP, 0, BPIVOT_Z);
    var backMesh = new THREE.Mesh(coverGeo, [mEdge, mEdge, mEdge, mEdge, endpaperMat, mBack]);
    backMesh.position.x = (W + OV) / 2;
    backMesh.castShadow = true;
    backPivot.add(backMesh);
    floatGroup.add(backPivot);

    // Front cover
    var pivot = new THREE.Group();
    pivot.position.set(-W / 2 - HINGE_OVERLAP, 0, PIVOT_Z);
    var frontMesh = new THREE.Mesh(coverGeo, [mEdge, mEdge, mEdge, mEdge, mFront, endpaperMat]);
    frontMesh.position.x = (W + OV) / 2;
    frontMesh.castShadow = true;
    pivot.add(frontMesh);
    floatGroup.add(pivot);

    // Spine
    var spine = new THREE.Mesh(spineGeo, mSpine);
    spine.position.set(-W / 2 - 0.013, 0, 0);
    spine.castShadow = true;
    floatGroup.add(spine);

    // Block
    var block = new THREE.Mesh(blockGeo, [striMatV, paperFlat, striMatH, striMatH, paperFlat, paperFlat]);
    block.position.set(-0.0075, 0, BLOCK_Z);
    block.castShadow = true;
    floatGroup.add(block);

    // Pages
    var pages = [], pageF = [];
    for (var i = 0; i < PAGE_N; i++) {
      var pp = new THREE.Group();
      pp.position.set(-W / 2 + 0.01, 0, 0.166 - i * 0.0042);
      var pm = new THREE.Mesh(pageGeo, i === 0 ? indexPageMat : pageMats[i % 3]);
      pm.position.x = PW / 2;
      pp.add(pm);
      floatGroup.add(pp);
      pages.push(pp);
      pageF.push(0.3 * Math.pow(1 - i / PAGE_N, 2.6));
    }

    // Shadow blob
    var blob = new THREE.Mesh(
      blobGeo,
      new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, opacity: 0.55, depthWrite: false })
    );
    blob.scale.set(3.1, 3.9, 1);
    blob.position.set(0.1, -0.3, -0.85);
    blob.renderOrder = -5;
    bRoot.add(blob);

    var hit = new THREE.Mesh(hitGeo, hitMat);
    floatGroup.add(hit);
    hitMeshes.push(hit);

    var springs = {
      px: new Spring(0, 17, 6.8),
      py: new Spring(0, 17, 6.8),
      pz: new Spring(0, 17, 6.8),
      rx: new Spring(0, 17, 6.8),
      ry: new Spring(0, 17, 6.8),
      rz: new Spring(0, 17, 6.8),
      sc: new Spring(1, 17, 6.8),
      tiltX: new Spring(0, 120, 13),
      tiltY: new Spring(0, 120, 13),
      lift: new Spring(0, 120, 13),
      cover: new Spring(0, 90, 12),
      coverB: new Spring(0, 90, 12),
      drag: new Spring(0, 160, 16)
    };

    var bookObj = {
      cfg: cfg,
      index: index,
      root: bRoot,
      float: floatGroup,
      pivot: pivot,
      backPivot: backPivot,
      frontMesh: frontMesh,
      mFront: mFront,
      pages: pages,
      pageF: pageF,
      hit: hit,
      springs: springs,
      phase: index * 2.1,
      slotScale: 1,
      scr: { x: 0, y: 0 },
      orbY: 0,
      orbYv: 0,
      orbPhase: 'idle',
      orbTarget: 0,
      orbXs: new Spring(0, 60, 12),
      exit: null
    };
    books.push(bookObj);
  });

  // Floating ambient leaves in 3D
  var leaves = {
    items: [],
    anchor: null,
    activate: function (book) {
      this.anchor = book;
      this.items.forEach(function (l) {
        l.kick.set(-l.hx + (Math.random() - 0.5) * 0.6, -l.hy + (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.5);
        l.s.t = l.size;
        l.mesh.visible = true;
      });
    },
    deactivate: function () {
      this.items.forEach(function (l) {
        l.s.t = 0;
      });
    },
    push: function (dx, dy) {
      if (!this.anchor) return;
      this.items.forEach(function (l) {
        l.kick.x += dx * 2.4 * Math.random();
        l.kick.y += -dy * 2.4 * Math.random();
      });
    },
    update: function (dt, t) {
      if (!this.anchor) return;
      var ap = this.anchor.root.position;
      this.items.forEach(function (l) {
        l.kick.multiplyScalar(Math.exp(-1.15 * dt));
        l.mesh.position.set(
          ap.x + l.hx + Math.sin(t * l.sp + l.ph) * 0.4 + l.kick.x,
          ap.y + l.hy + Math.cos(t * l.sp * 0.83 + l.ph * 1.3) * 0.3 + l.kick.y,
          ap.z * 0.4 + l.hz + l.kick.z
        );
        l.mesh.rotation.x += l.rv.x * dt;
        l.mesh.rotation.y += l.rv.y * dt;
        l.mesh.rotation.z += l.rv.z * dt;
        var s = l.s.update(dt);
        l.mesh.scale.setScalar(Math.max(s, 0.0001));
        if (l.s.t === 0 && s < 0.01) l.mesh.visible = false;
      });
    }
  };

  (function buildLeaves() {
    var shape = new THREE.Shape();
    shape.moveTo(0, -0.5);
    shape.bezierCurveTo(0.3, -0.28, 0.3, 0.22, 0, 0.55);
    shape.bezierCurveTo(-0.3, 0.22, -0.3, -0.28, 0, -0.5);
    var geo = new THREE.ShapeGeometry(shape, 8);
    var cols = [0xeaaa00, 0x822468, 0x5a1848, 0xffbe26];
    for (var i = 0; i < 14; i++) {
      var mat = std({ color: cols[i % 4], roughness: 0.5, side: THREE.DoubleSide });
      var mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      bookRoot.add(mesh);
      leaves.items.push({
        mesh: mesh,
        hx: (Math.random() - 0.5) * 4.6,
        hy: (Math.random() - 0.5) * 3.2,
        hz: -0.5 + Math.random() * 1.5,
        sp: 0.3 + Math.random() * 0.5,
        ph: Math.random() * 6.28,
        rv: new THREE.Vector3((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8),
        kick: new THREE.Vector3(),
        size: 0.12 + Math.random() * 0.14,
        s: new Spring(0, 60, 10)
      });
    }
  })();

  var state = { mode: 'hero', selected: null, hovered: null };
  var entered = RM; /* books rise into place the first time the section is on screen */
  var scrollTilt = 0;
  var SLOTS = { hero: [], detail: null, portrait: false };

  function computeSlots() {
    var a = dims.w / Math.max(1, dims.h);
    var portrait = a < 0.95;
    var fit = portrait ? clamp(a / 1.1, 0.45, 0.72) : clamp(a / 2.05, 0.52, 0.86);
    bookRoot.scale.setScalar(fit);
    bookRoot.position.y = -(1 - fit) * 0.16;
    SLOTS.portrait = portrait;

    SLOTS.hero = portrait
      ? [
        { p: [-0.95, -0.26, 0.4], r: [-0.05, 0.22, 0.08], s: 1.14 },
        { p: [0.95, -0.26, 0.4], r: [-0.05, -0.22, -0.08], s: 1.14 }
      ]
      : [
        { p: [-1.28, -0.20, 0.4], r: [-0.05, 0.2, 0.06], s: 1.16 },
        { p: [1.28, -0.20, 0.4], r: [-0.05, -0.2, -0.06], s: 1.16 }
      ];

    if (portrait) {
      SLOTS.detail = { p: [0, 0.45, 0.85], r: [0, 0, 0], s: 0.72 };
    } else {
      SLOTS.detail = { p: [-1.45, 0.0, 0.95], r: [0, -0.06, 0], s: 1.05 };
    }
  }

  function setTargets(b, slot) {
    var s = b.springs;
    s.px.t = slot.p[0];
    s.py.t = slot.p[1];
    s.pz.t = slot.p[2];
    s.rx.t = slot.r[0];
    s.ry.t = slot.r[1];
    s.rz.t = slot.r[2];
    b.slotScale = slot.s;
  }

  var EASE = {
    hold: function () { return 1; },
    outQuad: function (t) { return 1 - (1 - t) * (1 - t); },
    outQuint: function (t) { return 1 - Math.pow(1 - t, 5); },
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; }
  };

  function playY(b, segs) {
    b.exit = { segs: segs, i: 0, t: 0 };
  }

  function stepY(b, dt) {
    var ex = b.exit;
    var s = b.springs;
    ex.t += dt;
    var seg = ex.segs[ex.i];
    while (seg && ex.t >= seg.d) {
      ex.t -= seg.d;
      s.py.v = seg.to;
      if (seg.end) seg.end();
      seg = ex.segs[++ex.i];
    }
    if (seg) s.py.v = seg.from + (seg.to - seg.from) * seg.ease(ex.t / seg.d);
    else b.exit = null;
    s.py.t = s.py.v;
    s.py.vel = 0;
  }

  function pinInPlace(b) {
    var s = b.springs;
    s.px.t = s.px.v;
    s.pz.t = s.pz.v;
    s.rx.t = s.rx.v;
    s.ry.t = s.ry.v;
    s.rz.t = s.rz.v;
  }

  function sendOut(b, i, delay) {
    var y0 = SLOTS.hero[i].p[1];
    var here = b.springs.py.v;
    var apex = y0 + 0.38;
    b.root.visible = true;
    pinInPlace(b);
    playY(b, [
      { d: delay, from: here, to: here, ease: EASE.hold },
      { d: 0.28, from: here, to: apex, ease: EASE.outQuad },
      { d: 0.9, from: apex, to: y0 - 4.2, ease: EASE.inOutSine, end: function () { b.root.visible = false; } }
    ]);
  }

  function bringBack(b, i, delay) {
    var here = b.springs.py.v;
    b.root.visible = true;
    pinInPlace(b);
    playY(b, [
      { d: delay, from: here, to: here, ease: EASE.hold },
      { d: 1.0, from: here, to: SLOTS.hero[i].p[1], ease: EASE.outQuint }
    ]);
  }

  function applyMode() {
    if (!entered && state.mode === 'hero') return;
    if (state.mode === 'hero' || state.mode === 'closing') {
      books.forEach(function (b, i) {
        var slot = SLOTS.hero[i];
        if (slot) setTargets(b, slot);
      });
    } else if (state.selected) {
      setTargets(state.selected, SLOTS.detail);
    }
  }

  var camX = new Spring(0, 13, 6.5);
  var camY = new Spring(0.1, 13, 6.5);
  var camZ = new Spring(9.6, 13, 6.5);
  var lookX = new Spring(0, 13, 6.5);
  var lookY = new Spring(0, 13, 6.5);

  function camTo(mode) {
    if (mode === 'detail') {
      camX.t = 0;
      camZ.t = SLOTS.portrait ? 10.4 : 9.6;
      lookX.t = 0;
      lookY.t = SLOTS.portrait ? 0.08 : 0;
    } else {
      camX.t = 0;
      camZ.t = 9.6;
      lookX.t = 0;
      lookY.t = 0;
    }
  }

  function openBook(book) {
    if (state.mode !== 'hero' || !book) return;
    state.mode = 'opening';
    state.selected = book;
    root.setAttribute('data-state', 'opening');

    if (badgeEl) badgeEl.textContent = book.cfg.badge;
    if (titleEl) titleEl.textContent = book.cfg.title;
    if (descEl) descEl.textContent = book.cfg.desc;
    if (yearEl) yearEl.textContent = book.cfg.year;
    if (sourceEl) sourceEl.textContent = book.cfg.source;
    if (actionPrimary) actionPrimary.href = (book.cfg.photos && book.cfg.photos.length > 0) ? book.cfg.photos[0].src : '';

    var galleryEl = document.getElementById('showcaseGallery');
    var galleryItemsEl = document.getElementById('showcaseGalleryItems');
    if (galleryEl && galleryItemsEl) {
      galleryItemsEl.innerHTML = '';
      if (book.cfg.photos && book.cfg.photos.length > 0) {
        galleryEl.style.display = 'block';
        book.cfg.photos.forEach(function (photo, idx) {
          var li = document.createElement('li');
          li.className = 'image-reveal__li';

          var a = document.createElement('a');
          a.className = 'image-reveal__item' + (idx === 0 ? ' image-reveal__item--active' : '');
          a.href = photo.href || photo.src || '#';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.setAttribute('aria-label', photo.title);

          var img = document.createElement('img');
          img.className = 'image-reveal__img';
          img.src = photo.image || photo.src;
          img.alt = photo.title;
          img.loading = 'eager';
          img.decoding = 'async';

          var numSpan = document.createElement('span');
          numSpan.className = 'image-reveal__num';
          numSpan.textContent = photo.number || String(idx + 1).padStart(2, '0');

          var titleSpan = document.createElement('span');
          titleSpan.className = 'image-reveal__title';
          titleSpan.textContent = photo.title;

          a.appendChild(img);
          a.appendChild(numSpan);
          a.appendChild(titleSpan);

          if (photo.subtitle) {
            var subSpan = document.createElement('span');
            subSpan.className = 'image-reveal__sub';
            subSpan.textContent = photo.subtitle;
            a.appendChild(subSpan);
          }

          function activate() {
            galleryItemsEl.querySelectorAll('.image-reveal__item').forEach(function (el) {
              el.classList.remove('image-reveal__item--active');
            });
            a.classList.add('image-reveal__item--active');
            if (actionPrimary) actionPrimary.href = photo.href || photo.src;
          }

          a.addEventListener('mouseenter', activate);
          a.addEventListener('focus', activate);
          a.addEventListener('click', function () {
            activate();
          });

          li.appendChild(a);
          galleryItemsEl.appendChild(li);
        });
      } else {
        galleryEl.style.display = 'none';
      }
    }

    computeSlots();
    applyMode();
    camTo('detail');

    var out = 0;
    books.forEach(function (b, i) {
      if (b !== book) sendOut(b, i, out++ * 0.08);
    });

    book.orbY = 0;
    book.orbYv = 0;
    book.orbPhase = 'idle';
    book.orbTarget = 0;
    book.orbXs.set(0);

    setTimeout(function () {
      leaves.activate(book);
    }, 400);

    setTimeout(function () {
      if (state.mode === 'opening') {
        books.forEach(function (sibling) {
          if (sibling !== book) {
            sibling.exit = null;
            sibling.root.visible = false;
          }
        });
        state.mode = 'detail';
        root.setAttribute('data-state', 'detail');
      }
    }, 850);
  }

  function closeBook() {
    if (state.mode !== 'detail') return;
    state.mode = 'closing';
    root.setAttribute('data-state', 'closing');
    leaves.deactivate();
    orbit.drag = false;

    var b = state.selected;
    if (b) {
      b.orbTarget = 0;
      b.orbY = 0;
      b.orbYv = 0;
      b.orbPhase = 'idle';
      b.orbXs.t = 0;
    }

    setTimeout(function () {
      applyMode();
      camTo('hero');
      var back = 0;
      books.forEach(function (bk, i) {
        if (bk !== b) bringBack(bk, i, 0.3 + back++ * 0.08);
      });
    }, 120);

    setTimeout(function () {
      if (state.mode === 'closing') {
        state.mode = 'hero';
        root.setAttribute('data-state', 'hero');
        state.selected = null;
      }
    }, 950);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeBook);
  if (actionCloseBtn) actionCloseBtn.addEventListener('click', closeBook);

  var ptr = {
    ndcX: 0, ndcY: 0, cx: 0, cy: 0, lastX: 0, lastY: 0,
    down: false, downX: 0, downY: 0, moved: 0, t0: 0, seen: false
  };
  var dragBook = null, rayBook = null;
  var orbit = { drag: false, dxAcc: 0, dyAcc: 0 };
  var ray = new THREE.Raycaster();
  var tmpV = new THREE.Vector3();

  function localXY(e) {
    var r = root.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function castRay() {
    ray.setFromCamera({ x: ptr.ndcX, y: ptr.ndcY }, camera);
    var hits = ray.intersectObjects(hitMeshes, false);
    if (hits.length) {
      rayBook = books.find(function (b) { return b.hit === hits[0].object; }) || null;
    } else {
      rayBook = null;
    }
  }

  canvasEl.addEventListener('pointermove', function (e) {
    var p = localXY(e);
    var dxN = (p.x - ptr.lastX) / dims.w;
    var dyN = (p.y - ptr.lastY) / dims.h;
    ptr.lastX = p.x;
    ptr.lastY = p.y;
    ptr.cx = p.x;
    ptr.cy = p.y;
    ptr.ndcX = (p.x / dims.w) * 2 - 1;
    ptr.ndcY = -(p.y / dims.h) * 2 + 1;
    ptr.seen = true;

    if (state.mode === 'detail') leaves.push(dxN, dyN);

    if (ptr.down && orbit.drag) {
      orbit.dxAcc += dxN;
      orbit.dyAcc += dyN;
      ptr.moved += Math.abs(dxN * dims.w) + Math.abs(dyN * dims.h);
    }
  });

  canvasEl.addEventListener('pointerdown', function (e) {
    var p = localXY(e);
    ptr.down = true;
    ptr.cx = p.x; ptr.cy = p.y;
    ptr.lastX = p.x; ptr.lastY = p.y;
    ptr.downX = p.x; ptr.downY = p.y;
    ptr.ndcX = (p.x / dims.w) * 2 - 1;
    ptr.ndcY = -(p.y / dims.h) * 2 + 1;
    ptr.moved = 0;
    ptr.t0 = performance.now();
    ptr.seen = true;
    castRay();

    if (state.mode === 'hero' && rayBook) {
      dragBook = rayBook;
    } else if (state.mode === 'detail' && rayBook === state.selected) {
      orbit.drag = true;
      orbit.dxAcc = 0;
      orbit.dyAcc = 0;
    }
  });

  window.addEventListener('pointerup', function () {
    orbit.drag = false;
    if (dragBook) {
      var limit = 450;
      if (ptr.moved < 18 && state.mode === 'hero' && performance.now() - ptr.t0 < limit) {
        openBook(dragBook);
      }
      dragBook = null;
    }
    ptr.down = false;
  });

  function tickBook(b, dt, t) {
    var s = b.springs;
    var isHov = state.hovered === b;
    var inDetail = state.mode === 'detail' && state.selected === b;
    var orbitActive = state.selected === b && state.mode !== 'hero';

    var activity = 0;
    if (orbitActive) {
      if (orbit.drag && inDetail) {
        var step = orbit.dxAcc * 6.5;
        orbit.dxAcc = 0;
        b.orbY += step;
        b.orbYv = clamp(b.orbYv * 0.5 + (step / Math.max(dt, 0.001)) * 0.5, -14, 14);
        b.orbXs.t = clamp(b.orbXs.t + orbit.dyAcc * 3.2, -0.55, 0.55);
        orbit.dyAcc = 0;
        b.orbPhase = 'drag';
      } else {
        b.orbXs.t = 0;
        if (b.orbPhase === 'drag') {
          if (Math.abs(b.orbYv) > 0.6) b.orbPhase = 'spin';
          else {
            b.orbPhase = 'return';
            b.orbTarget = Math.round((b.orbY + b.orbYv * 1.2) / (Math.PI * 2)) * (Math.PI * 2);
          }
        }
        if (b.orbPhase === 'spin') {
          b.orbYv *= Math.exp(-0.9 * dt);
          b.orbY += b.orbYv * dt;
          if (Math.abs(b.orbYv) < 0.5) {
            b.orbPhase = 'return';
            b.orbTarget = Math.round((b.orbY + b.orbYv * 1.2) / (Math.PI * 2)) * (Math.PI * 2);
          }
        } else if (b.orbPhase === 'return') {
          var acc = 16 * (b.orbTarget - b.orbY) - 8 * b.orbYv;
          b.orbYv += acc * dt;
          b.orbY += b.orbYv * dt;
          if (Math.abs(b.orbTarget - b.orbY) < 0.002 && Math.abs(b.orbYv) < 0.01) {
            b.orbY = b.orbTarget;
            b.orbYv = 0;
            b.orbPhase = 'idle';
          }
        }
      }
      var distRest = Math.abs(b.orbY - Math.round(b.orbY / 6.2832) * 6.2832);
      activity = clamp(Math.abs(b.orbYv) * 1.5 + (orbit.drag ? 1 : 0) + distRest * 2, 0, 1);
    }
    b.orbXs.update(dt);

    var inDetailOrOpening = (state.mode === 'detail' || state.mode === 'opening') && state.selected === b;
    var coverBase = 0;
    if (inDetailOrOpening) coverBase = 1.65 + Math.sin(t * 0.8 + b.phase) * 0.035;
    var fan = orbitActive ? clamp(b.orbYv * 0.16, 0, 0.75) : 0;
    var fanB = orbitActive ? clamp(-b.orbYv * 0.16, 0, 0.75) : 0;

    if (isHov && ptr.seen && state.mode === 'hero') {
      b.root.getWorldPosition(tmpV).project(camera);
      b.scr.x = (tmpV.x * 0.5 + 0.5) * dims.w;
      b.scr.y = (-tmpV.y * 0.5 + 0.5) * dims.h;

      var dxN = (ptr.cx - b.scr.x) / (dims.w * 0.25);
      var dyN = (b.scr.y - ptr.cy) / (dims.h * 0.3);
      s.tiltY.t = clamp(dxN * 0.28, -0.15, 0.15);
      s.tiltX.t = clamp(-dyN * 0.1, -0.09, 0.1);
      s.lift.t = 0.3;
    } else {
      s.tiltY.t = 0;
      s.tiltX.t = 0;
      s.lift.t = 0;
    }
    s.cover.t = coverBase + fan;
    s.coverB.t = (inDetail ? 0.2 : 0) + fanB;
    s.sc.t = b.slotScale * (isHov && state.mode === 'hero' ? 1.09 : 1);

    s.px.update(dt);
    if (b.exit) stepY(b, dt);
    else s.py.update(dt);
    s.pz.update(dt);
    s.rx.update(dt);
    s.ry.update(dt);
    s.rz.update(dt);
    s.sc.update(dt);
    s.tiltX.update(dt);
    s.tiltY.update(dt);
    s.lift.update(dt);
    s.cover.update(dt);
    s.coverB.update(dt);

    b.float.position.y = Math.sin(t * 0.7 + b.phase) * 0.035;
    b.root.position.set(s.px.v, s.py.v, s.pz.v + s.lift.v);
    var sway = inDetail ? Math.sin(t * 0.45 + b.phase) * 0.035 * (1 - activity) : 0;
    b.root.rotation.set(s.rx.v + s.tiltX.v + b.orbXs.v, s.ry.v + s.tiltY.v + b.orbY + sway, s.rz.v);
    b.root.scale.setScalar(Math.max(s.sc.v, 0.001));

    var ang = Math.max(0, s.cover.v);
    b.pivot.rotation.y = -ang;
    b.pivot.position.z = PIVOT_Z + ang * 0.022;
    for (var pIdx = 0; pIdx < b.pages.length; pIdx++) {
      b.pages[pIdx].rotation.y = -(ang * b.pageF[pIdx]);
    }
  }

  var clock = new THREE.Clock();
  var isInViewport = true;
  var rafId = 0;

  function animate() {
    if (!isInViewport || document.hidden) {
      rafId = 0;
      return;
    }
    rafId = requestAnimationFrame(animate);
    var dt = Math.min(clock.getDelta(), 0.05);
    var t = clock.getElapsedTime();

    if (ptr.seen) castRay();
    var hov = (state.mode === 'hero' ? rayBook : (rayBook === state.selected ? rayBook : null));
    state.hovered = hov;

    canvasEl.style.cursor = (state.mode === 'hero' && hov) ? 'pointer' : ((state.mode === 'detail' && orbit.drag) ? 'grabbing' : 'default');

    books.forEach(function (b) { tickBook(b, dt, t); });
    leaves.update(dt, t);

    /* Scroll-linked tilt: books lean gently as the section passes through the viewport */
    if (!RM) {
      var sr = root.getBoundingClientRect();
      var nrm = clamp(((sr.top + sr.height / 2) - window.innerHeight / 2) / window.innerHeight, -1, 1);
      var tiltTarget = nrm * (state.mode === 'hero' ? 1 : 0.3);
      scrollTilt += (tiltTarget - scrollTilt) * Math.min(1, dt * 6);
      bookRoot.rotation.x = scrollTilt * 0.12;
      bookRoot.rotation.y = -scrollTilt * 0.07;
    }

    camera.position.set(camX.update(dt), camY.update(dt), camZ.update(dt));
    camera.lookAt(lookX.update(dt), lookY.update(dt), 0);

    // Trailing Open Button
    if (openBtn && state.mode === 'hero' && state.hovered && ptr.seen) {
      openBtn.style.left = ptr.cx + 'px';
      openBtn.style.top = (ptr.cy + 34) + 'px';
      openBtn.classList.add('book-showcase__open-btn--visible');
    } else if (openBtn) {
      openBtn.classList.remove('book-showcase__open-btn--visible');
    }

    renderer.render(scene, camera);
  }

  function relayout() {
    var r = root.getBoundingClientRect();
    dims.w = Math.max(1, Math.round(r.width));
    dims.h = Math.max(1, Math.round(r.height));
    renderer.setSize(dims.w, dims.h);
    camera.aspect = dims.w / dims.h;
    camera.updateProjectionMatrix();
    computeSlots();
    applyMode();
  }

  relayout();
  books.forEach(function (b, i) {
    var slot = SLOTS.hero[i];
    var s = b.springs;
    s.px.set(slot.p[0]);
    s.py.set(slot.p[1] - 3.5);
    s.pz.set(slot.p[2]);
    s.rx.set(slot.r[0]);
    s.ry.set(slot.r[1]);
    s.rz.set(slot.r[2]);
    s.sc.set(slot.s);
    b.enterSlot = slot;
    b.enterDelay = 200 + i * 150;
    if (entered) setTimeout(function () { setTargets(b, slot); }, b.enterDelay);
  });

  function enterShowcase() {
    if (entered) return;
    entered = true;
    books.forEach(function (b) {
      setTimeout(function () { setTargets(b, b.enterSlot); }, b.enterDelay);
    });
  }

  if (!entered && 'IntersectionObserver' in window) {
    var enterObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        enterObserver.disconnect();
        enterShowcase();
      }
    }, { threshold: 0.3 });
    enterObserver.observe(root);
  } else {
    enterShowcase();
  }

  animate();

  var observer = new IntersectionObserver(function (entries) {
    isInViewport = entries[0].isIntersecting;
    if (isInViewport && !rafId) {
      clock.start();
      animate();
    }
  }, { rootMargin: '120px' });
  observer.observe(root);

  window.addEventListener('resize', relayout);
})();

/* ── Offline Connection Detector ─────────────────── */
(function () {
  var overlay = document.getElementById('offlineOverlay');
  var statusText = document.getElementById('offlineStatusText');
  if (!overlay) return;

  function setOffline() {
    overlay.classList.add('offline-overlay--active');
    overlay.setAttribute('aria-hidden', 'false');
    if (statusText) statusText.textContent = 'Attempting to reconnect...';
  }

  function setOnline() {
    if (statusText) statusText.textContent = 'Connection restored!';
    setTimeout(function () {
      overlay.classList.remove('offline-overlay--active');
      overlay.setAttribute('aria-hidden', 'true');
    }, 700);
  }

  window.addEventListener('offline', setOffline);
  window.addEventListener('online', setOnline);

  if (typeof navigator.onLine === 'boolean' && !navigator.onLine) {
    setOffline();
  }
})();

/* ── Swinging Lanyard Badge (Hero) — Hallmark compliant ─────────────────────── */
(function () {
  var canvas = document.getElementById('badgeCanvas');
  if (!canvas) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var dpr = Math.min(window.devicePixelRatio || 1, 1.3);

  // ─── Constants ───
  var N = 10;
  var SUB = 1 / 200;
  var SLOT_Y = 27;
  var MAX_SLOT_BEND = (32 * Math.PI) / 180;
  var MIN_CRIMP_ANGLE = (105 * Math.PI) / 180;

  // ─── Read tokens from CSS ───
  function getToken(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  var tokens = {
    strapColor: getToken('--brand-marigold') || '#EAAA00',
    cardColor: getToken('--color-ink-deep') || '#1A0615',
    strapColorMuted: getToken('--color-ink-2') || '#AAA88E',
    clipColor: getToken('--color-ink-2') || '#A6A5AD',
    holderColor: getToken('--color-paper') || '#F7F7F7',
    borderColor: getToken('--color-rule-strong') || '#D0D0D2',
    shadowColor: getToken('--color-ink') || '#000000',
    accent: getToken('--color-accent') || '#EAAA00',
    accentWarm: getToken('--color-accent-warm') || '#FF9400',
    paper: getToken('--color-paper') || '#DFE5EA',
    ink: getToken('--color-ink') || '#3A0F34',
    inkDeep: getToken('--color-ink-deep') || '#250721',
  };

  // ─── Default Props — tuned for hero: card aligns with headline ───
  var props = {
    background: 'transparent',
    strapColor: tokens.strapColor,
    cardColor: tokens.cardColor,
    image: { src: 'assets/avatar.jpg', alt: 'Hiten Borkar' },
    imageOffsetY: 0,
    size: 270,
    ropeLength: 26,
    gravity: 40,
    damping: 55,
    speed: 45,
    advanced: {
      hover: 80,
      grain: 0,
      vignette: 0,
      stretch: 30,
      dragStiffness: 60,
      ropeWeight: 20,
      iterations: 8,
      anchorY: 0,
      strapSpread: 85,
      strapWidth: 12,
      strapSheen: 25,
      clipLength: 68,
      clipColor: tokens.clipColor,
      holderWidth: 60,
      holderColor: tokens.holderColor,
      holderOpacity: 94,
      holderRadius: 9,
      borderColor: tokens.borderColor,
      insertTop: 64,
      insertMargin: 14,
      holeSize: 21,
      gloss: 35,
      shadowColor: tokens.shadowColor,
      shadowOpacity: 45,
      shadowBlur: 20,
      shadowX: 15,
      shadowY: 20,
    }
  };

  // ─── Update tokens on theme change ───
  function refreshTokens() {
    tokens.strapColor = getToken('--brand-marigold') || '#EAAA00';
    tokens.cardColor = getToken('--color-ink-deep') || '#1A0615';
    tokens.strapColorMuted = getToken('--color-ink-2') || '#AAA88E';
    tokens.clipColor = getToken('--color-ink-2') || '#A6A5AD';
    tokens.holderColor = getToken('--color-paper') || '#F7F7F7';
    tokens.borderColor = getToken('--color-rule-strong') || '#D0D0D2';
    tokens.shadowColor = getToken('--color-ink') || '#000000';
    tokens.accent = getToken('--color-accent') || '#EAAA00';
    tokens.accentWarm = getToken('--color-accent-warm') || '#FF9400';
    tokens.paper = getToken('--color-paper') || '#DFE5EA';
    tokens.ink = getToken('--color-ink') || '#3A0F34';
    tokens.inkDeep = getToken('--color-ink-deep') || '#250721';

    props.strapColor = tokens.strapColor;
    props.cardColor = tokens.cardColor;
    props.advanced.clipColor = tokens.clipColor;
    props.advanced.holderColor = tokens.holderColor;
    props.advanced.borderColor = tokens.borderColor;
    props.advanced.shadowColor = tokens.shadowColor;
  }

  if (!prefersReduced) {
    var themeObserver = new MutationObserver(function() { refreshTokens(); });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  // ─── Helpers ───
  function parseColor(c) {
    if (!c || typeof c !== 'string') return [0, 0, 0, 1];
    var s = c.trim();
    if (s[0] === '#') {
      var h = s.slice(1);
      if (h.length === 3 || h.length === 4) h = h.split('').map(function(x){return x+x;}).join('');
      var n = parseInt(h.slice(0, 6), 16);
      var a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255, a];
    }
    var m = s.match(/rgba?\(([^)]+)\)/);
    if (m) {
      var p = m[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
      return [p[0] || 0, p[1] || 0, p[2] || 0, p[3] ?? 1];
    }
    return [0, 0, 0, 1];
  }

  function rgba(c, a) {
    var _parseColor = parseColor(c), r = _parseColor[0], g = _parseColor[1], b = _parseColor[2], al = _parseColor[3];
    return 'rgba(' + (r|0) + ',' + (g|0) + ',' + (b|0) + ',' + (al * (a || 1)) + ')';
  }

  function mix(c1, c2, t) {
    var a = parseColor(c1), b = parseColor(c2);
    var k = Math.max(0, Math.min(1, t));
    return 'rgba(' +
      ((a[0] + (b[0] - a[0]) * k) | 0) + ',' +
      ((a[1] + (b[1] - a[1]) * k) | 0) + ',' +
      ((a[2] + (b[2] - a[2]) * k) | 0) + ',' +
      (a[3] + (b[3] - a[3]) * k) + ')';
  }

  function imageSrc(v) {
    if (!v) return undefined;
    if (typeof v === 'string') return v;
    if (typeof v.src === 'string' && v.src) return v.src;
    return undefined;
  }

  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function rr(ctx, x, y, w, h, r) {
    var k = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + k, y);
    ctx.arcTo(x + w, y, x + w, y + h, k);
    ctx.arcTo(x + w, y + h, x, y + h, k);
    ctx.arcTo(x, y + h, x, y, k);
    ctx.arcTo(x, y, x + w, y, k);
    ctx.closePath();
  }

  // ─── Image Cache ───
  var IMAGE_CACHE = new Map();
  function getImage(src) {
    if (!src) return null;
    var img = IMAGE_CACHE.get(src);
    if (!img) {
      img = new Image();
      img.decoding = 'async';
      img.src = src;
      IMAGE_CACHE.set(src, img);
    }
    return (img.complete && img.naturalWidth > 0) ? img : null;
  }

  // ─── Noise/Grain ───
  var noise = document.createElement('canvas');
  noise.width = 128; noise.height = 128;
  var nctx = noise.getContext('2d');
  if (nctx) {
    var id = nctx.createImageData(128, 128);
    for (var i = 0; i < id.data.length; i += 4) {
      var v = Math.random() < 0.5 ? 0 : 255;
      id.data[i] = v; id.data[i+1] = v; id.data[i+2] = v; id.data[i+3] = Math.random() * 120;
    }
    nctx.putImageData(id, 0, 0);
  }
  var grainPattern = null;

  // ─── State ───
  var W = 0, H = 0;
  var raf = 0, last = -1, acc = 0, ready = false, visible = true;
  var vx0 = 0, vy0 = 0, vx1 = 0, vy1 = 0;

  var iJ = N;
  var iRA = N + 1;
  var iP = 2 * N + 1;
  var iB = 2 * N + 2;

  var pts = [];
  for (var i = 0; i <= iB; i++) pts.push({ x: 0, y: 0, px: 0, py: 0, im: 1 });

  var leftIdx = [], rightIdx = [];
  for (var k = 0; k < N; k++) leftIdx.push(k);
  leftIdx.push(iJ);
  for (var k = 0; k < N; k++) rightIdx.push(iRA + k);
  rightIdx.push(iJ);

  var ptrX = 0, ptrY = 0, over = 0, overTarget = 0;
  var userDrag = null;

  // ─── Geometry ───
  function advOf(v) {
    var base = {
      hover: 100, grain: 0, vignette: 0, stretch: 50, dragStiffness: 50,
      ropeWeight: 30, iterations: 12, anchorY: 0, strapSpread: 95,
      strapWidth: 14, strapSheen: 30, clipLength: 68, clipColor: tokens.clipColor,
      holderWidth: 62, holderColor: tokens.holderColor, holderOpacity: 94,
      holderRadius: 9, borderColor: tokens.borderColor, insertTop: 64,
      insertMargin: 14, holeSize: 21, gloss: 35,
      shadowColor: tokens.shadowColor, shadowOpacity: 45, shadowBlur: 20,
      shadowX: 15, shadowY: 20
    };
    return Object.assign({}, base, v.advanced || {});
  }

  function geom(v, adv) {
    var sz = Math.max(50, v.size);
    var s = sz / 400;
    var cx = W / 2;
    var ay = (adv.anchorY / 100) * H;
    var jy = (v.ropeLength / 100) * H;
    var spread = adv.strapSpread * s;
    var clipLen = adv.clipLength * s;
    var slotY = SLOT_Y * s;
    var hH = sz;
    var hW = (sz * adv.holderWidth) / 100;
    var stick = hH - slotY;
    var segL = Math.hypot(spread, jy - ay) / N;
    var minJB = Math.sqrt(clipLen * clipLen + stick * stick + 2 * clipLen * stick * Math.cos(MAX_SLOT_BEND));
    var minSP = Math.sqrt(segL * segL + clipLen * clipLen - 2 * segL * clipLen * Math.cos(MIN_CRIMP_ANGLE));
    return { s: s, cx: cx, ay: ay, jy: jy, spread: spread, clipLen: clipLen, slotY: slotY, hH: hH, hW: hW, stick: stick, segL: segL, minJB: minJB, minSP: minSP };
  }

  function place(G) {
    for (var k = 0; k <= N; k++) {
      var t = k / N;
      var l = pts[leftIdx[k]];
      l.x = G.cx - G.spread * (1 - t);
      l.y = G.ay + (G.jy - G.ay) * t;
      var r = pts[rightIdx[k]];
      r.x = G.cx + G.spread * (1 - t);
      r.y = G.ay + (G.jy - G.ay) * t;
    }
    pts[iP].x = G.cx; pts[iP].y = G.jy + G.clipLen;
    pts[iB].x = G.cx; pts[iB].y = G.jy + G.clipLen + G.stick;
    for (var i = 0; i < pts.length; i++) { pts[i].px = pts[i].x; pts[i].py = pts[i].y; }
  }

  function grabPoint(t, lx) {
    var P = pts[iP], B = pts[iB];
    var len = Math.hypot(B.x - P.x, B.y - P.y) || 1;
    var ux = (B.x - P.x) / len, uy = (B.y - P.y) / len;
    return { x: P.x + ux * t * len + uy * lx, y: P.y + uy * t * len - ux * lx };
  }

  function satisfy(a, b, rest) {
    var dx = b.x - a.x, dy = b.y - a.y;
    var d = Math.hypot(dx, dy) || 1e-6;
    var w = a.im + b.im; if (!w) return;
    var diff = (d - rest) / (d * w);
    a.x += dx * diff * a.im; a.y += dy * diff * a.im;
    b.x -= dx * diff * b.im; b.y -= dy * diff * b.im;
  }

  function apart(a, b, minD) {
    var dx = b.x - a.x, dy = b.y - a.y;
    var d = Math.hypot(dx, dy) || 1e-6;
    if (d >= minD) return;
    var w = a.im + b.im; if (!w) return;
    var diff = (d - minD) / (d * w);
    a.x += dx * diff * a.im; a.y += dy * diff * a.im;
    b.x -= dx * diff * b.im; b.y -= dy * diff * b.im;
  }

  function soft(a, b, rest, k) {
    var dx = b.x - a.x, dy = b.y - a.y;
    var d = Math.hypot(dx, dy) || 1e-6;
    var w = a.im + b.im; if (!w) return;
    var diff = ((d - rest) / (d * w)) * k;
    a.x += dx * diff * a.im; a.y += dy * diff * a.im;
    b.x -= dx * diff * b.im; b.y -= dy * diff * b.im;
  }

  function tether(A, p, maxD) {
    var dx = p.x - A.x, dy = p.y - A.y;
    var d = Math.hypot(dx, dy);
    if (d > maxD && d > 0) { p.x = A.x + (dx / d) * maxD; p.y = A.y + (dy / d) * maxD; }
  }

  function keepIn(G) {
    var P = pts[iP], B = pts[iB];
    var pad = G.s + 1, hw = G.hW / 2;
    var xOk = vx1 - vx0 > G.hW + 2 * pad;
    var yOk = vy1 - vy0 > G.hH + 2 * pad;
    if (!xOk && !yOk) return;
    for (var tIdx = 0; tIdx < 2; tIdx++) {
      var t = tIdx === 0 ? -G.slotY / G.stick : 1;
      for (var side = -1; side <= 1; side += 2) {
        var len = Math.hypot(B.x - P.x, B.y - P.y) || 1;
        var ux = (B.x - P.x) / len, uy = (B.y - P.y) / len;
        var cx = P.x + ux * t * len + uy * side * hw;
        var cy = P.y + uy * t * len - ux * side * hw;
        var dx = 0, dy = 0;
        if (xOk) dx = Math.max(0, vx0 + pad - cx) + Math.min(0, vx1 - pad - cx);
        if (yOk && tIdx === 0) {
          // Keep top of card from rising past ceiling
          dy = Math.max(0, vy0 + pad - cy);
        }
        if (!dx && !dy) continue;
        var den = (1 - t) * (1 - t) + t * t;
        P.x += (dx * (1 - t)) / den; P.y += (dy * (1 - t)) / den;
        B.x += (dx * t) / den; B.y += (dy * t) / den;
      }
    }
  }

  function step(h, v, adv, G, hoverAmt, settling) {
    var ropeIm = 1 / Math.max(0.02, (adv.ropeWeight / 100) * 0.5);
    for (var i = 0; i < pts.length; i++) pts[i].im = ropeIm;
    pts[iP].im = 1; pts[iB].im = 1;
    var LA = pts[0], RA = pts[iRA];
    LA.im = 0; RA.im = 0;
    LA.x = LA.px = G.cx - G.spread; LA.y = LA.py = G.ay;
    RA.x = RA.px = G.cx + G.spread; RA.y = RA.py = G.ay;

    var g = 15 * H * (Math.max(0, v.gravity) / 50);
    var c = settling ? 12 : 2 * (Math.max(0, v.damping) / 50);
    var keep = Math.exp(-c * h);
    var maxStep = H * 0.04;

    for (var i = 0; i < pts.length; i++) {
      var p = pts[i]; if (p.im === 0) continue;
      var vx = (p.x - p.px) * keep, vy = (p.y - p.py) * keep;
      var sp = Math.hypot(vx, vy);
      if (sp > maxStep) { vx *= maxStep / sp; vy *= maxStep / sp; }
      p.px = p.x; p.py = p.y;
      p.x += vx; p.y += vy + g * h * h;
    }

    var grab = settling ? null : userDrag;
    if (!settling && !grab && hoverAmt > 0 && over > 0.001) {
      var B = pts[iB];
      B.x += (ptrX - B.x) * 10 * hoverAmt * over * h * h;
    }
    if (grab) {
      var P = pts[iP], B = pts[iB];
      var gp = grabPoint(grab.t, grab.lx);
      var f = 1 - Math.exp(-((adv.dragStiffness / 50) * 20) * h);
      var dX = (grab.tx - gp.x) * f, dY = (grab.ty - gp.y) * f;
      var t = grab.t, den = (1 - t) * (1 - t) + t * t;
      P.x += (dX * (1 - t)) / den; P.y += (dY * (1 - t)) / den;
      B.x += (dX * t) / den; B.y += (dY * t) / den;
    }

    var iters = Math.max(1, Math.min(15, Math.round(adv.iterations)));
    var give = Math.max(0, Math.min(1, adv.stretch / 100));
    var kStep = 1 - 0.12 * give;
    var kIter = give <= 0 ? 1 : 1 - Math.pow(1 - kStep, 1 / iters);
    var reach = 1 + 0.5 * give;

    for (var it = 0; it < iters; it++) {
      for (var k = 0; k < N; k++) {
        soft(pts[leftIdx[k]], pts[leftIdx[k + 1]], G.segL, kIter);
        soft(pts[rightIdx[k]], pts[rightIdx[k + 1]], G.segL, kIter);
      }
      satisfy(pts[iJ], pts[iP], G.clipLen);
      satisfy(pts[iP], pts[iB], G.stick);
      for (var k = 1; k <= N; k++) {
        tether(LA, pts[leftIdx[k]], k * G.segL * reach);
        tether(RA, pts[rightIdx[k]], k * G.segL * reach);
      }
      satisfy(pts[leftIdx[N - 1]], pts[rightIdx[N - 1]], 0);
      apart(pts[iJ], pts[iB], G.minJB);
      apart(pts[leftIdx[N - 1]], pts[iP], G.minSP);
      apart(pts[rightIdx[N - 1]], pts[iP], G.minSP);
      satisfy(pts[iJ], pts[iP], G.clipLen);
      satisfy(pts[iP], pts[iB], G.stick);
      keepIn(G);
      if (pts[iB].y < pts[iP].y + G.stick * 0.7) {
        pts[iB].y = pts[iP].y + G.stick;
        pts[iB].x = pts[iP].x;
      }
    }
  }

  function settle() {
    var v = props, adv = advOf(v), G = geom(v, adv);
    place(G);
    for (var i = 0; i < 30; i++) step(SUB, v, adv, G, 0, true);
    for (var i = 0; i < pts.length; i++) { pts[i].px = pts[i].x; pts[i].py = pts[i].y; }
  }

  function settleAsync() {
    return new Promise(function(resolve) {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(function() { settle(); resolve(); }, { timeout: 500 });
      } else {
        setTimeout(function() { settle(); resolve(); }, 0);
      }
    });
  }

  // ─── Drawing Helpers ───
  var SHADOW_OFF = 20000;

  function withShadow(adv, s, draw) {
    ctx.save();
    ctx.shadowColor = rgba(adv.shadowColor, adv.shadowOpacity / 100);
    ctx.shadowBlur = adv.shadowBlur * s * dpr;
    ctx.shadowOffsetX = (SHADOW_OFF + adv.shadowX * s) * dpr;
    ctx.shadowOffsetY = adv.shadowY * s * dpr;
    ctx.translate(-SHADOW_OFF, 0);
    ctx.fillStyle = tokens.ink; ctx.strokeStyle = tokens.ink;
    draw();
    ctx.restore();
  }

  function polyline(list) {
    ctx.beginPath(); ctx.moveTo(list[0].x, list[0].y);
    for (var i = 1; i < list.length; i++) ctx.lineTo(list[i].x, list[i].y);
  }

  function angDiff(a, b) {
    var d = a - b;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    return Math.abs(d);
  }

  function smooth(e, first) {
    if (first) ctx.moveTo(e[0][0], e[0][1]); else ctx.lineTo(e[0][0], e[0][1]);
    for (var i = 1; i < e.length - 1; i++)
      ctx.quadraticCurveTo(e[i][0], e[i][1], (e[i][0] + e[i+1][0]) / 2, (e[i][1] + e[i+1][1]) / 2);
    ctx.lineTo(e[e.length-1][0], e[e.length-1][1]);
  }

  function strapEdges(list, base, width, restSeg, sMerge, sFull) {
    var n = list.length;
    var L = [], R = [], wf = [], fade = [], sUp = new Array(n);
    sUp[n-1] = 0;
    for (var i = n-2; i >= 0; i--) sUp[i] = sUp[i+1] + Math.hypot(list[i+1].x - list[i].x, list[i+1].y - list[i].y);
    for (var i = 0; i < n; i++) {
      var a = list[Math.max(0, i-1)], b = list[Math.min(n-1, i+1)];
      var tx = b.x - a.x, ty = b.y - a.y;
      var tl = Math.hypot(tx, ty) || 1;
      var ang = Math.atan2(ty, tx);
      var dev = angDiff(ang, base);
      var turn = 0.84 + 0.16 * Math.abs(Math.cos(Math.min(dev * 1.2, Math.PI / 2)));
      var ratio = tl / Math.max(1e-3, restSeg * (i === 0 || i === n-1 ? 1 : 2));
      var k = Math.max(0, Math.min(1, (sUp[i] - sMerge) / Math.max(1e-3, sFull - sMerge)));
      var fd = k * k * (3 - 2 * k);
      var f = 1 - (1 - turn * Math.max(0.72, Math.min(1, 1 - (ratio - 1) * 1.2))) * fd;
      wf.push(f); fade.push(fd);
      var nx = -ty / tl, ny = tx / tl;
      var hw = (width / 2) * f;
      L.push([list[i].x + nx * hw, list[i].y + ny * hw]);
      R.push([list[i].x - nx * hw, list[i].y - ny * hw]);
    }
    return { list: list, L: L, R: R, wf: wf, fade: fade };
  }

  function outline(st) {
    smooth(st.L, true);
    smooth(st.R.slice().reverse(), false);
    ctx.closePath();
  }

  function alongStrap(st, rgb, alpha) {
    var list = st.list, n = list.length;
    var x0 = list[0].x, y0 = list[0].y;
    var ax = list[n-1].x - x0, ay = list[n-1].y - y0;
    var aa = ax * ax + ay * ay || 1;
    var g = ctx.createLinearGradient(x0, y0, x0 + ax, y0 + ay);
    var t = 0;
    for (var i = 0; i < n; i++) {
      t = Math.max(t, Math.min(1, ((list[i].x - x0) * ax + (list[i].y - y0) * ay) / aa));
      g.addColorStop(t, 'rgba(' + rgb + ',' + Math.max(0, alpha(i)) + ')');
    }
    return g;
  }

  function drawStraps(left, right, baseL, baseR, width, color, sheen, restSeg) {
    var n = left.length, J = left[n-1], S = left[n-2];
    var stem = Math.hypot(S.x - J.x, S.y - J.y);
    var lx = left[n-3].x - S.x, ly = left[n-3].y - S.y;
    var rx = right[n-3].x - S.x, ry = right[n-3].y - S.y;
    var c = (lx * rx + ly * ry) / ((Math.hypot(lx, ly) * Math.hypot(rx, ry)) || 1);
    var half = Math.acos(Math.max(-1, Math.min(1, c))) / 2;
    var crotch = stem + Math.min(4 * width, width / 2 / Math.max(0.05, Math.sin(half)));
    var sMerge = crotch + 0.5 * width, sFull = sMerge + 2.5 * width;
    var A = strapEdges(left, baseL, width, restSeg, sMerge, sFull);
    var B = strapEdges(right, baseR, width, restSeg, sMerge, sFull);
    for (var si = 0; si < 2; si++) {
      var st = si === 0 ? A : B;
      ctx.beginPath(); outline(st); ctx.fillStyle = color; ctx.fill();
      if (st.wf.some(function(f){return f < 0.99;})) {
        ctx.beginPath(); outline(st);
        ctx.fillStyle = alongStrap(st, '0,0,0', function(i){return Math.min(0.3, (1 - st.wf[i]) * 1.6);});
        ctx.fill();
      }
      if (sheen > 0) {
        ctx.beginPath();
        smooth(st.L.map(function(l, i){return [l[0] + (st.R[i][0] - l[0]) * 0.3, l[1] + (st.R[i][1] - l[1]) * 0.3];}), true);
        ctx.strokeStyle = alongStrap(st, '255,255,255', function(i){return sheen * 0.3 * st.fade[i];});
        ctx.lineWidth = width * 0.22; ctx.lineJoin = 'round'; ctx.stroke();
      }
    }
  }

  var tileKey = '', tilePat = null, tileM = new DOMMatrix();
  function insertTile(img, color, iw, ih, offY) {
    var q = 2 * dpr;
    var tw = Math.ceil(iw * q) + 2, th = Math.ceil(ih * q) + 2;
    var off = Math.max(-250, Math.min(250, typeof offY === 'number' && isFinite(offY) ? offY : 0));
    var key = (img ? img.src : '') + '|' + color + '|' + tw + '|' + th + '|' + off;
    if (key === tileKey) return tilePat;
    tileKey = key; tilePat = null;
    var c = document.createElement('canvas'); c.width = tw; c.height = th;
    var t = c.getContext('2d'); if (!t) return null;
    t.fillStyle = color; t.fillRect(0, 0, tw, th);
    if (img) {
      var sc = Math.max(tw / img.naturalWidth, th / img.naturalHeight);
      var dw = img.naturalWidth * sc, dh = img.naturalHeight * sc;
      t.imageSmoothingQuality = 'high';
      t.drawImage(img, (tw - dw) / 2, (th - dh) * (0.5 - (off / 250) * 0.5), dw, dh);
    }
    tilePat = ctx.createPattern(c, 'no-repeat');
    return tilePat;
  }

  function drawCard(v, adv, G, ang, hoverAmt) {
    var s = G.s, P = pts[iP], top = -G.slotY, left = -G.hW / 2, r = adv.holderRadius * s;
    ctx.save(); ctx.translate(P.x, P.y); ctx.rotate(ang);

    var holeR = (adv.holeSize / 2) * s;
    var holeX = Math.min(80 * s, G.hW / 2 - holeR - 6 * s);
    var sleevePath = function() {
      rr(ctx, left, top, G.hW, G.hH, r);
      if (holeR > 0) for (var hi = 0; hi < 2; hi++) {
        var hx = hi === 0 ? -holeX : holeX;
        ctx.moveTo(hx + holeR, 0); ctx.arc(hx, 0, holeR, 0, Math.PI * 2);
      }
      var sw = 30 * s, sh = 6.5 * s;
      ctx.moveTo(-sw + sh, -sh); ctx.lineTo(sw - sh, -sh);
      ctx.arc(sw - sh, 0, sh, -Math.PI/2, Math.PI/2);
      ctx.lineTo(-sw + sh, sh); ctx.arc(-sw + sh, 0, sh, Math.PI/2, Math.PI*1.5);
      ctx.closePath();
    };

    ctx.globalAlpha = Math.max(0, Math.min(1, adv.holderOpacity / 100));
    ctx.fillStyle = adv.holderColor; sleevePath(); ctx.fill('evenodd');
    ctx.globalAlpha = 1;

    var m = adv.insertMargin * s;
    var ix = left + m, iy = top + adv.insertTop * s;
    var iw = G.hW - 2 * m, ih = G.hH - adv.insertTop * s - 8 * s;
    var img = getImage(imageSrc(v.image));
    var tile = insertTile(img, v.cardColor, iw, ih, v.imageOffsetY);
    if (tile) {
      tileM.a = tileM.d = 1 / (2 * dpr);
      tileM.e = ix - 1 / (2 * dpr); tileM.f = iy - 1 / (2 * dpr);
      tile.setTransform(tileM); ctx.fillStyle = tile;
    } else ctx.fillStyle = v.cardColor;
    ctx.fillRect(ix, iy, iw, ih);

    ctx.lineWidth = 1.5 * s; ctx.strokeStyle = adv.borderColor;
    for (var hi = 0; hi < 2; hi++) {
      var hx = hi === 0 ? -holeX : holeX;
      ctx.beginPath(); ctx.arc(hx, 0, holeR, 0, Math.PI * 2); ctx.stroke();
    }
    rr(ctx, -30 * s, -6.5 * s, 60 * s, 13 * s, 6.5 * s); ctx.stroke();
    ctx.lineWidth = 1 * s; ctx.strokeStyle = adv.borderColor;
    ctx.beginPath(); ctx.moveTo(left + 3 * s, top + 48 * s); ctx.lineTo(-left - 3 * s, top + 48 * s); ctx.stroke();
    ctx.strokeStyle = tokens.clipColor;
    ctx.beginPath(); ctx.moveTo(left + 3 * s, top + 51 * s); ctx.lineTo(-left - 3 * s, top + 51 * s); ctx.stroke();

    var gl = adv.gloss / 100;
    if (gl > 0) {
      var lg = ctx.createLinearGradient(left, 0, -left, 0);
      lg.addColorStop(0, 'rgba(255,255,255,' + (0.7 * gl) + ')');
      lg.addColorStop(0.1, 'rgba(255,255,255,0)');
      lg.addColorStop(0.86, 'rgba(0,0,0,0)');
      lg.addColorStop(1, 'rgba(0,0,0,' + (0.14 * gl) + ')');
      ctx.fillStyle = lg; sleevePath(); ctx.fill('evenodd');
      var sp = 0.35 + Math.sin(ang) * 1.1 + over * hoverAmt * ((ptrX - P.x) / Math.max(1, W)) * 0.6;
      if (sp > -0.15 && sp < 1.15) {
        var bg = ctx.createLinearGradient(left, top, -left, top + G.hH);
        var a = Math.max(0, Math.min(1, sp - 0.14)), b = Math.max(0, Math.min(1, sp)), c = Math.max(0, Math.min(1, sp + 0.14));
        bg.addColorStop(a, 'rgba(255,255,255,0)');
        bg.addColorStop(b, 'rgba(255,255,255,' + (0.45 * gl) + ')');
        bg.addColorStop(c, 'rgba(255,255,255,0)');
        ctx.fillStyle = bg; sleevePath(); ctx.fill('evenodd');
      }
    }

    ctx.lineWidth = 2 * s; ctx.strokeStyle = adv.borderColor;
    rr(ctx, left, top, G.hW, G.hH, r); ctx.stroke();
    ctx.lineWidth = 1 * s; ctx.strokeStyle = tokens.inkDeep + 'CC';
    rr(ctx, left + 5 * s, top + 5 * s, G.hW - 10 * s, G.hH - 10 * s, Math.max(0, r - 4 * s)); ctx.stroke();
    ctx.restore();
  }

  function drawClip(v, adv, G, cardAng, front) {
    var J = pts[iJ], P = pts[iP];
    var Sl = pts[leftIdx[N-1]], Sr = pts[rightIdx[N-1]];
    var s = G.s, L = Math.hypot(P.x - J.x, P.y - J.y) || 1;
    var ux = (P.x - J.x) / L, uy = (P.y - J.y) / L;
    var ang = Math.atan2(uy, ux) - Math.PI / 2;
    var silver = adv.clipColor, light = mix(silver, tokens.paper, 0.7), dark = mix(silver, tokens.ink, 0.5);
    var metal = function(x0, x1) {
      var g = ctx.createLinearGradient(x0, 0, x1, 0);
      g.addColorStop(0, light); g.addColorStop(0.35, silver);
      g.addColorStop(0.75, mix(silver, tokens.ink, 0.2)); g.addColorStop(1, dark);
      return g;
    };

    var T = { x: J.x + ux * 0.3 * L, y: J.y + uy * 0.3 * L };
    var cs = Math.cos(cardAng), sn = Math.sin(cardAng);
    var Bt = { x: P.x - sn * 2 * s, y: P.y + cs * 2 * s };
    var ry = Math.max(4 * s, Math.hypot(Bt.x - T.x, Bt.y - T.y) / 2);
    var rx = ry * 0.55, ringW = 4.2 * s;
    var ringAng = Math.atan2(Bt.y - T.y, Bt.x - T.x) - Math.PI / 2;
    var ringArc = function(a0, a1) { ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, a0, a1); };
    var wire = function(a0, a1, shade) {
      ctx.lineCap = 'round'; ringArc(a0, a1);
      ctx.strokeStyle = mix(dark, tokens.ink, shade); ctx.lineWidth = ringW; ctx.stroke();
      ringArc(a0, a1);
      ctx.strokeStyle = mix(silver, tokens.ink, shade); ctx.lineWidth = ringW * 0.62; ctx.stroke();
      ringArc(a0 + 0.12, a1 - 0.12);
      ctx.strokeStyle = 'rgba(255,255,255,' + (0.75 * (1 - shade)) + ')'; ctx.lineWidth = ringW * 0.2; ctx.stroke();
    };

    ctx.save(); ctx.translate((T.x + Bt.x)/2, (T.y + Bt.y)/2); ctx.rotate(ringAng);
    if (!front) { wire(-Math.PI/2, Math.PI/2, 0.3); ctx.restore(); return; }
    ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.3)'; ctx.shadowBlur = 3 * s * dpr;
    ctx.shadowOffsetX = 1.5 * s * dpr; ctx.shadowOffsetY = 2 * s * dpr;
    ringArc(Math.PI/2, Math.PI*1.5); ctx.strokeStyle = dark; ctx.lineWidth = ringW; ctx.stroke(); ctx.restore();
    wire(Math.PI/2, Math.PI*1.5, 0); ctx.restore();

    ctx.save(); ctx.translate(J.x, J.y); ctx.rotate(ang);
    var strapW = adv.strapWidth * s;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    var tabW = strapW;
    var sx = (Sl.x + Sr.x)/2 - J.x, sy = (Sl.y + Sr.y)/2 - J.y;
    var stemLen = Math.hypot(sx, sy) || 1;
    var tabLen = Math.min(stemLen, strapW * 0.25);
    ctx.save(); ctx.rotate(-ang); ctx.rotate(Math.atan2(sy, sx) + Math.PI/2);
    ctx.fillStyle = v.strapColor; rr(ctx, -tabW/2, -tabLen, tabW, tabLen + 0.05 * L, tabW * 0.15); ctx.fill(); ctx.restore();

    ctx.lineWidth = 0.034 * L; ctx.strokeStyle = dark;
    ctx.beginPath(); ctx.ellipse(0, 0.245 * L, 0.05 * L, 0.065 * L, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 0.018 * L; ctx.strokeStyle = light;
    ctx.beginPath(); ctx.ellipse(0, 0.245 * L, 0.05 * L, 0.065 * L, 0, Math.PI * 0.9, Math.PI * 1.6); ctx.stroke();

    var cw = strapW * 1.55, ch = 0.22 * L;
    ctx.fillStyle = metal(-cw/2, cw/2); rr(ctx, -cw/2, -0.03 * L, cw, ch, 0.05 * L); ctx.fill();
    ctx.strokeStyle = mix(dark, tokens.ink, 0.25); ctx.lineWidth = 0.016 * L; ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 0.012 * L;
    rr(ctx, -cw/2 + 0.03 * L, -0.03 * L + 0.03 * L, cw - 0.06 * L, ch - 0.06 * L, 0.03 * L); ctx.stroke();
    ctx.restore();
  }

  function draw(v, adv, G, hoverAmt) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    var s = G.s, P = pts[iP], B = pts[iB];
    var dx = B.x - P.x;
    var dy = Math.max(10, B.y - P.y);
    var ang = Math.atan2(dy, dx) - Math.PI / 2;
    ang = Math.max(-0.85, Math.min(0.85, ang));
    var left = leftIdx.map(function(i){return pts[i];});
    var right = rightIdx.map(function(i){return pts[i];});
    var strapW = adv.strapWidth * s;
    var baseL = Math.atan2(G.jy - G.ay, G.spread), baseR = Math.atan2(G.jy - G.ay, -G.spread);

    if (adv.shadowOpacity > 0) {
      withShadow(adv, s, function() { ctx.lineWidth = strapW; ctx.lineJoin = 'round'; polyline(left); ctx.stroke(); polyline(right); ctx.stroke(); });
      withShadow(adv, s, function() { ctx.translate(P.x, P.y); ctx.rotate(ang); rr(ctx, -G.hW/2, -G.slotY, G.hW, G.hH, adv.holderRadius * s); ctx.fill(); });
    }

    var sheen = adv.strapSheen / 100;
    drawStraps(left, right, baseL, baseR, strapW, v.strapColor, sheen, G.segL);
    drawClip(v, adv, G, ang, false); drawCard(v, adv, G, ang, hoverAmt); drawClip(v, adv, G, ang, true);

    var vig = adv.vignette / 100;
    if (vig > 0) {
      var rg = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.hypot(W,H)*0.6);
      rg.addColorStop(0, 'rgba(0,0,0,0)'); rg.addColorStop(1, 'rgba(0,0,0,' + (vig * 0.9) + ')');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    }
    var gr = adv.grain / 100;
    if (gr > 0) {
      if (!grainPattern) grainPattern = ctx.createPattern(noise, 'repeat');
      if (grainPattern) {
        ctx.save(); ctx.globalAlpha = gr * 0.6;
        var ox = Math.floor(Math.random() * 128), oy = Math.floor(Math.random() * 128);
        ctx.translate(-ox, -oy); ctx.fillStyle = grainPattern; ctx.fillRect(0, 0, W + 128, H + 128); ctx.restore();
      }
    }
  }

  // ─── Hit Test & Pointer ───
  function hitCard(x, y) {
    var v = props, adv = advOf(v), G = geom(v, adv);
    var P = pts[iP], B = pts[iB];
    var len = Math.hypot(B.x - P.x, B.y - P.y) || 1;
    var ux = (B.x - P.x) / len, uy = (B.y - P.y) / len;
    var dx = x - P.x, dy = y - P.y;
    var lx = dx * uy - dy * ux, ly = dx * ux + dy * uy;
    var pad = 6;
    if (Math.abs(lx) <= G.hW/2 + pad && ly >= -G.slotY - pad && ly <= G.stick + pad)
      return { t: Math.max(0.02, Math.min(1, ly / G.stick)), lx: lx };
    return null;
  }

  function onDown(e) {
    if (prefersReduced) return;
    var adv = advOf(props); if (adv.hover <= 0) return;
    var x = e.offsetX, y = e.offsetY, hit = hitCard(x, y);
    if (!hit) return;
    userDrag = { t: hit.t, lx: hit.lx, tx: x, ty: y };
    try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    canvas.style.cursor = 'grabbing'; e.preventDefault();
  }
  function onMove(e) {
    ptrX = e.offsetX; ptrY = e.offsetY; overTarget = 1;
    if (userDrag) { userDrag.tx = ptrX; userDrag.ty = ptrY; return; }
    if (!prefersReduced) canvas.style.cursor = hitCard(ptrX, ptrY) ? 'grab' : 'default';
  }
  function onLeave() { if (!userDrag) overTarget = 0; }
  function onUp(e) { if (!userDrag) return; userDrag = null; try { canvas.releasePointerCapture(e.pointerId); } catch (_) {} canvas.style.cursor = 'grab'; }

  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerleave', onLeave);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);

// ─── Resize & Animation Loop ───
  var badgeAnchor = document.getElementById('heroBadgeAnchor');

  function measureView() {
    vx0 = 0; vy0 = 0; vx1 = W; vy1 = H;
  }

  function frame(now) {
    if (!visible) { raf = 0; return; }
    raf = requestAnimationFrame(frame);
    if (!ready) return;
    var dt = last < 0 ? 0 : Math.min((now - last) / 1000, 1/20);
    last = now;
    var v = props, adv = advOf(v), G = geom(v, adv);
    var hoverAmt = prefersReduced ? 0 : Math.max(0, adv.hover) / 50;
    over += (overTarget - over) * (1 - Math.exp(-dt * 6));
    if (!prefersReduced) {
      var simDt = dt * (Math.max(0, v.speed) / 50);
      acc += simDt;
      var n = 0;
      while (acc >= SUB && n < 4) { step(SUB, v, adv, G, hoverAmt, false); acc -= SUB; n++; }
      if (n >= 4) acc = 0;
    }
    draw(v, adv, G, hoverAmt);
  }

  function resize() {
    var container = badgeAnchor || canvas.parentElement;
    if (!container) return;
    var w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    var changed = w !== W || h !== H;
    W = w; H = h;
    dpr = Math.min(1.3, window.devicePixelRatio || 1);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    measureView();
    if (changed) {
      settleAsync().then(function() { ready = true; });
    }
    var v = props, adv = advOf(v); draw(v, adv, geom(v, adv), 0);
  }

  var ro = new ResizeObserver(resize);
  ro.observe(badgeAnchor || canvas.parentElement);

  // Defer initial resize until after paint
  if (document.readyState === 'complete') {
    requestAnimationFrame(resize);
  } else {
    window.addEventListener('load', function() { requestAnimationFrame(resize); }, { once: true });
  }

  var io = new IntersectionObserver(function(entries) {
    visible = entries[0].isIntersecting;
    if (visible && !raf && ready) { last = -1; raf = requestAnimationFrame(frame); }
  });
  io.observe(badgeAnchor || canvas.parentElement);

  // Cleanup on page unload
  window.addEventListener('beforeunload', function() {
    cancelAnimationFrame(raf);
    ro.disconnect(); io.disconnect();
    canvas.removeEventListener('pointerdown', onDown);
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('pointerup', onUp);
    window.removeEventListener('pointercancel', onUp);
  });
})();
