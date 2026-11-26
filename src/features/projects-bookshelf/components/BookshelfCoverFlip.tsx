/* eslint-disable */
// Bookshelf Cover Flip — Originkit

"use client";

import * as React from "react"
import { useEffect, useRef, useState } from "react"

/** Tuning values. */
export const ADVANCED_DEFAULTS = {
    openMs: 530,
    closeMs: 670,
    holdMs: 2600,
    idleMs: 2600,
    autoPlay: true,
    coverScale: 118,
    coverAspect: 69,
    gap: 3,
    heightJitter: 0,
    perspective: 1600,
    lift: 3,
    tilt: 6,
    titleSize: 44,
    monogramSize: 28,
    monogramOpacity: 45,
    textOpacity: 92,
    coverTitleSize: 13,
    kickerSize: 5,
    readsSize: 4,
    coverStrip: 6,
    artScale: 100,
    shade: 12,
    highlight: 8,
    shadowOpacity: 55,
    floorColor: "#FFFFFF",
    floorOpacity: 10,
    rowOffset: 0,
    starColor: "#D9A55A",
    hover: 50,
    grain: 0,
    vignette: 0,
}

const MOVED_CONTROLS: { into: Record<string, string>; out: Record<string, string> } = { "into": {}, "out": { "hover": "advanced", "gap": "advanced" } }
const GROUP_FALLBACKS: Record<string, any> = { advanced: ADVANCED_DEFAULTS }
function withMovedControls(props: any): any {
    const out = { ...props }
    for (const [k, g] of Object.entries(MOVED_CONTROLS.into)) out[k] = props?.[g]?.[k] ?? GROUP_FALLBACKS[g]?.[k]
    for (const [k, g] of Object.entries(MOVED_CONTROLS.out)) {
        if (out[k] !== undefined) out[g] = { ...(out[g] ?? {}), [k]: out[k] }
    }
    return out
}

const DEFAULT_BOOKS = [
    { title: "United States", subtitle: "18M reads", spineColor: "#181924", textColor: "#FFFFFF", coverColor: "#1C2538" },
    { title: "J. Robert Oppenheimer", subtitle: "9.4M reads", spineColor: "#EDE3CF", textColor: "#2A2A2A", coverColor: "#E4D9C2" },
    { title: "Wikipedia", subtitle: "12M reads", spineColor: "#E6DABE", textColor: "#2A2A2A", coverColor: "#E9DFC6" },
    { title: "Elon Musk", subtitle: "21M reads", spineColor: "#A9482A", textColor: "#FFFFFF", coverColor: "#A9482A" },
]

const FALLBACK_BOOK = { title: "Untitled", subtitle: "1M reads", spineColor: "#3D4D6C", textColor: "#FFFFFF", coverColor: "#3D4D6C" }
const DEFAULT_LABEL = "Portfolio"
const DEFAULT_PLACEMENT = { x: 0, y: 0, angle: 0, tilt: 0 }
const DEFAULT_FONT = { fontFamily: "Georgia", fontWeight: 400, fontSize: 16, lineHeight: "1em" }
const DEFAULT_SPINE_WEIGHT = 400

const SIZE_DEFAULT = 440
const SIZE_MAX = 800

const JITTER = [0, 0.6, -1, 0.3, -0.4, 0.8]
const SANS = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
const SERIF = "Georgia, 'Times New Roman', serif"

function bezier(x1: number, y1: number, x2: number, y2: number) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
    const sx = (t: number) => ((ax * t + bx) * t + cx) * t
    const sy = (t: number) => ((ay * t + by) * t + cy) * t
    const dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx
    return (x: number) => {
        if (x <= 0) return 0
        if (x >= 1) return 1
        let t = x
        for (let i = 0; i < 8; i++) {
            const e = sx(t) - x
            const d = dx(t)
            if (Math.abs(e) < 1e-5 || Math.abs(d) < 1e-6) break
            t -= e / d
        }
        if (t < 0 || t > 1 || Math.abs(sx(t) - x) > 1e-3) {
            let lo = 0, hi = 1
            t = x
            for (let i = 0; i < 30; i++) {
                if (sx(t) < x) lo = t
                else hi = t
                t = (lo + hi) / 2
            }
        }
        return sy(t)
    }
}
const OPEN_EASE = bezier(0.38, 0.25, 0.28, 0.98)
const CLOSE_EASE = bezier(0.1, 0, 0.38, 0.98)
const OPEN_D0 = OPEN_EASE(1e-4) / 1e-4
const CLOSE_D0 = CLOSE_EASE(1e-4) / 1e-4

function parseColor(c: string): [number, number, number, number] {
    if (!c || typeof c !== "string") return [0, 0, 0, 1]
    const s = c.trim()
    if (s[0] === "#") {
        let h = s.slice(1)
        if (h.length === 3 || h.length === 4) h = h.split("").map((ch) => ch + ch).join("")
        const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16)
        const a = h.length >= 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1
        return [r || 0, g || 0, b || 0, a]
    }
    const m = s.match(/rgba?\(([^)]+)\)/i)
    if (m) {
        const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat)
        return [p[0] || 0, p[1] || 0, p[2] || 0, p[3] ?? 1]
    }
    return [0, 0, 0, 1]
}
function mix(a: string, b: string, t: number) {
    const A = parseColor(a), B = parseColor(b)
    const f = (i: number) => Math.round(A[i] + (B[i] - A[i]) * t)
    return `rgb(${f(0)}, ${f(1)}, ${f(2)})`
}
function rgba(c: string, a: number) {
    const [r, g, b] = parseColor(c)
    return `rgba(${r}, ${g}, ${b}, ${a})`
}
function lum(c: string) {
    const [r, g, b] = parseColor(c)
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
}

