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
