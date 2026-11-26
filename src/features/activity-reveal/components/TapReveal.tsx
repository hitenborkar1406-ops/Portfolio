/* eslint-disable */
// Tap Reveal — VengeanceUI

"use client";

import * as React from "react";

export interface TapRevealProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Content hidden behind the pixel field until it is revealed. */
  children: React.ReactNode;
  /** Text in the chip shown over the sealed field. */
  label?: React.ReactNode;
  /** Accessible name of the button that seals the content again. */
  hideLabel?: string;
  /** Size of one pixel cell in CSS pixels, including its 1px gap. */
  cellSize?: number;
  /** Length of the dissolve in milliseconds. */
  duration?: number;
  /** Let a few cells brighten and settle while the field is sealed. */
  shimmer?: boolean;
  /** Controlled revealed state. */
  revealed?: boolean;
  /** Initial revealed state when uncontrolled. */
  defaultRevealed?: boolean;
  /** Called when the content is revealed or sealed again. */
  onRevealedChange?: (revealed: boolean) => void;
  /** Show a button that seals the content again after it is revealed. */
  hideable?: boolean;
  /** Classes for the wrapper around children, merged with cn. */
  contentClassName?: string;
}

type Point = { x: number; y: number };

interface Palette {
  base: string;
  shades: [string, string, string];
  twinkle: string;
  flash: string;
}

interface Field {
  reveal: (origin: Point | null) => void;
  seal: () => void;
}

const MAX_CELLS = 40_000;
const ORIGIN_TTL_MS = 250;

const FALLBACK: Palette = {
  base: "#090B10",
  shades: ["#10141E", "#151A28", "#1B2234"],
  twinkle: "#EAAA00",
  flash: "#EAAA00",
};

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function hash(value: number) {
  let n = Math.imul(value ^ 0x9e3779b9, 0x85ebca6b);
  n ^= n >>> 13;
  n = Math.imul(n, 0xc2b2ae35);
  n ^= n >>> 16;
  return n >>> 0;
}

function hashString(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function readPalette(el: HTMLElement): Palette {
  const style = getComputedStyle(el);
  const read = (name: string, fallback: string) => style.getPropertyValue(name).trim() || fallback;
  const background = style.backgroundColor;
  const opaque = background && background !== "transparent" && !/rgba\([^)]*,\s*0\)$/.test(background);
  return {
    base: opaque ? background : read("--tap-reveal-base", FALLBACK.base),
    shades: [
      read("--tap-reveal-1", FALLBACK.shades[0]),
      read("--tap-reveal-2", FALLBACK.shades[1]),
      read("--tap-reveal-3", FALLBACK.shades[2]),
    ],
    twinkle: read("--tap-reveal-twinkle", FALLBACK.twinkle),
    flash: read("--tap-reveal-flash", FALLBACK.flash),
  };
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </svg>
  );
}

