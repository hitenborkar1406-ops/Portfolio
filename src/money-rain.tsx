/* eslint-disable */
// Code & Algorithm Rain (adapted from Money Rain — Originkit)

"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

/* --------------------------------------------------------------- constants */

const DPR_CAP = 2
/** Vertical field of view. */
const FOV = (50 * Math.PI) / 180
const NEAR = 0.1
const FAR = 100

/** Width / Height dials are in millimetres; one world unit is 100mm. */
const MM = 0.01

/** Depth band of the ordinary cards, world units from the camera. */
const Z_NEAR = 3.5
const Z_FAR = 24
/** The close card. */
const HERO_Z = 1.9

/** Grid resolution of one card. */
const SEG_X = 24
const SEG_Y = 8

/** Atlas: two faces of 1024 x (512 - 2*GUTTER). */
const ATLAS = 1024
const GUTTER = 16
const MAX_MIP_LEVEL = 6

/* ------------------------------------------------------------------ colour */

type RGB = [number, number, number]

function parseColor(input: string | undefined, fb: RGB): RGB {
    if (!input) return fb
    let s = String(input).trim()
    const v = /^var\(\s*--[^,]+,\s*(.+)\)\s*$/i.exec(s)
    if (v) s = v[1].trim()

    if (s.charAt(0) === "#") {
        let h = s.slice(1)
        if (h.length === 3 || h.length === 4) {
            h =
                h.charAt(0) + h.charAt(0) +
                h.charAt(1) + h.charAt(1) +
                h.charAt(2) + h.charAt(2)
        }
        if (h.length < 6) return fb
        const n = parseInt(h.slice(0, 6), 16)
        if (!isFinite(n)) return fb
        return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
    }

    const m = /^(rgba?|hsla?)\(([^)]+)\)\s*$/i.exec(s)
    if (!m) return fb
    const parts = m[2].split(/[\s,/]+/).filter((x) => x.length > 0)
    if (parts.length < 3) return fb

    if (m[1].charAt(0).toLowerCase() === "r") {
        const ch = (t: string) =>
            t.indexOf("%") >= 0 ? (parseFloat(t) / 100) * 255 : parseFloat(t)
        const r = ch(parts[0]), g = ch(parts[1]), b = ch(parts[2])
        if (!isFinite(r) || !isFinite(g) || !isFinite(b)) return fb
        return [r / 255, g / 255, b / 255]
    }

    let hue = parseFloat(parts[0])
    if (parts[0].indexOf("turn") >= 0) hue *= 360
    else if (parts[0].indexOf("rad") >= 0) hue *= 180 / Math.PI
    const sat = parseFloat(parts[1]) / 100
    const lit = parseFloat(parts[2]) / 100
    if (!isFinite(hue) || !isFinite(sat) || !isFinite(lit)) return fb
    const c = (1 - Math.abs(2 * lit - 1)) * sat
    const hp = (((hue % 360) + 360) % 360) / 60
    const x = c * (1 - Math.abs((hp % 2) - 1))
    let r = 0, g = 0, b = 0
    if (hp < 1) { r = c; g = x } else if (hp < 2) { r = x; g = c }
    else if (hp < 3) { g = c; b = x } else if (hp < 4) { g = x; b = c }
    else if (hp < 5) { r = x; b = c } else { r = c; b = x }
    const mm = lit - c / 2
    return [r + mm, g + mm, b + mm]
}

/* ----------------------------------------------------------------- shaders */