const FOCUS_POS: Record<string, string> = { top: "50% 0%", center: "50% 50%", bottom: "50% 100%", left: "0% 50%", right: "100% 50%" }

function imgSrc(v: any): string {
    if (!v) return ""
    if (typeof v === "string") return v
    return v.src || ""
}
function defined(o: any) {
    const out: any = {}
    if (!o) return out
    for (const k of Object.keys(o)) if (o[k] !== undefined && o[k] !== null && o[k] !== "") out[k] = o[k]
    return out
}

function starPath(cx: number, cy: number, r: number) {
    let d = ""
    for (let k = 0; k < 12; k++) {
        const a = -Math.PI / 2 + (k * Math.PI) / 6
        const rr = k % 2 ? r * 0.5 : r
        d += (k ? "L" : "M") + (cx + Math.cos(a) * rr).toFixed(2) + " " + (cy + Math.sin(a) * rr).toFixed(2)
    }
    return d + "Z"
}

const STARS = [
    [50, 76], [45, 80.5], [55, 80.5], [40, 85], [50, 85], [60, 85], [35, 89.5],
    [45, 89.5], [55, 89.5], [65, 89.5], [42, 94], [50, 94], [58, 94],
]

function CoverArt({ variant, ink, star, bg, uid }: { variant: number; ink: string[]; star: string; bg: string; uid: string }) {
    const [c1, c2, c3] = ink
    const svg = (children: React.ReactNode) => (
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block", overflow: "visible" }}>
            {children}
        </svg>
    )
    if (variant === 0) {
        const wing = "M48 44 C42 30 30 16 8 10 C14 18 16 24 22 30 C14 28 8 30 4 34 C14 36 22 40 28 46 C20 46 14 50 12 54 C24 52 36 54 46 58 Z"
        const feathers = [[10, 12], [16, 21], [8, 32], [20, 38], [14, 52], [27, 48], [33, 30]]
        const half = (
            <g>
                <path d={wing} fill={c2} />
                {feathers.map(([x, y], k) => (
                    <line key={k} x1={46} y1={52} x2={x} y2={y} stroke={c3} strokeWidth={0.6} opacity={0.7} />
                ))}
                <path d="M48 44 C42 30 30 16 8 10" fill="none" stroke={c1} strokeWidth={0.8} opacity={0.8} />
            </g>
        )
        return svg(
            <g>
                {half}
                <g transform="translate(100 0) scale(-1 1)">{half}</g>
                <path d="M45 62 L50 72 L55 62 Z" fill={c2} stroke={c3} strokeWidth={0.4} />
                <ellipse cx={50} cy={52} rx={6} ry={13} fill={c2} stroke={c3} strokeWidth={0.5} />
                <circle cx={50} cy={36} r={5} fill={c1} />
                <path d="M51 37 L57 39 L51 41 Z" fill={star} />
                {STARS.map(([x, y], k) => (
                    <path key={k} d={starPath(x, y, 2.2)} fill={star} />
                ))}
            </g>
        )
    }
    if (variant === 1) {
        const clip = `${uid}-head`
        return svg(
            <g>
                <defs>
                    <clipPath id={clip}>
                        <ellipse cx={50} cy={46} rx={14} ry={18} />
                    </clipPath>
                </defs>
                <path d="M14 100 C18 78 34 70 50 70 C66 70 82 78 86 100 Z" fill={c2} />
                {Array.from({ length: 10 }).map((_, k) => (
                    <line key={k} x1={20 + k * 7} y1={100} x2={30 + k * 6} y2={76} stroke={c3} strokeWidth={0.5} opacity={0.5} />
                ))}
                <path d="M42 70 L50 84 L58 70" fill={c1} stroke={c3} strokeWidth={0.6} />
                <rect x={45} y={58} width={10} height={13} fill={c1} />
                <ellipse cx={50} cy={46} rx={14} ry={18} fill={c1} stroke={c3} strokeWidth={0.8} />
                <g clipPath={`url(#${clip})`}>
                    {Array.from({ length: 9 }).map((_, k) => (
                        <line key={k} x1={53 + k * 2} y1={28} x2={45 + k * 2} y2={66} stroke={c3} strokeWidth={0.45} opacity={0.6} />
                    ))}
                </g>
                <path d="M42 44 h5 M53 44 h5" stroke={c3} strokeWidth={0.9} />
                <path d="M50 46 L48 53 L51 53" fill="none" stroke={c3} strokeWidth={0.6} />
                <path d="M45 58 Q50 60 55 58" fill="none" stroke={c3} strokeWidth={0.6} />
                <path d="M34 30 C34 12 66 12 66 30 Z" fill={c3} />
                <ellipse cx={50} cy={30} rx={26} ry={4.5} fill={c3} />
                <path d="M35 26 h30" stroke={c2} strokeWidth={1.2} opacity={0.7} />
            </g>
        )
    }
    if (variant === 2) {
        const grad = `${uid}-globe`
        const clip = `${uid}-gclip`
        return svg(
            <g>
                <defs>
                    <radialGradient id={grad} cx="38%" cy="34%" r="70%">
                        <stop offset="0%" stopColor={c1} />
                        <stop offset="70%" stopColor={c2} />
                        <stop offset="100%" stopColor={c3} />
                    </radialGradient>
                    <clipPath id={clip}>
                        <circle cx={50} cy={54} r={34} />
                    </clipPath>
                </defs>
                <circle cx={50} cy={54} r={34} fill={`url(#${grad})`} />
                <g clipPath={`url(#${clip})`} fill="none" stroke={c3} strokeWidth={0.6} opacity={0.75}>
                    {[10, 22, 32].map((rx) => (
                        <ellipse key={rx} cx={50} cy={54} rx={rx} ry={34} />
                    ))}
                    {[34, 44, 54, 64, 74].map((y) => (
                        <path key={y} d={`M14 ${y} Q32 ${y + 3} 50 ${y} T86 ${y}`} />
                    ))}
                    <path d="M54 19 L68 23 L66 35 L52 33 Z" fill={bg} stroke="none" />
                </g>
                <circle cx={50} cy={54} r={34} fill="none" stroke={c3} strokeWidth={0.8} />
                <path d="M74 10 L82 12 L81 19 L73 17 Z" fill={c2} stroke={c3} strokeWidth={0.5} transform="rotate(14 78 15)" />
                <path d="M82 24 L88 25 L87 31 L81 30 Z" fill={c1} stroke={c3} strokeWidth={0.5} transform="rotate(-10 85 28)" />
            </g>
        )
    }
    return svg(
        <g>
            <circle cx={50} cy={50} r={44} fill="none" stroke={c2} strokeWidth={0.6} />
            {Array.from({ length: 32 }).map((_, k) => {
                const a = (k / 32) * Math.PI * 2
                const r2 = k % 2 ? 32 : 40
                return (
                    <line key={k} x1={50 + Math.cos(a) * 19} y1={50 + Math.sin(a) * 19} x2={50 + Math.cos(a) * r2} y2={50 + Math.sin(a) * r2} stroke={c1} strokeWidth={0.8} opacity={0.85} />
                )
            })}
            <circle cx={50} cy={50} r={14} fill={star} />
            <circle cx={50} cy={50} r={14} fill="none" stroke={c3} strokeWidth={0.6} opacity={0.6} />
        </g>
    )
}

