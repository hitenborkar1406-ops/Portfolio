(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  if (prefersReduced.matches || !isFinePointer.matches) return;

  const SIZE = 14;
  const FOLLOW = 0.4;
  const DEFORM = 1.2;
  const COLOR = '#FFFFFF';

  let cursorEl = null;
  let canvas = null;
  let ctx = null;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let velX = 0, velY = 0;
  let lastX = 0, lastY = 0;
  let isInteractive = false;
  let rafId = null;
  let container = document.body;

  function createCursor() {
    cursorEl = document.createElement('div');
    cursorEl.setAttribute('aria-hidden', 'true');
    cursorEl.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: ${SIZE}px; height: ${SIZE}px;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 2147483647;
      mix-blend-mode: difference;
      will-change: transform;
      display: none;
    `;

    canvas = document.createElement('canvas');
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    cursorEl.appendChild(canvas);

    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    container.appendChild(cursorEl);

    drawCursor();
  }

  function drawCursor() {
    if (!ctx) return;
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = COLOR;
    ctx.beginPath();
    ctx.ellipse(SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const target = e.target.closest('a, button, input');
    isInteractive = !!target;
  }

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function animate() {
    cursorX = lerp(cursorX, mouseX, FOLLOW);
    cursorY = lerp(cursorY, mouseY, FOLLOW);

    velX = lerp(velX, cursorX - lastX, 0.3);
    velY = lerp(velY, cursorY - lastY, 0.3);

    lastX = cursorX;
    lastY = cursorY;

    const speed = Math.hypot(velX, velY);
    const angle = Math.atan2(velY, velX);

    const scaleX = 1 + (speed / 50) * DEFORM;
    const scaleY = Math.max(0.3, 1 - (speed / 50) * DEFORM * 0.5);

    cursorEl.style.transform = `
      translate(${cursorX}px, ${cursorY}px)
      rotate(${angle}rad)
      scale(${scaleX}, ${scaleY})
      translate(-50%, -50%)
    `;

    cursorEl.style.display = 'block';

    rafId = requestAnimationFrame(animate);
  }

  function onResize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas) {
      canvas.width = SIZE * dpr;
      canvas.height = SIZE * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawCursor();
    }
  }

  function onPrefersReducedChange(e) {
    if (e.matches) destroy();
  }

  function onPointerChange(e) {
    if (!e.matches) destroy();
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    if (cursorEl && cursorEl.parentNode) cursorEl.parentNode.removeChild(cursorEl);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    prefersReduced.removeEventListener('change', onPrefersReducedChange);
    isFinePointer.removeEventListener('change', onPointerChange);
    cursorEl = canvas = ctx = null;
  }

  function init() {
    createCursor();
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize);
    prefersReduced.addEventListener('change', onPrefersReducedChange);
    isFinePointer.addEventListener('change', onPointerChange);
    rafId = requestAnimationFrame(animate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();