const VERT = `#version 300 es
precision highp float;

layout(location = 0) in vec2 aUV;
layout(location = 1) in vec4 aSeed;
layout(location = 2) in float aHero;
layout(location = 3) in vec2 aOffset;

uniform float uTime;
uniform float uTumble;
uniform float uAspect;
uniform float uTanHalf;
uniform vec2 uSize;
uniform float uFlutter;
uniform float uSway;
uniform vec2 uPointer;
uniform float uInteract;

out vec2 vUV;
out vec3 vN;
out vec3 vPos;
out float vFog;

const float TAU = 6.2831853;

float h1(float s, float k) { return fract(sin(s * k + 1.7) * 43758.5453); }

mat3 axisAngle(vec3 a, float ang) {
    float s = sin(ang), c = cos(ang), oc = 1.0 - c;
    return mat3(
        oc * a.x * a.x + c,       oc * a.x * a.y + a.z * s, oc * a.z * a.x - a.y * s,
        oc * a.x * a.y - a.z * s, oc * a.y * a.y + c,       oc * a.y * a.z + a.x * s,
        oc * a.z * a.x + a.y * s, oc * a.y * a.z - a.x * s, oc * a.z * a.z + c);
}

vec3 surf(vec2 uv, float k, float ph, float t) {
    vec2 p = (uv - 0.5) * uSize;
    float th = p.x * k;
    vec3 q = vec3(sin(th) / k, p.y, (1.0 - cos(th)) / k * 0.35);
    q.z += uFlutter * 0.035 * uSize.x
        * sin(uv.x * 7.0 - t * 3.3 + ph * TAU) * (0.5 + 0.5 * uv.y);
    return q;
}

void main() {
    float s = aSeed.w;
    float hero = step(0.5, aHero);
    float t = uTime;
    float ph = h1(s, 12.9898);

    float kAmp = uFlutter * 1.0 / max(uSize.x, 1e-3) * mix(1.0, 0.85, hero);
    float k = kAmp * (0.65 * sin(t * (0.9 + 0.8 * ph) + ph * TAU)
                   + 0.35 * sin(t * (1.7 + 0.6 * h1(s, 3.1)) + ph * 3.1))
            + 0.12 / max(uSize.x, 1e-3);
    k = (k >= 0.0 ? 1.0 : -1.0) * max(abs(k), 1e-3);

    vec3 ax = normalize(vec3(h1(s, 7.3), h1(s, 5.1), h1(s, 9.7)) * 2.0 - 1.0 + vec3(1e-3));
    float dir = h1(s, 2.3) < 0.5 ? -1.0 : 1.0;
    float ang = ph * TAU + dir * uTumble * (0.6 + 0.9 * h1(s, 4.7));
    mat3 R = axisAngle(ax, ang);
    mat3 RH = axisAngle(vec3(1.0, 0.0, 0.0), -0.55 + 0.12 * sin(uTumble * 0.35))
            * axisAngle(vec3(0.0, 0.0, 1.0), -0.32 + 0.18 * sin(uTumble * 0.23 + 1.0))
            * axisAngle(vec3(0.0, 1.0, 0.0), 0.2 * sin(uTumble * 0.29));
    R = hero > 0.5 ? RH : R;

    vec3 q = surf(aUV, k, ph, t);
    float e = 0.01;
    vec3 du = surf(aUV + vec2(e, 0.0), k, ph, t) - q;
    vec3 dv = surf(aUV + vec2(0.0, e), k, ph, t) - q;
    vec3 n = R * normalize(cross(du, dv));

    float z = mix(mix(Z_NEAR, Z_FAR, aSeed.z), HERO_Z, hero);
    float hh = z * uTanHalf;
    float hw = hh * uAspect;
    float margin = 0.6 * length(uSize) + 0.1;
    float rangeY = 2.0 * (hh + margin);
    float fall = mix(0.9 + 0.7 * h1(s, 8.8), 0.22, hero);
    float y = (hh + margin) - mod(aSeed.y * rangeY + fall * t, rangeY);
    float x = mix((aSeed.x * 2.0 - 1.0) * (hw + margin * 0.5), 0.12 * hw, hero)
            + uSway * 0.3 * uSize.x * sin(t * (0.45 + 0.5 * h1(s, 6.2)) + ph * TAU);

    float depthScale = clamp(1.0 - (z - HERO_Z) / (Z_FAR - HERO_Z), 0.0, 1.0);
    x += uPointer.x * uInteract * (0.4 + 1.6 * depthScale);
    y += uPointer.y * uInteract * (0.25 + 0.9 * depthScale);

    x += aOffset.x;
    y += aOffset.y;

    vec3 pos = vec3(x, y, -z) + R * q;

    float f = 1.0 / uTanHalf;
    gl_Position = vec4(
        pos.x * f / uAspect,
        pos.y * f,
        (pos.z * (FAR_ + NEAR_) + 2.0 * FAR_ * NEAR_) / (NEAR_ - FAR_),
        -pos.z);

    vUV = aUV;
    vN = n;
    vPos = pos;
    vFog = smoothstep(8.0, Z_FAR + 2.0, z);
}
`
    .replace(/Z_NEAR/g, glf(Z_NEAR))
    .replace(/Z_FAR/g, glf(Z_FAR))
    .replace(/HERO_Z/g, glf(HERO_Z))
    .replace(/FAR_/g, glf(FAR))
    .replace(/NEAR_/g, glf(NEAR))

