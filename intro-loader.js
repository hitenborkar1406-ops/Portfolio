/* Intro loader — drives the 5-second loading bar over the Money Rain animation.
   Runs on its own timer, so it never waits on (or breaks without) the React bundle.

   • Bar and percentage follow real elapsed time across DURATION (5 s).
   • At 100% the curtain lifts; scroll unlocks and the hero entrance resumes.
   • Skip button / Escape ends it early.
   • No intro for: reduced motion (html.js is only set when motion is allowed),
     no WebGL2, or JS off. */
(function () {
  'use strict';

  var DURATION = 5000;
  var root = document.documentElement;
  var el = document.getElementById('introLoader');
  if (!el) return;

  function unlock() { root.classList.remove('intro-lock'); }
  function remove() { if (el && el.parentNode) el.parentNode.removeChild(el); }

  function hasWebGL2() {
    try {
      return !!document.createElement('canvas').getContext('webgl2');
    } catch (e) {
      return false;
    }
  }

  if (!root.classList.contains('js') || !hasWebGL2()) {
    unlock();
    remove();
    return;
  }

  var fill = document.getElementById('introFill');
  var pct = document.getElementById('introPct');
  var bar = document.getElementById('introBar');
  var skip = document.getElementById('introSkip');

  var start = performance.now();
  var raf = 0;
  var lastPct = -1;
  var leaving = false;

  function setProgress(t) {
    if (fill) fill.style.transform = 'scaleX(' + t + ')';
    var p = Math.floor(t * 100);
    if (p !== lastPct) {
      lastPct = p;
      if (pct) pct.textContent = (p < 10 ? '0' : '') + p + '%';
      if (bar) bar.setAttribute('aria-valuenow', String(p));
    }
  }

  function leave() {
    if (leaving) return;
    leaving = true;
    cancelAnimationFrame(raf);
    window.removeEventListener('keydown', onKey);
    unlock();                                  // page scrolls + hero animation resumes
    el.classList.add('is-leaving');
    var done = false;
    function finish() {
      if (done) return;
      done = true;
      if (typeof window.__introRainUnmount === 'function') window.__introRainUnmount();
      remove();
    }
    el.addEventListener('transitionend', function (e) {
      if (e.target === el) finish();
    });
    setTimeout(finish, 1300);                  // safety if transitionend never fires
  }

  function tick(now) {
    var t = Math.min(1, Math.max(0, (now - start) / DURATION));
    setProgress(t);
    if (t < 1) {
      raf = requestAnimationFrame(tick);
    } else {
      leave();
    }
  }

  function skipNow() {
    setProgress(1);
    leave();
  }

  function onKey(e) {
    if (e.key === 'Escape') skipNow();
  }

  if (skip) skip.addEventListener('click', skipNow);
  window.addEventListener('keydown', onKey);
  raf = requestAnimationFrame(tick);
})();