type Geom = {
    n: number; hs: number; sw: number; cw: number; gap: number; k: number
    W: number; H: number; heights: number[]; startX: number; floorY: number; boxH: number; P: number
}
type Slot = { x: number; w: number; th: number; m: number; e: number }

function rowLayout(g: Geom, es: number[]): Slot[] {
    const out: Slot[] = []
    let x = g.startX
    for (let i = 0; i < g.n; i++) {
        const e = es[i] ?? 0
        const th = (e * Math.PI) / 2
        const m = 1 + (g.k - 1) * e
        const w = m * (g.sw * Math.cos(th) + g.cw * Math.sin(th))
        out.push({ x, w, th, m, e })
        x += w + g.gap
    }
    return out
}

const FACE_SS = 2
const FLAT_EPS = 1e-4

function rowSettled(es: number[], n: number): boolean {
    for (let i = 0; i < n; i++) {
        const e = es[i] ?? 0
        if (e > FLAT_EPS && e < 1 - FLAT_EPS) return false
    }
    return true
}

function slotStyles(g: Geom, L: Slot, liftPx: number, tiltDeg: number, shadowOp: number, settled = false) {
    const still = Math.abs(tiltDeg) < 0.01
    const closed = still && L.e < FLAT_EPS
    const open = still && L.e > 1 - FLAT_EPS
    const flat = closed || open
    const px = (v: number) => (settled ? Math.round(v) : v)
    return {
        slot: {
            transform: flat ? `translate(${px(L.x)}px, ${px(g.floorY - g.boxH)}px)` : `translate3d(${L.x}px, ${g.floorY - g.boxH}px, 0px)`,
            width: `${Math.max(1, L.w)}px`,
            height: `${g.boxH}px`,
            perspective: flat ? "none" : `${g.P}px`,
            perspectiveOrigin: `${L.w / 2}px ${g.boxH * 0.55}px`,
        },
        book: {
            transform: flat
                ? `translateY(${-liftPx}px)${open ? ` scale(${L.m})` : ""}`
                : `translateY(${-liftPx}px) translateZ(${-g.sw * Math.sin(L.th)}px) scale(${L.m}) rotateX(${tiltDeg}deg) rotateY(${(-L.th * 180) / Math.PI}deg)`,
            transformStyle: (flat ? "flat" : "preserve-3d") as "flat" | "preserve-3d",
        },
        coverVisibility: (closed ? "hidden" : "visible") as "hidden" | "visible",
        coverTransform: open ? `translateX(${1 - g.sw}px)` : "rotateY(90deg)",
        spineVisibility: (open ? "hidden" : "visible") as "hidden" | "visible",
        shadow: {
            transform: `translate3d(${L.x - L.w * 0.08}px, ${g.floorY - g.hs * 0.035}px, 0px)`,
            width: `${L.w * 1.16}px`,
            height: `${g.hs * (0.07 + 0.03 * L.e)}px`,
            opacity: `${shadowOp * (0.6 + 0.4 * L.e)}`,
        },
        ...faceOpacities(g, L),
    }
}

