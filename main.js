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
      team: 'Bandwidth Biotics',
      badge: '2nd Place Winner (₹ Cash Prize)',
      headerOrnament: '★ NATIONAL LEVEL HACKATHON ★',
      footerText: 'AI & IOT INFUSION SAFETY',
      source: 'National Level Hackathon',
      year: '2026',
      stars: 5,
      desc: 'Secured 2nd place nationwide among 2,100+ competitors with Team Bandwidth Biotics. Built an intelligent IV infusion safety monitoring system featuring optical droplet metering, automated pinch valve activation to prevent blood backflow, and real-time hospital ward telemetry.',
      photos: [
        {
          id: 'hacksagon-podium',
          number: '01',
          title: 'Team Victory Podium',
          subtitle: '2nd Place Nationwide',
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
      chapters: ['Hacksagon 2026 Finale', '2,100+ Competitors', 'Bandwidth Biotics Solution', 'Smart IV Hardware Demo', 'Dual ESP32 Telemetry', 'Podium & Trophy Win']
    },
    {
      id: 'ideathon-cyberster',
      title: 'Ideathon RCOEM TBI',
      mainTitle: 'IDEATHON',
      yearText: '2026',
      author: '2nd Runner Up — Cyberster',
      subtitle: '2ND RUNNER UP',
      team: 'Team Cyberster',
      badge: '2nd Runner Up (₹5,000 Prize)',
      headerOrnament: '★ RCOEM TBI STARTUP IDEATHON ★',
      footerText: 'DEEP-TECH INNOVATION',
      source: 'RCOEM TBI Startup Ideathon',
      year: '2026',
      stars: 5,
      desc: 'Awarded 2nd Runner Up and cash prize of ₹5,000 at the RCOEM TBI Ideathon 2026 with Team Cyberster. Pitched a scalable deep-tech innovation addressing critical infrastructure challenges before venture incubators, corporate mentors, and engineering faculty.',
      photos: [
        {
          id: 'ideathon-award',
          number: '01',
          title: 'Award Cheque Presentation',
          subtitle: '2nd Runner Up (₹5,000 Prize)',
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
      chapters: ['Ideathon 2026 Challenge', 'Team Cyberster Formation', 'Deep-Tech Feasibility Pitch', 'Financial & Market Model', '₹5,000 Cash Prize Victory', 'Incubation Support']
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
    setTimeout(function () { setTargets(b, slot); }, 200 + i * 150);
  });

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