export function TapReveal({
  children,
  label = "Tap to reveal",
  hideLabel = "Hide again",
  cellSize = 8,
  duration = 650,
  shimmer = true,
  revealed,
  defaultRevealed = false,
  onRevealedChange,
  hideable = true,
  className,
  contentClassName,
  onClick,
  onKeyDown,
  "aria-label": ariaLabel,
  ...props
}: TapRevealProps) {
  const id = React.useId();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const fieldRef = React.useRef<Field | null>(null);
  const originRef = React.useRef<{ point: Point; at: number } | null>(null);
  const [internalRevealed, setInternalRevealed] = React.useState(defaultRevealed);
  const isRevealed = revealed ?? internalRevealed;
  const revealedRef = React.useRef(isRevealed);

  const setRevealed = (next: boolean) => {
    if (revealed === undefined) setInternalRevealed(next);
    onRevealedChange?.(next);
  };

  React.useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!root || !canvas || !ctx) return;

    const requestedCell = Math.max(2, Math.round(Number.isFinite(cellSize) ? cellSize : 8));
    const dissolveMs = Number.isFinite(duration) ? Math.max(0, duration) : 650;
    let cell = requestedCell;
    let gap = 1;
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let state: "sealed" | "revealing" | "open" = revealedRef.current ? "open" : "sealed";
    let palette = readPalette(root);
    let revealFrame = 0;
    let shimmerFrame = 0;
    let lastShimmer = 0;
    const seed = hashString(id);
    const twinkles = new Map<number, number>();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let visible = true;

    const paintCell = (index: number, color: string) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      ctx.fillStyle = color;
      ctx.fillRect(col * cell, row * cell, cell - gap, cell - gap);
    };

    const shadeOf = (index: number) => palette.shades[hash(index ^ seed) % palette.shades.length];

    const clearCell = (index: number) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      ctx.clearRect(col * cell, row * cell, cell, cell);
    };

    const clearAll = () => {
      ctx.clearRect(0, 0, width, height);
    };

    const paintAll = () => {
      ctx.fillStyle = palette.base;
      ctx.fillRect(0, 0, width, height);
      const count = cols * rows;
      for (let i = 0; i < count; i++) paintCell(i, shadeOf(i));
    };

    const shimmerTick = (now: number) => {
      shimmerFrame = 0;
      if (!shimmer || !visible || state !== "sealed" || reduceMotion.matches) {
        for (const index of twinkles.keys()) paintCell(index, shadeOf(index));
        twinkles.clear();
        return;
      }

      if (now - lastShimmer >= 140) {
        lastShimmer = now;
        const count = cols * rows;
        for (const [index, until] of twinkles) {
          if (now >= until) {
            paintCell(index, shadeOf(index));
            twinkles.delete(index);
          }
        }
        if (count > 0 && twinkles.size < Math.min(28, Math.ceil(count * 0.015))) {
          const index = Math.floor(Math.random() * count);
          if (!twinkles.has(index)) {
            paintCell(index, palette.twinkle);
            twinkles.set(index, now + 260 + Math.random() * 340);
          }
        }
      }

      shimmerFrame = requestAnimationFrame(shimmerTick);
    };

    const startShimmer = () => {
      if (!shimmerFrame) shimmerFrame = requestAnimationFrame(shimmerTick);
    };

    const resize = () => {
      const nextWidth = root.clientWidth;
      const nextHeight = root.clientHeight;
      if (nextWidth === width && nextHeight === height) return;
      width = nextWidth;
      height = nextHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = Math.max(requestedCell, Math.ceil(Math.sqrt((width * height) / MAX_CELLS)));
      while (Math.ceil(width / cell) * Math.ceil(height / cell) > MAX_CELLS) cell++;
      gap = cell >= 4 ? 1 : 0;
      cols = Math.ceil(width / cell);
      rows = Math.ceil(height / cell);
      if (state === "sealed") paintAll();
      else finish();
    };

    const finish = () => {
      cancelAnimationFrame(revealFrame);
      state = "open";
      clearAll();
    };

    const reveal = (origin: Point | null) => {
      if (state !== "sealed") return;
      state = "revealing";
      twinkles.clear();
      if (reduceMotion.matches || dissolveMs <= 0) {
        finish();
        return;
      }

      const ox = origin?.x ?? width / 2;
      const oy = origin?.y ?? height / 2;
      const reach =
        Math.max(
          Math.hypot(ox, oy),
          Math.hypot(width - ox, oy),
          Math.hypot(ox, height - oy),
          Math.hypot(width - ox, height - oy),
        ) || 1;
      const flash = Math.min(70, dissolveMs * 0.12);
      const jitter = dissolveMs * 0.2;
      const spread = Math.max(0, dissolveMs - flash - jitter);
      const count = cols * rows;
      const start = new Float32Array(count);
      const order = new Uint32Array(count);
      for (let i = 0; i < count; i++) {
        const cx = (i % cols) * cell + cell / 2;
        const cy = Math.floor(i / cols) * cell + cell / 2;
        start[i] = (Math.hypot(cx - ox, cy - oy) / reach) * spread + ((hash(i ^ seed) % 1000) / 1000) * jitter;
        order[i] = i;
      }
      order.sort((a, b) => start[a] - start[b]);

      let lit = 0;
      let cleared = 0;
      let startedAt = -1;
      const frame = (now: number) => {
        if (startedAt < 0) startedAt = now;
        const elapsed = now - startedAt;
        while (lit < count && start[order[lit]] <= elapsed) paintCell(order[lit++], palette.flash);
        while (cleared < lit && start[order[cleared]] + flash <= elapsed) clearCell(order[cleared++]);
        if (cleared < count) revealFrame = requestAnimationFrame(frame);
        else finish();
      };
      revealFrame = requestAnimationFrame(frame);
    };

    const repaint = (force = false) => {
      if (state !== "sealed") return;
      const next = readPalette(root);
      if (!force && JSON.stringify(next) === JSON.stringify(palette)) return;
      palette = next;
      paintAll();
    };

    const seal = () => {
      if (state === "sealed") return;
      cancelAnimationFrame(revealFrame);
      state = "sealed";
      repaint(true);
      startShimmer();
    };

    resize();
    startShimmer();
    fieldRef.current = { reveal, seal };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) startShimmer();
    });
    visibilityObserver.observe(root);

    const onThemeChange = () => repaint();
    const themeObserver = new MutationObserver(onThemeChange);
    for (const target of [document.documentElement, document.body, root]) {
      themeObserver.observe(target, { attributes: true, attributeFilter: ["class", "style", "data-theme"] });
    }
    darkScheme.addEventListener("change", onThemeChange);
    const onMotionChange = () => {
      if (reduceMotion.matches && state === "revealing") finish();
      startShimmer();
    };
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      fieldRef.current = null;
      cancelAnimationFrame(revealFrame);
      cancelAnimationFrame(shimmerFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      darkScheme.removeEventListener("change", onThemeChange);
      reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, [id, cellSize, duration, shimmer]);

  React.useEffect(() => {
    revealedRef.current = isRevealed;
    const field = fieldRef.current;
    if (!field) return;
    if (isRevealed) {
      const origin = originRef.current;
      originRef.current = null;
      const point = origin && performance.now() - origin.at < ORIGIN_TTL_MS ? origin.point : null;
      field.reveal(point);
    } else {
      field.seal();
    }
  }, [isRevealed]);

  const revealFrom = (point: Point | null) => {
    originRef.current = point ? { point, at: performance.now() } : null;
    setRevealed(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || isRevealed) return;
    const rect = event.currentTarget.getBoundingClientRect();
    revealFrom({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || isRevealed || event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      revealFrom(null);
    }
  };

  const handleHide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setRevealed(false);
    requestAnimationFrame(() => rootRef.current?.focus());
  };

  return (
    <div
      {...props}
      ref={rootRef}
      role={isRevealed ? props.role : "button"}
      tabIndex={isRevealed ? props.tabIndex ?? -1 : 0}
      aria-label={isRevealed ? ariaLabel : ariaLabel ?? (typeof label === "string" ? label : "Reveal hidden content")}
      data-state={isRevealed ? "revealed" : "sealed"}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn("tap-reveal", !isRevealed && "is-sealed", className)}
    >
      {hideable && (
        <button
          type="button"
          aria-label={hideLabel}
          tabIndex={isRevealed ? 0 : -1}
          onClick={handleHide}
          className={cn("tap-reveal__hide-btn", isRevealed && "is-visible")}
        >
          <EyeOffIcon />
        </button>
      )}

      <div className={cn("tap-reveal__content", !isRevealed && "is-hidden", contentClassName)}>
        {children}
      </div>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn("tap-reveal__canvas", isRevealed && "is-open")}
      />

      <div aria-hidden="true" className={cn("tap-reveal__chip-wrap", isRevealed && "is-open")}>
        <span className="tap-reveal__chip">
          <EyeIcon />
          <span>{label}</span>
        </span>
      </div>
    </div>
  );
}

export default TapReveal;