const FRAG = `#version 300 es
precision highp float;

in vec2 vUV;
in vec3 vN;
in vec3 vPos;
in float vFog;

uniform sampler2D uTex;
uniform vec3 uBase;
uniform vec3 uBg;
uniform float uGut;

out vec4 outColor;

void main() {
    bool front = gl_FrontFacing;
    float u = front ? vUV.x : 1.0 - vUV.x;
    float faceV = uGut + (1.0 - vUV.y) * (0.5 - 2.0 * uGut);
    vec2 st = vec2(u, faceV + (front ? 0.0 : 0.5));
    vec3 tex = texture(uTex, st).rgb;

    vec3 n = normalize(vN);
    if (!front) n = -n;
    vec3 L = normalize(vec3(-0.35, 0.55, 0.75));
    vec3 V = normalize(-vPos);
    float diff = max(dot(n, L), 0.0) + 0.25 * max(-dot(n, L), 0.0);
    vec3 H = normalize(L + V);
    float spec = pow(max(dot(n, H), 0.0), 28.0) * 0.1;

    vec3 col = tex * uBase * (0.22 + 0.9 * diff) + spec;
    col = mix(col, uBg, vFog * 0.85);
    outColor = vec4(col, 1.0);
}
`

function glf(n: number): string {
    const s = String(n)
    return s.indexOf(".") >= 0 || s.indexOf("e") >= 0 ? s : s + ".0"
}

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
    const sh = gl.createShader(type)
    if (!sh) return null
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error("MoneyRain shader:", gl.getShaderInfoLog(sh))
        gl.deleteShader(sh)
        return null
    }
    return sh
}

function buildProgram(gl: WebGL2RenderingContext) {
    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return null
    const p = gl.createProgram()
    if (!p) return null
    gl.attachShader(p, vs)
    gl.attachShader(p, fs)
    gl.linkProgram(p)
    gl.deleteShader(vs)
    gl.deleteShader(fs)
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        console.error("MoneyRain link:", gl.getProgramInfoLog(p))
        return null
    }
    return p
}

/* ---------------------------------------------------------------- geometry */

function gridGeo() {
    const uv = new Float32Array((SEG_X + 1) * (SEG_Y + 1) * 2)
    let o = 0
    for (let j = 0; j <= SEG_Y; j++) {
        for (let i = 0; i <= SEG_X; i++) {
            uv[o++] = i / SEG_X
            uv[o++] = j / SEG_Y
        }
    }
    const idx = new Uint16Array(SEG_X * SEG_Y * 6)
    o = 0
    for (let j = 0; j < SEG_Y; j++) {
        for (let i = 0; i < SEG_X; i++) {
            const a = j * (SEG_X + 1) + i
            const b = a + 1
            const c = a + SEG_X + 1
            const d = c + 1
            idx[o++] = a; idx[o++] = b; idx[o++] = d
            idx[o++] = a; idx[o++] = d; idx[o++] = c
        }
    }
    return { uv, idx }
}

function seedData(count: number) {
    const g = 1.2207440846057596
    const a1 = 1 / g, a2 = 1 / (g * g), a3 = 1 / (g * g * g)
    const d = new Float32Array(count * 5)
    for (let i = 0; i < count; i++) {
        const o = i * 5
        d[o] = (0.5 + a1 * i) % 1
        d[o + 1] = (0.5 + a2 * i) % 1
        d[o + 2] = (0.5 + a3 * i) % 1
        d[o + 3] = ((i * 0.618034) % 1) * 0.97 + 0.013
        d[o + 4] = i === 0 ? 1 : 0
    }
    d[1] = 0.35
    return d
}

function h1js(s: number, k: number): number {
    const v = Math.sin(s * k + 1.7) * 43758.5453
    return v - Math.floor(v)
}

function noteBase(i: number, time: number, aspect: number, tanHalf: number, margin: number) {
    const g = 1.2207440846057596
    const a1 = 1 / g, a2 = 1 / (g * g), a3 = 1 / (g * g * g)
    const hero = i === 0
    const sx = (0.5 + a1 * i) % 1
    const sy = hero ? 0.35 : (0.5 + a2 * i) % 1
    const sz = (0.5 + a3 * i) % 1
    const sw = ((i * 0.618034) % 1) * 0.97 + 0.013
    const z = hero ? HERO_Z : Z_NEAR + (Z_FAR - Z_NEAR) * sz
    const hh = z * tanHalf
    const hw = hh * aspect
    const rangeY = 2 * (hh + margin)
    const fall = hero ? 0.22 : 0.9 + 0.7 * h1js(sw, 8.8)
    const yRaw = sy * rangeY + fall * time
    const y = (hh + margin) - (((yRaw % rangeY) + rangeY) % rangeY)
    const x = hero ? 0.12 * hw : (sx * 2 - 1) * (hw + margin * 0.5)
    return { x, y, z }
}

