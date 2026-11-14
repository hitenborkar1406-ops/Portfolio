/**
 * Zero-lag Theme Engine with hardware-accelerated Circular Ink Ripple
 * Uses native View Transitions API with seamless CSS cross-fade fallback.
 * Eliminates 30-40s html2canvas DOM freeze while delivering smooth 60/120fps ripple.
 */
(function () {
  'use strict';

  var THEME_KEY = 'portfolio-theme';
  var btn = document.getElementById('theme-toggle');
  var root = document.documentElement;

  var MOON_PATH = 'M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a7.2 7.2 0 0 0 9.7 9.7z';
  var SUN_PATH = 'M12 7a5 5 0 1 1 0 10a5 5 0 1 1 0-10z';

  function getTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (_) {}
    return root.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  function updateIcon(theme) {
    if (!btn) return;
    var isDark = theme === 'dark';
    btn.setAttribute('aria-label', isDark ? 'Light mode' : 'Dark mode');
    btn.setAttribute('aria-pressed', String(isDark));

    var bodyPath = btn.querySelector('.theme-toggle__body');
    if (bodyPath) {
      bodyPath.setAttribute('d', isDark ? MOON_PATH : SUN_PATH);
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
    updateIcon(theme);
  }

  function toggleTheme(e) {
    var current = getTheme();
    var next = current === 'dark' ? 'light' : 'dark';

    // Click origin
    var x, y;
    if (e && typeof e.clientX === 'number' && e.clientX > 0) {
      x = e.clientX;
      y = e.clientY;
    } else if (btn) {
      var rect = btn.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else {
      x = window.innerWidth / 2;
      y = window.innerHeight / 2;
    }

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If native View Transitions API is supported and motion is not reduced
    if (document.startViewTransition && !prefersReduced) {
      var maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      var transition = document.startViewTransition(function () {
        applyTheme(next);
      });

      transition.ready.then(function () {
        document.documentElement.animate(
          {
            clipPath: [
              'circle(0px at ' + x + 'px ' + y + 'px)',
              'circle(' + maxRadius + 'px at ' + x + 'px ' + y + 'px)'
            ]
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });
      return;
    }

    // Fallback: smooth CSS fade
    root.classList.add('theme-fade');
    applyTheme(next);
    setTimeout(function () {
      root.classList.remove('theme-fade');
    }, 500);
  }

  // Initialize icon on load
  updateIcon(getTheme());

  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }

  // Expose global helper if needed
  window.togglePortfolioTheme = toggleTheme;
})();