function faceOpacities(g: Geom, L: Slot) {
    const c = Math.cos(L.th), s = Math.sin(L.th)
    const x0 = L.w / 2
    const proj = (x: number, z: number) => x0 + ((x - x0) * g.P) / Math.max(1, g.P - z)
    const dz = g.sw * s
    const xh = L.m * g.sw * c, zh = L.m * g.sw * s - dz
    const xf = L.m * (g.sw * c + g.cw * s), zf = L.m * (g.sw * s - g.cw * c) - dz
    const hinge = proj(xh, zh)
    const fade = (w: number, full: number) => `${Math.max(0, Math.min(1, (w / Math.max(1e-3, L.m * full) - 0.15) / 0.25))}`
    return { spineOpacity: fade(hinge - proj(0, -dz), g.sw), coverOpacity: fade(proj(xf, zf) - hinge, g.cw) }
}

export default function BookshelfCoverFlip(props: any) {
    props = withMovedControls(props)
    const {
        imageFit = "window",
        imageFocus = "center",
        monogram = "HB",
        size = 440,
        spineWidth = 14,
        speed = 50,
        font = { fontFamily: "Georgia", variant: "Regular", fontWeight: 400, fontSize: 16, lineHeight: "1em", letterSpacing: "0em", textAlign: "left" },
        spineWeight = 500,
        style,
        activeIndex,
        onActiveBookChange,
        onBookClick,
    } = props

    const adv = { ...ADVANCED_DEFAULTS, ...(props.advanced ?? {}) }
    const background = props.background || "#00000000"
    const floorColor = adv.floorColor

    const rawBooks = Array.isArray(props.books) && props.books.length ? props.books : DEFAULT_BOOKS
    const shelfLabel = typeof props.label === "string" ? props.label : DEFAULT_LABEL
    const books = rawBooks.slice(0, 6).map((b: any) => ({
        ...FALLBACK_BOOK,
        ...defined(b),
        label: typeof b?.label === "string" ? b.label : shelfLabel,
    }))
    const n = books.length

    const uid = "bs" + React.useId().replace(/[^a-zA-Z0-9]/g, "")
    const rootRef = useRef<HTMLDivElement>(null)
    const slotEls = useRef<(HTMLDivElement | null)[]>([])
    const bookEls = useRef<(HTMLDivElement | null)[]>([])
    const shadowEls = useRef<(HTMLDivElement | null)[]>([])
    const coverEls = useRef<(HTMLDivElement | null)[]>([])
    const spineEls = useRef<(HTMLDivElement | null)[]>([])
    const coverFaceEls = useRef<(HTMLDivElement | null)[]>([])
    const spineFaceEls = useRef<(HTMLDivElement | null)[]>([])
    const [dims, setDims] = useState({ w: 800, h: 460 })
    const [loaded, setLoaded] = useState<Record<string, boolean>>({})

    const stRef = useRef<any>(null)
    if (!stRef.current) {
        stRef.current = {
            es: [1], vel: [0], tw: [{ from: 1, to: 1, t: 0, dur: 0.5, open: true, v0: 0 }], lift: [0],
            active: 0, autoIdx: 0, holdT: 0, idleT: 0, pointerIn: false, hovered: -1,
            py: 0, ty: 0, reduce: false, lastReported: 0,
        }
    }
    const st = stRef.current
    while (st.es.length < n) {
        st.es.push(0)
        st.vel.push(0)
        st.tw.push({ from: 0, to: 0, t: 0, dur: 0.5, open: true, v0: 0 })
        st.lift.push(0)
    }
    st.es.length = n
    st.vel.length = n
    st.tw.length = n
    st.lift.length = n
    if (st.active >= n) st.active = 0
    if (st.autoIdx >= n) st.autoIdx = 0

    // Sync external activeIndex when user clicks selector buttons
    useEffect(() => {
        if (typeof activeIndex === "number" && activeIndex >= 0 && activeIndex < n) {
            stRef.current.active = activeIndex
            stRef.current.autoIdx = activeIndex
            stRef.current.holdT = 0
            stRef.current.idleT = 0
        }
    }, [activeIndex, n])

    const W = dims.w || 800
    const H = dims.h || 460
    const k = adv.coverScale / 100
    const sw0 = (size * spineWidth) / 100
    const cw0 = (size * adv.coverAspect) / 100
    const gap0 = (size * adv.gap) / 100
    const rowOpen0 = (n - 1) * (sw0 + gap0) + k * cw0
    const jMax = 1 + (0.8 * adv.heightJitter) / 100
    const hsMax = Math.max(1, Math.min((W * 0.9) / Math.max(1e-6, rowOpen0 / size), (H * 0.82) / (k * jMax)))
    const hsDef = Math.min(SIZE_DEFAULT, hsMax * 0.88)
    const hs = Math.max(
        1,
        size <= SIZE_DEFAULT
            ? (size * hsDef) / SIZE_DEFAULT
            : hsDef + ((hsMax - hsDef) * Math.min(1, (size - SIZE_DEFAULT) / (SIZE_MAX - SIZE_DEFAULT)))
    )
    const fit = hs / size
    const sw = sw0 * fit
    const cw = cw0 * fit
    const gap = gap0 * fit
    const rowOpenW = rowOpen0 * fit
    const heights = books.map((_: any, i: number) => hs * (1 + (JITTER[i % JITTER.length] * adv.heightJitter) / 100))
    const startX = (W - rowOpenW) / 2
    const floorY = H / 2 + (hs * k) / 2 + (H * adv.rowOffset) / 100
    const g: Geom = {
        n, hs, sw, cw, gap, k, W, H, heights, startX, floorY,
        boxH: hs * k * jMax * 1.1,
        P: adv.perspective * (hs / 440),
    }
    const geomRef = useRef(g)
    geomRef.current = g
    const propsRef = useRef(props)
    propsRef.current = props

    const hoverK = (a: any) => a.hover / 50

    const initLayout = rowLayout(g, st.es)
    const initSettled = rowSettled(st.es, n)
    const initStyles = initLayout.map((L, i) =>
        slotStyles(g, L, (adv.lift / 100) * hs * st.lift[i] * hoverK(adv), adv.tilt * st.ty * st.lift[i] * hoverK(adv), adv.shadowOpacity / 100, initSettled)
    )

    useEffect(() => {
        const el = rootRef.current
        if (!el) return
        const measure = () => {
            const w = el.offsetWidth, h = el.offsetHeight
            if (w > 0 && h > 0) setDims((d) => (d.w === w && d.h === h ? d : { w, h }))
        }
        measure()
        const ro = new ResizeObserver(measure)
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        const set = () => (stRef.current.reduce = mq.matches)
        set()
        mq.addEventListener?.("change", set)
        return () => mq.removeEventListener?.("change", set)
    }, [])

    useEffect(() => {
        let raf = 0
        let last = -1
        let visible = true
        const tick = (now: number) => {
            if (!visible) {
                raf = 0
                return
            }
            raf = requestAnimationFrame(tick)
            const dt = last < 0 ? 0 : Math.min((now - last) / 1000, 1 / 20)
            last = now
            const s = stRef.current
            const p = propsRef.current
            const a = { ...ADVANCED_DEFAULTS, ...(p.advanced ?? {}) }
            const geo = geomRef.current
            const count = geo.n
            const rate = Math.max(0, (p.speed ?? 50) / 50)
            const hk = a.hover / 50

            if (s.pointerIn) {
                if (s.hovered >= 0) {
                    s.active = s.hovered
                    s.autoIdx = s.hovered
                }
            } else if (a.autoPlay && !s.reduce && rate > 0 && count > 1) {
                if (s.active < 0) {
                    s.idleT += dt * rate
                    if (s.idleT >= a.idleMs / 1000) {
                        s.autoIdx = (s.autoIdx + 1) % count
                        s.active = s.autoIdx
                        s.holdT = 0
                    }
                } else {
                    s.holdT += dt * rate
                    if (s.holdT >= a.holdMs / 1000) {
                        s.autoIdx = (s.active + 1) % count
                        s.active = s.autoIdx
                        s.holdT = 0
                    }
                }
            }

            if (s.active >= 0 && s.active !== s.lastReported) {
                s.lastReported = s.active
                p.onActiveBookChange?.(s.active)
            }

            for (let i = 0; i < count; i++) {
                const tw = s.tw[i]
                const target = i === s.active ? 1 : 0
                if (tw.to !== target) {
                    tw.from = s.es[i]
                    tw.to = target
                    tw.t = 0
                    tw.open = target > tw.from
                    const base = (tw.open ? a.openMs : a.closeMs) / 1000
                    tw.dur = Math.max(0.05, base * Math.abs(target - tw.from))
                    const v = s.vel[i] / Math.max(1e-3, rate)
                    tw.v0 = Math.abs(v) > 0.05 ? v - ((target - tw.from) * (tw.open ? OPEN_D0 : CLOSE_D0)) / tw.dur : 0
                }
                const prev = s.es[i]
                if (s.reduce) {
                    s.es[i] = target
                } else if (rate > 0) {
                    tw.t += dt * rate
                    const u = Math.min(1, tw.t / tw.dur)
                    const ez = tw.open ? OPEN_EASE(u) : CLOSE_EASE(u)
                    const carry = tw.v0 * tw.dur * u * (1 - u) * (1 - u)
                    s.es[i] = Math.max(0, Math.min(1, tw.from + (tw.to - tw.from) * ez + carry))
                }
                s.vel[i] = dt > 0 ? (s.es[i] - prev) / dt : 0
                const lt = s.pointerIn && s.hovered === i ? 1 : 0
                s.lift[i] += (lt - s.lift[i]) * (1 - Math.exp(-dt * 8))
            }
            s.ty += (s.py - s.ty) * (1 - Math.exp(-dt * 6))

            const L = rowLayout(geo, s.es)
            const settled = rowSettled(s.es, count)
            for (let i = 0; i < count; i++) {
                const ss = slotStyles(
                    geo, L[i],
                    (a.lift / 100) * geo.hs * s.lift[i] * hk,
                    a.tilt * s.ty * s.lift[i] * hk,
                    a.shadowOpacity / 100,
                    settled
                )
                const se = slotEls.current[i], be = bookEls.current[i], sh = shadowEls.current[i]
                if (se) Object.assign(se.style, ss.slot)
                if (be) Object.assign(be.style, ss.book)
                if (sh) Object.assign(sh.style, ss.shadow)
                const ce = coverEls.current[i]
                if (ce && ce.style.opacity !== ss.coverOpacity) ce.style.opacity = ss.coverOpacity
                const cf = coverFaceEls.current[i]
                if (cf && cf.style.visibility !== ss.coverVisibility) cf.style.visibility = ss.coverVisibility
                if (cf && cf.style.transform !== ss.coverTransform) cf.style.transform = ss.coverTransform
                const sf = spineFaceEls.current[i]
                if (sf && sf.style.visibility !== ss.spineVisibility) sf.style.visibility = ss.spineVisibility
                const pe = spineEls.current[i]
                if (pe && pe.style.opacity !== ss.spineOpacity) pe.style.opacity = ss.spineOpacity
            }
        }
        const root = rootRef.current
        const io =
            root && typeof IntersectionObserver !== "undefined"
                ? new IntersectionObserver(([e]) => {
                      visible = e.isIntersecting
                      if (visible && !raf) {
                          last = -1
                          raf = requestAnimationFrame(tick)
                      }
                  })
                : null
        if (io && root) io.observe(root)
        raf = requestAnimationFrame(tick)
        return () => {
            cancelAnimationFrame(raf)
            io?.disconnect()
        }
    }, [])

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const s = stRef.current
        const geo = geomRef.current
        const root = rootRef.current
        if (!root) return
        const r = root.getBoundingClientRect()
        const pl = { ...DEFAULT_PLACEMENT, ...(propsRef.current.placement ?? {}) }
        const cx = geo.W / 2, cy = geo.floorY - (geo.hs * geo.k) / 2
        let qx = ((e.clientX - r.left) / Math.max(1, r.width)) * geo.W - cx - (pl.x / 100) * geo.W
        let qy = ((e.clientY - r.top) / Math.max(1, r.height)) * geo.H - cy - (pl.y / 100) * geo.H
        const t = (pl.tilt * Math.PI) / 180, sn = Math.sin(t), cs = Math.cos(t)
        const yp = (qy * geo.P) / Math.max(1e-6, cs * geo.P + qy * sn)
        qx = (qx * (geo.P - yp * sn)) / geo.P
        qy = yp
        const ar = (-pl.angle * Math.PI) / 180
        const x = cx + qx * Math.cos(ar) - qy * Math.sin(ar)
        const y = cy + qx * Math.sin(ar) + qy * Math.cos(ar)
        s.pointerIn = true
        s.idleT = 0
        const mid = geo.floorY - (geo.hs * geo.k) / 2
        s.py = Math.max(-1, Math.min(1, (y - mid) / ((geo.hs * geo.k) / 2)))
        const targets = Array.from({ length: geo.n }, (_, i) => (i === s.active ? 1 : 0))
        const L = rowLayout(geo, targets)
        const inBand = y >= geo.floorY - geo.hs * geo.k * 1.12 && y <= geo.floorY + geo.hs * 0.1
        const left = L[0].x - geo.gap
        const right = L[L.length - 1].x + L[L.length - 1].w + geo.gap
        if (!inBand || x < left || x > right) {
            s.hovered = -1
            return
        }
        for (let i = 0; i < L.length; i++) {
            if (x >= L[i].x - geo.gap / 2 && x <= L[i].x + L[i].w + geo.gap / 2) {
                s.hovered = i
                return
            }
        }
    }
    const onPointerLeave = () => {
        const s = stRef.current
        s.pointerIn = false
        s.hovered = -1
        s.holdT = 0
        s.idleT = 0
        s.py = 0
    }
    const onClick = () => {
        const s = stRef.current
        if (s.hovered >= 0) {
            s.active = s.hovered
            s.autoIdx = s.hovered
            onBookClick?.(s.hovered)
        }
    }

    const fontFamily = font?.fontFamily || SERIF
    const fontWeight = font?.fontWeight ?? 400
    const spineW = Math.max(100, Math.min(900, Math.round((Number(spineWeight) || DEFAULT_SPINE_WEIGHT) / 100) * 100))
    const fontStyle = font?.fontStyle ?? "normal"
    const letterSpacing = font?.letterSpacing ?? "normal"
    const floorX = startX - gap * 4
    const floorW = rowOpenW + gap * 8
    const fontK = Math.max(0.1, (parseFloat(String(font?.fontSize ?? DEFAULT_FONT.fontSize)) || DEFAULT_FONT.fontSize) / DEFAULT_FONT.fontSize)
    const fade = "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)"
    const pl = { ...DEFAULT_PLACEMENT, ...(props.placement ?? {}) }
    const placeTransform =
        pl.x || pl.y || pl.angle || pl.tilt
            ? `translate(${(pl.x / 100) * W}px, ${(pl.y / 100) * H}px) perspective(${g.P}px) rotateX(${pl.tilt}deg) rotate(${pl.angle}deg)`
            : undefined
    const [focusX, focusY] = (FOCUS_POS[imageFocus] ?? "50% 50%").split(" ")

    return (
        <div
            ref={rootRef}
            onPointerMove={onPointerMove}
            onPointerEnter={onPointerMove}
            onPointerLeave={onPointerLeave}
            onClick={onClick}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minWidth: 0,
                minHeight: 360,
                cursor: "pointer",
                ...style,
                background,
                overflow: "hidden",
                isolation: "isolate",
            }}
        >
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <div style={{ position: "absolute", inset: 0, transform: placeTransform, transformOrigin: `${W / 2}px ${floorY - (hs * k) / 2}px` }}>
                {/* floor */}
                <div
                    style={{
                        position: "absolute", left: floorX, top: floorY, width: floorW, height: hs * 0.16,
                        background: `linear-gradient(180deg, ${rgba(floorColor, (adv.floorOpacity / 100) * 0.6)} 0%, ${rgba(floorColor, 0)} 100%)`,
                        WebkitMaskImage: fade, maskImage: fade,
                    }}
                />
                <div
                    style={{
                        position: "absolute", left: floorX, top: floorY, width: floorW, height: 1,
                        background: rgba(floorColor, Math.min(1, (adv.floorOpacity / 100) * 1.5)),
                        WebkitMaskImage: fade, maskImage: fade,
                    }}
                />
                {/* contact shadows */}
                {books.map((_: any, i: number) => (
                    <div
                        key={"sh" + i}
                        ref={(el) => { shadowEls.current[i] = el }}
                        style={{
                            position: "absolute", left: 0, top: 0,
                            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 72%)",
                            ...initStyles[i].shadow,
                        }}
                    />
                ))}
                {/* books */}
                {books.map((b: any, i: number) => {
                    const h = heights[i]
                    const src = imgSrc(b.cover)
                    const full = imageFit === "full" && !!src
                    const coverText = full && loaded[src] ? "#FFFFFF" : lum(b.coverColor) > 0.55 ? "#1A1A1A" : "#FFFFFF"
                    const ink = lum(b.coverColor) > 0.55 ? ["#FBF6EA", "#A99C86", "#4A4136"] : ["#D2D0CC", "#8E949D", "#2F3442"]
                    const strip = (cw * adv.coverStrip) / 100
                    const inset = strip + cw * 0.1
                    const hl = adv.highlight / 100
                    const sd = adv.shade / 100
                    return (
                        <div
                            key={"b" + i}
                            ref={(el) => { slotEls.current[i] = el }}
                            style={{ position: "absolute", left: 0, top: 0, ...initStyles[i].slot }}
                        >
                            <div
                                ref={(el) => { bookEls.current[i] = el }}
                                style={{
                                    position: "absolute", left: 0, bottom: 0, width: sw, height: h,
                                    transformStyle: "preserve-3d", transformOrigin: "0px 100% 0px",
                                    ...initStyles[i].book,
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute", left: 0, bottom: 0, width: sw, height: h, zoom: FACE_SS,
                                        transform: `scale3d(${1 / FACE_SS}, ${1 / FACE_SS}, ${1 / FACE_SS})`,
                                        transformOrigin: "0px 100% 0px", transformStyle: "preserve-3d",
                                    }}
                                >
                                {/* spine face */}
                                <div
                                    ref={(el) => { spineFaceEls.current[i] = el }}
                                    style={{
                                        visibility: initStyles[i].spineVisibility,
                                        position: "absolute", left: 0, bottom: 0, width: sw, height: h,
                                        background: b.spineColor, borderRadius: 1, overflow: "hidden",
                                        backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
                                    }}
                                >
                                    <div
                                        ref={(el) => { spineEls.current[i] = el }}
                                        style={{ position: "absolute", inset: 0, opacity: initStyles[i].spineOpacity }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute", inset: 0,
                                                background: `linear-gradient(90deg, rgba(255,255,255,${hl}) 0px, rgba(255,255,255,0) ${sw * 0.12}px, rgba(0,0,0,0) ${sw * 0.55}px, rgba(0,0,0,${sd}) 100%), linear-gradient(180deg, rgba(0,0,0,0) 72%, rgba(0,0,0,${sd * 0.8}) 100%)`,
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: "absolute", top: h * 0.048, bottom: h * 0.14, left: 0, right: 0,
                                                display: "flex", justifyContent: "center", overflow: "hidden",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    writingMode: "vertical-rl", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                                                    maxHeight: "100%", fontFamily, fontWeight: spineW, fontStyle, letterSpacing,
                                                    fontSize: (sw * adv.titleSize * fontK) / 100, lineHeight: 1,
                                                    color: b.textColor, opacity: adv.textOpacity / 100,
                                                }}
                                            >
                                                {b.title}
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                position: "absolute", left: 0, right: 0, bottom: h * 0.035, textAlign: "center",
                                                fontFamily: SERIF, fontStyle: "italic", fontSize: (sw * adv.monogramSize * fontK) / 100, lineHeight: 1,
                                                color: b.textColor, opacity: adv.monogramOpacity / 100,
                                            }}
                                        >
                                            {monogram}
                                        </div>
                                    </div>
                                </div>
                                {/* cover face */}
                                <div
                                    ref={(el) => { coverFaceEls.current[i] = el }}
                                    style={{
                                        position: "absolute", left: sw - 1, bottom: 0, width: cw + 1, height: h,
                                        visibility: initStyles[i].coverVisibility,
                                        transformOrigin: "0% 50%", transform: initStyles[i].coverTransform,
                                        backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
                                        background: `linear-gradient(180deg, ${mix(b.coverColor, "#FFFFFF", 0.08)} 0%, ${b.coverColor} 100%)`,
                                        overflow: "hidden", color: coverText,
                                    }}
                                >
                                    <div
                                        ref={(el) => { coverEls.current[i] = el }}
                                        style={{ position: "absolute", inset: 0, opacity: initStyles[i].coverOpacity }}
                                    >
                                        <div
                                            style={
                                                full
                                                    ? { position: "absolute", left: strip, right: 0, top: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }
                                                    : {
                                                          position: "absolute", left: inset, right: cw * 0.08, top: h * 0.07, height: h * 0.5,
                                                          display: "flex", alignItems: "center", justifyContent: "center",
                                                      }
                                            }
                                        >
                                            {!(src && loaded[src]) && (
                                                <div style={{ width: `${adv.artScale}%`, height: `${adv.artScale}%` }}>
                                                    <CoverArt variant={b.artVariant ?? (i % 4)} ink={ink} star={adv.starColor} bg={b.coverColor} uid={`${uid}-${i}`} />
                                                </div>
                                            )}
                                            {src && (
                                                <img
                                                    src={src}
                                                    alt=""
                                                    draggable={false}
                                                    onLoad={() => setLoaded((m) => (m[src] ? m : { ...m, [src]: true }))}
                                                    onError={() => setLoaded((m) => ({ ...m, [src]: false }))}
                                                    style={{
                                                        position: "absolute", inset: 0, width: "100%", height: "100%",
                                                        objectFit: imageFit === "contain" ? "contain" : "cover",
                                                        objectPosition: `${focusX} ${Math.max(0, Math.min(100, parseFloat(focusY) - Math.max(-250, Math.min(250, Number(b.offsetY) || 0)) / 5))}%`,
                                                        opacity: loaded[src] ? 1 : 0,
                                                    }}
                                                />
                                            )}
                                        </div>
                                        {full && src && loaded[src] && (
                                            <div
                                                style={{
                                                    position: "absolute", left: strip, right: 0, bottom: 0, height: h * 0.5,
                                                    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
                                                }}
                                            />
                                        )}
                                        <div
                                            style={{
                                                position: "absolute", left: 0, top: 0, bottom: 0, width: strip,
                                                background: mix(b.coverColor, "#000000", 0.1),
                                                borderRight: "1px solid rgba(255,255,255,0.14)",
                                                display: "flex", justifyContent: "center", paddingTop: h * 0.04, overflow: "hidden",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    writingMode: "vertical-rl", whiteSpace: "nowrap", fontFamily, fontWeight: spineW,
                                                    fontSize: cw * 0.036 * fontK, lineHeight: 1, opacity: 0.75,
                                                }}
                                            >
                                                {b.title}
                                            </span>
                                        </div>
                                        <div style={{ position: "absolute", left: inset, right: cw * 0.08, bottom: h * 0.12 }}>
                                            {b.label.trim() && (
                                                <div
                                                    style={{
                                                        fontFamily: SANS, fontWeight: 500, fontSize: (cw * adv.kickerSize * fontK) / 100,
                                                        lineHeight: 1.2, opacity: 0.8, marginBottom: cw * 0.025,
                                                    }}
                                                >
                                                    {b.label}
                                                </div>
                                            )}
                                            <div
                                                style={{
                                                    fontFamily, fontWeight, fontStyle, letterSpacing,
                                                    fontSize: (cw * adv.coverTitleSize * fontK) / 100, lineHeight: 1.08,
                                                }}
                                            >
                                                {b.title}
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                position: "absolute", left: inset, bottom: h * 0.05,
                                                display: "flex", alignItems: "center", gap: cw * 0.03,
                                                fontFamily: SANS, fontSize: (cw * adv.readsSize * fontK) / 100, opacity: 0.7,
                                            }}
                                        >
                                            <span style={{ width: cw * 0.06, height: 1, background: "currentColor" }} />
                                            <span>{b.subtitle}</span>
                                        </div>
                                        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.2)" }} />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
              </div>
                {adv.grain > 0 && (
                    <div
                        style={{
                            position: "absolute", inset: 0, opacity: (adv.grain / 100) * 0.5, mixBlendMode: "overlay",
                            backgroundImage:
                                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                        }}
                    />
                )}
                {adv.vignette > 0 && (
                    <div
                        style={{
                            position: "absolute", inset: 0,
                            background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,${adv.vignette / 100}) 100%)`,
                        }}
                    />
                )}
            </div>
        </div>
    )
}