/* ------------------------------------------------------------------- atlas */

function lcg(seed: number) {
    let s = seed >>> 0
    return () => {
        s = (Math.imul(s, 1664525) + 1013904223) >>> 0
        return s / 4294967296
    }
}

/**
 * Procedural Code & Algorithm card in a 1180x500 logical box.
 * Monochrome values are tinted dynamically by `baseColor` in the fragment shader.
 */
function drawNote(ctx: CanvasRenderingContext2D, back: boolean) {
    const W = 1180, H = 500
    const rnd = lcg(back ? 29 : 11)
    const mono = "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace"

    // 1. Dark terminal card base + subtle radial sheen
    ctx.fillStyle = "#161922"
    ctx.fillRect(0, 0, W, H)

    const glow = ctx.createRadialGradient(W * 0.5, H * 0.45, 30, W * 0.5, H * 0.5, W * 0.65)
    glow.addColorStop(0, "rgba(255, 255, 255, 0.09)")
    glow.addColorStop(1, "rgba(0, 0, 0, 0.35)")
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, W, H)

    // 2. Subtle dot-matrix background grid
    ctx.fillStyle = "rgba(255, 255, 255, 0.11)"
    for (let x = 44; x < W - 30; x += 36) {
        for (let y = 44; y < H - 30; y += 36) {
            ctx.fillRect(x, y, 2, 2)
        }
    }

    // 3. Outer & inner technical borders + corner brackets
    const pad = 20
    ctx.strokeStyle = "rgba(255, 255, 255, 0.55)"
    ctx.lineWidth = 2.5
    ctx.strokeRect(pad, pad, W - pad * 2, H - pad * 2)

    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)"
    ctx.lineWidth = 1.5
    ctx.strokeRect(pad + 14, pad + 14, W - (pad + 14) * 2, H - (pad + 14) * 2)

    // Corner L-accents
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 4
    const bLen = 26
    const corners: [number, number, number, number][] = [
        [pad, pad, 1, 1],
        [W - pad, pad, -1, 1],
        [pad, H - pad, 1, -1],
        [W - pad, H - pad, -1, -1],
    ]
    for (const [cx, cy, dx, dy] of corners) {
        ctx.beginPath()
        ctx.moveTo(cx + dx * bLen, cy)
        ctx.lineTo(cx, cy)
        ctx.lineTo(cx, cy + dy * bLen)
        ctx.stroke()
    }

    // Top window header bar
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
    ctx.fillRect(pad + 14, pad + 14, W - (pad + 14) * 2, 46)
    for (let i = 0; i < 3; i++) {
        ctx.fillStyle = i === 0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.28)"
        ctx.beginPath()
        ctx.arc(64 + i * 22, 57, 5.5, 0, Math.PI * 2)
        ctx.fill()
    }

    ctx.textBaseline = "middle"
    ctx.font = `600 18px ${mono}`
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)"
    ctx.textAlign = "right"
    ctx.fillText(back ? "RUNTIME // COMPLEXITY" : "ALGO // DIJKSTRA.TS", W - 56, 57)

    if (!back) {
        // FRONT FACE: Syntax snippet (left) + Graph topology (right)
        const lines: [string, number][] = [
            ["function shortestPath(graph, src) {", 0.95],
            ["  const dist = new Map([[src, 0]]);", 0.72],
            ["  const pq = new MinHeap([[0, src]]);", 0.72],
            ["  while (!pq.isEmpty()) {", 0.9],
            ["    const [d, u] = pq.pop();", 0.68],
            ["    for (const [v, w] of graph[u]) {", 0.85],
            ["      if (d + w < dist.get(v)) relax(u, v);", 0.65],
            ["    }", 0.9],
            ["  }", 0.9],
            ["  return dist; // O((V + E) log V)", 1.0],
            ["}", 0.95],
        ]

        ctx.textAlign = "left"
        ctx.font = `500 22px ${mono}`
        lines.forEach(([text, alpha], idx) => {
            const y = 122 + idx * 31
            ctx.fillStyle = "rgba(255, 255, 255, 0.25)"
            ctx.fillText(String(idx + 1).padStart(2, "0"), 64, y)
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.fillText(text, 112, y)
        })

        // Divider line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.16)"
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(745, 105)
        ctx.lineTo(745, H - 55)
        ctx.stroke()

        // Graph visualization on the right
        const nodes: [number, number][] = [
            [820, 175],
            [960, 145],
            [865, 290],
            [1045, 255],
            [955, 375],
        ]
        const edges: [number, number][] = [
            [0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [2, 4], [3, 4],
        ]

        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)"
        ctx.lineWidth = 2
        for (const [a, b] of edges) {
            ctx.beginPath()
            ctx.moveTo(nodes[a][0], nodes[a][1])
            ctx.lineTo(nodes[b][0], nodes[b][1])
            ctx.stroke()
        }

        nodes.forEach(([nx, ny], i) => {
            ctx.fillStyle = "#161922"
            ctx.beginPath()
            ctx.arc(nx, ny, 18, 0, Math.PI * 2)
            ctx.fill()
            ctx.strokeStyle = i === 0 || i === 4 ? "#ffffff" : "rgba(255, 255, 255, 0.65)"
            ctx.lineWidth = i === 0 || i === 4 ? 3.5 : 2
            ctx.stroke()

            ctx.fillStyle = "#ffffff"
            ctx.font = `700 15px ${mono}`
            ctx.textAlign = "center"
            ctx.fillText(`v${i}`, nx, ny + 1)
        })

        ctx.font = `600 18px ${mono}`
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)"
        ctx.fillText("O(E log V)", 935, 432)
    } else {
        // BACK FACE: Binary matrix background + Geometric < /> & Big-O badge
        ctx.font = `500 17px ${mono}`
        ctx.textAlign = "left"
        for (let row = 0; row < 10; row++) {
            let bits = ""
            for (let col = 0; col < 44; col++) {
                bits += rnd() > 0.5 ? "1 " : "0 "
            }
            ctx.fillStyle = row % 3 === 0 ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)"
            ctx.fillText(bits, 68, 122 + row * 33)
        }

        ctx.fillStyle = "rgba(22, 25, 34, 0.92)"
        ctx.fillRect(W / 2 - 250, H / 2 - 85, 500, 195)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
        ctx.lineWidth = 2
        ctx.strokeRect(W / 2 - 250, H / 2 - 85, 500, 195)

        ctx.textAlign = "center"
        ctx.fillStyle = "#ffffff"
        ctx.font = `700 92px ${mono}`
        ctx.fillText("< />", W / 2, H / 2 - 5)

        ctx.font = `600 22px ${mono}`
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)"
        ctx.fillText("SPACE: O(V)  •  TIME: O(log n)", W / 2, H / 2 + 68)
    }
}

