/* Ribbon Trails — ported from IDEA (Originkit LineCursor) to vanilla JS */
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (prefersReduced.matches || !isFinePointer.matches) return;

  const DEFAULTS = {
    colors: ['#0036c3', '#FF6F00', '#EE2456'],
    colorShift: 1,
    opacity: 50,
    thickness: 2,
    trails: 12,
    trailLength: 18,
  };

  const MAX_COLORS = 5;
  const DAMPENING = 0.1;
  const TENSION = 0.95;
  const FRICTION = 0.5;
  const REFERENCE_TRAILS = 20;
  const MAX_STROKE_L = 0.7;

  class TrailNode {
    x = 0; y = 0; vx = 0; vy = 0;
  }

  class Line {
    constructor(cfg) {
      this.cfg = cfg;
      this.spring = cfg.spring + 0.1 * Math.random() - 0.02;
      this.friction = cfg.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let i = 0; i < cfg.size; i++) {
        const node = new TrailNode();
        node.x = cfg.target.x;
        node.y = cfg.target.y;
        this.nodes.push(node);
      }
    }

    update() {
      let spring = this.spring;
      const { target, dampening, tension } = this.cfg;
      let node = this.nodes[0];

      node.vx += (target.x - node.x) * spring;
      node.vy += (target.y - node.y) * spring;

      for (let i = 0, len = this.nodes.length; i < len; i++) {
        node = this.nodes[i];
        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * dampening;
          node.vy += prev.vy * dampening;
        }
        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= tension;
      }
    }

    draw(ctx) {
      let a, b;
      let x = this.nodes[0].x;
      let y = this.nodes[0].y;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
        a = this.nodes[i];
        b = this.nodes[i + 1];
        x = 0.5 * (a.x + b.x);
        y = 0.5 * (a.y + b.y);
        ctx.quadraticCurveTo(a.x, a.y, x, y);
      }

      a = this.nodes[this.nodes.length - 2];
      b = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  function parseColor(color) {
    const value = (color ?? '').trim();
    if (value.startsWith('#')) {
      let hex = value.slice(1);
      if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
      if (hex.length >= 6) {
        return [
          parseInt(hex.slice(0, 2), 16) / 255,
          parseInt(hex.slice(2, 4), 16) / 255,
          parseInt(hex.slice(4, 6), 16) / 255,
          hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1,
        ];
      }
      return [1, 1, 1, 1];
    }
    const m = value.match(/rgba?\(([^)]+)\)/i);
    if (m) {
      const p = m[1].split(',').map((s) => parseFloat(s));
      return [
        (p[0] || 0) / 255,
        (p[1] || 0) / 255,
        (p[2] || 0) / 255,
        p[3] === undefined ? 1 : p[3],
      ];
    }
    return [1, 1, 1, 1];
  }

  const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const toGamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

  function srgbToOklab(r, g, b) {
    const lr = toLinear(r);
    const lg = toLinear(g);
    const lb = toLinear(b);
    const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
    const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
    const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
    ];
  }

  function oklabToSrgb(L, A, B) {
    const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
    const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
    const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
    return [
      toGamma(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
      toGamma(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
      toGamma(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
    ];
  }

  const inGamut = (rgb) => rgb.every((c) => c >= -0.001 && c <= 1.001);

  function strokeFor(color, maxL, alpha) {
    const [r, g, b] = parseColor(color);
    const [L, A, B] = srgbToOklab(r, g, b);
    if (L <= maxL) {
      const rgb = [r, g, b].map((c) => Math.round(c * 255));
      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
    }
    const C = Math.hypot(A, B);
    const hue = Math.atan2(B, A);
    const cos = Math.cos(hue);
    const sin = Math.sin(hue);
    let fitted = C;
    if (!inGamut(oklabToSrgb(maxL, cos * C, sin * C))) {
      let lo = 0;
      let hi = C;
      for (let i = 0; i < 16; i++) {
        const mid = (lo + hi) / 2;
        if (inGamut(oklabToSrgb(maxL, cos * mid, sin * mid))) lo = mid;
        else hi = mid;
      }
      fitted = lo;
    }
    const rgb = oklabToSrgb(maxL, cos * fitted, sin * fitted).map((c) =>
      Math.round(Math.min(1, Math.max(0, c)) * 255)
    );
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = `
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2147483647;
    display: block;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const count = Math.max(1, Math.round(DEFAULTS.trails));
  const picked = DEFAULTS.colors.filter(Boolean).slice(0, MAX_COLORS);
  const palette = picked.length ? picked : ['#FFFFFF', '#FF6F00', '#EE2456'];

  const weight = Math.min(100, Math.max(0, DEFAULTS.opacity)) / 100;
  const fade = Math.min(1, REFERENCE_TRAILS / count);
  const strokes = palette.map((entry) =>
    strokeFor(entry, MAX_STROKE_L, weight * parseColor(entry)[3] * fade)
  );

  let running = true;
  let rafId = 0;
  let started = false;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  const target = { x: 0, y: 0 };
  let bornAt = 0;
  const holdMs = Math.max(0.1, DEFAULTS.colorShift) * 1000;

  const baseCfg = {
    friction: FRICTION,
    dampening: DAMPENING,
    tension: TENSION,
    size: Math.max(2, Math.round(DEFAULTS.trailLength)),
    target,
  };
  let lines = [];

  function buildLines() {
    lines = [];
    for (let i = 0; i < count; i++) {
      lines.push(new Line({ ...baseCfg, spring: 0.4 + (i / count) * 0.025 }));
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(window.innerWidth));
    const h = Math.max(1, Math.round(window.innerHeight));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  let idleCount = 0;
  let lastTargetX = 0, lastTargetY = 0;

  function updatePosition(e) {
    target.x = e.clientX;
    target.y = e.clientY;
    idleCount = 0;
    if (started && running && !rafId) {
      rafId = window.requestAnimationFrame(loop);
    }
  }

  function onFirstMove(e) {
    document.removeEventListener('mousemove', onFirstMove);
    document.addEventListener('mousemove', updatePosition, { passive: true });
    updatePosition(e);
    buildLines();
    started = true;
    loop();
  }

  function loop() {
    if (!running) return;
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = 'lighter';
    if (bornAt === 0) bornAt = performance.now();
    const held = Math.floor((performance.now() - bornAt) / holdMs);
    ctx.strokeStyle = strokes[held % strokes.length];
    ctx.lineWidth = Math.max(0.1, DEFAULTS.thickness);

    let maxVelocity = 0;
    for (let i = 0; i < count; i++) {
      const line = lines[i];
      if (!line) continue;
      line.update();
      line.draw(ctx);
      if (line.nodes && line.nodes[0]) {
        maxVelocity = Math.max(maxVelocity, Math.abs(line.nodes[0].vx) + Math.abs(line.nodes[0].vy));
      }
    }

    if (Math.abs(target.x - lastTargetX) < 0.5 && Math.abs(target.y - lastTargetY) < 0.5 && maxVelocity < 0.05) {
      idleCount++;
      if (idleCount > 45) {
        rafId = 0;
        return; // sleep until mouse moves
      }
    } else {
      idleCount = 0;
    }
    lastTargetX = target.x;
    lastTargetY = target.y;

    rafId = window.requestAnimationFrame(loop);
  }

  function handleFocus() {
    if (!running) {
      running = true;
      if (started) loop();
    }
  }
  function handleBlur() {
    running = false;
    if (rafId) window.cancelAnimationFrame(rafId);
  }

  document.addEventListener('mousemove', onFirstMove, { passive: true });
  window.addEventListener('resize', resize);
  window.addEventListener('focus', handleFocus);
  window.addEventListener('blur', handleBlur);
  resize();
})();