function buildAtlas(image: HTMLImageElement | null): HTMLCanvasElement | null {
    const c = document.createElement("canvas")
    c.width = ATLAS
    c.height = ATLAS
    const ctx = c.getContext("2d")
    if (!ctx) return null
    const faceH = ATLAS / 2 - 2 * GUTTER
    for (let f = 0; f < 2; f++) {
        const top = f * (ATLAS / 2)
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, top, ATLAS, ATLAS / 2)
        ctx.clip()
        if (image) {
            ctx.drawImage(image, 0, top, ATLAS, ATLAS / 2)
            ctx.drawImage(image, 0, top + GUTTER, ATLAS, faceH)
        } else {
            ctx.setTransform(ATLAS / 1180, 0, 0, (ATLAS / 2) / 500, 0, top)
            drawNote(ctx, f === 1)
            ctx.setTransform(1, 0, 0, faceH / 500, 0, top + GUTTER)
            drawNote(ctx, f === 1)
        }
        ctx.restore()
    }
    return c
}

/* ------------------------------------------------------------------- props */

interface BillGroup {
    image?: string
    itemWidth: number
    itemHeight: number
}

interface MotionGroup {
    flutter: number
    tumble: number
    sway: number
}

const BILL_DEFAULTS: BillGroup = {
    image: "",
    itemWidth: 118,
    itemHeight: 68,
}

const MOTION_DEFAULTS: MotionGroup = {
    flutter: 28,
    tumble: 35,
    sway: 65,
}

interface Props {
    background?: string
    baseColor?: string
    density?: number
    speed?: number
    interaction?: number
    bill?: Partial<BillGroup>
    motion?: Partial<MotionGroup>
    width?: number
    height?: number
    style?: React.CSSProperties
}

/* ---------------------------------------------------------------- component */

function __OriginkitBase_MoneyRain(props: Props) {
    const {
        background = "#07090E",
        baseColor = "#64FFDA",
        density = 95,
        speed = 32,
        interaction = 45,
        bill,
        motion,
        style,
    } = props

    const hostRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

    const billV: BillGroup = { ...BILL_DEFAULTS, ...bill }
    const motionV: MotionGroup = { ...MOTION_DEFAULTS, ...motion }

    const live = useRef({
        bg: [0, 0, 0] as RGB,
        base: [1, 1, 1] as RGB,
        density: 95,
        speed: 32,
        interaction: 45,
        bill: BILL_DEFAULTS,
        motion: MOTION_DEFAULTS,
    })
    live.current = {
        bg: parseColor(background, [0.03, 0.04, 0.05]),
        base: parseColor(baseColor, [0.39, 1.0, 0.85]),
        density,
        speed,
        interaction,
        bill: billV,
        motion: motionV,
    }

    const atlas = useRef<{ canvas: HTMLCanvasElement | null; version: number }>({
        canvas: null,
        version: 0,
    })
    const setAtlas = (c: HTMLCanvasElement | null) => {
        if (!c) return
        atlas.current = { canvas: c, version: atlas.current.version + 1 }
    }

    const imageSrc = billV.image
    useEffect(() => {
        if (!imageSrc) {
            setAtlas(buildAtlas(null))
            return
        }
        let cancelled = false
        const im = new Image()
        im.crossOrigin = "anonymous"
        im.onload = () => {
            if (cancelled) return
            setAtlas(buildAtlas(im))
        }
        im.onerror = () => {
            if (!cancelled) console.warn("MoneyRain: image failed to load", imageSrc)
        }
        im.src = imageSrc
        return () => {
            cancelled = true
        }
    }, [imageSrc])

    useEffect(() => {
        const canvas = canvasRef.current
        const host = hostRef.current
        if (!canvas || !host) return

        const gl = canvas.getContext("webgl2", {
            antialias: true,
            alpha: true,
            premultipliedAlpha: true,
            depth: true,
        }) as WebGL2RenderingContext | null
        if (!gl) {
            console.warn("MoneyRain: WebGL2 unavailable")
            return
        }

        const prog = buildProgram(gl)
        if (!prog) return
        gl.useProgram(prog)

        const names = [
            "uTime", "uTumble", "uAspect", "uTanHalf", "uSize", "uFlutter",
            "uSway", "uTex", "uBase", "uBg", "uGut", "uPointer", "uInteract",
        ] as const
        const U = {} as Record<(typeof names)[number], WebGLUniformLocation>
        for (const n of names) {
            const loc = gl.getUniformLocation(prog, n)
            if (!loc) {
                console.error("MoneyRain: uniform location missing", n)
                return
            }
            U[n] = loc
        }

        /* ---- geometry ---- */
        const { uv, idx } = gridGeo()
        const vao = gl.createVertexArray()
        gl.bindVertexArray(vao)
        const uvBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf)
        gl.bufferData(gl.ARRAY_BUFFER, uv, gl.STATIC_DRAW)
        gl.enableVertexAttribArray(0)
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
        const idxBuf = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW)

        const seedBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, seedBuf)
        gl.enableVertexAttribArray(1)
        gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 20, 0)
        gl.vertexAttribDivisor(1, 1)
        gl.enableVertexAttribArray(2)
        gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 20, 16)
        gl.vertexAttribDivisor(2, 1)
        const MAX_INSTANCES = 2000
        const offX = new Float32Array(MAX_INSTANCES)
        const offY = new Float32Array(MAX_INSTANCES)
        const velX = new Float32Array(MAX_INSTANCES)
        const velY = new Float32Array(MAX_INSTANCES)
        const collX = new Float32Array(MAX_INSTANCES)
        const collY = new Float32Array(MAX_INSTANCES)
        const collZ = new Float32Array(MAX_INSTANCES)
        const pushX = new Float32Array(MAX_INSTANCES)
        const pushY = new Float32Array(MAX_INSTANCES)
        const offsetData = new Float32Array(MAX_INSTANCES * 2)

        const offsetBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuf)
        gl.bufferData(gl.ARRAY_BUFFER, offsetData, gl.DYNAMIC_DRAW)
        gl.enableVertexAttribArray(3)
        gl.vertexAttribPointer(3, 2, gl.FLOAT, false, 8, 0)
        gl.vertexAttribDivisor(3, 1)

        let count = 0
        const setCount = (n: number) => {
            count = n
            gl.bindBuffer(gl.ARRAY_BUFFER, seedBuf)
            gl.bufferData(gl.ARRAY_BUFFER, seedData(n), gl.STATIC_DRAW)
            offX.fill(0, 0, n)
            offY.fill(0, 0, n)
            velX.fill(0, 0, n)
            velY.fill(0, 0, n)
        }

        /* ---- texture ---- */
        const tex = gl.createTexture()
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([220, 220, 216, 255]))
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAX_LEVEL, MAX_MIP_LEVEL)
        const aniso = gl.getExtension("EXT_texture_filter_anisotropic")
        if (aniso) {
            const max = gl.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT) as number
            gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, max))
        }
        if (!atlas.current.canvas) setAtlas(buildAtlas(null))
        gl.uniform1i(U.uTex, 0)
        gl.uniform1f(U.uGut, GUTTER / ATLAS)

        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.disable(gl.CULL_FACE)
        gl.clearColor(0, 0, 0, 0)

        /* ---- pointer ---- */
        const onPointerMove = (e: PointerEvent) => {
            const rect = host.getBoundingClientRect()
            const nx = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1
            const ny = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 2 - 1
            pointer.current.tx = Math.max(-1, Math.min(1, nx))
            pointer.current.ty = Math.max(-1, Math.min(1, -ny))
        }
        const onPointerLeave = () => {
            pointer.current.tx = 0
            pointer.current.ty = 0
        }
        host.addEventListener("pointermove", onPointerMove)
        host.addEventListener("pointerleave", onPointerLeave)

        /* ---- collision resolution ---- */
        const resolveCollisions = (dt: number) => {
            const P = live.current
            const sizeX = Math.max(1, P.bill.itemWidth) * MM
            const sizeY = Math.max(1, P.bill.itemHeight) * MM
            const margin = 0.6 * Math.hypot(sizeX, sizeY) + 0.1
            const radius = 0.55 * Math.hypot(sizeX, sizeY)
            const minDist = radius * 1.7
            const cell = minDist
            const aspect = canvas.width / Math.max(1, canvas.height)
            const tanHalf = Math.tan(FOV / 2)

            const buckets = new Map<number, number[]>()
            for (let i = 0; i < count; i++) {
                const b = noteBase(i, time, aspect, tanHalf, margin)
                collX[i] = b.x + offX[i]
                collY[i] = b.y + offY[i]
                collZ[i] = b.z
                const key = Math.floor(collX[i] / cell) * 100003 + Math.floor(collY[i] / cell)
                let arr = buckets.get(key)
                if (!arr) { arr = []; buckets.set(key, arr) }
                arr.push(i)
            }

            pushX.fill(0, 0, count)
            pushY.fill(0, 0, count)
            for (let i = 0; i < count; i++) {
                const gx = Math.floor(collX[i] / cell)
                const gy = Math.floor(collY[i] / cell)
                for (let ox = -1; ox <= 1; ox++) {
                    for (let oy = -1; oy <= 1; oy++) {
                        const arr = buckets.get((gx + ox) * 100003 + (gy + oy))
                        if (!arr) continue
                        for (const j of arr) {
                            if (j <= i) continue
                            if (Math.abs(collZ[i] - collZ[j]) > minDist) continue
                            const dx = collX[i] - collX[j]
                            const dy = collY[i] - collY[j]
                            const dist = Math.hypot(dx, dy)
                            if (dist > 1e-4 && dist < minDist) {
                                const push = ((minDist - dist) / dist) * 0.5
                                const cx = dx * push
                                const cy = dy * push
                                pushX[i] += cx; pushY[i] += cy
                                pushX[j] -= cx; pushY[j] -= cy
                            }
                        }
                    }
                }
            }

            const stiffness = 45, restore = 22, damping = 9
            const maxOffset = radius * 1.4
            const maxSpeed = radius * 14
            for (let i = 0; i < count; i++) {
                velX[i] += (pushX[i] * stiffness - offX[i] * restore) * dt
                velY[i] += (pushY[i] * stiffness - offY[i] * restore) * dt
                const damp = Math.max(0, 1 - damping * dt)
                velX[i] *= damp
                velY[i] *= damp
                const speed = Math.hypot(velX[i], velY[i])
                if (speed > maxSpeed) {
                    const sc = maxSpeed / speed
                    velX[i] *= sc; velY[i] *= sc
                }
                offX[i] += velX[i] * dt
                offY[i] += velY[i] * dt
                const mag = Math.hypot(offX[i], offY[i])
                if (mag > maxOffset) {
                    const sc = maxOffset / mag
                    offX[i] *= sc; offY[i] *= sc
                    velX[i] *= 0.3; velY[i] *= 0.3
                }
                offsetData[i * 2] = offX[i]
                offsetData[i * 2 + 1] = offY[i]
            }

            gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuf)
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, offsetData.subarray(0, count * 2))
        }

        /* ---- sizing ---- */
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP)
            const cssW = canvas.clientWidth || host.clientWidth || 0
            const cssH = canvas.clientHeight || host.clientHeight || 0
            const w = Math.max(1, Math.round(cssW * dpr))
            const h = Math.max(1, Math.round(cssH * dpr))
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w
                canvas.height = h
            }
            gl.viewport(0, 0, w, h)
        }
        resize()
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)

        /* ---- loop ---- */
        let raf = 0
        let last = -1
        let time = 0
        let tumble = 0
        let uploaded = -1

        const frame = (now: number) => {
            raf = requestAnimationFrame(frame)
            const dt = last < 0 ? 0 : Math.min(0.05, Math.max(0, (now - last) / 1000))
            last = now

            const P = live.current
            const A = atlas.current
            if (A.canvas && A.version !== uploaded) {
                uploaded = A.version
                try {
                    gl.bindTexture(gl.TEXTURE_2D, tex)
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, A.canvas)
                    gl.generateMipmap(gl.TEXTURE_2D)
                } catch (err) {
                    console.warn("MoneyRain: image could not be used (cross-origin?)", err)
                }
            }

            const n = Math.max(1, Math.min(2000, Math.round(P.density)))
            if (n !== count) setCount(n)

            const rate = Math.max(0, P.speed) / 50
            time = (time + dt * rate) % 20000
            tumble = (tumble + dt * rate * (Math.max(0, P.motion.tumble) / 50)) % 20000

            gl.uniform1f(U.uTime, time)
            gl.uniform1f(U.uTumble, tumble)
            gl.uniform1f(U.uAspect, canvas.width / Math.max(1, canvas.height))
            gl.uniform1f(U.uTanHalf, Math.tan(FOV / 2))
            gl.uniform2f(
                U.uSize,
                Math.max(1, P.bill.itemWidth) * MM,
                Math.max(1, P.bill.itemHeight) * MM
            )
            gl.uniform1f(U.uFlutter, Math.max(0, P.motion.flutter) / 100)
            gl.uniform1f(U.uSway, Math.max(0, P.motion.sway) / 100)
            gl.uniform3fv(U.uBase, P.base)
            gl.uniform3fv(U.uBg, P.bg)

            pointer.current.x += (pointer.current.tx - pointer.current.x) * 0.08
            pointer.current.y += (pointer.current.ty - pointer.current.y) * 0.08
            gl.uniform2f(U.uPointer, pointer.current.x, pointer.current.y)
            gl.uniform1f(U.uInteract, Math.max(0, P.interaction) / 100)

            resolveCollisions(dt || 1 / 60)

            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            gl.bindVertexArray(vao)
            gl.drawElementsInstanced(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0, count)
        }
        raf = requestAnimationFrame(frame)

        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()
            host.removeEventListener("pointermove", onPointerMove)
            host.removeEventListener("pointerleave", onPointerLeave)
            gl.deleteBuffer(uvBuf)
            gl.deleteBuffer(idxBuf)
            gl.deleteBuffer(seedBuf)
            gl.deleteBuffer(offsetBuf)
            gl.deleteVertexArray(vao)
            gl.deleteTexture(tex)
            gl.deleteProgram(prog)
        }
    }, [])

    return (
        <div
            ref={hostRef}
            style={{
                minWidth: 1200,
                minHeight: 800,
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                background,
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />
        </div>
    )
}

const __originkitPresetProps = {
    background: "#07090E",
    baseColor: "#64FFDA",
    density: 95,
    speed: 32,
    interaction: 45,
    bill: {
        image: "",
        itemWidth: 118,
        itemHeight: 68,
    },
    motion: {
        sway: 65,
        tumble: 35,
        flutter: 28,
    },
}

export default function MoneyRain(props: Record<string, unknown>) {
    return <__OriginkitBase_MoneyRain {...(__originkitPresetProps as Record<string, unknown>)} {...props} />
}