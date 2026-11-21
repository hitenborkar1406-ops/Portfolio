/* eslint-disable */
// Meadow Sundown — Originkit

"use client"

import React, { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"
import * as THREE from "three"

/* ------------------------------------------------------------------ *
 *  MeadowSundown
 *
 *  A live 3D meadow seen from standing height in long grass: rolling
 *  hills, a lone spreading tree with birds and a squirrel, a camper van
 *  in the field, dandelions and wildflowers. The wheel (or a vertical
 *  swipe) runs the day from noon through golden hour and dusk into a
 *  starlit night, and the van's lights come on at dusk.
 *
 *  Interaction
 *    Move      the grass parts under the pointer on damped springs and
 *              springs back; dandelions you brush shed their seeds.
 *    Click     a gust ripples out across the field from that spot. At
 *              night, a click on the sky throws a shooting star.
 *    Tree      click it to step in close; double-click or Esc steps back.
 *    Van       click it to switch its lights by hand.
 *    Wheel     scrubs the time of day, then hands the wheel back to the
 *              page at either end so the page always scrolls on.
 *
 *  Everything is generated: sky, clouds and Milky Way are shaded
 *  procedurally, the tree is grown from a seed, the van is modelled
 *  from primitives. Nothing is fetched.
 * ------------------------------------------------------------------ */

type SeasonName = "spring" | "summer" | "autumn" | "winter"
type WeatherKind = "clear" | "rain" | "snow"
type LightsMode = "auto" | "on" | "off"
type VehicleKind = "van" | "car" | "bike"
type ScrollMode = "wheel" | "page" | "off"

// Each group's defaults are its single source of truth: the type, the
// signature fallback and every control's defaultValue all come from here.
const DEFAULT_MEADOW = { tree: true, birds: 6, squirrel: true, swallows: true, dandelions: 100, wildflowers: 100, motes: true, flowerA: "#f3c227", flowerB: "#f7f4ec", flowerC: "#9a78e2" }
const DEFAULT_BACKGROUND = "#0b0d10"
const DEFAULT_SEASON: SeasonName = "summer"
const DEFAULT_WEATHER = { kind: "clear" as WeatherKind, rain: 100, snow: 100, leafFall: 100 }
const DEFAULT_GRASS = { height: 100, density: 100, bladeColor: "#405e2b", tipColor: "#5f793b", dryColor: "#7c7452", dry: 8 }
const DEFAULT_SEASON_COLORS = { springBlade: "#467a24", springTip: "#8fb24a", autumnBlade: "#5a5626", autumnTip: "#b58f45", winterBlade: "#7d7156", winterTip: "#cbbb95", blossom: "#a782dc", leafA: "#e0a531", leafB: "#cf5a1f", leafC: "#8f341a", snow: "#f3f6fa" }
const DEFAULT_TREE = { x: 15.5, z: -31, size: 100, turn: 0, sway: 5, leafTint: "#e7efdd", barkTint: "#f6f1ec" }
const DEFAULT_VEHICLE = { show: true, type: "van" as VehicleKind, x: 0.3, z: -7.4, size: 100, turn: 0, body: "#7fbad0", roof: "#f1eee6", carPaint: "#c4573a", carRoof: "#efece4", bikePaint: "#a8322b", bikeFrame: "#202124", lights: "auto" as LightsMode, headColor: "#fff0d7", windowColor: "#ffd19b", power: 5 }
const DEFAULT_SKY = { exposure: 100, warmth: 0, sunSize: 100, sunGlow: 100, rays: 100, haze: 100, stars: 100, moonSize: 100, meteors: 100, nightSky: 100 }
const DEFAULT_PLACEMENT = { x: 0, y: 0, angle: 0, tilt: 0 }
const DEFAULT_INTRO = true
const DEFAULT_INTERACTION = { brush: 5, spring: 5, gusts: true, zoom: true }
const DEFAULT_DAY = { start: 0, scroll: "wheel" as ScrollMode, sensitivity: 5 }
const DEFAULT_WIND = { strength: 5, direction: 51.5 }
const DEFAULT_ADVANCED = { camHeight: 1.58, fov: 47, camYaw: 0, detail: 100, pixelRatio: 1.3 }
type MeadowParts = typeof DEFAULT_MEADOW
type WeatherOpts = typeof DEFAULT_WEATHER
type GrassOpts = typeof DEFAULT_GRASS
type SeasonColors = typeof DEFAULT_SEASON_COLORS
type TreeOpts = typeof DEFAULT_TREE
type VehicleOpts = typeof DEFAULT_VEHICLE
type SkyOpts = typeof DEFAULT_SKY
type Placement = typeof DEFAULT_PLACEMENT
type InteractionOpts = typeof DEFAULT_INTERACTION
type DayOpts = typeof DEFAULT_DAY
type WindOpts = typeof DEFAULT_WIND
type AdvancedOpts = typeof DEFAULT_ADVANCED

export interface MeadowSundownProps {
	meadow?: Partial<MeadowParts>
	background?: string
	season?: SeasonName
	weather?: Partial<WeatherOpts>
	grass?: Partial<GrassOpts>
	seasonColors?: Partial<SeasonColors>
	tree?: Partial<TreeOpts>
	vehicle?: Partial<VehicleOpts>
	sky?: Partial<SkyOpts>
	placement?: Partial<Placement>
	intro?: boolean
	interaction?: Partial<InteractionOpts>
	day?: Partial<DayOpts>
	wind?: Partial<WindOpts>
	advanced?: Partial<AdvancedOpts>
	style?: CSSProperties
	onModeChange?: (mode: number, target: number) => void
}

const REF_W = 1200
const REF_H = 750

// ── scalar helpers ──
const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z)
const inst = (a: Float32Array, n: number) => new THREE.InstancedBufferAttribute(a, n)
const f32 = (a: number[], n: number) => new THREE.Float32BufferAttribute(a, n)
const LINEAR = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter }
// Premultiplied-alpha blending for the soft sprites.
const PREMUL = { transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor }
const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const sstep = (a: number, b: number, x: number) => {
	const t = clamp((x - a) / (b - a), 0, 1)
	return t * t * (3 - 2 * t)
}
const ease3 = (n: number) => (n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2)
const num = (v: unknown, d: number) => (typeof v === "number" && isFinite(v) ? v : d)
function prng(seed: number) {
	let n = seed
	return () => {
		n |= 0
		n = (n + 1831565813) | 0
		let e = Math.imul(n ^ (n >>> 15), 1 | n)
		e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e
		return ((e ^ (e >>> 14)) >>> 0) / 4294967296
	}
}
function hash2(a: number, b: number) {
	let t = Math.imul(a, 374761393) + Math.imul(b, 668265263)
	t = Math.imul(t ^ (t >>> 13), 1274126177)
	return ((t ^ (t >>> 16)) >>> 0) / 4294967296
}
function vnoise(x: number, y: number) {
	const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy
	const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy)
	return lerp(lerp(hash2(ix, iy), hash2(ix + 1, iy), u), lerp(hash2(ix, iy + 1), hash2(ix + 1, iy + 1), u), v)
}
function fbm(x: number, y: number, o = 4) {
	let s = 0, a = 0.5, w = 0
	for (let i = 0; i < o; i++) {
		s += a * vnoise(x, y)
		w += a
		x *= 2.03
		y *= 2.03
		a *= 0.5
	}
	return s / w
}
type RGB = [number, number, number]
const toLin = (c: number) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
const colorCache = new Map<string, RGB>()
function lin(s: string | undefined, fb: string): RGB {
	const key = s || fb
	const hit = colorCache.get(key)
	if (hit) return hit
	let r = 0, g = 0, b = 0
	const t = key.trim()
	const m = t.match(/^rgba?\(([^)]+)\)/i)
	if (m) {
		const p = m[1].split(/[ ,/]+/).filter(Boolean).map(parseFloat)
		r = (p[0] || 0) / 255
		g = (p[1] || 0) / 255
		b = (p[2] || 0) / 255
	} else if (t[0] === "#") {
		let h = t.slice(1)
		if (h.length === 3 || h.length === 4) h = h.split("").map((x) => x + x).join("")
		const v = parseInt(h.slice(0, 6), 16) || 0
		r = ((v >> 16) & 255) / 255
		g = ((v >> 8) & 255) / 255
		b = (v & 255) / 255
	} else if (key !== fb) return lin(fb, fb)
	const out: RGB = [toLin(r), toLin(g), toLin(b)]
	colorCache.set(key, out)
	return out
}

// ── terrain ──
// Where the viewer stands, and the knoll the tree grows on.
const HOME = { x: 0, z: 8 }
const KNOLL = { x: 15.5, z: -31 }
function heightAt(x: number, z: number) {
	let t = 0.55 * Math.sin(x * 0.043 + 0.6) * Math.cos(z * 0.037 - 0.4)
	t += 0.9 * (fbm(x * 0.018 + 11, z * 0.018 - 7, 3) - 0.5)
	const i = x - KNOLL.x, s = z - KNOLL.z
	t += 1.6 * Math.exp(-(i * i + s * s) / 1352)
	t += -0.012 * (z - HOME.z) * sstep(0, 60, HOME.z - z)
	const r = Math.hypot(x - HOME.x, z - HOME.z)
	const a = sstep(140, 620, r)
	const o = fbm(x * 0.0021 + 3, z * 0.0021 + 9, 5)
	return t + a * (78 * Math.pow(o, 1.7) + 4 + 16 * fbm(x * 0.009 - 4, z * 0.009 + 2, 3))
}
interface V3 { x: number; y: number; z: number }
interface Hit extends V3 { t: number }
function rayGround(o: V3, d: V3, lift: number): Hit | null {
	let i = 0.3
	for (let r = 0; r < 260; r++) {
		const a = 0.05 + i * 0.02, s = i + a
		const x = o.x + d.x * s, y = o.y + d.y * s, z = o.z + d.z * s
		if (y - (heightAt(x, z) + lift) < 0) {
			let h = i, f = s
			for (let g = 0; g < 10; g++) {
				const m = (h + f) / 2
				if (o.y + d.y * m - (heightAt(o.x + d.x * m, o.z + d.z * m) + lift) < 0) f = m
				else h = m
			}
			return { x: o.x + d.x * f, y: o.y + d.y * f, z: o.z + d.z * f, t: f }
		}
		i = s
		if (i > 160) break
	}
	return null
}

// ── times of day ──
// Each stop carries its grade and the sky light it sheds (sun energy and
// 9-term irradiance). The sky itself is shaded procedurally per stop.
interface Mode {
	sky: number
	rays: number
	sunMul: number
	shMul: number
	exposure: number
	cloud: number
	fog: number
	bloom: number
	warm: number
	sat: number
	contrast: number
	lift: RGB
	fogTint: RGB
	wind: number
	minSun?: RGB
	moon?: boolean
	sunE: RGB
	sh: number[]
}
const SH_DAY = [0.796, 1.004, 1.117, 0.321, 0.317, 0.781, -0.044, -0.05, -0.064, -0.233, -0.289, -0.418, -0.248, -0.301, -0.441, -0.05, -0.054, -0.067, -0.111, -0.127, -0.184, 0.079, 0.083, 0.101, -0.021, -0.003, 0.018]
const SH_GOLD = [1.138, 1.314, 1.349, 0.487, 0.511, 0.777, -0.508, -0.522, -0.458, -0.146, -0.177, -0.219, 0.023, -0.018, -0.1, -0.309, -0.315, -0.29, 0.522, 0.527, 0.422, 0.459, 0.421, 0.283, 0.245, 0.327, 0.362]
const SH_DUSK = [0.932, 0.826, 0.922, 0.477, 0.445, 0.696, -0.621, -0.432, -0.332, 0.275, 0.221, 0.222, 0.088, 0.086, 0.117, -0.235, -0.191, -0.193, 0.49, 0.294, 0.142, -0.34, -0.258, -0.21, 0.136, 0.07, -0.013]
const SH_NIGHT = [0.63, 0.959, 1.792, 0.224, 0.393, 0.91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092, 0.118, 0.146, 0, 0, 0, 0.16, 0.205, 0.252]
const SH_RAIN = [0.507, 0.522, 0.474, 0.416, 0.394, 0.437, -0.017, -0.016, -0.014, -0.026, -0.019, -0.013, -0.013, -0.009, -0.005, -0.032, -0.031, -0.031, -0.059, -0.059, -0.061, 0.017, 0.015, 0.014, -0.12, -0.121, -0.126]
const SH_SNOW = [0.638, 0.711, 0.754, 0.468, 0.485, 0.632, -0.178, -0.17, -0.159, -0.029, -0.018, -0.003, -0.031, -0.021, -0.005, -0.186, -0.177, -0.166, 0.035, 0.023, 0.004, 0.063, 0.058, 0.049, -0.033, -0.047, -0.076]
const MODES: Mode[] = [
	{ sky: 0, rays: 0.12, sunMul: 1, shMul: 1, exposure: 1.62, cloud: 0.75, fog: 7e-4, bloom: 0.01, warm: 0, sat: 1.03, contrast: 1, lift: [0, 0, 0.004], fogTint: [0.92, 0.95, 1], wind: 0.62, sunE: [3.955, 3.982, 3.628], sh: SH_DAY },
	{ sky: 1, rays: 0.24, sunMul: 0.8, shMul: 0.85, exposure: 0.66, cloud: 0.2, fog: 0.001, bloom: 0.02, warm: 0.06, sat: 1, contrast: 1.06, lift: [0.01, 0.005, 0], fogTint: [0.92, 0.9, 0.84], wind: 0.7, sunE: [8.595, 7.27, 3.629], sh: SH_GOLD },
	{ sky: 2, rays: 0.18, sunMul: 1, shMul: 1, exposure: 0.72, cloud: 0, fog: 55e-5, bloom: 0.012, warm: 0, sat: 1.04, contrast: 1.06, lift: [0.006, 0.004, 0.012], fogTint: [0.5, 0.48, 0.56], wind: 0.45, minSun: [0.55, 0.28, 0.14], sunE: [0.053, 0.03, 0.01], sh: SH_DUSK },
	{ sky: 3, rays: 0, sunMul: 1, shMul: 1.25, exposure: 0.36, cloud: 0, fog: 0.0011, bloom: 0.035, warm: -0.07, sat: 0.78, contrast: 1.08, lift: [0, 0.004, 0.014], fogTint: [0.9, 0.95, 1.05], wind: 0.32, moon: true, sunE: [1.15, 1.32, 1.7], sh: SH_NIGHT },
]
const SUN_PATH: [number, number][] = [[-62, 44], [-25, 17], [3, 0.6], [-4, -16]]
const MOON_PATH: [number, number][] = [[2, -40], [0, -26], [-3, -7], [-9, 16]]
const SEASONS: SeasonName[] = ["spring", "summer", "autumn", "winter"]
const OVER_GAIN = [1, 1.3, 0.85, 0.3]
const OVER_TINT: RGB[] = [[1, 1, 1], [1.07, 0.98, 0.88], [0.86, 0.86, 1], [0.6, 0.7, 1]]

// ── GLSL ──
// Shared by every scene material: lighting, fog, wind, shadows and the
// procedural sky.
const COMMON = `
#define PI 3.14159265
#define RS(a,b,x) (1.0-smoothstep(b,a,x))
uniform float uTime;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uSH[9];
uniform float uSkyKA; uniform float uSkyKB; uniform float uSkyMix; uniform float uSkyDimA; uniform float uGainA; uniform float uGainB;
uniform sampler2D uNoise; uniform vec2 uWindDir; uniform float uWind;
uniform sampler2D uShadow; uniform mat4 uShadowMat; uniform float uShadowStr;
uniform float uFog; uniform vec3 uFogTint; uniform float uCloud;
uniform sampler2D uSim; uniform vec4 uSimRect;
uniform sampler2D uField; uniform vec4 uFieldRect;
uniform float uNight; uniform vec3 uNightFog;
uniform vec4 uHead; uniform vec4 uHead2; uniform vec3 uHeadDir; uniform vec3 uHeadDir2; uniform vec4 uVanGlow; uniform vec4 uVanPos; uniform vec3 uHeadCol; uniform vec3 uWinCol;
uniform float uWxMix; uniform float uOver; uniform vec3 uOverGain;
uniform vec4 uSeason; uniform float uSnow; uniform float uWet; uniform float uRain; uniform float uSnowFall; uniform vec3 uSnowCol;
uniform sampler2D uHeight; uniform vec4 uHeightRect; uniform vec2 uTreeXZ; uniform vec3 uSkyAvg; uniform vec4 uSunDisc;
float groundAt(vec2 xz){ return textureLod(uHeight, (xz - uHeightRect.xy)/uHeightRect.zw, 0.0).r; }
// lo = 1 is the blurred sky the horizon fog is read from: coarse mips and
// soft cloud edges, so a single cloud never streaks the distant hills.
float cN(vec2 p, float lo){
float l = lo*5.0;
float n = textureLod(uNoise, p, l).r*0.56 + textureLod(uNoise, p*2.17 + 0.31, l).g*0.29;
return n + (lo > 0.5 ? 0.075 : textureLod(uNoise, p*4.63 + 0.57, 0.0).b*0.15);
}
float cov2(float a, float b, float n, float lo){ return smoothstep(a - lo*0.12, b + lo*0.12, n)*(1.0 - lo*0.55); }
// The Milky Way: a great circle falling to the right of the view, its
// bright bulge low on the right horizon, broken by dust lanes.
vec3 milky(vec3 d){
vec3 ax = normalize(vec3(0.69, 0.57, 0.43));
float t = dot(d, ax);
vec3 u = normalize(cross(ax, vec3(0.0, 1.0, 0.0)));
float a = atan(dot(d, cross(ax, u)), dot(d, u));
float n = textureLod(uNoise, vec2(a*0.7, t*2.2), 0.0).r;
float n2 = textureLod(uNoise, vec2(a*2.3, t*6.0) + 0.3, 0.0).g;
float n3 = textureLod(uNoise, vec2(a*6.0, t*14.0) + 0.6, 0.0).b;
float w = 0.15 + 0.08*n;
float band = exp(-t*t/(w*w));
float core = exp(-pow((t - 0.015)/(w*0.4), 2.0));
float lane = smoothstep(0.5, 0.72, n2)*core;
vec3 bd = normalize(vec3(0.42, 0.2, -0.88));
float bulge = exp(-dot(d - bd, d - bd)/0.18);
float g = band*(0.3 + 0.7*smoothstep(0.3, 0.72, n))*(0.6 + 0.4*n3)*(0.5 + 1.3*bulge) - lane*0.4*(0.4 + bulge);
return max(g, 0.0)*mix(vec3(0.6, 0.66, 0.9), vec3(1.0, 0.88, 0.76), core*bulge)*1.1;
}
vec3 skyK(float k, vec3 d, float lo){
float e = max(d.y, 0.0);
vec3 sd = normalize(uSunDisc.xyz + vec3(0.0, 1e-4, 0.0));
float mu = max(dot(d, sd), 0.0);
float az = max(dot(normalize(d.xz + 1e-5), normalize(sd.xz + 1e-5)), 0.0);
vec2 cp = d.xz/(e + 0.085);
vec2 dr = uWindDir*uTime*0.0016;
float hz = smoothstep(0.0, 0.035, e);
vec3 c;
if (k < 0.5) {
c = mix(vec3(0.3, 0.37, 0.52), vec3(0.035, 0.07, 0.2), pow(e, 0.4));
c += vec3(0.5, 0.48, 0.42)*pow(mu, 6.0)*0.6 + vec3(0.2, 0.2, 0.2)*pow(1.0 - e, 10.0);
vec2 p = cp*0.1 + dr*2.0 + vec2(0.31, 0.88);
float big = textureLod(uNoise, p*0.3 + 0.21, lo*3.0).g;
float n = cN(p, lo) + (big - 0.5)*0.4;
float cov = cov2(0.545, 0.585, n, lo);
float lit = 0.7;
if (lo < 0.5) {
float nu = cN(p*0.96, 0.0) + (textureLod(uNoise, p*0.96*0.3 + 0.21, 0.0).g - 0.5)*0.4;
float ns = cN(p + normalize(sd.xz + 1e-5)*0.02, 0.0);
lit = clamp(0.6 + (n - nu)*9.0 + (n - ns)*3.0, 0.0, 1.0);
}
vec3 cc = mix(vec3(0.36, 0.41, 0.52), vec3(1.85, 1.82, 1.76), lit);
cc = mix(cc, vec3(0.5, 0.55, 0.66), smoothstep(0.66, 0.8, n)*0.5);
c = mix(c, cc, cov*hz);
} else if (k < 1.5) {
c = mix(vec3(0.52, 0.57, 0.58), vec3(0.15, 0.22, 0.42), pow(e, 0.35));
c += vec3(0.3, 0.28, 0.22)*pow(mu, 3.0);
vec2 p = cp*0.035 + dr*0.7 + vec2(0.71, 0.2);
float n = cN(p, lo);
float cov = cov2(0.46, 0.7, n, lo)*smoothstep(0.08, 0.5, e);
vec3 cc = mix(vec3(0.5, 0.52, 0.52), vec3(0.95, 0.9, 0.78), clamp(0.4 + mu*0.8, 0.0, 1.0));
c = mix(c, cc, cov*0.75);
} else if (k < 2.5) {
c = mix(vec3(0.85, 0.66, 0.56), vec3(0.2, 0.19, 0.28), pow(e, 0.4));
c += vec3(2.6, 1.3, 0.45)*pow(az, 6.0)*exp(-e*10.0) + vec3(0.9, 0.6, 0.4)*pow(mu, 3.0)*0.35;
vec2 p = cp*0.11 + dr*2.0 + vec2(0.37, 0.05);
float big = textureLod(uNoise, cp*0.012 + vec2(0.62, 0.17), lo*3.0).r;
float n = cN(p, lo);
float mask = smoothstep(0.4, 0.58, big + (1.0 - az)*0.22)*smoothstep(0.03, 0.22, e);
float cov = cov2(0.42, 0.6, n, lo)*mask;
vec3 under = mix(vec3(0.42, 0.34, 0.42), vec3(1.25, 0.66, 0.52), pow(az, 3.0)*(1.0 - e));
vec3 cc = mix(vec3(0.24, 0.22, 0.28), under, smoothstep(0.45, 0.72, n));
c = mix(c, cc, cov*0.92);
} else if (k < 3.5) {
c = mix(vec3(0.3, 0.4, 0.72), vec3(0.08, 0.15, 0.38), pow(e, 0.5));
if (lo < 0.5) c += milky(d)*smoothstep(0.0, 0.2, e);
} else if (k < 4.5) {
c = mix(vec3(0.42, 0.42, 0.41), vec3(0.26, 0.27, 0.28), pow(e, 0.6));
float n = cN(cp*0.03 + dr*2.0, lo);
c *= 0.82 + 0.3*n;
} else {
c = mix(vec3(0.6, 0.63, 0.68), vec3(0.42, 0.45, 0.52), pow(e, 0.6));
float n = cN(cp*0.03 + dr*1.2, lo);
c *= 0.88 + 0.2*n;
}
return c;
}
vec3 skyMix(vec3 d, float lo){
vec3 s = vec3(0.0);
if (uOver < 0.999) {
if (uSkyMix < 0.001) s = skyK(uSkyKA, d, lo)*uSkyDimA*uGainA;
else if (uSkyMix > 0.999) s = skyK(uSkyKB, d, lo)*uGainB;
else s = mix(skyK(uSkyKA, d, lo)*uSkyDimA*uGainA, skyK(uSkyKB, d, lo)*uGainB, uSkyMix);
}
if (uOver > 0.001) s = mix(s, mix(skyK(4.0, d, lo), skyK(5.0, d, lo), uWxMix)*uOverGain, uOver);
return s;
}
vec3 skyRad(vec3 d){ return skyMix(d, 0.0); }
uniform sampler2D uFogLUT;
vec3 fogColor(vec3 dir){
float az = degrees(atan(dir.x, -dir.z));
return textureLod(uFogLUT, vec2(clamp((az + 100.0)/200.0, 0.001, 0.999), 0.5), 0.0).rgb;
}
float fogAmount(vec3 wp){
float d = length(wp - cameraPosition);
float hf = exp(-max(wp.y - 2.0, 0.0)*0.018);
return (1.0 - exp(-d*uFog))*mix(0.55, 1.0, hf);
}
vec3 shIrr(vec3 n){
float x=n.x, y=n.y, z=n.z;
vec3 r = 3.141593*0.282095*uSH[0] + 2.094395*0.488603*(uSH[1]*y + uSH[2]*z + uSH[3]*x)
+ 0.785398*(1.092548*(uSH[4]*x*y + uSH[5]*y*z + uSH[7]*x*z) + 0.315392*uSH[6]*(3.0*z*z-1.0) + 0.546274*uSH[8]*(x*x-y*y));
return max(r, vec3(0.0));
}
float gustAt(vec2 xz){
float n1 = textureLod(uNoise, xz*0.0105 - uWindDir*uTime*0.050, 0.0).r;
float n2 = textureLod(uNoise, xz*0.036 - uWindDir*uTime*0.135 + 0.37, 0.0).g;
return smoothstep(0.36, 0.80, n1*0.72 + n2*0.28);
}
float cloudAt(vec3 wp){
if (uCloud <= 0.0) return 1.0;
float n = textureLod(uNoise, wp.xz*0.0019 - uWindDir*uTime*0.0021 + vec2(0.31,0.77), 0.0).b;
return 1.0 - uCloud*smoothstep(0.56, 0.70, n)*0.6;
}
float shadowAt(vec3 wp, float bias, float spread){
vec4 sp = uShadowMat*vec4(wp,1.0);
vec3 c = sp.xyz*0.5+0.5;
if (c.x<0.0||c.x>1.0||c.y<0.0||c.y>1.0||c.z>1.0) return 1.0;
vec2 ts = spread/vec2(textureSize(uShadow,0));
float s = 0.0;
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2(-1.0,-1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 1.0,-1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2(-1.0, 1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 1.0, 1.0)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy).r)*2.0;
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 0.0,-1.6)*ts).r);
s += step(c.z-bias, texture2D(uShadow, c.xy + vec2( 0.0, 1.6)*ts).r);
return mix(1.0, s/8.0, uShadowStr);
}
float shadow1(vec3 wp, float bias){
vec4 sp = uShadowMat*vec4(wp,1.0);
vec3 c = sp.xyz*0.5+0.5;
if (c.x<0.0||c.x>1.0||c.y<0.0||c.y>1.0||c.z>1.0) return 1.0;
return mix(1.0, step(c.z-bias, textureLod(uShadow, c.xy, 0.0).r), uShadowStr);
}
vec3 vanLights(vec3 alb, vec3 N, vec3 wp){
vec3 c = vec3(0.0);
if (uHead.w > 0.0) {
for (int i = 0; i < 2; i++) {
vec3 lp = i == 0 ? uHead.xyz : uHead2.xyz;
vec3 hd = normalize(i == 0 ? uHeadDir : uHeadDir2);
vec3 L = lp - wp; float d = length(L); L /= d;
float ca = dot(-L, hd);
float cone = smoothstep(0.9781, 0.9976, ca);
float reach = RS(15.0, 9.0, d);
c += alb*uHeadCol*cone*reach*uHead.w/(0.6 + d*d*0.06)*(0.4 + 0.6*max(dot(N, L), 0.0));
}
}
if (uVanGlow.w > 0.0) {
vec3 L = uVanGlow.xyz - wp; float d = length(L); L /= d;
c += alb*uWinCol*uVanGlow.w/(1.0 + d*d*0.9)*(0.4 + 0.6*max(dot(N, L), 0.0));
}
return c;
}
float vanShade(vec3 wp){
if (uVanPos.w <= 0.0) return 1.0;
float d = length((wp.xz - uVanPos.xy)*vec2(0.8, 1.25));
return 1.0 - uVanPos.w*RS(uVanPos.z, uVanPos.z*0.3, d);
}
vec3 sunLight(vec3 alb, vec3 N, vec3 V, float sh, float rough, float trans, vec3 tcol){
vec3 L = uSunDir;
float ndl = dot(N, L);
float nl = max(ndl, 0.0);
vec3 diff = alb*(1.0/PI)*nl;
vec3 H = normalize(L+V);
float ndh = max(dot(N,H),0.0), ndv = max(dot(N,V),0.02);
float a = rough*rough, a2 = a*a, dd = ndh*ndh*(a2-1.0)+1.0;
float D = a2/(PI*dd*dd);
float k = a*0.5;
float G = ndv/(ndv*(1.0-k)+k) * nl/(nl*(1.0-k)+k+1e-4);
float F = 0.04 + 0.96*pow(1.0-max(dot(H,V),0.0), 5.0);
vec3 spec = vec3(D*G*F/(4.0*ndv));
float back = max(-ndl, 0.0);
float fwd = pow(max(dot(-V, L), 0.0), 5.0);
vec3 tr = tcol*(back*0.55 + fwd*1.5)*trans*(1.0/PI);
return uSunCol*sh*(diff + spec + tr);
}
`
// Blade bending: wind, the pointer sim and the curved stalk.
const BLADE = `
vec4 fieldAt(vec2 xz){ return textureLod(uField, (xz - uFieldRect.xy)/uFieldRect.zw, 0.0); }
vec2 windVec(vec2 xz, float rnd, out float g){
g = fieldAt(xz).r;
vec2 perp = vec2(-uWindDir.y, uWindDir.x);
float sway = sin(uTime*(1.7+rnd*0.9) + rnd*6.283 + dot(xz, vec2(0.61,0.37)));
float flick = sin(uTime*(5.3+rnd*2.0) + rnd*17.0);
return uWindDir*uWind*(0.10 + 0.78*g + 0.06*sway) + perp*uWind*(sway*(0.05+0.10*g) + flick*0.025*g);
}
vec2 touchAt(vec2 xz){
vec2 uv = (xz - uSimRect.xy)/uSimRect.zw;
if (uv.x<=0.0||uv.y<=0.0||uv.x>=1.0||uv.y>=1.0) return vec2(0.0);
return textureLod(uSim, uv, 0.0).xy;
}
void stalk(vec2 D, float H, float t, out vec3 P, out vec3 T){
float a = length(D);
vec2 dd = a > 1e-4 ? D/a : vec2(0.0, 1.0);
float tilt = a*1.12;
vec3 tip = vec3(dd.x*sin(tilt), cos(tilt), dd.y*sin(tilt))*H;
vec3 p1 = vec3(dd.x*sin(tilt*0.45), cos(tilt*0.45), dd.y*sin(tilt*0.45))*H*0.5;
P = 2.0*t*(1.0-t)*p1 + t*t*tip;
T = normalize(2.0*(1.0-t)*p1 + 2.0*t*(tip-p1) + vec3(0.0,1e-4,0.0));
}
`
const TREE_WIND = `
uniform mat4 uTreeM; uniform vec3 uTreeBase; uniform float uTreeH; uniform float uSway; uniform vec3 uLeafTint; uniform vec3 uBarkTint;
uniform vec3 uBlossom; uniform vec3 uAutA; uniform vec3 uAutB; uniform vec3 uAutC;
vec3 treeWind(vec3 p, float leaf){
float h = clamp((p.y - uTreeBase.y)/uTreeH, 0.0, 1.4);
float g = gustAt(uTreeBase.xz + (p.xz - uTreeBase.xz)*0.35);
vec2 wd = uWindDir; vec2 pd = vec2(-wd.y, wd.x);
float sway = (0.3 + 0.7*g)*uWind*uSway;
float t = uTime;
vec3 off = vec3(wd.x, 0.0, wd.y)*(sway*0.55 + sin(t*0.85)*0.16*sway)*h*h;
off += vec3(pd.x, 0.0, pd.y)*sin(t*0.61 + 1.3)*0.08*sway*h*h;
vec2 r2 = p.xz - uTreeBase.xz; float r = length(r2);
float bw = smoothstep(1.5, 8.0, r)*smoothstep(0.15, 0.6, h);
vec3 n3 = textureLod(uNoise, p.xz*0.045 + vec2(t*0.045, -t*0.035), 0.0).rgb - 0.5;
off += vec3(n3.x, n3.y*0.8, n3.z)*bw*sway*1.25;
off.y += sin(t*1.6 + r*0.55 + p.x*0.3)*0.09*bw*sway;
if (leaf > 0.0) {
vec3 f = vec3(sin(t*8.3 + p.x*7.1 + p.y*3.3), sin(t*9.7 + p.z*6.3 + p.x*2.0), sin(t*7.1 + p.y*5.7 + p.z*2.2));
off += f*0.032*leaf*(0.35 + g)*uWind;
}
return off;
}
`
const FULL_VERT = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"
// Box sampled every few frames for the ambient particles around the viewer.
const BOX = `
vec3 boxCentre(vec3 box){
vec3 fwd = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
vec2 f2 = normalize(fwd.xz + vec2(1e-5));
return vec3(cameraPosition.x + f2.x*box.x*0.3, cameraPosition.y - 1.6, cameraPosition.z + f2.y*box.z*0.3);
}
vec2 boxXZ(vec2 r, vec3 ctr, vec3 box){ return ctr.xz + (fract(r - ctr.xz/box.xz) - 0.5)*box.xz; }
`
const BILL = "vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);"

const SIM_FRAG = `
uniform sampler2D uPrev; uniform vec4 uRect; uniform float uDt; uniform float uTime;
uniform vec2 uB0; uniform vec2 uB1; uniform float uBrushR; uniform float uBrushOn; uniform vec2 uMoveDir; uniform float uSpeed;
uniform vec4 uRip[6]; uniform float uSpring;
varying vec2 vUv;
void main(){
vec4 s = texture2D(uPrev, vUv);
vec2 d = s.xy, v = s.zw;
vec2 p = uRect.xy + vUv*uRect.zw;
vec2 acc = -15.0*uSpring*d - 3.1*sqrt(uSpring)*v;
for (int i=0;i<6;i++){
vec4 r = uRip[i];
float age = uTime - r.z;
if (age < 0.0 || age > 5.0) continue;
vec2 q = p - r.xy; float L = length(q);
float rad = age*7.5;
float q2 = (L-rad)/1.3; float w = exp(-q2*q2);
acc += (q/max(L,1e-3))*w*r.w*70.0*exp(-age*0.75)/(1.0 + L*0.05);
}
v += acc*uDt;
d += v*uDt;
if (uBrushOn > 0.0){
vec2 ab = uB1 - uB0;
float h = clamp(dot(p-uB0, ab)/max(dot(ab,ab),1e-6), 0.0, 1.0);
vec2 q = p - (uB0 + ab*h);
float L = length(q);
float f = RS(uBrushR, uBrushR*0.2, L);
if (f > 0.0){
vec2 rd = L > 1e-3 ? q/L : uMoveDir;
vec2 T = (rd*0.95 + uMoveDir*min(uSpeed*0.18, 0.75))*(0.55 + 0.75*f);
float m = clamp(f*uDt*26.0*uBrushOn, 0.0, 1.0);
d = mix(d, T, m);
v *= 1.0 - m*0.9;
}
}
d = clamp(d, vec2(-1.6), vec2(1.6));
gl_FragColor = vec4(d, v);
}`

const SKY_FRAG = `
uniform mat4 uInvVP; uniform float uPixAng; uniform vec4 uMet[4]; uniform vec4 uMetB[4]; uniform vec4 uMoonDisc; uniform float uSunGlow; uniform float uSunSize; uniform float uMoonSize; uniform float uStars;
varying vec2 vNdc;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec3 starLayer(vec3 d, float N, float prob, float bright, float sharp, float seed){
float el = asin(clamp(d.y, -1.0, 1.0)), az = atan(d.x, -d.z);
float rows = N*0.5;
float iy = floor((el/PI + 0.5)*rows);
float cel = cos(((iy + 0.5)/rows - 0.5)*PI);
float cols = max(floor(N*cel), 1.0);
float ix = floor((az/(2.0*PI) + 0.5)*cols);
vec2 cell = vec2(ix, iy) + seed;
if (h21(cell) > prob) return vec3(0.0);
vec2 j = vec2(h21(cell + 1.7), h21(cell + 5.3))*0.6 + 0.2;
float sel = ((iy + j.y)/rows - 0.5)*PI, saz = ((ix + j.x)/cols - 0.5)*2.0*PI;
vec3 sd = vec3(sin(saz)*cos(sel), sin(sel), -cos(saz)*cos(sel));
float ang = length(d - sd);
float mag = pow(h21(cell + 9.1), sharp);
float b = bright*mag + 0.12;
float tw = 0.72 + 0.28*sin(uTime*(2.5 + 6.0*h21(cell + 3.3)) + h21(cell)*60.0);
float g = exp(-pow(ang/(uPixAng*(0.75 + 0.5*mag)), 2.0));
vec3 tint = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.85, 0.66), h21(cell + 2.2));
return tint*b*g*tw;
}
vec3 meteors(vec3 d){
float eld = degrees(asin(clamp(d.y, -1.0, 1.0))), azd = degrees(atan(d.x, -d.z));
float pxd = degrees(uPixAng);
vec3 c = vec3(0.0);
for (int i = 0; i < 4; i++){
vec4 m = uMet[i], mb = uMetB[i];
float age = uTime - m.w;
if (age < 0.0 || age > mb.y) continue;
float life = age/mb.y;
vec2 dir = vec2(cos(m.z), sin(m.z));
vec2 head = m.xy + dir*mb.x*age;
float ce = cos(radians(eld));
vec2 p = vec2((azd - head.x)*ce, eld - head.y);
vec2 dd = normalize(vec2(dir.x*ce, dir.y));
float along = -dot(p, dd);
float across = abs(p.x*dd.y - p.y*dd.x);
float tail = mb.z*min(1.0, age*3.0);
float fade = smoothstep(0.0, 0.12, life)*(1.0 - smoothstep(0.65, 1.0, life));
float w = pxd*(1.3 - 0.6*clamp(along/max(tail, 1e-3), 0.0, 1.0));
float trail = (along > 0.0 && along < tail) ? exp(-(across*across)/(w*w))*pow(1.0 - along/tail, 1.7) : 0.0;
float headG = exp(-dot(p, p)/(pxd*pxd*3.5));
c += vec3(0.82, 0.93, 1.0)*(trail + headG*1.8)*mb.w*fade;
}
return c;
}
void main(){
vec4 p = uInvVP*vec4(vNdc, 1.0, 1.0);
vec3 d = normalize(p.xyz/p.w - cameraPosition);
vec3 c = min(skyRad(d), vec3(80.0));
if (uSunDisc.w > 0.0) {
float a = length(d - uSunDisc.xyz);
float R = 0.0085*uSunSize;
float low = RS(0.45, 0.0, uSunDisc.y);
vec3 sc = mix(vec3(1.0, 0.95, 0.86), vec3(1.0, 0.58, 0.26), low);
float mu = sqrt(max(1.0 - (a*a)/(R*R), 0.0));
float disc = RS(R, R*0.93, a)*(0.5 + 0.5*mu);
float g = uSunGlow;
vec3 glow = sc*(exp(-a/0.035)*2.6 + exp(-a/0.14)*0.4 + exp(-a/0.5)*0.06)*g;
vec2 hz2 = normalize(d.xz + 1e-5), sz2 = normalize(uSunDisc.xz + 1e-5);
glow += sc*exp(-max(d.y, 0.0)*9.0)*pow(max(dot(hz2, sz2), 0.0), 6.0)*0.6*g*(0.4 + low);
c += (sc*disc*170.0 + glow*1.25)*uSunDisc.w;
}
if (uMoonDisc.w > 0.0) {
vec3 md = uMoonDisc.xyz;
float a = length(d - md);
float R = 0.0135*uMoonSize;
if (a < R*1.05) {
vec3 rt = normalize(cross(md, vec3(0.0, 1.0, 0.0)));
vec3 up = cross(rt, md);
vec2 q = vec2(dot(d - md, rt), dot(d - md, up))/R;
float rr = dot(q, q);
vec3 n = vec3(q, sqrt(max(1.0 - rr, 0.0)));
float lit = smoothstep(-0.05, 0.14, dot(n, normalize(vec3(0.78, 0.22, 0.42))));
float m1 = textureLod(uNoise, q*0.33 + vec2(0.41, 0.17), 0.0).a;
float m2 = textureLod(uNoise, q*1.1 + vec2(0.13, 0.71), 0.0).r;
float alb = 0.58 + 0.42*RS(0.52, 0.36, m1) - 0.08*m2;
vec3 mc = vec3(1.0, 0.97, 0.9)*alb*(lit*(0.55 + 0.45*n.z) + 0.03);
c = mix(c, mc*22.0*uMoonDisc.w, RS(1.0, 0.92, rr)*smoothstep(-0.01, 0.01, md.y + 0.004));
}
c += vec3(0.72, 0.8, 1.0)*(exp(-a/0.022)*0.35 + exp(-a/0.14)*0.07)*uMoonDisc.w;
}
if (uNight > 0.001 && d.y > -0.02) {
float ext = smoothstep(-0.01, 0.16, d.y);
float mw = dot(milky(d), vec3(0.3333));
vec3 st = starLayer(d, 520.0, 0.10, 7.0, 7.0, 0.0) + starLayer(d, 1100.0, 0.07 + clamp(mw*0.15, 0.0, 0.2), 1.4, 9.0, 31.7);
float dark = RS(1.1, 0.35, dot(c, vec3(0.2126, 0.7152, 0.0722)));
c += (st*ext*dark*uStars + meteors(d)*(1.0 - uOver))*uNight;
}
float hz = RS(0.06, -0.04, d.y);
c = mix(c, fogColor(d), hz);
gl_FragColor = vec4(c, 1.0);
}`

const GROUND_FRAG = `
varying vec3 vWP; varying vec3 vN;
void main(){
vec3 V = normalize(cameraPosition - vWP);
float dist = length(vWP - cameraPosition);
float n1 = texture2D(uNoise, vWP.xz*0.0061).r;
float n2 = texture2D(uNoise, vWP.xz*0.027 + 0.3).g;
float n3 = texture2D(uNoise, vWP.xz*0.11 + 0.7).b;
vec3 alb = mix(vec3(0.050,0.078,0.020), vec3(0.090,0.105,0.032), smoothstep(0.3,0.75,n1));
alb = mix(alb, vec3(0.16,0.14,0.065), smoothstep(0.58,0.78,n2*0.6+n1*0.4)*0.55);
alb = mix(alb, alb*vec3(0.9, 1.18, 0.8), uSeason.x);
alb = mix(alb, mix(vec3(0.13,0.10,0.04), vec3(0.20,0.15,0.06), n1), uSeason.z*0.7 + uSeason.w*0.5);
alb *= 0.82 + 0.36*n3;
float under = 1.0 - smoothstep(48.0, 92.0, dist);
alb = mix(alb, vec3(0.020,0.028,0.009), under*0.9);
if (uSeason.z > 0.001) {
float near = 1.0 - smoothstep(4.0, 13.0, length(vWP.xz - uTreeXZ));
float lit = smoothstep(0.52, 0.66, n2*0.55 + n3*0.45 + near*0.35)*uSeason.z;
vec3 lc = mix(vec3(0.36, 0.16, 0.035), vec3(0.42, 0.27, 0.05), n3);
alb = mix(alb, lc*(0.6 + 0.5*n1), lit*(0.35 + 0.5*near));
}
float sn = 0.0;
vec3 N = normalize(vN);
if (uSnow > 0.001) {
float cover = clamp((uSnow - 0.15 + (n1 - 0.5)*0.55 + (n2 - 0.5)*0.25)*2.2, 0.0, 1.0);
sn = cover;
alb = mix(alb, uSnowCol*(0.93 + 0.07*n3), sn);
under *= 1.0 - sn;
N = normalize(N + vec3(n2 - 0.5, 0.0, n3 - 0.5)*0.22*sn);
}
float wet = uWet*(1.0 - sn);
alb *= 1.0 - 0.42*wet;
float g = gustAt(vWP.xz);
vec3 Nc = normalize(N + vec3(uWindDir.x, 0.0, uWindDir.y)*g*0.5*uWind*(1.0 - sn));
float sh = shadowAt(vWP + N*0.05, 0.0015, 1.5)*cloudAt(vWP)*vanShade(vWP);
vec3 c = sunLight(alb, Nc, V, sh*mix(1.0, 0.35, under), mix(mix(0.95, 0.45, wet), 0.7, sn), 0.7*(1.0-under)*(1.0 - sn), alb*vec3(1.8,2.0,0.8));
c += alb*(1.0/PI)*shIrr(N)*mix(1.0, 0.5, under);
c *= 1.0 + 0.22*g*uWind*(1.0-under)*(1.0 - sn);
if (wet > 0.01) {
float fr = 0.04 + 0.96*pow(1.0 - max(dot(N, V), 0.0), 5.0);
c += skyRad(reflect(-V, N))*fr*wet*0.5*(1.0 - under*0.7);
}
if (sn > 0.01) {
vec2 cell = floor(vWP.xz*70.0);
float h = fract(sin(dot(cell, vec2(12.9898, 78.233)) + floor(dot(V, vec3(31.0, 17.0, 23.0))))*43758.5453);
vec3 Hs = normalize(uSunDir + V);
float gl = step(0.9965, h)*pow(max(dot(N, Hs), 0.0), 3.0)*(1.0 - smoothstep(6.0, 30.0, dist));
c += uSunCol*sh*gl*sn*6.0;
}
c += vanLights(alb, N, vWP);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`

const GRASS_VERT = `
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
uniform float uFadeNear; uniform float uFadeFar; uniform float uPix; uniform float uStem; uniform float uGrow;
uniform float uGrassH; uniform vec3 uBlade; uniform vec3 uTip; uniform vec3 uDryC; uniform float uDry;
varying vec3 vWP; varying vec3 vN; varying vec3 vS; varying float vT; varying float vSide;
varying vec3 vAlb; varying vec3 vFogC; varying float vFogF; varying float vSh; varying float vKind;
void main(){
vec3 root = iA.xyz; float rnd = iA.w;
float kind = iC.z;
float dist = length(root - cameraPosition);
float fade = 1.0 - smoothstep(uFadeNear, uFadeFar, dist);
float Hh = iB.x*fade*uGrow*uGrassH;
float sd = uSnow*(0.09 + 0.07*textureLod(uNoise, root.xz*0.11, 0.0).r);
if (uSnow > 0.001 && kind < 2.5) {
float tuft = smoothstep(0.52, 0.78, textureLod(uNoise, root.xz*0.21 + 0.4, 0.0).g);
float keepP = mix(1.0, (uStem > 0.5 ? 0.25 : 0.035) + 0.42*tuft, uSnow);
float keep = step(fract(rnd*31.7), keepP);
Hh = Hh*keep > sd*1.35 ? Hh - sd : 0.0;
root.y += sd;
}
float g;
vec2 w = windVec(root.xz, rnd, g);
if (uSnow > 0.001) w *= 1.0 - 0.45*uSnow;
float stiff = kind > 1.5 ? 0.55 : clamp(Hh/0.55, 0.45, 1.5);
vec2 D = vec2(cos(iC.x), sin(iC.x))*iB.w*(1.0 + 0.35*uWet) + w*stiff + touchAt(root.xz)*(kind > 2.5 ? 0.8 : 1.0);
if (uRain > 0.001) {
float ph = uTime*2.3 + rnd*41.0;
float k = floor(ph), f = ph - k;
float h = fract(sin(k*12.9898 + rnd*78.233)*43758.5453);
float kick = step(1.0 - 0.55*uRain, h)*exp(-f*7.0)*sin(f*34.0);
float ang = h*40.0;
D += vec2(cos(ang), sin(ang))*kick*0.14*clamp(0.5/max(Hh, 0.12), 0.4, 2.0);
}
float a = length(D); if (a > 1.35) D *= 1.35/a;
float t = position.y;
vec3 P, T;
stalk(D, Hh, t, P, T);
vec3 S0 = vec3(-sin(iB.z), 0.0, cos(iB.z));
vec3 Sb = a > 1e-3 ? vec3(-D.y, 0.0, D.x)/a : S0;
if (dot(Sb, S0) < 0.0) Sb = -Sb;
vec3 S = normalize(mix(S0, Sb, clamp(a, 0.0, 1.0)*0.6));
S = normalize(S - T*dot(S, T));
float wdt;
if (uStem > 0.5) {
float head = kind > 2.5 ? 0.0 : smoothstep(0.78, 0.83, t)*pow(max(sin(PI*clamp((t-0.79)/0.21,0.0,1.0)),0.0), 0.6);
wdt = iB.y + head*0.0085;
} else {
wdt = iB.y*(1.0 - pow(t, 2.3))*(0.78 + 0.22*smoothstep(0.0, 0.18, t));
}
wdt = max(wdt, dist*uPix*0.75*(1.0 - t*0.8));
vec3 wp = root + P + S*position.x*wdt*0.5;
vec3 N = normalize(cross(S, T));
vWP = wp; vN = N; vS = S; vT = t; vSide = position.x; vKind = kind;
float tone = iC.y, ct = floor(iC.w)/100.0;
float pch = fract(iC.w);
vec3 c1 = uBlade, c2 = uTip, c0 = uBlade*vec3(0.27, 0.27, 0.33);
vec3 lush = c2*vec3(0.35, 0.62, 0.77), olive = c2*vec3(1.30, 0.87, 1.18);
vec3 alb = mix(c0, c1, smoothstep(0.0, 0.42, t));
vec3 tipc = mix(c2, mix(lush, olive, smoothstep(0.35, 0.75, pch)), 0.55);
alb = mix(alb, tipc, smoothstep(0.38, 1.0, t)*(0.55 + 0.45*ct));
alb = mix(alb, alb*vec3(1.14, 1.0, 0.78), smoothstep(0.55, 1.0, ct)*0.5);
alb *= tone*(0.85 + 0.3*pch);
bool isDry = (kind > 0.5 && kind < 1.5) ? fract(rnd*13.7) < uDry/0.08 : (kind < 0.5 && fract(rnd*7.31) < max(uDry - 0.08, 0.0)/0.92);
if (isDry) alb = mix(uDryC*vec3(0.25, 0.31, 0.29), uDryC*tone, smoothstep(0.05,0.6,t));
if (uStem > 0.5) {
vec3 stemC = mix(vec3(0.045,0.075,0.02), vec3(0.14,0.16,0.06), t);
vec3 headC = vec3(0.21, 0.175, 0.09)*tone;
vec3 straw = uDryC*vec3(0.55, 0.5, 0.42)*tone;
float ripe = uSeason.z + uSeason.w;
stemC = mix(stemC, mix(straw*0.55, straw, t), ripe);
headC = mix(mix(headC, vec3(0.09, 0.14, 0.04)*tone, uSeason.x), straw*1.15, ripe);
alb = kind > 2.5 ? mix(vec3(0.05,0.085,0.025), vec3(0.11,0.17,0.06), t) : mix(stemC, headC, smoothstep(0.78, 0.84, t));
}
vAlb = alb;
vec3 mid = root + vec3(0.0, Hh*0.6, 0.0);
vSh = shadow1(mid, 0.004)*(1.0 - uCloud*smoothstep(0.56, 0.70, fieldAt(root.xz).g)*0.6)*vanShade(root);
vFogF = fogAmount(wp);
vFogC = vFogF > 0.004 ? fogColor(normalize(wp - cameraPosition)) : vec3(0.0);
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const GRASS_FRAG = `
uniform float uStem;
varying vec3 vWP; varying vec3 vN; varying vec3 vS; varying float vT; varying float vSide;
varying vec3 vAlb; varying vec3 vFogC; varying float vFogF; varying float vSh; varying float vKind;
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN);
if (dot(N, V) < 0.0) N = -N;
float t = clamp(vT, 0.0, 1.0);
float side = clamp(vSide, -1.0, 1.0);
vec3 Nr = normalize(N + normalize(vS + vec3(1e-5))*side*0.5);
vec3 alb = max(vAlb, vec3(0.0));
alb *= 0.9 + 0.14*(1.0 - abs(side));
if (uStem > 0.5 && vKind < 2.5 && t > 0.79) alb *= 0.75 + 0.5*fract(sin(floor(t*95.0)*12.9898)*43758.5);
float ao = mix(mix(0.16, 0.62, uSnow), 1.0, pow(t, 0.75));
float self = mix(mix(0.22, 0.6, uSnow), 1.0, smoothstep(0.0, 0.8, t));
alb *= 1.0 - 0.32*uWet;
vec3 tcol = alb*vec3(1.85, 2.0, 0.9) + vec3(0.008, 0.012, 0.0);
vec3 Nl = normalize(Nr + vec3(0.0, 0.55, 0.0));
vec3 c = sunLight(alb, Nl, V, vSh*self, mix(0.56, 0.3, uWet), 1.0, tcol);
c += alb*(1.0/PI)*shIrr(normalize(Nr + vec3(0.0, 0.7, 0.0)))*ao;
if (uWet > 0.01) {
float fr = 0.03 + 0.97*pow(1.0 - abs(dot(Nr, V)), 5.0);
c += uSkyAvg*fr*uWet*0.22*ao;
}
c += vanLights(alb*mix(0.5, 1.0, t), Nl, vWP);
c = mix(c, vFogC, vFogF);
gl_FragColor = vec4(c, 1.0);
}`

const PUFF_VERT = `
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC; attribute float iBlown; uniform float uYellow;
varying vec2 vUv; varying float vA; varying vec3 vWP; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vYel;
void main(){
vYel = step(fract(iA.w*7.77 + 0.13), uYellow);
vec3 root = iA.xyz;
float g; vec2 w = windVec(root.xz, iA.w, g);
vec2 D = vec2(cos(iC.x), sin(iC.x))*iB.w + w*0.55 + touchAt(root.xz)*0.8;
float a = length(D); if (a > 1.35) D *= 1.35/a;
vec3 P, T; stalk(D, iB.x, 1.0, P, T);
vec3 c = root + P + T*0.012;
float age = uTime - iBlown;
float gone = vYel > 0.5 ? 0.0 : smoothstep(0.0, 0.35, age)*(1.0 - smoothstep(24.0, 30.0, age));
float R = (vYel > 0.5 ? 0.021 : 0.026)*(1.0 - gone*0.85);
vA = 1.0 - gone;
${BILL}
vec3 wp = c + (right*position.x + up*position.y)*R;
vUv = position.xy*0.5 + 0.5; vWP = c;
vSh = shadowAt(c, 0.004, 2.0)*cloudAt(c);
vFogF = fogAmount(c); vFogC = fogColor(normalize(c - cameraPosition));
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const PUFF_FRAG = `
uniform sampler2D uPuff; uniform sampler2D uBloom; uniform vec3 uFlowerA;
varying vec2 vUv; varying float vA; varying vec3 vWP; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vYel;
void main(){
vec4 t = vYel > 0.5 ? texture2D(uBloom, vUv) : texture2D(uPuff, vUv);
float a = t.a*vA;
if (a < 0.02) discard;
vec3 V = normalize(cameraPosition - vWP);
float back = pow(max(dot(-V, uSunDir), 0.0), 3.0)*(1.0 - vYel*0.7);
vec3 alb = vYel > 0.5 ? uFlowerA*t.r*0.8 : t.rgb*0.95;
vec3 c = alb*(1.0/PI)*(shIrr(vec3(0.0,1.0,0.0))*1.5 + uSunCol*vSh*(0.85 + 2.6*back));
c = mix(c, vFogC, vFogF);
gl_FragColor = vec4(c*a, a);
}`
const WILD_VERT = `
attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vType;
void main(){
vec3 root = iA.xyz;
float g; vec2 w = windVec(root.xz, iA.w, g);
vec2 D = vec2(cos(iC.x), sin(iC.x))*iB.w + w*0.5 + touchAt(root.xz)*0.85;
float a = length(D); if (a > 1.35) D *= 1.35/a;
vec3 P, T; stalk(D, iB.x, 1.0, P, T);
vec3 c = root + P + T*0.004;
float type = floor((fract(iC.w) - 0.5)*10.0 + 0.5);
vType = type;
float R = (type < 0.5 ? 0.022 : type < 1.5 ? 0.027 : type < 2.5 ? 0.017 : 0.012)*(0.85 + 0.3*fract(iA.w*9.1));
vec3 toCam = normalize(cameraPosition - c);
vec3 N = normalize(vec3(0.0, 1.0, 0.0)*0.8 + toCam*0.35 + T*0.4 + vec3(fract(iA.w*17.0) - 0.5, 0.0, fract(iA.w*29.0) - 0.5)*0.5);
vec3 rgt = normalize(cross(N, abs(N.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0)));
vec3 up = cross(rgt, N);
float spin = iA.w*6.283;
vec2 q = vec2(position.x*cos(spin) - position.y*sin(spin), position.x*sin(spin) + position.y*cos(spin));
vec3 wp = c + (rgt*q.x + up*q.y)*R;
vec2 cell = vec2(mod(type, 2.0), floor(type/2.0));
vUv = (vec2(position.x, -position.y)*0.5 + 0.5)*0.5 + cell*0.5;
vUv.y = 1.0 - vUv.y;
vWP = c; vN = N;
vSh = shadowAt(c, 0.004, 2.0)*cloudAt(c);
vFogF = fogAmount(c); vFogC = fogColor(normalize(c - cameraPosition));
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const WILD_FRAG = `
uniform sampler2D uWild; uniform vec3 uFlowerA; uniform vec3 uFlowerB; uniform vec3 uFlowerC;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying float vSh; varying vec3 vFogC; varying float vFogF; varying float vType;
void main(){
vec4 t = texture2D(uWild, vUv);
if (t.a < 0.35) discard;
vec3 petal = vType < 0.5 ? uFlowerA : vType < 1.5 ? uFlowerB : vType < 2.5 ? uFlowerC : uFlowerC*vec3(0.62, 0.95, 1.5);
vec3 mid = vType < 0.5 ? uFlowerA*vec3(0.75, 0.8, 0.4) : vType < 2.5 ? uFlowerA : vec3(0.9);
float gm = clamp(t.g*1.6, 0.0, 1.0);
vec3 alb = mix(petal*(0.25 + 0.75*t.r), mid*(0.4 + 0.6*t.g), gm);
alb *= 1.0 - 0.25*uWet;
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
float ndl = dot(N, uSunDir);
float back = pow(max(dot(-V, uSunDir), 0.0), 3.0);
vec3 c = uSunCol*vSh*alb*(1.0/PI)*(max(ndl, 0.0)*0.85 + 0.25 + back*1.2);
c += alb*(1.0/PI)*shIrr(normalize(N + vec3(0.0, 0.6, 0.0)))*0.9;
c += vanLights(alb, N, vWP);
c = mix(c, vFogC, vFogF);
gl_FragColor = vec4(c, 1.0);
}`
const RAIN_VERT = `
attribute vec4 iR; uniform vec3 uBox; uniform float uAmt; uniform float uPixAng;
varying float vA; varying float vX; varying vec3 vCol;
void main(){
if (iR.w > uAmt) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
vec3 ctr = boxCentre(uBox);
float spd = 7.0 + 3.0*fract(iR.w*71.3);
vec2 drift = uWindDir*(0.5 + uWind*3.2);
float H = uBox.y;
float ty = fract(iR.y + uTime*spd/H);
vec3 p;
p.xz = boxXZ(iR.xz, ctr, uBox) + drift*(ty*H/spd);
p.y = ctr.y + H*0.82 - ty*H;
vec3 vel = normalize(vec3(drift.x, -spd, drift.y));
float len = spd*0.03 + 0.05;
vec3 toC = cameraPosition - p; float dist = length(toC);
vec3 side = normalize(cross(vel, toC/dist));
float wdt = max(0.0018, dist*uPixAng*0.85);
vec3 wp = p + side*position.x*wdt - vel*(position.y*0.5 + 0.5)*len;
vX = position.x;
float edge = 1.0 - smoothstep(uBox.x*0.34, uBox.x*0.5, length(p.xz - ctr.xz));
vA = edge*smoothstep(0.3, 1.5, dist)*smoothstep(0.0, 0.05, ty)*smoothstep(-0.05, 0.25, p.y - groundAt(p.xz));
vec3 V = toC/dist;
vCol = vA > 0.001 ? skyRad(normalize(vec3(-V.x, 0.4, -V.z)))*0.8 + vanLights(vec3(1.0), V, p)*3.0 : vec3(0.0);
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const RAIN_FRAG = `
varying float vA; varying float vX; varying vec3 vCol;
void main(){
float a = vA*(1.0 - vX*vX);
if (a < 0.002) discard;
gl_FragColor = vec4(vCol*a*0.5, a*0.3);
}`
const SNOW_VERT = `
attribute vec4 iR; uniform vec3 uBox; uniform float uAmt; uniform float uPixAng;
varying float vA; varying vec2 vQ; varying vec3 vWP; varying float vBlur;
void main(){
if (iR.w > uAmt) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
vec3 ctr = boxCentre(uBox);
float spd = 0.7 + 0.65*fract(iR.w*51.7);
float H = uBox.y;
float ty = fract(iR.y + uTime*spd/H);
float tf = ty*H/spd;
vec2 drift = uWindDir*(0.25 + uWind*1.5);
float ph = iR.w*40.0;
vec3 p;
p.xz = boxXZ(iR.xz, ctr, uBox) + drift*tf;
p.x += sin(uTime*(0.6 + iR.x) + ph)*0.3 + sin(tf*1.1 + ph*2.0)*0.25;
p.z += cos(uTime*(0.5 + iR.z) + ph)*0.3 + cos(tf*0.9 + ph)*0.2;
p.y = ctr.y + H*0.85 - ty*H;
vec3 toC = cameraPosition - p; float dist = length(toC);
${BILL}
float size = 0.0055 + 0.0075*pow(fract(iR.w*13.7), 1.5);
float blur = RS(2.2, 0.5, dist);
float S = max(size*(1.0 + blur*3.5), dist*uPixAng*1.5);
vBlur = blur;
float edge = 1.0 - smoothstep(uBox.x*0.34, uBox.x*0.5, length(p.xz - ctr.xz));
vA = edge*smoothstep(0.15, 0.5, dist)*clamp(size*2.2/S, 0.2, 1.0)*smoothstep(0.0, 0.05, ty)*smoothstep(-0.02, 0.15, p.y - groundAt(p.xz));
vQ = position.xy; vWP = p;
gl_Position = projectionMatrix*viewMatrix*vec4(p + (right*position.x + up*position.y)*S, 1.0);
}`
const SNOW_FRAG = `
varying float vA; varying vec2 vQ; varying vec3 vWP; varying float vBlur;
void main(){
float d = length(vQ);
float a = vA*RS(1.0, mix(0.3, 0.0, vBlur), d)*(1.0 - 0.55*vBlur);
if (a < 0.003) discard;
vec3 V = normalize(cameraPosition - vWP);
float back = pow(max(dot(-V, uSunDir), 0.0), 4.0);
vec3 c = uSnowCol*(1.0/PI)*(shIrr(vec3(0.0, 1.0, 0.0))*1.5 + uSunCol*(0.6 + back*1.5)) + vanLights(uSnowCol, V, vWP)*1.6;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c*a, a);
}`
const FALL_VERT = `
attribute vec4 iR; attribute vec4 iS;
uniform vec3 uCanopyC; uniform vec3 uCanopyR; uniform float uLeafAmt; uniform float uPetalAmt; uniform float uPetalShare; uniform vec3 uBox;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying vec3 vCol; varying float vA;
vec3 rot(vec3 v, vec3 k, float a){ return v*cos(a) + cross(k, v)*sin(a) + k*dot(k, v)*(1.0 - cos(a)); }
void main(){
bool petal = fract(iS.z*5.31) < uPetalShare;
if (iR.w > (petal ? uPetalAmt : uLeafAmt)) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
bool tree = iS.x < 0.62;
vec3 p; float landed = 0.0, a = 1.0, t;
if (tree) {
float T = 16.0 + 12.0*iS.w;
float ph = fract(uTime/T + iR.w*13.0);
t = ph*T;
vec3 s0 = uCanopyC + (iR.xyz*2.0 - 1.0)*uCanopyR*vec3(0.8, 0.55, 0.8);
float g0 = groundAt(s0.xz);
float fallT = max(s0.y - g0, 0.5)/(petal ? 0.8 : 1.15);
float tf = min(t, fallT);
vec2 d = uWindDir*(0.25 + uWind*1.5)*tf + vec2(sin(tf*1.6 + iS.y*20.0), cos(tf*1.25 + iS.w*20.0))*0.7*min(tf, 1.5);
p = vec3(s0.x + d.x, mix(s0.y, g0, tf/fallT), s0.z + d.y);
p.y = max(p.y, groundAt(p.xz) + 0.012);
landed = step(fallT, t);
a = smoothstep(0.0, 0.02, ph)*(1.0 - smoothstep(0.8, 1.0, ph));
} else {
vec3 box = uBox;
vec3 ctr = boxCentre(box);
float spd = 0.6 + uWind*2.6;
t = uTime + iR.w*50.0;
p.xz = boxXZ(iR.xz + uWindDir*uTime*spd/box.xz, ctr, box);
float gust = fieldAt(p.xz).r;
float lift = (0.25 + 0.75*max(0.0, sin(t*0.37 + iS.y*9.0)))*(0.5 + 1.8*gust);
p.y = groundAt(p.xz) + 0.05 + lift*(0.5 + 1.5*iR.y);
float edge = 1.0 - smoothstep(box.x*0.34, box.x*0.5, length(p.xz - ctr.xz));
a = edge*smoothstep(0.4, 1.2, length(cameraPosition - p));
}
vec3 k = normalize(vec3(iS.y - 0.5, iS.z - 0.5 + 0.2, iS.w - 0.5));
float ang = t*(2.2 + 3.5*iS.y) + iS.z*6.283;
vec3 X = rot(vec3(1.0, 0.0, 0.0), k, ang), Z = rot(vec3(0.0, 0.0, 1.0), k, ang);
float yaw = iS.y*6.283;
vec3 Xl = vec3(cos(yaw), 0.0, sin(yaw)), Zl = vec3(-sin(yaw), 0.0, cos(yaw));
X = normalize(mix(X, Xl, landed)); Z = normalize(mix(Z, Zl, landed));
float size = petal ? 0.016 + 0.009*iS.w : 0.042 + 0.024*iS.w;
vec3 wp = p + (X*position.x + Z*position.y)*size;
int cell = petal ? (iS.x > 0.9 ? 3 : 2) : (iS.w > 0.55 ? 1 : 0);
vec2 c2 = vec2(float(cell - (cell/2)*2), float(cell/2));
vUv = (position.xy*0.5 + 0.5)*0.5 + vec2(c2.x, 1.0 - c2.y)*0.5;
vN = normalize(cross(X, Z));
float pick = fract(iS.w*7.3 + iR.z);
vec3 au = mix(uAutA, uAutB, smoothstep(0.25, 0.65, pick));
au = mix(au, uAutC, smoothstep(0.72, 0.96, pick));
vCol = petal ? uBlossom*(0.9 + 0.2*iS.y) : au*(0.75 + 0.35*iS.y);
vA = a;
vWP = p;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const FALL_FRAG = `
uniform sampler2D uFallTex;
varying vec2 vUv; varying vec3 vWP; varying vec3 vN; varying vec3 vCol; varying float vA;
void main(){
vec4 t = texture2D(uFallTex, vUv);
if (t.a < 0.4 || vA < 0.02) discard;
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
vec3 alb = vCol*t.r*(1.0 - 0.25*uWet);
float ndl = dot(N, uSunDir);
float sh = shadowAt(vWP, 0.003, 1.5)*cloudAt(vWP);
float tr = pow(max(dot(-V, uSunDir), 0.0), 3.0);
vec3 c = uSunCol*sh*alb*(1.0/PI)*(0.35 + 0.65*abs(ndl) + tr*1.8);
c += alb*(1.0/PI)*shIrr(normalize(N*0.4 + vec3(0.0, 0.8, 0.0)))*1.1;
c += vanLights(alb, N, vWP);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c*vA, vA);
}`
const SEED_VERT = `
attribute vec4 iP; varying vec2 vUv; varying float vA; varying vec3 vWP;
void main(){
${BILL}
float r = iP.w*6.283;
vec2 q = vec2(position.x*cos(r*0.15) - position.y*sin(r*0.15), position.x*sin(r*0.15) + position.y*cos(r*0.15));
vec3 wp = iP.xyz + (right*q.x + up*q.y)*0.03;
vUv = position.xy*0.5+0.5; vA = clamp(iP.w, 0.0, 1.0); vWP = iP.xyz;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const SEED_FRAG = `
uniform sampler2D uSeed; varying vec2 vUv; varying float vA; varying vec3 vWP;
void main(){
vec4 t = texture2D(uSeed, vUv);
float a = t.a*vA;
if (a < 0.02) discard;
vec3 V = normalize(cameraPosition - vWP);
float back = pow(max(dot(-V, uSunDir), 0.0), 3.0);
vec3 c = t.rgb*(1.0/PI)*(shIrr(vec3(0,1,0))*1.2 + uSunCol*(0.8 + 4.5*back));
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c*a, a);
}`
const MOTE_VERT = `
attribute vec4 iA; uniform vec3 uHome; varying vec2 vUv; varying float vB; varying vec3 vWP;
void main(){
vec3 p = iA.xyz;
float t = uTime*0.12 + iA.w*40.0;
p.x += sin(t*1.3 + iA.w*9.0)*0.8 + uWindDir.x*mod(uTime*0.35 + iA.w*30.0, 30.0) - 6.0;
p.z += cos(t*1.1 + iA.w*5.0)*0.8 + uWindDir.y*mod(uTime*0.35 + iA.w*30.0, 30.0) - 6.0;
p.y += sin(t*2.0 + iA.w*3.0)*0.35;
p += uHome;
${BILL}
float s = 0.006 + 0.006*fract(iA.w*13.0);
vec3 wp = p + (right*position.x + up*position.y)*s;
vec3 V = normalize(cameraPosition - p);
float ph = fract(iA.w*31.0 + uTime*0.03);
vB = pow(max(dot(-V, uSunDir), 0.0), 6.0)*smoothstep(0.0, 0.25, ph)*RS(1.0, 0.75, ph);
vUv = position.xy; vWP = p;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const MOTE_FRAG = `
varying vec2 vUv; varying float vB; varying vec3 vWP;
void main(){
float d = length(vUv); if (d > 1.0) discard;
float a = RS(1.0, 0.0, d);
gl_FragColor = vec4(uSunCol*vB*a*0.9*shadowAt(vWP, 0.0008, 1.5), 1.0);
}`
// Bark: grown branches carry (around, along) in uv, in tree units; the
// fissured bark and its relief are shaded from the noise texture.
const BARK_VERT = `
varying vec3 vWP; varying vec3 vN; varying vec2 vUv;
void main(){
vec4 w = uTreeM*vec4(position, 1.0);
w.xyz += treeWind(w.xyz, 0.0);
vWP = w.xyz; vN = normalize(mat3(uTreeM)*normal); vUv = uv;
gl_Position = projectionMatrix*viewMatrix*w;
}`
const BARK_FRAG = `
uniform vec3 uCanopyC; uniform vec3 uCanopyR;
varying vec3 vWP; varying vec3 vN; varying vec2 vUv;
float barkH(vec2 q){ return texture2D(uNoise, q*vec2(1.0, 0.16)).r*0.72 + texture2D(uNoise, q*vec2(2.0, 0.55) + 0.37).g*0.28; }
vec3 perturb(vec3 N, vec3 p, vec2 uv, vec3 tn){
vec3 dp1 = dFdx(p), dp2 = dFdy(p); vec2 du1 = dFdx(uv), du2 = dFdy(uv);
vec3 d2p = cross(dp2, N), d1p = cross(N, dp1);
vec3 T = d2p*du1.x + d1p*du2.x, B = d2p*du1.y + d1p*du2.y;
float inv = inversesqrt(max(max(dot(T,T), dot(B,B)), 1e-12));
return normalize(mat3(T*inv, B*inv, N)*tn);
}
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
vec2 q = vec2(vUv.x, vUv.y*0.35);
float h = barkH(q);
float hu = barkH(q + vec2(0.01, 0.0)), hv = barkH(q + vec2(0.0, 0.02));
vec3 tn = normalize(vec3((h - hu)*9.0, (h - hv)*5.0, 1.0));
N = perturb(N, vWP, vUv, tn);
float ridge = smoothstep(0.38, 0.66, h);
float lich = smoothstep(0.62, 0.8, texture2D(uNoise, vUv*vec2(0.5, 0.11) + 0.71).b);
vec3 alb = mix(vec3(0.028, 0.024, 0.02), vec3(0.12, 0.105, 0.088), ridge);
alb = mix(alb, vec3(0.12, 0.13, 0.09), lich*0.4)*uBarkTint;
alb *= 1.0 - 0.35*uWet;
float up = smoothstep(0.2, 0.75, normalize(vN).y + (tn.x - 0.0)*0.15);
alb = mix(alb, uSnowCol*0.9, uSnow*up*0.92);
float inside = length((vWP - uCanopyC)/uCanopyR);
float ao = mix(0.35, 1.0, smoothstep(0.2, 1.05, inside))*mix(0.55, 1.0, smoothstep(0.0, 2.5, vWP.y - uTreeBase.y));
ao = mix(ao, 1.0, uSeason.w*0.55);
float sh = shadowAt(vWP + N*0.04, 0.0009, 1.2)*cloudAt(vWP);
vec3 c = sunLight(alb, N, V, sh, 0.78, 0.0, vec3(0.0));
c += alb*(1.0/PI)*shIrr(N)*ao;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`
const LEAF_VERT = `
attribute vec3 iM0; attribute vec3 iM1; attribute vec3 iM2; attribute vec3 iM3;
varying vec3 vWP; varying vec3 vN; varying vec2 vUv; varying vec2 vClu;
void main(){
vClu = vec2(fract(sin(dot(iM3, vec3(12.9898, 78.233, 37.719)))*43758.5453), fract(sin(dot(iM3, vec3(39.346, 11.135, 83.155)))*24634.6345));
vec3 lp = iM0*position.x + iM1*position.y + iM2*position.z + iM3;
vec3 ln = iM0*normal.x + iM1*normal.y + iM2*normal.z;
vec4 w = uTreeM*vec4(lp, 1.0);
w.xyz += treeWind(w.xyz, 1.0);
vWP = w.xyz; vN = normalize(mat3(uTreeM)*ln); vUv = uv;
gl_Position = projectionMatrix*viewMatrix*w;
}`
const LEAF_FRAG = `
uniform sampler2D uLeaf; uniform vec3 uCanopyC; uniform vec3 uCanopyR; uniform float uA2C;
varying vec3 vWP; varying vec3 vN; varying vec2 vUv; varying vec2 vClu;
void main(){
if (vClu.x > 1.0 - 0.18*uSeason.z - 0.985*uSeason.w) discard;
vec4 tx = texture2D(uLeaf, vUv);
float a = tx.a;
if (uA2C > 0.5) { a = clamp((a - 0.42)/max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.01) discard; }
else if (a < 0.45) discard;
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN);
vec3 rel = (vWP - uCanopyC)/uCanopyR;
float inside = length(rel);
vec3 Nc = normalize(rel/uCanopyR);
if (dot(N, Nc) < 0.0) N = -N;
N = normalize(mix(N, Nc, 0.62));
vec3 alb = tx.rgb*uLeafTint;
float l = dot(tx.rgb, vec3(0.299, 0.587, 0.114));
float bloom = step(vClu.y, 0.62);
vec3 sp = mix(alb*vec3(1.06, 1.18, 0.78), uBlossom*min(0.22 + 4.2*l, 1.1), bloom*0.94);
float pick = fract(vClu.y*3.7 + vClu.x*0.31);
vec3 au = mix(uAutA, uAutB, smoothstep(0.25, 0.65, pick));
au = mix(au, uAutC, smoothstep(0.72, 0.96, pick))*min(0.16 + 5.0*l, 1.0);
au = mix(au, alb*vec3(1.15, 1.0, 0.55), step(0.9, vClu.y)*0.75);
alb = alb*uSeason.y + sp*uSeason.x + au*(uSeason.z + uSeason.w);
float turned = uSeason.z + uSeason.w + uSeason.x*bloom;
alb *= 1.0 - 0.3*uWet;
float ao = mix(0.22, 1.0, smoothstep(0.25, 1.05, inside));
ao = mix(ao, 1.0, uSeason.w*0.55);
float sh = shadowAt(vWP, 0.0016, 1.6)*cloudAt(vWP);
sh *= mix(0.45, 1.0, smoothstep(0.35, 1.0, inside));
float ndl = dot(N, uSunDir);
float wrap = max((ndl + 0.6)/1.6, 0.0);
float fwd = pow(max(dot(-V, uSunDir), 0.0), 4.0);
vec3 tcol = alb*mix(vec3(1.5, 1.85, 0.6), vec3(1.55, 1.3, 0.75), turned);
vec3 H = normalize(uSunDir + V);
float spec = pow(max(dot(N, H), 0.0), 40.0)*0.25*max(ndl, 0.0);
vec3 c = uSunCol*sh*(alb*(1.0/PI)*wrap*0.9 + tcol*(1.0/PI)*(fwd*1.5 + max(-ndl, 0.0)*0.3) + vec3(spec));
c += alb*(1.0/PI)*shIrr(normalize(N + vec3(0.0, 0.9, 0.0)))*ao;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, a);
}`
const IMP_VERT = `
attribute vec4 iP; attribute float iV; uniform vec2 uSize; varying vec2 vUv; varying vec3 vWP; varying float vView;
void main(){
vec3 base = iP.xyz;
vec2 to = normalize(cameraPosition.xz - base.xz);
vec3 rgt = vec3(-to.y, 0.0, to.x);
float s = abs(iP.w);
float squash = fract(iV);
vView = floor(iV);
vec3 wp = base + rgt*position.x*uSize.x*s*(0.75 + 0.5*squash) + vec3(0.0, position.y*uSize.y*s*(1.15 - 0.3*squash), 0.0);
vUv = vec2((iP.w < 0.0 ? -position.x : position.x)*0.5 + 0.5, position.y);
vWP = wp;
gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}`
const IMP_FRAG = `
uniform sampler2D uImp0; uniform sampler2D uImp1; uniform sampler2D uImp2; varying vec2 vUv; varying vec3 vWP; varying float vView;
void main(){
vec4 t = vView < 0.5 ? texture2D(uImp0, vUv) : vView < 1.5 ? texture2D(uImp1, vUv) : texture2D(uImp2, vUv);
float a = clamp((t.a - 0.5)/max(fwidth(t.a), 1e-3) + 0.5, 0.0, 1.0);
if (a < 0.02) discard;
vec3 c = t.rgb/max(t.a, 0.3)*0.7;
vec3 V = normalize(cameraPosition - vWP);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, a);
}`
// The van: body paint split at the waist, windows and wheel arches drawn
// from the body's own coordinates, glass that glows when the lights are on.
const VAN_VERT = `
attribute float aPart; varying vec3 vL; varying vec3 vLN; varying vec3 vWP; varying vec3 vN; varying float vP;
void main(){ vL = position; vLN = normal; vP = aPart; vec4 w = modelMatrix*vec4(position, 1.0); vWP = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`
const VAN_FRAG = `
uniform vec3 uBody; uniform vec3 uRoof; uniform float uLights; uniform float uGlow;
varying vec3 vL; varying vec3 vLN; varying vec3 vWP; varying vec3 vN; varying float vP;
float rbox(vec2 p, vec2 a, vec2 b, float r){ vec2 c = (a + b)*0.5, h = (b - a)*0.5 - r; vec2 q = abs(p - c) - h; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
vec3 L = vL;
vec3 alb; float rough = 0.38; float win = 0.0; float emi = 0.0;
if (vP < 0.5) {
alb = L.y > 1.16 ? uRoof : uBody;
alb *= 1.0 - 0.45*RS(0.014, 0.0, abs(L.y - 1.16));
if (abs(vLN.x) > 0.55) {
float d = rbox(vec2(L.z, L.y), vec2(1.2, 1.3), vec2(1.86, 1.8), 0.08);
d = min(d, rbox(vec2(L.z, L.y), vec2(0.18, 1.3), vec2(1.08, 1.8), 0.06));
d = min(d, rbox(vec2(L.z, L.y), vec2(-0.86, 1.3), vec2(0.06, 1.8), 0.06));
d = min(d, rbox(vec2(L.z, L.y), vec2(-1.92, 1.3), vec2(-0.98, 1.8), 0.08));
win = RS(0.0, -0.012, d);
float wa = min(length(vec2(L.z - 1.25, L.y - 0.36)), length(vec2(L.z + 1.25, L.y - 0.36)));
alb *= mix(0.05, 1.0, smoothstep(0.43, 0.45, wa));
alb *= 1.0 - 0.4*RS(0.01, 0.0, abs(L.z - 1.12))*step(0.5, L.y)*step(L.y, 1.2);
}
if (vLN.z > 0.55) {
float d = min(rbox(vec2(L.x, L.y), vec2(-0.8, 1.28), vec2(-0.03, 1.82), 0.09), rbox(vec2(L.x, L.y), vec2(0.03, 1.28), vec2(0.8, 1.82), 0.09));
win = RS(0.0, -0.012, d);
alb *= 1.0 - 0.5*RS(0.02, 0.0, abs(rbox(vec2(L.x, L.y), vec2(-0.32, 0.72), vec2(0.32, 0.86), 0.06)));
}
if (vLN.z < -0.55) win = RS(0.0, -0.012, rbox(vec2(L.x, L.y), vec2(-0.62, 1.38), vec2(0.62, 1.76), 0.1));
} else if (vP < 1.5) { alb = vec3(0.016); rough = 0.85; }
else if (vP < 2.5) { alb = vec3(0.62, 0.62, 0.6); rough = 0.25; }
else if (vP < 3.5) { alb = vec3(0.75); rough = 0.12; emi = 1.0; }
else if (vP < 4.5) { alb = vec3(0.03); rough = 0.6; }
else if (vP < 5.5) { alb = vec3(0.4, 0.03, 0.015); rough = 0.3; emi = 2.0; }
else if (vP < 6.5) { alb = uBody; rough = 0.3; }
else if (vP < 7.5) { alb = uRoof; rough = 0.32; }
else if (vP < 8.5) { alb = vec3(0.02); rough = 0.1; win = 1.0; }
else { alb = vec3(0.02, 0.018, 0.016); rough = 0.75; }
float sh = cloudAt(vWP);
float ao = mix(0.4, 1.0, smoothstep(0.3, 1.1, L.y));
vec3 c = sunLight(alb, N, V, sh, rough, 0.0, vec3(0.0)) + alb*(1.0/PI)*shIrr(N)*ao;
float fr = 0.04 + 0.96*pow(1.0 - max(dot(N, V), 0.0), 5.0);
c += fogColor(reflect(-V, N))*fr*(vP < 0.5 ? 0.25 : 0.1);
if (win > 0.0) {
vec3 glass = vec3(0.01, 0.012, 0.015)*shIrr(vec3(0.0, 1.0, 0.0)) + fogColor(reflect(-V, N))*(0.05 + fr*0.6);
float glow = uLights*(0.8 + 0.2*smoothstep(1.35, 1.7, L.y));
c = mix(c, mix(glass, uWinCol*2.6, glow*uGlow), win*0.96);
}
if (emi > 1.5) c += vec3(1.0, 0.12, 0.04)*uLights*1.6;
else if (emi > 0.5) c += uHeadCol*uLights*36.0;
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`
const BEAM_VERT = `
varying float vT; varying vec3 vWP; varying vec3 vN;
void main(){ vT = -position.y/12.0; vec4 w = modelMatrix*vec4(position, 1.0); vWP = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`
const BEAM_FRAG = `
uniform float uOn; uniform vec3 uCol; varying float vT; varying vec3 vWP; varying vec3 vN;
void main(){
vec3 V = normalize(cameraPosition - vWP);
float edge = pow(abs(dot(normalize(vN), V)), 1.6);
float a = uOn*edge*(pow(1.0 - vT, 2.2)*0.26 + exp(-vT*14.0)*0.5)*smoothstep(0.0, 0.015, vT);
gl_FragColor = vec4(uCol*a, 1.0);
}`
const BIRD_VERT = `
attribute vec3 color; attribute float aWing;
attribute vec3 iP; attribute vec3 iX; attribute vec3 iY; attribute vec3 iZ; attribute vec2 iF;
varying vec3 vWP; varying vec3 vN; varying vec3 vC; varying float vWingV;
void main(){
vec3 p = position; vec3 n = normal;
if (abs(aWing) > 0.0) {
float s = sign(p.x);
float ang = iF.x*s*(0.35 + 0.65*abs(aWing));
float c = cos(ang), sn = sin(ang);
p = vec3(p.x*c - p.y*sn*s*s, p.x*sn + p.y*c, p.z);
n = vec3(n.x*c - n.y*sn, n.x*sn + n.y*c, n.z);
}
p *= iF.y;
vec3 w = iP + iX*p.x + iY*p.y + iZ*p.z;
vWP = w; vN = normalize(iX*n.x + iY*n.y + iZ*n.z); vC = color; vWingV = abs(aWing);
gl_Position = projectionMatrix*viewMatrix*vec4(w, 1.0);
}`
const BIRD_FRAG = `
uniform vec3 uTint;
varying vec3 vWP; varying vec3 vN; varying vec3 vC; varying float vWingV;
void main(){
vec3 V = normalize(cameraPosition - vWP);
vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
vec3 alb = vC*uTint;
float sh = shadowAt(vWP, 0.002, 1.2)*cloudAt(vWP);
vec3 c = sunLight(alb, N, V, sh, 0.6, 0.6*vWingV, alb*vec3(1.6, 1.4, 1.1));
c += alb*(1.0/PI)*shIrr(N);
c = mix(c, fogColor(-V), fogAmount(vWP));
gl_FragColor = vec4(c, 1.0);
}`
const DOWN_FRAG = `
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uFirst; varying vec2 vUv;
vec3 s(vec2 o){ return min(texture2D(uSrc, vUv + o*uTexel).rgb, vec3(uFirst > 0.5 ? 24.0 : 1e4)); }
float w(vec3 c){ return 1.0/(1.0 + dot(c, vec3(0.2126,0.7152,0.0722))); }
void main(){
vec3 a = s(vec2(-2,-2)), b = s(vec2(0,-2)), c = s(vec2(2,-2));
vec3 d = s(vec2(-1,-1)), e = s(vec2(1,-1));
vec3 f = s(vec2(-2,0)), g = s(vec2(0,0)), h = s(vec2(2,0));
vec3 i = s(vec2(-1,1)), j = s(vec2(1,1));
vec3 k = s(vec2(-2,2)), l = s(vec2(0,2)), m = s(vec2(2,2));
vec3 r;
if (uFirst > 0.5) {
a = max(a, 0.0); b = max(b, 0.0); c = max(c, 0.0); d = max(d, 0.0); e = max(e, 0.0); f = max(f, 0.0); g = max(g, 0.0);
h = max(h, 0.0); i = max(i, 0.0); j = max(j, 0.0); k = max(k, 0.0); l = max(l, 0.0); m = max(m, 0.0);
if (any(isnan(a+b+c+d+e+f+g+h+i+j+k+l+m))) { gl_FragColor = vec4(0.0); return; }
vec3 g0 = (d+e+i+j)*0.25, g1 = (a+b+f+g)*0.25, g2 = (b+c+g+h)*0.25, g3 = (f+g+k+l)*0.25, g4 = (g+h+l+m)*0.25;
float w0 = w(g0)*0.5, w1 = w(g1)*0.125, w2 = w(g2)*0.125, w3 = w(g3)*0.125, w4 = w(g4)*0.125;
r = (g0*w0 + g1*w1 + g2*w2 + g3*w3 + g4*w4)/(w0+w1+w2+w3+w4);
} else {
r = (d+e+i+j)*0.125 + (a+c+k+m)*0.03125 + (b+f+h+l)*0.0625 + g*0.125;
}
gl_FragColor = vec4(r, 1.0);
}`
const UP_FRAG = `
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uRadius; varying vec2 vUv;
void main(){
vec2 t = uTexel*uRadius;
vec3 c = texture2D(uSrc, vUv).rgb*4.0;
c += (texture2D(uSrc, vUv+vec2(-t.x,0.)).rgb + texture2D(uSrc, vUv+vec2(t.x,0.)).rgb + texture2D(uSrc, vUv+vec2(0.,-t.y)).rgb + texture2D(uSrc, vUv+vec2(0.,t.y)).rgb)*2.0;
c += texture2D(uSrc, vUv+vec2(-t.x,-t.y)).rgb + texture2D(uSrc, vUv+vec2(t.x,-t.y)).rgb + texture2D(uSrc, vUv+vec2(-t.x,t.y)).rgb + texture2D(uSrc, vUv+vec2(t.x,t.y)).rgb;
gl_FragColor = vec4(c/16.0, 1.0);
}`
const RAYS_FRAG = `
uniform sampler2D uSrc; uniform vec3 uSun; varying vec2 vUv;
void main(){
if (uSun.z <= 0.0) { gl_FragColor = vec4(0.0); return; }
vec2 uv = vUv;
vec2 st = (uSun.xy - uv)/48.0*0.92;
vec3 acc = vec3(0.0); float w = 1.0;
for (int i = 0; i < 48; i++) {
uv += st;
vec3 s = texture2D(uSrc, uv).rgb;
float l = dot(s, vec3(0.2126, 0.7152, 0.0722));
acc += s*smoothstep(5.0, 16.0, l)*w;
w *= 0.965;
}
gl_FragColor = vec4(min(acc/48.0, vec3(6.0))*uSun.z, 1.0);
}`
const COMPOSITE_FRAG = `
uniform sampler2D uScene; uniform sampler2D uBloom; uniform sampler2D uRays; uniform float uRayAmt; uniform float uBloomAmt; uniform float uExposure;
uniform float uSat; uniform float uWarm; uniform float uContrast; uniform float uVig; uniform float uTime; uniform vec2 uRes; uniform vec3 uLift; uniform float uFade;
varying vec2 vUv;
vec3 RRTAndODTFit(vec3 v){ vec3 a = v*(v + 0.0245786) - 0.000090537; vec3 b = v*(0.983729*v + 0.4329510) + 0.238081; return a/b; }
vec3 aces(vec3 c){
const mat3 i = mat3(0.59719,0.07600,0.02840, 0.35458,0.90834,0.13383, 0.04823,0.01566,0.83777);
const mat3 o = mat3(1.60475,-0.10208,-0.00327, -0.53108,1.10813,-0.07276, -0.07367,-0.00605,1.07602);
return clamp(o*RRTAndODTFit(i*c), 0.0, 1.0);
}
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
void main(){
vec3 c = texture2D(uScene, vUv).rgb;
vec3 b = texture2D(uBloom, vUv).rgb;
if (any(isnan(c))) c = vec3(0.0);
if (any(isnan(b))) b = vec3(0.0);
c = mix(c, b, uBloomAmt);
c += texture2D(uRays, vUv).rgb*uRayAmt;
c *= uExposure;
c *= vec3(1.0 + uWarm, 1.0 + uWarm*0.25, 1.0 - uWarm*0.6);
c = aces(c);
float l = dot(c, vec3(0.2126,0.7152,0.0722));
c = mix(vec3(l), c, uSat);
c = (c - 0.5)*uContrast + 0.5;
c = c + uLift*(1.0 - c);
vec2 q = vUv - 0.5; q.x *= uRes.x/uRes.y;
c *= mix(1.0, RS(1.15, 0.25, length(q)), uVig);
c = max(c, 0.0);
c = mix(12.92*c, 1.055*pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c));
c += (hash(vUv*uRes + fract(uTime)*91.0) - 0.5)*(1.6/255.0);
c *= 1.0 - uFade;
gl_FragColor = vec4(c, 1.0);
}`

// ── canvas-drawn sprites ──
function canvasTex(n: number, draw: (g: CanvasRenderingContext2D, n: number) => void) {
	const c = document.createElement("canvas"); c.width = c.height = n; const g = c.getContext("2d")
	if (g) draw(g, n)
	const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
	t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true
	return t
}
function drawPuff(n: CanvasRenderingContext2D, e: number) {
	const t = prng(77); n.translate(e / 2, e / 2); const i = e * 0.46
	for (let r = 0; r < 520; r++) {
		const a = t() * Math.PI * 2, o = t() * 2 - 1, l = Math.sqrt(1 - o * o), c = i * l * (0.88 + 0.12 * t())
		const u = Math.cos(a) * c, d = Math.sin(a) * c, h = o > 0
		n.strokeStyle = `rgba(255,255,255,${h ? 0.32 : 0.14})`
		n.lineWidth = 0.7; n.beginPath(); n.moveTo(Math.cos(a) * i * 0.12, Math.sin(a) * i * 0.12)
		n.lineTo(u * 0.82, d * 0.82); n.stroke()
		for (let f = 0; f < 7; f++) {
			const g = a + (f - 3) * 0.16 + (t() - 0.5) * 0.08, m = i * (0.16 + 0.05 * t()) * (0.4 + 0.6 * l)
			n.strokeStyle = `rgba(255,255,255,${h ? 0.42 : 0.18})`
			n.lineWidth = 0.55; n.beginPath(); n.moveTo(u * 0.82, d * 0.82)
			n.lineTo(u * 0.82 + Math.cos(g) * m, d * 0.82 + Math.sin(g) * m); n.stroke()
		}
	}
	const s = n.createRadialGradient(0, 0, 0, 0, 0, i * 0.16); s.addColorStop(0, "rgba(120,100,70,1)")
	s.addColorStop(1, "rgba(150,130,100,0)"); n.fillStyle = s; n.beginPath(); n.arc(0, 0, i * 0.16, 0, Math.PI * 2)
	n.fill()
}
function drawBloom(n: CanvasRenderingContext2D, e: number) {
	const t = prng(41); n.translate(e / 2, e / 2); const i = e * 0.46
	for (let r = 0; r < 4; r++) {
		const a = 70 - r * 12, o = i * (1 - r * 0.2)
		for (let l = 0; l < a; l++) {
			const c = (l / a) * Math.PI * 2 + t() * 0.08 + r * 0.3, u = o * (0.82 + 0.18 * t()), d = 190 + Math.floor(t() * 60) - r * 18
			n.strokeStyle = `rgba(${d},${d},${d},0.95)`
			n.lineWidth = 3.2 - r * 0.5; n.lineCap = "round"; n.beginPath()
			n.moveTo(Math.cos(c) * o * 0.18, Math.sin(c) * o * 0.18); n.lineTo(Math.cos(c) * u, Math.sin(c) * u)
			n.stroke()
		}
	}
	const s = n.createRadialGradient(0, 0, 0, 0, 0, i * 0.3); s.addColorStop(0, "rgba(150,150,150,1)")
	s.addColorStop(1, "rgba(210,210,210,0)"); n.fillStyle = s; n.beginPath(); n.arc(0, 0, i * 0.3, 0, Math.PI * 2)
	n.fill()
}
function drawSeed(n: CanvasRenderingContext2D, e: number) {
	n.translate(e / 2, e * 0.62); n.strokeStyle = "rgba(255,255,255,0.9)"; n.lineWidth = 1; n.beginPath()
	n.moveTo(0, e * 0.3); n.lineTo(0, -e * 0.05); n.stroke(); n.fillStyle = "rgba(170,140,100,1)"; n.beginPath()
	n.ellipse(0, e * 0.3, 2, 5, 0, 0, Math.PI * 2); n.fill()
	for (let t = 0; t < 15; t++) {
		const i = -Math.PI / 2 + (t - 7) * 0.2; n.strokeStyle = "rgba(255,255,255,0.75)"; n.lineWidth = 0.8
		n.beginPath(); n.moveTo(0, -e * 0.05); n.lineTo(Math.cos(i) * e * 0.36, -e * 0.05 + Math.sin(i) * e * 0.3)
		n.stroke()
	}
}
function drawWild(n: CanvasRenderingContext2D, e: number) {
	const t = prng(64), i = e / 2
	const petal = (l: number, c: number, u: number, d: number, h: number, f: number) => {
		n.save(); n.translate(l, c); n.rotate(u); const g = n.createLinearGradient(0, 0, d, 0)
		g.addColorStop(0, `rgb(${Math.round(f * 0.55)},0,0)`); g.addColorStop(0.35, `rgb(${f},0,0)`)
		g.addColorStop(1, `rgb(${Math.round(f * 0.92)},0,0)`); n.fillStyle = g; n.beginPath(); n.moveTo(0, 0)
		n.bezierCurveTo(d * 0.25, -h, d * 0.95, -h * 0.9, d, 0); n.bezierCurveTo(d * 0.95, h * 0.9, d * 0.25, h, 0, 0)
		n.fill(); n.restore()
	}
	const eye = (l: number, c: number, u: number, d: number) => {
		const h = n.createRadialGradient(l, c, 0, l, c, u); h.addColorStop(0, `rgb(0,${d},0)`)
		h.addColorStop(0.8, `rgb(0,${Math.round(d * 0.85)},0)`); h.addColorStop(1, "rgba(0,120,0,0)"); n.fillStyle = h
		n.beginPath(); n.arc(l, c, u, 0, Math.PI * 2); n.fill()
	}
	let a = i / 2, o = i / 2
	for (let l = 0; l < 5; l++) petal(a, o, (l / 5) * Math.PI * 2 + 0.3, i * 0.44, i * 0.2, 235)
	eye(a, o, i * 0.11, 200); a = i * 1.5; o = i / 2
	for (let l = 0; l < 26; l++) petal(a, o, (l / 26) * Math.PI * 2 + t() * 0.1, i * (0.4 + t() * 0.06), i * 0.045, 230 + Math.floor(t() * 25))
	eye(a, o, i * 0.14, 255); a = i / 2; o = i * 1.5
	for (const [l, c, u] of [[-2.2, 0.36, 0.17], [-0.95, 0.36, 0.17], [-2.9, 0.3, 0.14], [-0.25, 0.3, 0.14], [1.57, 0.42, 0.2]]) petal(a, o, l, i * c, i * u, 215)
	eye(a, o, i * 0.07, 230); a = i * 1.5; o = i * 1.5
	for (let l = 0; l < 4; l++) petal(a, o, (l / 4) * Math.PI * 2 + 0.6, i * 0.32, i * 0.18, 225)
	eye(a, o, i * 0.06, 255)
}
function drawFall(n: CanvasRenderingContext2D, e: number) {
	const t = e / 2; n.save(); n.translate(t / 2, t / 2); n.rotate(-Math.PI / 4); const o = t * 0.42, l = t * 0.22
	const c = n.createLinearGradient(-l, 0, l, 0); c.addColorStop(0, "rgb(190,190,190)")
	c.addColorStop(0.5, "rgb(240,240,240)"); c.addColorStop(1, "rgb(175,175,175)"); n.fillStyle = c; n.beginPath()
	n.moveTo(0, -o); n.bezierCurveTo(l * 1.2, -o * 0.5, l, o * 0.5, 0, o * 0.8)
	n.bezierCurveTo(-l, o * 0.5, -l * 1.2, -o * 0.5, 0, -o); n.fill(); n.strokeStyle = "rgb(120,120,120)"
	n.lineWidth = 2; n.beginPath(); n.moveTo(0, -o * 0.9); n.lineTo(0, o); n.stroke()
	for (let u = -3; u <= 3; u++) {
		if (!u) continue
		n.lineWidth = 1; n.beginPath(); n.moveTo(0, u * o * 0.2)
		n.lineTo(Math.sign(u) * l * 0.7, u * o * 0.2 - o * 0.18); n.stroke(); n.beginPath(); n.moveTo(0, u * o * 0.2)
		n.lineTo(-Math.sign(u) * l * 0.7, u * o * 0.2 - o * 0.18); n.stroke()
	}
	n.restore(); n.save(); n.translate(t * 1.5, t / 2); n.fillStyle = "rgb(225,225,225)"; n.beginPath()
	for (let r = 0; r <= 60; r++) {
		const a = (r / 60) * Math.PI * 2
		const rr = t * 0.38 * (0.62 + 0.38 * Math.pow(Math.abs(Math.cos(a * 2.5)), 0.6)) * (a > Math.PI * 0.35 && a < Math.PI * 0.65 ? 0.4 : 1)
		n.lineTo(Math.cos(a - Math.PI / 2) * rr, Math.sin(a - Math.PI / 2) * rr)
	}
	n.fill(); n.strokeStyle = "rgb(140,140,140)"; n.lineWidth = 1.5
	for (const r of [-1.57, -0.5, -2.64, 0.6, -3.7]) {
		n.beginPath(); n.moveTo(0, 0); n.lineTo(Math.cos(r) * t * 0.33, Math.sin(r) * t * 0.33); n.stroke()
	}
	n.restore(); n.save(); n.translate(t / 2, t * 1.5); const s = n.createLinearGradient(0, -t * 0.4, 0, t * 0.4)
	s.addColorStop(0, "rgb(235,235,235)"); s.addColorStop(1, "rgb(170,170,170)"); n.fillStyle = s; n.beginPath()
	n.moveTo(-t * 0.08, t * 0.38); n.bezierCurveTo(-t * 0.36, -t * 0.05, -t * 0.4, -t * 0.4, 0, -t * 0.36)
	n.bezierCurveTo(t * 0.4, -t * 0.4, t * 0.36, -t * 0.05, t * 0.08, t * 0.38)
	n.closePath(); n.fill(); n.restore(); n.save(); n.translate(t * 1.5, t * 1.5); n.fillStyle = "rgb(230,230,230)"
	n.beginPath(); n.ellipse(0, 0, t * 0.26, t * 0.36, 0, 0, Math.PI * 2); n.fill(); n.restore()
}
// A sprig of leaves for the crown's cards: two dozen pointed leaves on a
// short twig, mid greens with a lighter midrib.
function drawLeaves(n: CanvasRenderingContext2D, e: number) {
	const r = prng(23); n.translate(e / 2, e / 2)
	for (let k = 0; k < 3; k++) {
		const a0 = r() * Math.PI * 2; n.strokeStyle = "rgb(52,44,30)"; n.lineWidth = 3 - k * 0.6; n.beginPath()
		n.moveTo(0, 0); n.lineTo(Math.cos(a0) * e * 0.3, Math.sin(a0) * e * 0.3); n.stroke()
	}
	for (let i = 0; i < 34; i++) {
		const ang = r() * Math.PI * 2, rad = e * (0.06 + 0.3 * Math.sqrt(r()))
		const len = e * (0.09 + 0.06 * r()), wid = len * (0.32 + 0.12 * r())
		const h = 78 + r() * 34, s = 34 + r() * 22, l = 15 + r() * 15; n.save()
		n.translate(Math.cos(ang) * rad, Math.sin(ang) * rad); n.rotate(ang + (r() - 0.5) * 1.4)
		n.fillStyle = `hsl(${h},${s}%,${l}%)`
		n.beginPath(); n.moveTo(0, 0); n.bezierCurveTo(len * 0.3, -wid, len * 0.75, -wid * 0.8, len, 0)
		n.bezierCurveTo(len * 0.75, wid * 0.8, len * 0.3, wid, 0, 0); n.fill()
		n.strokeStyle = `hsla(${h},${s}%,${l + 14}%,0.7)`
		n.lineWidth = 1; n.beginPath(); n.moveTo(len * 0.05, 0); n.lineTo(len * 0.9, 0); n.stroke(); n.restore()
	}
}

// ── geometry helpers ──
function bladeStrip(n: number, curve: boolean) {
	const t: number[] = [], i: number[] = []
	for (let a = 0; a < n; a++) {
		let o = a / n
		if (curve) o = 1 - Math.pow(1 - o, 1.7)
		t.push(-1, o, 0, 1, o, 0)
	}
	t.push(0, 1, 0)
	for (let a = 0; a < n - 1; a++) {
		const o = a * 2; i.push(o, o + 1, o + 2, o + 1, o + 3, o + 2)
	}
	const s = (n - 1) * 2; i.push(s, s + 1, n * 2); const g = new THREE.InstancedBufferGeometry()
	g.setAttribute("position", f32(t, 3)); g.setIndex(i)
	return g
}
function quadGeo(pos?: number[]) {
	const g = new THREE.InstancedBufferGeometry()
	g.setAttribute("position", f32(pos || [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3))
	g.setIndex([0, 1, 2, 0, 2, 3])
	return g
}
function randomQuads(n: number, seed: number) {
	const g = quadGeo(); const s = prng(seed), r = new Float32Array(n * 4), a = new Float32Array(n * 4)
	for (let o = 0; o < n; o++) {
		r.set([s(), s(), s(), s()], o * 4); a.set([s(), s(), s(), s()], o * 4)
	}
	g.setAttribute("iR", inst(r, 4)); g.setAttribute("iS", inst(a, 4)); g.instanceCount = n
	return g
}
interface Part { g: THREE.BufferGeometry; part: number; color?: RGB; wing?: number }
function mergeParts(list: Part[], withColor: boolean) {
	let nv = 0, ni = 0
	const geos = list.map((p) => {
		const g = p.g; nv += g.attributes.position.count; ni += g.index ? g.index.count : g.attributes.position.count
		return g
	})
	const P = new Float32Array(nv * 3), N = new Float32Array(nv * 3), A = new Float32Array(nv), C = withColor ? new Float32Array(nv * 3) : null
	const I = new Uint32Array(ni); let v = 0, k = 0
	geos.forEach((g, gi) => {
		const pos = g.attributes.position, nor = g.attributes.normal
		for (let i = 0; i < pos.count; i++) {
			P[(v + i) * 3] = pos.getX(i); P[(v + i) * 3 + 1] = pos.getY(i); P[(v + i) * 3 + 2] = pos.getZ(i)
			N[(v + i) * 3] = nor.getX(i); N[(v + i) * 3 + 1] = nor.getY(i); N[(v + i) * 3 + 2] = nor.getZ(i)
			A[v + i] = withColor ? list[gi].wing || 0 : list[gi].part
			if (C) C.set(list[gi].color || [1, 1, 1], (v + i) * 3)
		}
		if (g.index) for (let i = 0; i < g.index.count; i++) I[k + i] = g.index.getX(i) + v
		else for (let i = 0; i < pos.count; i++) I[k + i] = v + i
		k += g.index ? g.index.count : pos.count; v += pos.count; g.dispose()
	})
	// Instanced only when the parts are drawn through per-instance frames.
	const out = withColor ? new THREE.InstancedBufferGeometry() : new THREE.BufferGeometry()
	out.setAttribute("position", new THREE.BufferAttribute(P, 3)); out.setAttribute("normal", new THREE.BufferAttribute(N, 3))
	out.setAttribute(withColor ? "aWing" : "aPart", new THREE.BufferAttribute(A, 1))
	if (C) out.setAttribute("color", new THREE.BufferAttribute(C, 3))
	out.setIndex(new THREE.BufferAttribute(I, 1))
	return out
}

// ── the tree ──
// Grown in tree units (scaled ×0.72 into metres at placement): a short
// trunk that forks into four spreading limbs, three more orders of
// branching, and leaf sprigs along the outer two orders.
interface Grown {
	bark: THREE.BufferGeometry; leaves: Float32Array; nLeaves: number; trunk: { x: number; y: number; z: number; r: number }[]
}
function growTree(seed: number): Grown {
	const rnd = prng(seed); const P: number[] = [], N: number[] = [], U: number[] = [], I: number[] = []
	const leaves: number[] = []; const trunk: { x: number; y: number; z: number; r: number }[] = []
	const up = V3(0, 1, 0); const tmp = V3(), side = V3(), bin = V3()
	const tube = (pts: THREE.Vector3[], r0: number, r1: number) => {
		const sides = r0 > 0.25 ? 9 : r0 > 0.08 ? 6 : 4; const base = P.length / 3; let along = 0
		const circ = Math.max(1, Math.round(2 * Math.PI * r0)); let prevSide = V3(1, 0, 0)
		for (let i = 0; i < pts.length; i++) {
			const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)]
			const T = tmp.copy(b).sub(a).normalize(); side.copy(prevSide).sub(T.clone().multiplyScalar(prevSide.dot(T)))
			if (side.lengthSq() < 1e-6) side.set(1, 0, 0).cross(T)
			side.normalize(); prevSide = side.clone(); bin.crossVectors(T, side).normalize()
			if (i > 0) along += pts[i].distanceTo(pts[i - 1])
			const r = lerp(r0, r1, i / (pts.length - 1))
			for (let s = 0; s <= sides; s++) {
				const th = (s / sides) * Math.PI * 2; const nx = side.x * Math.cos(th) + bin.x * Math.sin(th)
				const ny = side.y * Math.cos(th) + bin.y * Math.sin(th); const nz = side.z * Math.cos(th) + bin.z * Math.sin(th)
				P.push(pts[i].x + nx * r, pts[i].y + ny * r, pts[i].z + nz * r); N.push(nx, ny, nz)
				U.push((s / sides) * circ, along)
			}
		}
		for (let i = 0; i < pts.length - 1; i++)
			for (let s = 0; s < sides; s++) {
				const a = base + i * (sides + 1) + s, b = a + sides + 1; I.push(a, b, a + 1, a + 1, b, b + 1)
			}
	}
	const sprig = (p: THREE.Vector3, d: THREE.Vector3, size: number) => {
		// Card basis: a random frame leaning outward along the twig.
		const ax = V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize()
		const n = d.clone().multiplyScalar(0.6).add(ax).normalize(); const t = V3().crossVectors(n, up)
		if (t.lengthSq() < 1e-4) t.set(1, 0, 0)
		t.normalize(); const b = V3().crossVectors(n, t).normalize(); const s = size * (0.8 + 0.4 * rnd())
		leaves.push(t.x * s, t.y * s, t.z * s, b.x * s, b.y * s, b.z * s, n.x * s, n.y * s, n.z * s, p.x, p.y, p.z)
	}
	const grow = (p0: THREE.Vector3, dir: THREE.Vector3, len: number, r: number, level: number) => {
		const n = Math.max(2, Math.ceil(len / 1.1)); const pts = [p0.clone()]; const d = dir.clone()
		const outward = V3(p0.x, 0, p0.z)
		for (let i = 0; i < n; i++) {
			d.add(V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(level === 0 ? 0.08 : 0.32))
			d.y += level === 0 ? 0.05 : level === 1 ? 0.012 : level > 2 ? -0.05 : 0
			if (outward.lengthSq() > 0.01) d.addScaledVector(outward.clone().normalize(), 0.05)
			d.normalize(); pts.push(pts[i].clone().addScaledVector(d, len / n))
		}
		const rEnd = level === 0 ? r * 0.78 : r * 0.35; tube(pts, r, rEnd)
		if (level === 0)
			for (let i = 0; i <= n; i++) {
				const k = i / n; trunk.push({ x: pts[i].x, y: pts[i].y, z: pts[i].z, r: lerp(r, rEnd, k) })
			}
		const at = (k: number) => {
			const f = k * n, i = Math.min(n - 1, Math.floor(f)), u = f - i
			return { p: pts[i].clone().lerp(pts[i + 1], u), d: pts[i + 1].clone().sub(pts[i]).normalize(), r: lerp(r, rEnd, k) }
		}
		if (level >= 2) {
			const step = level === 2 ? 1.7 : 1.05
			for (let s = len * (level === 2 ? 0.5 : 0.25); s <= len; s += step) {
				const q = at(Math.min(1, s / len)); sprig(q.p, q.d, level === 4 ? 1.9 : 2.2)
				if (level >= 3 && rnd() < 0.45) sprig(q.p.clone().add(V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(0.9)), q.d, 1.8)
			}
			const tip = at(1); sprig(tip.p, tip.d, 2.3)
		}
		if (level >= 4) return
		const kids = level === 0 ? 4 : level === 1 ? 4 : 3; const az0 = rnd() * Math.PI * 2
		for (let c = 0; c < kids; c++) {
			const k = level === 0 ? 0.92 + 0.08 * rnd() : 0.3 + (0.7 * (c + 0.5 + (rnd() - 0.5) * 0.6)) / kids
			const q = at(clamp(k, 0, 1)); let cd: THREE.Vector3
			if (level === 0) {
				const az = az0 + (c / kids) * Math.PI * 2 + (rnd() - 0.5) * 0.7; const el = (46 + rnd() * 22) * (Math.PI / 180)
				cd = V3(Math.sin(el) * Math.cos(az), Math.cos(el), Math.sin(el) * Math.sin(az))
			} else {
				const perp = V3().crossVectors(q.d, V3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5)).normalize()
				const ang = (28 + rnd() * 26) * (Math.PI / 180); cd = q.d.clone().applyAxisAngle(perp, ang)
				cd.y += 0.15; cd.normalize()
			}
			const cl = level === 0 ? 7.6 + rnd() * 2 : len * (0.56 + 0.16 * rnd())
			const cr = level === 0 ? r * 0.56 : q.r * 0.66; grow(q.p, cd, cl, cr, level + 1)
		}
	}
	grow(V3(0, -0.3, 0), V3(0.04, 1, 0.02).normalize(), 3.9, 0.6, 0)
	const g = new THREE.BufferGeometry(); g.setAttribute("position", f32(P, 3)); g.setAttribute("normal", f32(N, 3))
	g.setAttribute("uv", f32(U, 2)); g.setIndex(I)
	return { bark: g, leaves: new Float32Array(leaves), nLeaves: leaves.length / 12, trunk }
}
function leafCard() {
	// Two crossed cards, so a sprig reads as a clump from any side.
	const g = new THREE.InstancedBufferGeometry()
	const p = [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0, 0, -0.5, -0.5, 0, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5]
	const n = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
	const u = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]; g.setAttribute("position", f32(p, 3))
	g.setAttribute("normal", f32(n, 3))
	g.setAttribute("uv", f32(u, 2)); g.setIndex([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7])
	return g
}

// ── vehicles ──
// Modelled in metres, front at +z, wheels on y = 0. Part ids pick the
// finish in VAN_FRAG: 0 van body, 1 tyre, 2 chrome, 3 headlamp, 4 dark
// metal, 5 tail lamp, 6 paint, 7 second paint, 8 glass, 9 seat.
function roundBox(w: number, h: number, l: number, R: number, shape?: (v: THREE.Vector3) => void) {
	const g = new THREE.BoxGeometry(w, h, l, Math.ceil(w * 13), Math.ceil(h * 13), Math.ceil(l * 10))
	const pos = g.attributes.position, nor = g.attributes.normal, e = [w / 2 - R, h / 2 - R, l / 2 - R]
	const v = V3(), inner = V3(), off = V3()
	for (let i = 0; i < pos.count; i++) {
		v.fromBufferAttribute(pos, i)
		inner.set(clamp(v.x, -e[0], e[0]), clamp(v.y, -e[1], e[1]), clamp(v.z, -e[2], e[2])); off.copy(v).sub(inner)
		if (off.lengthSq() < 1e-9) off.fromBufferAttribute(nor, i)
		off.normalize(); v.copy(inner).addScaledVector(off, R); shape?.(v)
		pos.setXYZ(i, v.x, v.y, v.z); nor.setXYZ(i, off.x, off.y, off.z)
	}
	return g
}
const partAdder = (parts: Part[]) => (g: THREE.BufferGeometry, part: number, x = 0, y = 0, z = 0) => {
	g.translate(x, y, z); parts.push({ g, part })
}
function wheels(add: ReturnType<typeof partAdder>, r: number, w: number, xs: number[], zs: number[]) {
	for (const x of xs) for (const z of zs) {
		const t = new THREE.CylinderGeometry(r, r, w, 22); t.rotateZ(Math.PI / 2); add(t, 1, x, r, z)
		const hc = new THREE.CylinderGeometry(r * 0.5, r * 0.5, w + 0.02, 16); hc.rotateZ(Math.PI / 2); add(hc, 2, x, r, z)
	}
}
// A retro camper: rounded two-tone body, hubcaps, bumpers, round lamps, roof rack.
function buildVan() {
	const parts: Part[] = [], add = partAdder(parts)
	add(roundBox(1.74, 1.56, 4.3, 0.26, (v) => {
		v.y += 1.2; v.x *= 1 - 0.07 * sstep(1.3, 1.98, v.y)
		if (v.z > 0) v.z -= 0.12 * sstep(1.15, 1.98, v.y)
		v.y = Math.max(v.y, 0.42)
	}), 0)
	wheels(add, 0.36, 0.24, [-0.8, 0.8], [-1.25, 1.25])
	for (const sz of [-1, 1]) add(new THREE.BoxGeometry(1.86, 0.13, 0.14), 2, 0, 0.6, sz * 2.19)
	for (const sx of [-1, 1]) {
		const l = new THREE.CylinderGeometry(0.105, 0.105, 0.06, 18); l.rotateX(Math.PI / 2)
		add(l, 3, sx * 0.58, 0.88, 2.14); add(new THREE.BoxGeometry(0.08, 0.2, 0.04), 5, sx * 0.74, 0.86, -2.16)
		add(new THREE.BoxGeometry(0.05, 0.05, 3.2), 4, sx * 0.66, 2.06, -0.2)
	}
	for (const z of [-1.6, -0.6, 0.4, 1.2]) add(new THREE.BoxGeometry(1.36, 0.04, 0.05), 4, 0, 2.06, z)
	for (const sx of [-1, 1]) for (const z of [-1.5, 1.1]) add(new THREE.BoxGeometry(0.04, 0.1, 0.04), 4, sx * 0.66, 2.0, z)
	return mergeParts(parts, false)
}
// A small two-tone hatchback: sloped bonnet, glass cabin under a painted roof.
function buildCar() {
	const parts: Part[] = [], add = partAdder(parts)
	add(roundBox(1.74, 0.6, 4.1, 0.17, (v) => {
		v.y += 0.64
		if (v.z > 1.2) v.y -= 0.13 * sstep(1.2, 2.05, v.z) * sstep(0.6, 0.94, v.y)
	}), 6)
	add(roundBox(1.58, 0.56, 2.3, 0.14, (v) => {
		const t = sstep(-0.28, 0.28, v.y); v.x *= 1 - 0.1 * t; v.z += v.z > 0 ? -0.6 * t : 0.4 * t; v.y += 1.2; v.z -= 0.2
	}), 8)
	add(roundBox(1.4, 0.07, 1.25, 0.03), 7, 0, 1.48, -0.3); add(new THREE.BoxGeometry(1.6, 0.5, 0.09), 7, 0, 1.2, -0.12)
	wheels(add, 0.32, 0.22, [-0.8, 0.8], [-1.32, 1.32])
	for (const sz of [-1, 1]) add(new THREE.BoxGeometry(1.8, 0.12, 0.12), 2, 0, 0.42, sz * 2.06)
	for (const sx of [-1, 1]) {
		add(new THREE.BoxGeometry(0.32, 0.11, 0.04), 3, sx * 0.58, 0.76, 2.03)
		add(new THREE.BoxGeometry(0.3, 0.1, 0.04), 5, sx * 0.62, 0.8, -2.06)
	}
	return mergeParts(parts, false)
}
// A classic motorbike on its side stand: painted tank and fenders, dark
// frame, chrome fork, engine and exhaust, one round headlamp.
function buildBike() {
	const parts: Part[] = [], add = partAdder(parts)
	const rod = (a: number[], b: number[], r: number, part: number) => {
		const A = V3(a[0], a[1], a[2]), d = V3(b[0], b[1], b[2]).sub(A), g = new THREE.CylinderGeometry(r, r, d.length(), 10)
		g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V3(0, 1, 0), d.clone().normalize()))
		add(g, part, A.x + d.x / 2, A.y + d.y / 2, A.z + d.z / 2)
	}
	wheels(add, 0.32, 0.11, [0], [-0.7, 0.72])
	for (const x of [-0.06, 0.06]) rod([x, 0.32, 0.72], [x, 1.0, 0.5], 0.025, 2)
	rod([0, 0.32, -0.7], [0, 0.84, -0.22], 0.03, 7); rod([0, 0.42, 0.05], [0, 0.96, 0.46], 0.035, 7); rod([0, 0.42, 0.05], [0, 0.32, -0.7], 0.03, 7)
	add(new THREE.BoxGeometry(0.26, 0.26, 0.38), 4, 0, 0.47, 0.02); add(roundBox(0.34, 0.24, 0.56, 0.1), 6, 0, 0.9, 0.18)
	add(roundBox(0.28, 0.1, 0.62, 0.045), 9, 0, 0.87, -0.37); add(roundBox(0.18, 0.06, 0.5, 0.028), 6, 0, 0.68, -0.72)
	add(roundBox(0.16, 0.05, 0.4, 0.024), 6, 0, 0.68, 0.74); rod([-0.36, 1.04, 0.5], [0.36, 1.04, 0.5], 0.018, 4)
	const l = new THREE.CylinderGeometry(0.085, 0.085, 0.08, 18); l.rotateX(Math.PI / 2); add(l, 3, 0, 0.92, 0.62)
	add(new THREE.BoxGeometry(0.12, 0.06, 0.04), 5, 0, 0.74, -0.98); rod([0.16, 0.36, 0.1], [0.16, 0.44, -0.78], 0.04, 2)
	const g = mergeParts(parts, false); g.rotateZ(0.12)
	return g
}

// ── birds and the squirrel ──
function birdGeo() {
	const P: number[] = [], N: number[] = [], C: number[] = [], W: number[] = [], I: number[] = []
	const push = (vs: { p: number[]; n: number[]; w?: number }[], tris: number[][], col: number[], wing: boolean) => {
		const b = P.length / 3
		vs.forEach((m) => {
			P.push(...m.p); N.push(...m.n); C.push(...col); W.push(wing ? m.w || 0 : 0)
		})
		tris.forEach((m) => I.push(b + m[0], b + m[1], b + m[2]))
	}
	const ring = (z: number, r: number) =>
		Array.from({ length: 6 }, (_, k) => {
			const m = (k / 6) * Math.PI * 2
			return { p: [Math.cos(m) * r, Math.sin(m) * r * 0.85, z], n: [Math.cos(m), Math.sin(m), 0] }
		})
	const prof = [[-0.16, 0.012], [-0.08, 0.04], [0.02, 0.05], [0.1, 0.038], [0.15, 0.028], [0.19, 0.012]]
	const vs: { p: number[]; n: number[] }[] = [], ts: number[][] = []; prof.forEach(([z, r]) => vs.push(...ring(z, r)))
	for (let d = 0; d < prof.length - 1; d++)
		for (let k = 0; k < 6; k++) {
			const f = d * 6 + k, g = d * 6 + ((k + 1) % 6); ts.push([f, f + 6, g], [g, f + 6, g + 6])
		}
	push(vs, ts, [0.05, 0.05, 0.055], false)
	push([{ p: [0, 0.005, -0.15], n: [0, 1, 0] }, { p: [-0.05, 0, -0.27], n: [0, 1, 0] }, { p: [0, 0.003, -0.22], n: [0, 1, 0] }, { p: [0.05, 0, -0.27], n: [0, 1, 0] }], [[0, 1, 2], [0, 2, 3]], [0.04, 0.04, 0.045], false)
	for (const d of [-1, 1])
		push(
			[
				{ p: [d * 0.03, 0.01, 0.06], n: [0, 1, 0], w: 0.1 },
				{ p: [d * 0.03, 0.01, -0.06], n: [0, 1, 0], w: 0.1 },
				{ p: [d * 0.2, 0, 0.03], n: [0, 1, 0], w: 0.55 },
				{ p: [d * 0.2, 0, -0.08], n: [0, 1, 0], w: 0.55 },
				{ p: [d * 0.38, -0.01, -0.06], n: [0, 1, 0], w: 1 },
			],
			[[0, 2, 1], [1, 2, 3], [2, 4, 3]],
			[0.055, 0.055, 0.06],
			true
		)
	const g = new THREE.InstancedBufferGeometry(); g.setAttribute("position", f32(P, 3))
	g.setAttribute("normal", f32(N, 3)); g.setAttribute("color", f32(C, 3)); g.setAttribute("aWing", f32(W, 1)); g.setIndex(I)
	return g
}
function squirrelGeo() {
	const parts: Part[] = []
	const e = (sx: number, sy: number, sz: number, x: number, y: number, z: number, col: RGB, seg = 10) => {
		const g = new THREE.SphereGeometry(1, seg, Math.max(6, seg - 2)); g.scale(sx, sy, sz); g.translate(x, y, z)
		g.deleteAttribute("uv"); parts.push({ g, part: 0, color: col, wing: 0 })
	}
	const t: RGB = [0.3, 0.12, 0.05], i: RGB = [0.55, 0.45, 0.35], s: RGB = [0.08, 0.05, 0.03]
	e(0.045, 0.04, 0.09, 0, 0.04, 0, t); e(0.035, 0.032, 0.04, 0, 0.055, 0.095, t)
	e(0.012, 0.016, 0.01, -0.02, 0.085, 0.09, s, 6); e(0.012, 0.016, 0.01, 0.02, 0.085, 0.09, s, 6)
	e(0.03, 0.022, 0.06, 0, 0.025, 0.01, i)
	for (let o = 0; o < 7; o++) {
		const l = o / 6, c = -0.4 - l * 2.4, u = 0.11
		e(0.032 + 0.012 * Math.sin(l * 3), 0.03, 0.04, 0, 0.05 + Math.sin(-c) * u * 0.9 * l + 0.02, -0.09 - Math.cos(c) * u * l * 0.6 - 0.02, t, 8)
	}
	for (const [o, l] of [[-0.035, 0.05], [0.035, 0.05], [-0.04, -0.05], [0.04, -0.05]]) e(0.012, 0.012, 0.03, o, 0.008, l, t, 6)
	return mergeParts(parts, true) as THREE.InstancedBufferGeometry
}
function catmull(n: THREE.Vector3[], e: number) {
	const t = n.length - 1, i = clamp(e, 0, 0.99999) * t, s = Math.floor(i), r = i - s
	const a = (h: number) => n[clamp(h, 0, t)]; const o = a(s - 1), l = a(s), c = a(s + 1), u = a(s + 2)
	const d = (h: number, f: number, g: number, m: number) => 0.5 * (2 * f + (-h + g) * r + (2 * h - 5 * f + 4 * g - m) * r * r + (-h + 3 * f - 3 * g + m) * r * r * r)
	return V3(d(o.x, l.x, c.x, u.x), d(o.y, l.y, c.y, u.y), d(o.z, l.z, c.z, u.z))
}
function catmull2(n: [number, number][], e: number): [number, number] {
	const t = Math.min(n.length - 2, Math.max(0, Math.floor(e))), i = clamp(e - t, 0, 1)
	const s = (a: number) => n[clamp(a, 0, n.length - 1)]
	const r = (a: number, o: number, l: number, c: number, u: number) => 0.5 * (2 * o + (-a + l) * u + (2 * a - 5 * o + 4 * l - c) * u * u + (-a + 3 * o - 3 * l + c) * u * u * u)
	return [r(s(t - 1)[0], s(t)[0], s(t + 1)[0], s(t + 2)[0], i), r(s(t - 1)[1], s(t)[1], s(t + 1)[1], s(t + 2)[1], i)]
}
const luma = (n: RGB | number[]) => n[0] * 0.2126 + n[1] * 0.7152 + n[2] * 0.0722
const dirOf = (az: number, el: number) => {
	const t = (az * Math.PI) / 180, i = (el * Math.PI) / 180
	return V3(Math.sin(t) * Math.cos(i), Math.sin(i), -Math.cos(t) * Math.cos(i))
}

// ── settings resolved from props ──
interface Resolved {
	meadow: MeadowParts; season: SeasonName; weather: WeatherOpts; grass: GrassOpts; sc: SeasonColors; tree: TreeOpts
	vehicle: VehicleOpts; sky: SkyOpts; placement: Placement; intro: boolean; act: InteractionOpts; day: DayOpts; wind: WindOpts
	adv: AdvancedOpts
	onModeChange?: (mode: number, target: number) => void
}

// The whole scene: built once per WebGL context, driven by the live props.
function runMeadow(host: HTMLDivElement, vn: HTMLCanvasElement, propsRef: { current: Resolved }, restore: () => void): (() => void) | undefined {
	let at: THREE.WebGLRenderer
	try {
		at = new THREE.WebGLRenderer({ canvas: vn, antialias: false, alpha: false, stencil: false, powerPreference: "low-power", preserveDrawingBuffer: false })
	} catch {
		return
	}
	if (!at.capabilities.isWebGL2) {
		at.dispose()
		return
	}
	at.autoClear = false; at.outputColorSpace = THREE.LinearSRGBColorSpace
	const canFloat = at.extensions.has("EXT_color_buffer_float") || at.extensions.has("EXT_color_buffer_half_float")
	const coarse = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches
	const reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
	const p0 = propsRef.current
	// Quality: grass share and pixel ratio, stepped down if frames run long.
	const zt = { dpr: 1, msaa: 4, grass: 1 }; const detail0 = clamp(p0.adv.detail, 30, 100) / 100
	zt.grass = (coarse ? 0.6 : 1) * detail0

	const Q = {
		treeX: p0.tree.x, treeZ: p0.tree.z, treeScale: p0.tree.size / 100, treeTurn: p0.tree.turn,
		vanX: p0.vehicle.x, vanZ: p0.vehicle.z, vanScale: p0.vehicle.size / 100, vanTurn: p0.vehicle.turn,
		tree: p0.meadow.tree, van: p0.vehicle.show, vtype: p0.vehicle.type as VehicleKind,
	}

	const Xe = new THREE.PerspectiveCamera(47, 1, 0.04, 3000)
	const noiseTex = (() => {
		const n = 256, e = new Uint8Array(n * n * 4)
		const t = (s: number, r: number, a: number, o: number) => {
			const l = Math.floor(s), c = Math.floor(r), u = s - l, d = r - c, h = u * u * (3 - 2 * u), f = d * d * (3 - 2 * d)
			const g = (x: number, y: number) => hash2(((x % a) + a) % a + o * 977, ((y % a) + a) % a + o * 131)
			return lerp(lerp(g(l, c), g(l + 1, c), h), lerp(g(l, c + 1), g(l + 1, c + 1), h), f)
		}
		for (let s = 0; s < 4; s++)
			for (let r = 0; r < n; r++)
				for (let a = 0; a < n; a++) {
					let o = 0, l = 0.5, c = 0, u = 4
					for (let d = 0; d < 5; d++) {
						o += l * t((a / n) * u, (r / n) * u, u, s + d * 7); c += l; u *= 2; l *= 0.5
					}
					e[(r * n + a) * 4 + s] = Math.round((o / c) * 255)
				}
		const tx = new THREE.DataTexture(e, n, n, THREE.RGBAFormat); tx.wrapS = tx.wrapT = THREE.RepeatWrapping
		tx.minFilter = THREE.LinearMipmapLinearFilter; tx.magFilter = THREE.LinearFilter; tx.generateMipmaps = true
		tx.needsUpdate = true
		return tx
	})()
	const V4 = (x = 0, y = 0, z = 0, w = 0) => new THREE.Vector4(x, y, z, w)
	const q = {
		uTime: { value: 0 },
		uSunDir: { value: V3(0, 0.2, -1).normalize() },
		uSunCol: { value: V3(1, 1, 1) },
		uSH: { value: Array.from({ length: 9 }, () => V3()) },
		uSkyKA: { value: 0 },
		uSkyKB: { value: 0 },
		uSkyMix: { value: 0 },
		uSkyDimA: { value: 1 },
		uGainA: { value: 1 },
		uGainB: { value: 1 },
		uSunSize: { value: 3 },
		uMoonSize: { value: 1 },
		uStars: { value: 1 },
		uNoise: { value: noiseTex },
		uWindDir: { value: new THREE.Vector2(0.62, 0.78).normalize() },
		uWind: { value: 0 },
		uShadow: { value: null as THREE.Texture | null },
		uShadowMat: { value: new THREE.Matrix4() },
		uShadowStr: { value: 1 },
		uFog: { value: 0.004 },
		uFogTint: { value: V3(1, 1, 1) },
		uCloud: { value: 0 },
		uSim: { value: null as THREE.Texture | null },
		uSimRect: { value: V4(-22, -40, 44, 54) },
		uNight: { value: 0 },
		uPixAng: { value: 0.001 },
		uHeadCol: { value: V3(1, 0.87, 0.68) },
		uWinCol: { value: V3(1, 0.62, 0.32) },
		uHead: { value: V4() },
		uHead2: { value: V4() },
		uHeadDir2: { value: V3(-0.75, -0.1, 0.66) },
		uHeadDir: { value: V3(-0.75, -0.1, 0.66) },
		uVanGlow: { value: V4() },
		uVanPos: { value: V4(0, 0, 2.4, 0) },
		uSunGlow: { value: 1 },
		uRayAmt: { value: 0 },
		uSunUV: { value: V3(0.5, 0.5, 0) },
		uSunDisc: { value: V4(0, 0.1, -1, 0) },
		uMoonDisc: { value: V4(0, -1, 0, 0) },
		uNightFog: { value: V3(0.42, 0.58, 0.92) },
		uMet: { value: Array.from({ length: 4 }, () => V4(0, 0, 0, -99)) },
		uMetB: { value: Array.from({ length: 4 }, () => V4(30, 1, 10, 0)) },
		uField: { value: null as THREE.Texture | null },
		uFieldRect: { value: V4(-96, -106, 192, 122) },
		uWxMix: { value: 0 },
		uOver: { value: 0 },
		uOverGain: { value: V3(1, 1, 1) },
		uSeason: { value: V4(0, 1, 0, 0) },
		uSnow: { value: 0 },
		uWet: { value: 0 },
		uRain: { value: 0 },
		uSnowFall: { value: 0 },
		uFogLUT: { value: null as THREE.Texture | null },
		uSnowCol: { value: V3(0.9, 0.92, 0.95) },
		uTreeXZ: { value: new THREE.Vector2(15.5, -31) },
		uSkyAvg: { value: V3(0.3, 0.3, 0.3) },
		uHeight: { value: null as THREE.Texture | null },
		uHeightRect: { value: V4(-96, -106, 192, 122) },
		uGrow: { value: 1 },
		uYellow: { value: 0 },
		uFlowerA: { value: V3(0.9, 0.55, 0.02) },
		uFlowerB: { value: V3(0.93, 0.9, 0.84) },
		uFlowerC: { value: V3(0.33, 0.19, 0.76) },
		uGrassH: { value: 1 },
		uBlade: { value: V3() },
		uTip: { value: V3() },
		uDryC: { value: V3() },
		uDry: { value: 0.08 },
	}
	const disposables: { dispose: () => void }[] = [noiseTex]
	const keep = <T extends { dispose: () => void }>(o: T) => {
		disposables.push(o)
		return o
	}
	{
		const r = q.uHeightRect.value, W = 384, H = 244; const d = new Uint16Array(W * H)
		for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) d[y * W + x] = THREE.DataUtils.toHalfFloat(heightAt(r.x + ((x + 0.5) / W) * r.z, r.y + ((y + 0.5) / H) * r.w))
		const t = keep(new THREE.DataTexture(d, W, H, THREE.RedFormat, THREE.HalfFloatType))
		t.minFilter = t.magFilter = THREE.LinearFilter; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping
		t.needsUpdate = true; q.uHeight.value = t
	}
	type Uni = Record<string, THREE.IUniform>
	const Qt = (vs: string, fs: string, extra: Uni = {}, opts: THREE.ShaderMaterialParameters = {}) =>
		keep(new THREE.ShaderMaterial({ uniforms: Object.assign({}, q, extra), vertexShader: vs, fragmentShader: fs, ...opts }))

	let Or = 1, cs = 1
	const rtHalf = { type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: false, ...LINEAR }
	let Ws: THREE.WebGLRenderTarget | null = null; const En: THREE.WebGLRenderTarget[] = []
	const Zo = new THREE.WebGLRenderTarget(4, 4, rtHalf)
	const buildTargets = () => {
		Ws?.dispose()
		Ws = new THREE.WebGLRenderTarget(Or, cs, { type: THREE.HalfFloatType, depthBuffer: true, samples: zt.msaa, ...LINEAR })
		En.forEach((t) => t.dispose()); Zo.setSize(Math.max(1, Or >> 2), Math.max(1, cs >> 2)); En.length = 0
		let n = Or, e = cs
		for (let t = 0; t < 6; t++) {
			n = Math.max(1, n >> 1); e = Math.max(1, e >> 1); En.push(new THREE.WebGLRenderTarget(n, e, rtHalf))
		}
	}
	const screenCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); const triGeo = keep(new THREE.BufferGeometry())
	triGeo.setAttribute("position", f32([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3))
	triGeo.setAttribute("uv", f32([0, 0, 2, 0, 0, 2], 2))
	const fsMesh = new THREE.Mesh(triGeo); fsMesh.frustumCulled = false; const fsScene = new THREE.Scene()
	fsScene.add(fsMesh)
	const hi = (m: THREE.Material, t: THREE.WebGLRenderTarget | null) => {
		fsMesh.material = m; at.setRenderTarget(t); at.render(fsScene, screenCam)
	}

	// ── pointer sim ──
	const simW = 448, simH = 548
	const Xs = [0, 1].map(() => keep(new THREE.WebGLRenderTarget(simW, simH, { type: canFloat ? THREE.HalfFloatType : THREE.UnsignedByteType, depthBuffer: false, ...LINEAR })))
	let Fr = 0
	const Cc = keep(
		new THREE.ShaderMaterial({
			uniforms: {
				uPrev: { value: null as THREE.Texture | null },
				uRect: q.uSimRect,
				uDt: { value: 1 / 60 },
				uTime: q.uTime,
				uB0: { value: new THREE.Vector2() },
				uB1: { value: new THREE.Vector2() },
				uBrushR: { value: 0.62 },
				uBrushOn: { value: 0 },
				uMoveDir: { value: new THREE.Vector2(1, 0) },
				uSpeed: { value: 0 },
				uRip: { value: Array.from({ length: 6 }, () => V4(0, 0, -99, 0)) },
				uSpring: { value: 1 },
			},
			vertexShader: FULL_VERT,
			fragmentShader: "#define RS(a,b,x) (1.0-smoothstep(b,a,x))\n" + SIM_FRAG,
		})
	)
	const clearMat = keep(new THREE.ShaderMaterial({ vertexShader: FULL_VERT, fragmentShader: "void main(){ gl_FragColor = vec4(0.0); }" }))
	const sd = keep(new THREE.WebGLRenderTarget(256, 192, { depthBuffer: false, ...LINEAR }))
	q.uField.value = sd.texture
	const fieldMat = Qt(FULL_VERT, COMMON + `varying vec2 vUv; void main(){ vec2 xz = uFieldRect.xy + vUv*uFieldRect.zw; float n = textureLod(uNoise, xz*0.0019 - uWindDir*uTime*0.0021 + vec2(0.31,0.77), 0.0).b; gl_FragColor = vec4(gustAt(xz), n, 0.0, 1.0); }`)
	const Hc = keep(new THREE.WebGLRenderTarget(256, 1, { type: THREE.HalfFloatType, depthBuffer: false, ...LINEAR, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping }))
	q.uFogLUT.value = Hc.texture
	const fogMat = Qt(
		FULL_VERT,
		COMMON + `varying vec2 vUv; void main(){ float az = radians(vUv.x*200.0 - 100.0); vec3 h = normalize(vec3(sin(az), 0.03, -cos(az))); vec3 f = vec3(0.0); if (uOver < 0.999) { f = skyMix(h, 1.0)*uFogTint; f = mix(f, uNightFog, uNight*0.85); } if (uOver > 0.001) f = mix(f, mix(skyK(4.0, h, 1.0), skyK(5.0, h, 1.0), uWxMix)*uOverGain, uOver); gl_FragColor = vec4(f, 1.0); }`,
		{},
		{ depthTest: false, depthWrite: false }
	)
	const shadowSize = 2048
	const Hr = keep(new THREE.WebGLRenderTarget(shadowSize, shadowSize, { depthBuffer: true }))
	Hr.depthTexture = new THREE.DepthTexture(shadowSize, shadowSize); Hr.depthTexture.type = THREE.UnsignedIntType
	q.uShadow.value = Hr.depthTexture; const cn = new THREE.OrthographicCamera(-12, 12, 12, -12, 1, 260)
	const qo = new THREE.Scene(); const Bt = new THREE.Scene()
	const ad = Qt(
		"varying vec2 vNdc; void main(){ vNdc = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",
		COMMON + SKY_FRAG,
		{ uInvVP: { value: new THREE.Matrix4() } },
		{ depthWrite: false, depthTest: false }
	)
	const Gc = new THREE.Mesh(triGeo, ad); Gc.frustumCulled = false; Gc.renderOrder = -10; Bt.add(Gc)

	// ── ground ──
	{
		const rings = 170, segs = 300
		const t = new Float32Array((rings + 1) * (segs + 1) * 3), i = new Float32Array(t.length)
		let s = 0
		for (let o = 0; o <= rings; o++) {
			const l = o === 0 ? 0 : 0.35 * Math.exp(o * (Math.log(9142.857142857143) / rings))
			for (let c = 0; c <= segs; c++) {
				const u = (c / segs) * Math.PI * 2, d = HOME.x + Math.sin(u) * l, h = HOME.z - Math.cos(u) * l
				const f = heightAt(d, h), g = Math.max(0.05, l * 0.01)
				const gx = heightAt(d - g, h) - heightAt(d + g, h), gz = heightAt(d, h - g) - heightAt(d, h + g)
				const p = Math.hypot(gx, 2 * g, gz); t[s] = d; t[s + 1] = f; t[s + 2] = h; i[s] = gx / p
				i[s + 1] = (2 * g) / p; i[s + 2] = gz / p; s += 3
			}
		}
		const r: number[] = []
		for (let o = 0; o < rings; o++)
			for (let l = 0; l < segs; l++) {
				const c = o * (segs + 1) + l, u = c + segs + 1; r.push(c, c + 1, u, c + 1, u + 1, u)
			}
		const a = keep(new THREE.BufferGeometry()); a.setAttribute("position", new THREE.BufferAttribute(t, 3))
		a.setAttribute("normal", new THREE.BufferAttribute(i, 3)); a.setIndex(r)
		const m = new THREE.Mesh(a, Qt("varying vec3 vWP; varying vec3 vN; void main(){ vWP = position; vN = normal; gl_Position = projectionMatrix*viewMatrix*vec4(position,1.0); }", COMMON + GROUND_FRAG))
		m.frustumCulled = false; Bt.add(m)
	}

	// ── grass ──
	type GMesh = THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>
	const grassMat = (stem: boolean) =>
		Qt(COMMON + BLADE + GRASS_VERT, COMMON + GRASS_FRAG, { uFadeNear: { value: 64 }, uFadeFar: { value: 92 }, uPix: { value: 0.001 }, uStem: { value: stem ? 1 : 0 } }, { side: THREE.DoubleSide })
	interface Bin { A: number[]; B: number[]; C: number[] }
	const nt = (() => {
		const n = prng(1234), e = 470, t = (64 * Math.PI) / 180, iMax = 92, s0 = 7
		const r: [number, number][] = []; let a = 0; const o = 3000
		for (let P = 0; P <= o; P++) {
			const S = 0.6 + (P / o) * (iMax - 0.6), R = S < s0 ? 1 : Math.pow(s0 / S, 2.25); a += R * S; r.push([S, a])
		}
		const l = a * ((iMax - 0.6) / o) * 2 * t; const c = Math.floor(l * e * zt.grass)
		const u = (P: number) => {
			const S = P * a; let R = 0, z = r.length - 1
			while (R < z) {
				const U = (R + z) >> 1
				if (r[U][1] < S) R = U + 1
				else z = U
			}
			return r[R][0]
		}
		const bin = (): Bin => ({ A: [], B: [], C: [] }); const d = bin(), h = bin(), f = bin(), _ = bin()
		const cell = (P: number, S: number) => {
			const z = Math.floor(P / 0.85), U = Math.floor(S / 0.85); let L = 1e9, H = 0, G = 0, ie = 0
			for (let oe = -1; oe <= 1; oe++)
				for (let ue = -1; ue <= 1; ue++) {
					const Z = z + oe, J = U + ue; const ve = (Z + hash2(Z, J)) * 0.85, xe = (J + hash2(J + 17, Z - 5)) * 0.85
					const ce = (ve - P) ** 2 + (xe - S) ** 2
					if (ce < L) {
						L = ce; H = ve; G = xe; ie = hash2(Z * 3 + 1, J * 7 + 2)
					}
				}
			return { x: H, z: G, id: ie, d: Math.sqrt(L) }
		}
		const blade = (P: Bin, S: number, R: number, U: number) => {
			const H = n(), G = cell(S, R), ie = fbm(S * 0.06 + 3, R * 0.06 - 1, 3)
			const oe = 0.55 + 0.9 * sstep(0.25, 0.75, ie); let ue = 0; const Z = n()
			if (Z < 0.075 + 0.08 * sstep(0.5, 0.8, ie)) ue = 1
			else if (Z < 0.25) ue = 2
			let J: number, ve: number; const xe = 0.75 + 0.5 * G.id
			if (ue === 1) {
				J = (0.42 + 0.45 * n()) * oe; ve = 0.0045 + 0.002 * n()
			} else if (ue === 2) {
				J = 0.11 + 0.15 * n(); ve = 0.0035 + 0.0025 * n()
			} else {
				J = (0.26 + 0.36 * n()) * xe * oe; ve = 0.0065 + 0.006 * n()
			}
			J *= sstep(0.3, 1.6, Math.hypot(S - HOME.x, R - HOME.z)); const O = G.id * 6.283 + (n() - 0.5) * 1.6
			const we = Math.atan2(R - G.z, S - G.x) + (n() - 0.5) * 1.2
			const Me = (0.08 + 0.32 * n() * n() + Math.min(G.d, 0.4) * 0.35) * (ue === 1 ? 1.5 : 1) * (J > 0.45 ? 1.25 : 1)
			const _e = 0.78 + 0.42 * n() * (0.6 + 0.4 * G.id); P.A.push(S, heightAt(S, R) - 0.02, R, H)
			P.B.push(J, ve * U, O, Me); const et = hash2(Math.floor(S * 0.3), Math.floor(R * 0.3)) * 0.5 + 0.5 * G.id
			const Ue = fbm(S * 0.021 * 4 + 0.13 * 4, R * 0.021 * 4 + 0.13 * 4, 3)
			P.C.push(we, _e, ue, Math.floor(et * 99) + Math.min(0.999, Ue))
		}
		for (let P = 0; P < c; P++) {
			const S = u(n()), R = (n() * 2 - 1) * t
			blade(S < 7.5 ? d : S < 24 ? h : f, HOME.x + Math.sin(R) * S, HOME.z - Math.cos(R) * S, S < s0 ? 1 : Math.pow(S / s0, 1.15))
		}
		const T = bin(); const E = Math.floor(16e3 * zt.grass)
		for (let P = 0; P < E; P++) {
			const S = 9 * Math.sqrt(n()), R = n() * Math.PI * 2
			blade(T, KNOLL.x + Math.cos(R) * S, KNOLL.z + Math.sin(R) * S, 2.6)
		}
		const I = Math.floor(9e3 * zt.grass)
		for (let P = 0; P < I; P++) {
			const S = 2 + Math.pow(n(), 1.4) * 40, R = (n() * 2 - 1) * t
			const z = HOME.x + Math.sin(R) * S, U = HOME.z - Math.cos(R) * S, L = fbm(z * 0.06 + 3, U * 0.06 - 1, 3)
			if (n() > 0.25 + 0.75 * sstep(0.3, 0.7, L)) continue
			const H = 0.55 + 0.45 * n(); _.A.push(z, heightAt(z, U) - 0.02, U, n())
			_.B.push(H, 0.0018 * (S < 12 ? 1 : S / 12), n() * 6.283, 0.1 + 0.3 * n())
			_.C.push(n() * 6.283, 0.8 + 0.4 * n(), 0, 50.5)
		}
		const shuffle = (P: Bin) => {
			const S = P.A.length / 4, R = new Uint32Array(S)
			for (let U = 0; U < S; U++) R[U] = U
			for (let U = S - 1; U > 0; U--) {
				const L = Math.floor(n() * (U + 1)), H = R[U]; R[U] = R[L]; R[L] = H
			}
			const z = { A: new Float32Array(S * 4), B: new Float32Array(S * 4), C: new Float32Array(S * 4), n: S }
			for (let U = 0; U < S; U++)
				for (let L = 0; L < 4; L++) {
					z.A[U * 4 + L] = P.A[R[U] * 4 + L]; z.B[U * 4 + L] = P.B[R[U] * 4 + L]; z.C[U * 4 + L] = P.C[R[U] * 4 + L]
				}
			return z
		}
		const mk = (P: Bin, S: number, R: boolean): GMesh => {
			const z = shuffle(P), U = keep(bladeStrip(S, R)); U.setAttribute("iA", inst(z.A, 4))
			U.setAttribute("iB", inst(z.B, 4)); U.setAttribute("iC", inst(z.C, 4)); U.instanceCount = z.n
			U.userData.full = z.n; const L = new THREE.Mesh(U, grassMat(R)); L.frustumCulled = false
			return L
		}
		const x = { near: mk(d, 6, false), mid: mk(h, 4, false), far: mk(f, 2, false), stems: mk(_, 10, true), patch: mk(T, 4, false), patchRel: new Float32Array(0) }
		const b = x.patch.geometry.attributes.iA.array as Float32Array; x.patchRel = new Float32Array((b.length / 4) * 2)
		for (let P = 0, S = 0; P < b.length; P += 4, S += 2) {
			x.patchRel[S] = b[P] - KNOLL.x; x.patchRel[S + 1] = b[P + 2] - KNOLL.z
		}
		return x
	})()
	const grassMeshes = [nt.near, nt.mid, nt.far, nt.stems, nt.patch]; Bt.add(nt.far, nt.mid, nt.near, nt.stems, nt.patch)
	const placePatch = () => {
		const n = nt.patch.geometry.attributes.iA as THREE.InstancedBufferAttribute, e = n.array as Float32Array, t = nt.patchRel
		for (let i = 0, s = 0; i < e.length; i += 4, s += 2) {
			const r = Q.treeX + t[s], a = Q.treeZ + t[s + 1]; e[i] = r; e[i + 1] = heightAt(r, a) - 0.02; e[i + 2] = a
		}
		n.needsUpdate = true; nt.patch.visible = !!Q.tree
	}

	// ── dandelions ──
	interface Dand { x: number; z: number; y: number; h: number; r: number; lean: number; la: number; blown: number }
	const pi: Dand[] = []
	const On = (() => {
		const n = prng(99), clumps: { x: number; z: number; n: number }[] = []
		for (let f = 0; f < 28; f++) {
			const g = 3.2 + Math.pow(n(), 1.2) * 24, a = (n() * 2 - 1) * 0.85
			clumps.push({ x: HOME.x + Math.sin(a) * g, z: HOME.z - Math.cos(a) * g, n: 4 + Math.floor(n() * 10) })
		}
		for (const f of clumps)
			for (let g = 0; g < f.n; g++) {
				const x = f.x + (n() - 0.5) * 3.2, z = f.z + (n() - 0.5) * 3.2
				pi.push({ x, z, y: heightAt(x, z) - 0.02, h: 0.42 + 0.26 * n(), r: n(), lean: 0.05 + 0.15 * n(), la: n() * 6.283, blown: -1e9 })
			}
		const t = pi.length, i = new Float32Array(t * 4), s = new Float32Array(t * 4), r = new Float32Array(t * 4)
		pi.forEach((f, g) => {
			i.set([f.x, f.y, f.z, f.r], g * 4); s.set([f.h, 0.0052, f.r * 6.28, f.lean], g * 4)
			r.set([f.la, 1, 3, 50.5], g * 4)
		})
		const a = keep(bladeStrip(9, true)); a.setAttribute("iA", inst(i, 4)); a.setAttribute("iB", inst(s, 4))
		a.setAttribute("iC", inst(r, 4)); a.instanceCount = t
		const stems = new THREE.Mesh(a, grassMat(true)); stems.frustumCulled = false; const l = keep(quadGeo())
		l.setAttribute("iA", inst(i, 4)); l.setAttribute("iB", inst(s, 4)); l.setAttribute("iC", inst(r, 4))
		const u = inst(new Float32Array(t).fill(-1e9), 1)
		u.setUsage(THREE.DynamicDrawUsage); l.setAttribute("iBlown", u); l.instanceCount = t
		const puffs = new THREE.Mesh(
			l,
			Qt(COMMON + BLADE + PUFF_VERT, COMMON + PUFF_FRAG, { uPuff: { value: keep(canvasTex(256, drawPuff)) }, uBloom: { value: keep(canvasTex(256, drawBloom)) } }, PREMUL)
		)
		puffs.frustumCulled = false; puffs.renderOrder = 5
		return { stems, puffs, blownAttr: u, count: t }
	})()
	grassMeshes.push(On.stems as GMesh); Bt.add(On.stems, On.puffs)

	// ── seeds blown from dandelions ──
	const ls = 900
	const He = { n: 0, p: new Float32Array(ls * 3), v: new Float32Array(ls * 3), age: new Float32Array(ls), life: new Float32Array(ls), spin: new Float32Array(ls) }
	const Js = keep(quadGeo()); const zr = inst(new Float32Array(ls * 4), 4)
	zr.setUsage(THREE.DynamicDrawUsage); Js.setAttribute("iP", zr); Js.instanceCount = 0
	const Zc = new THREE.Mesh(Js, Qt(COMMON + SEED_VERT, COMMON + SEED_FRAG, { uSeed: { value: keep(canvasTex(64, drawSeed)) } }, PREMUL))
	Zc.frustumCulled = false; Zc.renderOrder = 6; Bt.add(Zc)
	const spawnSeeds = (x: number, y: number, z: number, count: number) => {
		for (let s = 0; s < count && He.n < ls; s++) {
			const r = He.n++, a = Math.random() * Math.PI * 2, o = Math.random() * 2 - 1, l = Math.sqrt(1 - o * o)
			He.p[r * 3] = x + Math.cos(a) * l * 0.02; He.p[r * 3 + 1] = y + o * 0.02
			He.p[r * 3 + 2] = z + Math.sin(a) * l * 0.02; He.v[r * 3] = Math.cos(a) * l * 0.5
			He.v[r * 3 + 1] = 0.35 + Math.abs(o) * 0.4; He.v[r * 3 + 2] = Math.sin(a) * l * 0.5; He.age[r] = 0
			He.life[r] = 9 + Math.random() * 9; He.spin[r] = Math.random()
		}
	}
	const stepSeeds = (n: number, e: number) => {
		const t = q.uWindDir.value, i = q.uWind.value; let s = He.n
		for (let a = 0; a < s; a++) {
			He.age[a] += n
			if (He.age[a] > He.life[a]) {
				s--
				He.p.copyWithin(a * 3, s * 3, s * 3 + 3); He.v.copyWithin(a * 3, s * 3, s * 3 + 3)
				He.age[a] = He.age[s]; He.life[a] = He.life[s]; He.spin[a] = He.spin[s]
				a--
				continue
			}
			const o = He.p[a * 3], c = He.p[a * 3 + 2]; const u = fbm(o * 0.05 - t.x * e * 0.05, c * 0.05 - t.y * e * 0.05, 2)
			const d = t.x * i * (0.9 + 2.2 * u) + Math.sin(e * 0.7 + a) * 0.25
			const h = t.y * i * (0.9 + 2.2 * u) + Math.cos(e * 0.6 + a * 1.3) * 0.25
			const f = 0.18 + Math.sin(e * 0.9 + a * 0.7) * 0.22 - 0.08; const g = 1 - Math.exp(-n * 1.4)
			He.v[a * 3] += (d - He.v[a * 3]) * g; He.v[a * 3 + 1] += (f - He.v[a * 3 + 1]) * g
			He.v[a * 3 + 2] += (h - He.v[a * 3 + 2]) * g; He.p[a * 3] += He.v[a * 3] * n
			He.p[a * 3 + 1] = Math.max(He.p[a * 3 + 1] + He.v[a * 3 + 1] * n, heightAt(o, c) + 0.3)
			He.p[a * 3 + 2] += He.v[a * 3 + 2] * n
		}
		He.n = s; const r = zr.array as Float32Array
		for (let a = 0; a < s; a++) {
			const o = He.age[a], l = He.life[a], c = sstep(0, 0.3, o) * (1 - sstep(l - 2.5, l, o))
			r[a * 4] = He.p[a * 3]; r[a * 4 + 1] = He.p[a * 3 + 1]; r[a * 4 + 2] = He.p[a * 3 + 2]
			r[a * 4 + 3] = c * 0.999
		}
		if (s > 0 || Js.instanceCount > 0) zr.needsUpdate = true
		Js.instanceCount = s
	}

	// ── motes ──
	const Fc = (() => {
		const e = keep(quadGeo()), t = prng(5), i = new Float32Array(880)
		for (let a = 0; a < 220; a++) i.set([(t() - 0.5) * 30, t() * 3.2 + 0.15, -1 - t() * 28, t()], a * 4)
		e.setAttribute("iA", inst(i, 4)); e.instanceCount = 220
		const r = new THREE.Mesh(e, Qt(COMMON + MOTE_VERT, COMMON + MOTE_FRAG, { uHome: { value: V3(HOME.x, 0, HOME.z) } }, { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
		r.frustumCulled = false; r.renderOrder = 7
		return r
	})()
	Bt.add(Fc)

	// ── wildflowers ──
	const Tt = (() => {
		const n = prng(271), e = (66 * Math.PI) / 180, t = Math.floor(4200 * Math.max(0.5, zt.grass))
		const Vo: { x: number; z: number; y: number; h: number; r: number; type: number; la: number; lean: number }[] = []
		let i = 0
		while (Vo.length < t && i++ < t * 30) {
			const f = 1.6 + Math.pow(n(), 1.6) * 34, g = (n() * 2 - 1) * e
			const x = HOME.x + Math.sin(g) * f, z = HOME.z - Math.cos(g) * f
			if (n() > sstep(0.42, 0.68, fbm(x * 0.09 + 7, z * 0.09 - 3, 3))) continue
			const M = fbm(x * 0.05 - 11, z * 0.05 + 5, 2); const T = M < 0.4 ? 0 : M < 0.56 ? 1 : M < 0.64 ? 3 : 2
			const E = (T === 1 ? 0.42 : T === 0 ? 0.55 : T === 2 ? 0.3 : 0.36) * (0.75 + 0.5 * n())
			Vo.push({ x, z, y: heightAt(x, z) - 0.02, h: E, r: n(), type: T, la: n() * 6.283, lean: 0.04 + 0.16 * n() })
		}
		const s = Vo.length, r = new Float32Array(s * 4), a = new Float32Array(s * 4), o = new Float32Array(s * 4)
		Vo.forEach((f, g) => {
			r.set([f.x, f.y, f.z, f.r], g * 4); a.set([f.h, 0.0014, f.r * 6.28, f.lean], g * 4)
			o.set([f.la, 1, 3, 50.5 + f.type * 0.1], g * 4)
		})
		const l = keep(bladeStrip(6, true)); l.setAttribute("iA", inst(r, 4)); l.setAttribute("iB", inst(a, 4))
		l.setAttribute("iC", inst(o, 4)); l.instanceCount = s; l.userData.full = s
		const stems = new THREE.Mesh(l, grassMat(true)); stems.frustumCulled = false; const u = keep(quadGeo())
		u.setAttribute("iA", inst(r, 4)); u.setAttribute("iB", inst(a, 4)); u.setAttribute("iC", inst(o, 4)); u.instanceCount = s
		const heads = new THREE.Mesh(u, Qt(COMMON + BLADE + WILD_VERT, COMMON + WILD_FRAG, { uWild: { value: keep(canvasTex(512, drawWild)) } }, { side: THREE.DoubleSide }))
		heads.frustumCulled = false
		const mkRain = () => {
			const m = new THREE.Mesh(keep(randomQuads(16e3, 808)), Qt(COMMON + BOX + RAIN_VERT, RAIN_FRAG, { uBox: { value: V3(26, 11, 26) }, uAmt: { value: 0 } }, { side: THREE.DoubleSide, transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor }))
			m.frustumCulled = false; m.renderOrder = 9
			return m
		}
		const mkSnow = () => {
			const m = new THREE.Mesh(keep(randomQuads(36e3, 909)), Qt(COMMON + BOX + SNOW_VERT, COMMON + SNOW_FRAG, { uBox: { value: V3(24, 10, 24) }, uAmt: { value: 0 } }, PREMUL))
			m.frustumCulled = false; m.renderOrder = 9
			return m
		}
		return { wild: { stems, heads, n: s }, rain: mkRain(), snow: mkSnow() }
	})()
	grassMeshes.push(Tt.wild.stems as GMesh); Bt.add(Tt.wild.stems, Tt.wild.heads, Tt.rain, Tt.snow)

	// ── tree ──
	const Ot = {
		uTreeM: { value: new THREE.Matrix4() },
		uTreeBase: { value: V3() },
		uTreeH: { value: 13 },
		uCanopyC: { value: V3() },
		uCanopyR: { value: V3(8, 5, 8) },
		uSway: { value: 1 },
		uLeafTint: { value: V3(0.8, 0.86, 0.72) },
		uBarkTint: { value: V3(0.92, 0.88, 0.84) },
		uBlossom: { value: V3(0.25, 0.17, 0.69) },
		uAutA: { value: V3() },
		uAutB: { value: V3() },
		uAutC: { value: V3() },
	}
	const grown = growTree(31); keep(grown.bark); grown.bark.computeBoundingBox(); const Yo = new THREE.Group()
	const Pc = new THREE.Group(); const leafTex = keep(canvasTex(512, drawLeaves))
	leafTex.wrapS = leafTex.wrapT = THREE.ClampToEdgeWrapping; const useA2C = zt.msaa > 0
	const treeU = (l: Uni) => Object.assign({}, Ot, l)
	const barkMat = Qt(COMMON + TREE_WIND + BARK_VERT, COMMON + TREE_WIND + BARK_FRAG, treeU({}), { side: THREE.DoubleSide })
	const leafMat = Qt(COMMON + TREE_WIND + LEAF_VERT, COMMON + TREE_WIND + LEAF_FRAG, treeU({ uLeaf: { value: leafTex }, uA2C: { value: useA2C ? 1 : 0 } }), { side: THREE.DoubleSide, alphaToCoverage: useA2C })
	const barkDepth = Qt(COMMON + TREE_WIND + BARK_VERT, "void main(){ gl_FragColor = vec4(1.0); }", treeU({}), { side: THREE.DoubleSide })
	const leafDepth = Qt(
		COMMON + TREE_WIND + LEAF_VERT,
		COMMON + "uniform sampler2D uLeaf; varying vec3 vWP; varying vec3 vN; varying vec2 vUv; varying vec2 vClu; void main(){ if (vClu.x > 1.0 - 0.18*uSeason.z - 0.985*uSeason.w || texture2D(uLeaf, vUv).a < 0.5) discard; gl_FragColor = vec4(1.0); }",
		treeU({ uLeaf: { value: leafTex } }),
		{ side: THREE.DoubleSide }
	)
	const pairMesh = (g: THREE.BufferGeometry, m: THREE.Material, d: THREE.Material) => {
		const h = new THREE.Mesh(g, m); h.frustumCulled = false; Yo.add(h); const f = new THREE.Mesh(g, d)
		f.frustumCulled = false; Pc.add(f)
	}
	pairMesh(grown.bark, barkMat, barkDepth); const leafGeo = keep(leafCard())
	{
		const d = grown.leaves, count = grown.nLeaves; const cols = [0, 1, 2, 3].map(() => new Float32Array(count * 3))
		for (let i = 0; i < count; i++) for (let m = 0; m < 4; m++) for (let p = 0; p < 3; p++) cols[m][i * 3 + p] = d[i * 12 + m * 3 + p]
		cols.forEach((c, m) => leafGeo.setAttribute("iM" + m, inst(c, 3))); leafGeo.instanceCount = count
	}
	pairMesh(leafGeo, leafMat, leafDepth); qo.add(Pc); Bt.add(Yo)
	let mi = { center: V3(), radius: 10, size: V3(), base: V3(), bb: new THREE.Box3() }

	// ── far trees: the tree drawn from three sides, scattered on the hills ──
	const St = { rts: [] as THREE.WebGLRenderTarget[], cam: new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 400), mesh: null as THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial> | null, last: -9, hw: 10, hh: 16 }
	for (let a = 0; a < 3; a++) St.rts.push(keep(new THREE.WebGLRenderTarget(384, 480, { type: THREE.HalfFloatType, depthBuffer: true, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter })))

	// ── birds and squirrel ──
	const birdMat = (geo: THREE.InstancedBufferGeometry, count: number) => {
		for (const r of ["iP", "iX", "iY", "iZ"]) {
			const a = inst(new Float32Array(count * 3), 3); a.setUsage(THREE.DynamicDrawUsage); geo.setAttribute(r, a)
		}
		const i = inst(new Float32Array(count * 2), 2)
		i.setUsage(THREE.DynamicDrawUsage); geo.setAttribute("iF", i); geo.instanceCount = count
		const s = new THREE.Mesh(geo, Qt(COMMON + BIRD_VERT, COMMON + BIRD_FRAG, { uTint: { value: V3(1, 1, 1) } }, { side: THREE.DoubleSide }))
		s.frustumCulled = false
		return s
	}
	const _bx = V3(), _by = V3(), _bz = V3()
	const setInst = (n: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>, e: number, t: THREE.Vector3, i: THREE.Vector3, s: THREE.Vector3, r: number, a: number) => {
		const o = n.geometry.attributes; _bz.copy(i).normalize(); _bx.crossVectors(s, _bz).normalize()
		_by.crossVectors(_bz, _bx); ;(o.iP as THREE.InstancedBufferAttribute).setXYZ(e, t.x, t.y, t.z)
		;(o.iX as THREE.InstancedBufferAttribute).setXYZ(e, _bx.x, _bx.y, _bx.z)
		;(o.iY as THREE.InstancedBufferAttribute).setXYZ(e, _by.x, _by.y, _by.z)
		;(o.iZ as THREE.InstancedBufferAttribute).setXYZ(e, _bz.x, _bz.y, _bz.z)
		;(o.iF as THREE.InstancedBufferAttribute).setXY(e, r, a)
	}
	const flush = (n: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>) => {
		for (const e of ["iP", "iX", "iY", "iZ", "iF"]) n.geometry.attributes[e].needsUpdate = true
	}
	interface Bird { state: "perch" | "hop" | "fly"; pi: number; p: THREE.Vector3; at: THREE.Vector3; from?: THREE.Vector3; timer: number; yaw: number; path: { pts: THREE.Vector3[]; len: number } | null; s: number; phase: number }
	const Dc = 14
	const qe = {
		birds: [] as Bird[],
		swallows: [] as { seed: number; prev: THREE.Vector3 }[],
		perches: [] as THREE.Vector3[],
		trunk: [] as { y: number; x: number; z: number; r: number }[],
		sq: { t: 0 },
		sqFace: 0,
		birdMesh: birdMat(keep(birdGeo()), Dc),
		swMesh: birdMat(keep(birdGeo()), 3),
		sqMesh: birdMat(keep(squirrelGeo()), 1),
	}
	Bt.add(qe.birdMesh, qe.swMesh, qe.sqMesh); const Tc = V3(0, 1, 0)
	const computeLife = () => {
		const e = Ot.uTreeM.value, t = Ot.uCanopyC.value, i = Ot.uCanopyR.value
		qe.perches.length = 0; qe.trunk.length = 0; const h = grown.leaves
		for (let f = 0; f < h.length; f += 12 * 3) {
			const g = V3(h[f + 9], h[f + 10], h[f + 11]).applyMatrix4(e); const _ = g.clone().sub(t).divide(i)
			if (_.length() > 0.5 && _.y > -0.35) qe.perches.push(g)
		}
		if (!qe.perches.length) qe.perches.push(t.clone())
		const r = Ot.uTreeBase.value
		const pts = grown.trunk.map((p) => ({ v: V3(p.x, p.y, p.z).applyMatrix4(e), r: p.r * 0.72 * Q.treeScale }))
		for (let y = 0.125; ; y += 0.25) {
			const wy = r.y + y; let k = pts.findIndex((p) => p.v.y >= wy)
			if (k <= 0) {
				if (k === 0) k = 1
				else break
			}
			const a = pts[k - 1], b = pts[k], u = clamp((wy - a.v.y) / Math.max(1e-4, b.v.y - a.v.y), 0, 1)
			qe.trunk.push({ y: wy, x: lerp(a.v.x, b.v.x, u), z: lerp(a.v.z, b.v.z, u), r: Math.min(lerp(a.r, b.r, u), 0.32) })
			if (qe.trunk.length > 20) break
		}
		qe.sqFace = Math.atan2(HOME.z - r.z, HOME.x - r.x)
		qe.birds.forEach((d) => {
			const hp = qe.perches[d.pi % Math.max(1, qe.perches.length)]
			if (hp) {
				d.at = hp.clone(); d.p.copy(hp); d.state = "perch"; d.path = null
			}
		})
	}

	// Place the tree, and everything keyed to it.
	let treeBase0 = V3()
	{
		const tb = grown.trunk[0]; treeBase0 = V3(tb.x, tb.y, tb.z)
	}
	const placeTree = () => {
		const n = 0.72 * Q.treeScale, e = heightAt(Q.treeX, Q.treeZ) - 0.25 * Q.treeScale
		const t = new THREE.Matrix4()
			.makeTranslation(Q.treeX, e, Q.treeZ)
			.multiply(new THREE.Matrix4().makeRotationY(-0.7 + (Q.treeTurn * Math.PI) / 180))
			.multiply(new THREE.Matrix4().makeScale(n, n, n))
			.multiply(new THREE.Matrix4().makeTranslation(-treeBase0.x, -treeBase0.y, -treeBase0.z))
		Ot.uTreeM.value.copy(t); Ot.uTreeBase.value.set(Q.treeX, e, Q.treeZ); q.uTreeXZ.value.set(Q.treeX, Q.treeZ)
		Ot.uTreeH.value = 19.3 * n; const i = (grown.bark.boundingBox as THREE.Box3).clone().applyMatrix4(t)
		const s = i.getCenter(V3()), r = i.getSize(V3()); Ot.uCanopyC.value.set(s.x, s.y + r.y * 0.08, s.z)
		Ot.uCanopyR.value.set(r.x * 0.55, r.y * 0.5, r.z * 0.55); Yo.visible = Pc.visible = !!Q.tree
		mi = { center: s, radius: Math.max(r.x, r.y, r.z) * 0.62, size: r, base: V3(Q.treeX, e, Q.treeZ), bb: i }
		computeLife(); placePatch()
		if (St.mesh) {
			St.hw = Math.max(i.max.x - i.min.x, i.max.z - i.min.z) * 0.56; St.hh = (i.max.y - e) * 1.04
			St.mesh.material.uniforms.uSize.value.set(St.hw, St.hh); St.last = -9
		}
	}
	placeTree()
	{
		const n = mi.bb; St.hw = Math.max(n.max.x - n.min.x, n.max.z - n.min.z) * 0.56
		St.hh = (n.max.y - mi.base.y) * 1.04; const e = prng(31), t: number[] = [], i: number[] = []
		for (let a = 0; a < 34; a++) {
			const o = (e() * 2 - 1) * (e() < 0.75 ? 0.85 : 1.35)
			if (Math.abs(o - 0.42) < 0.12) continue
			const l = 200 + Math.pow(e(), 1.1) * 700, c = 1 + Math.floor(e() * e() * 7); let u = o
			for (let d = 0; d < c; d++) {
				u += (8 + e() * 22) / l
				const h = l + (e() - 0.5) * 40, f = HOME.x + Math.sin(u) * h, g = HOME.z - Math.cos(u) * h
				const _ = 0.4 + 0.75 * e() * e() + 0.25 * e(); t.push(f, heightAt(f, g) - 0.6, g, _ * (e() < 0.5 ? -1 : 1))
				i.push(Math.floor(e() * 3) + 0.6 + 0.5 * e())
			}
		}
		const s = keep(quadGeo([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0])); s.setAttribute("iP", inst(new Float32Array(t), 4))
		s.setAttribute("iV", inst(new Float32Array(i), 1)); s.instanceCount = t.length / 4
		const r = Qt(COMMON + IMP_VERT, COMMON + IMP_FRAG, { uImp0: { value: St.rts[0].texture }, uImp1: { value: St.rts[1].texture }, uImp2: { value: St.rts[2].texture }, uSize: { value: new THREE.Vector2(St.hw, St.hh) } }, { alphaToCoverage: zt.msaa > 0, side: THREE.DoubleSide })
		St.mesh = new THREE.Mesh(s, r); St.mesh.frustumCulled = false; Bt.add(St.mesh)
	}
	const captureImpostors = () => {
		const n = mi.base, e = St.cam, t = q.uFog.value, i = q.uCloud.value; q.uFog.value = 0; q.uCloud.value = 0
		const s = Bt.children.map((a) => a.visible); Bt.children.forEach((a) => (a.visible = a === Yo))
		Yo.visible = true; const r = Math.atan2(n.x - HOME.x, -(n.z - HOME.z))
		St.rts.forEach((a, o) => {
			const l = r + o * 2.1, c = V3(Math.sin(l), 0, -Math.cos(l)); e.left = -St.hw; e.right = St.hw; e.top = St.hh
			e.bottom = 0; e.position.set(n.x, n.y, n.z).addScaledVector(c, -150); e.lookAt(n.x, n.y, n.z); e.near = 100
			e.far = 220; e.updateProjectionMatrix(); e.updateMatrixWorld(); at.setRenderTarget(a)
			at.setClearColor(0, 0); at.clear(true, true, false); at.render(Bt, e)
		})
		Bt.children.forEach((a, o) => (a.visible = s[o])); q.uFog.value = t; q.uCloud.value = i; at.setClearColor(0, 1)
	}

	// ── falling leaves and petals ──
	const fall = new THREE.Mesh(
		keep(randomQuads(1500, 1717)),
		Qt(COMMON + BLADE + BOX + TREE_WIND + FALL_VERT, COMMON + FALL_FRAG, Object.assign({}, Ot, { uFallTex: { value: keep(canvasTex(256, drawFall)) }, uLeafAmt: { value: 0 }, uPetalAmt: { value: 0 }, uPetalShare: { value: 0 }, uBox: { value: V3(22, 4, 22) } }), {
			side: THREE.DoubleSide,
			transparent: true,
			depthWrite: true,
			blending: THREE.CustomBlending,
			blendSrc: THREE.OneFactor,
			blendDst: THREE.OneMinusSrcAlphaFactor,
		})
	)
	fall.frustumCulled = false; fall.renderOrder = 6; Bt.add(fall)

	// ── vehicle: all three built, the chosen one shown ──
	const vanMat = Qt(COMMON + VAN_VERT, COMMON + VAN_FRAG, { uBody: { value: V3(0.2, 0.5, 0.65) }, uRoof: { value: V3(0.88, 0.86, 0.8) }, uLights: { value: 0 }, uGlow: { value: 1 } })
	const mkRide = (g: THREE.BufferGeometry) => {
		const m = new THREE.Mesh(keep(g), vanMat); m.renderOrder = 4; m.visible = false; Bt.add(m)
		return m
	}
	const rideMesh: Record<VehicleKind, THREE.Mesh> = { van: mkRide(buildVan()), car: mkRide(buildCar()), bike: mkRide(buildBike()) }
	// Per vehicle: headlamp spots, the lit cabin (van only), beam strength, shadow size.
	const RIDE: Record<VehicleKind, { lamps: number[][]; inside: number[]; glow: number; beam: number; shade: number }> = {
		van: { lamps: [[-0.58, 0.88, 2.2], [0.58, 0.88, 2.2]], inside: [0, 1.5, 0], glow: 1, beam: 1, shade: 1.15 },
		car: { lamps: [[-0.58, 0.76, 2.1], [0.58, 0.76, 2.1]], inside: [0, 1.1, 0], glow: 0, beam: 0.85, shade: 1.05 },
		bike: { lamps: [[-0.13, 0.91, 0.7], [-0.09, 0.91, 0.7]], inside: [0, 0.9, 0], glow: 0, beam: 0.55, shade: 0.45 },
	}
	let vanMesh = rideMesh.van, ride = RIDE.van
	const le = { lights: 0, target: 0, manual: false, t0: -9, front: V3(), lamp: V3(), lamp2: V3(), inside: V3(), dir1: V3(), dir2: V3(), toCam: V3(0, 0, 1) }
	const mkBeam = () => {
		const t = 12 * Math.tan((12 * Math.PI) / 180)
		const i = keep(new THREE.CylinderGeometry(0.06, t, 12, 32, 12, true)); i.translate(0, -6, 0)
		const s = Qt(COMMON + BEAM_VERT, COMMON + BEAM_FRAG, { uOn: { value: 0 }, uCol: { value: V3(1, 0.88, 0.7) } }, { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
		const r = new THREE.Mesh(i, s); r.renderOrder = 8; r.frustumCulled = false; Bt.add(r)
		return r
	}
	const beams = [mkBeam(), mkBeam()]; const WH = V3(0, 1, 0)
	const placeVan = () => {
		const n = Q.vanScale, s = Q.vanX, r = Q.vanZ, a = heightAt(s, r) - 0.04
		const o = V3(HOME.x - s, 0, HOME.z - r).normalize(); le.toCam.copy(o)
		const l = Math.atan2(o.x, o.z) - ((34 - Q.vanTurn) * Math.PI) / 180; const kind = Q.vtype in RIDE ? Q.vtype : "van"
		for (const m of Object.values(rideMesh)) m.visible = false
		vanMesh = rideMesh[kind]; ride = RIDE[kind]; vanMat.uniforms.uGlow.value = ride.glow
		le.front.set(Math.sin(l), -0.17, Math.cos(l)).normalize(); vanMesh.position.set(s, a, r)
		vanMesh.rotation.set(0, l, 0); vanMesh.scale.setScalar(n); vanMesh.visible = !!Q.van
		const at3 = (p: number[]) => vanMesh.localToWorld(V3(p[0], p[1], p[2]))
		vanMesh.updateMatrixWorld(); le.lamp.copy(at3(ride.lamps[0])); le.lamp2.copy(at3(ride.lamps[1])); le.inside.copy(at3(ride.inside))
		const h = (4 * Math.PI) / 180; le.dir1.copy(le.front).applyAxisAngle(WH, h)
		le.dir2.copy(le.front).applyAxisAngle(WH, -h); q.uHeadDir.value.copy(le.dir1); q.uHeadDir2.value.copy(le.dir2)
		beams.forEach((f, g) => {
			f.position.copy(g ? le.lamp2 : le.lamp)
			f.quaternion.setFromUnitVectors(V3(0, -1, 0), (g ? le.dir2 : le.dir1).clone().normalize())
		})
		q.uVanPos.value.set(s, r, 2.6 * Math.max(0.2, n * ride.shade), q.uVanPos.value.w)
	}
	placeVan()

	// ── post ──
	const Lr = keep(new THREE.ShaderMaterial({ uniforms: { uSrc: { value: null as THREE.Texture | null }, uTexel: { value: new THREE.Vector2() }, uFirst: { value: 0 } }, vertexShader: FULL_VERT, fragmentShader: DOWN_FRAG, depthTest: false, depthWrite: false }))
	const Ec = keep(new THREE.ShaderMaterial({ uniforms: { uSrc: { value: null as THREE.Texture | null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1 } }, vertexShader: FULL_VERT, fragmentShader: UP_FRAG, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, transparent: true }))
	const Zh = keep(new THREE.ShaderMaterial({ uniforms: { uSrc: { value: null as THREE.Texture | null }, uSun: q.uSunUV }, vertexShader: FULL_VERT, fragmentShader: RAYS_FRAG, depthTest: false, depthWrite: false }))
	const ki = keep(
		new THREE.ShaderMaterial({
			uniforms: {
				uScene: { value: null as THREE.Texture | null },
				uBloom: { value: null as THREE.Texture | null },
				uRays: { value: Zo.texture },
				uRayAmt: q.uRayAmt,
				uBloomAmt: { value: 0.05 },
				uExposure: { value: 1 },
				uSat: { value: 1 },
				uWarm: { value: 0 },
				uContrast: { value: 1 },
				uVig: { value: 0.2 },
				uTime: q.uTime,
				uRes: { value: new THREE.Vector2() },
				uLift: { value: V3() },
				uFade: { value: 0 },
			},
			vertexShader: FULL_VERT,
			fragmentShader: "#define RS(a,b,x) (1.0-smoothstep(b,a,x))\n" + COMPOSITE_FRAG,
			depthTest: false,
			depthWrite: false,
		})
	)

	// ── state ──
	const k = {
		time: 0,
		mode: 0,
		modeTarget: 0,
		intro: 0,
		ptr: { x: 0.5, y: 0.5, on: false, down: false, px: 0, py: 0, moved: false },
		look: { x: 0, y: 0 },
		brush: null as Hit | null,
		brushPrev: null as { x: number; z: number } | null,
		brushSpeed: 0,
		moveDir: new THREE.Vector2(1, 0),
		gust: 0,
		ripples: [] as ({ x: number; z: number; t: number; a: number } | null)[],
		rippleIdx: 0,
		zoom: 1,
		zoomT: 1,
		aim: new THREE.Vector2(),
		aimT: new THREE.Vector2(),
		baseFov: 47,
		windBase: 0.6,
	}
	const se = { s: [0, 1, 0, 0], rain: 0, snow: 0, cover: 0, wet: 0, over: 0, mixS: 0, cap: [0, 1, 0, 0], capCover: 0, capT: -9 }
	const start0 = clamp(p0.day.start, 0, 3); k.mode = k.modeTarget = start0; k.intro = p0.intro && !reduce ? 0 : 1

	// ── per-frame sky/light state for a time of day ──
	const Lc = (n: number) => {
		const e = MODES.length - 1, t = Math.floor(clamp(n, 0, e)), i = Math.min(e, t + 1), s = ease3(clamp(n - t, 0, 1))
		const r = MODES[t], a = MODES[i], P = propsRef.current.sky; q.uSkyKA.value = r.sky; q.uSkyKB.value = a.sky
		q.uSkyMix.value = s; q.uSkyDimA.value = 1
		if (a.moon) {
			q.uSkyMix.value = Math.pow(s, 1.7); q.uSkyDimA.value = 1 - 0.75 * s
		}
		const [o, l] = catmull2(SUN_PATH, n), [c, u] = catmull2(MOON_PATH, n); const d = dirOf(o, l), h = dirOf(c, u)
		const f = (b: Mode) => {
			const p: number[] = b.moon ? [0, 0, 0] : b.sunE.map((S) => S * b.sunMul)
			if (b.minSun) for (let S = 0; S < 3; S++) p[S] = Math.max(p[S], b.minSun[S])
			return p
		}
		const g = f(r), _ = f(a), m = sstep(-1.2, 1.6, l); const p = [0, 1, 2].map((b) => lerp(g[b], _[b], s) * m)
		const M = sstep(-1, 6, u) * sstep(1.9, 2.7, n); const T = [0.78, 0.9, 1.18].map((b) => b * 2.3 * M)
		const E = luma(T) > luma(p); q.uSunDir.value.copy(E ? h : d); const D = E ? T : p
		q.uSunCol.value.set(D[0], D[1], D[2])
		q.uSunDisc.value.set(d.x, d.y, d.z, sstep(-1.5, 0.5, l) * (1 - sstep(2.2, 2.6, n)))
		q.uSunGlow.value = clamp(luma(p) / 5.5, 0.25, 1.4) * (P.sunGlow / 100); q.uSunSize.value = (3 * P.sunSize) / 100
		q.uMoonSize.value = P.moonSize / 100; q.uStars.value = P.stars / 100
		q.uGainA.value = r.moon ? P.nightSky / 100 : 1; q.uGainB.value = a.moon ? P.nightSky / 100 : 1
		q.uRayAmt.value = lerp(r.rays, a.rays, s) * sstep(-0.5, 3, l) * (P.rays / 100)
		q.uMoonDisc.value.set(h.x, h.y, h.z, sstep(1.95, 2.6, n) * sstep(-2, 1, u))
		for (let b = 0; b < 9; b++)
			q.uSH.value[b].set(lerp(r.sh[b * 3] * r.shMul, a.sh[b * 3] * a.shMul, s), lerp(r.sh[b * 3 + 1] * r.shMul, a.sh[b * 3 + 1] * a.shMul, s), lerp(r.sh[b * 3 + 2] * r.shMul, a.sh[b * 3 + 2] * a.shMul, s))
		q.uCloud.value = lerp(r.cloud, a.cloud, s); q.uFog.value = lerp(r.fog, a.fog, s) * (P.haze / 100)
		q.uFogTint.value.set(lerp(r.fogTint[0], a.fogTint[0], s), lerp(r.fogTint[1], a.fogTint[1], s), lerp(r.fogTint[2], a.fogTint[2], s))
		const x = ki.uniforms; x.uExposure.value = lerp(r.exposure, a.exposure, s) * (P.exposure / 100)
		x.uBloomAmt.value = lerp(r.bloom, a.bloom, s); x.uWarm.value = lerp(r.warm, a.warm, s) + P.warmth / 100
		x.uSat.value = lerp(r.sat, a.sat, s); x.uContrast.value = lerp(r.contrast, a.contrast, s)
		;(x.uLift.value as THREE.Vector3).set(lerp(r.lift[0], a.lift[0], s), lerp(r.lift[1], a.lift[1], s), lerp(r.lift[2], a.lift[2], s))
		k.windBase = lerp(r.wind, a.wind, s); q.uShadowStr.value = clamp(((E ? u : l) - 0.3) / 3, 0, 1) * (E ? 0.75 : 1)
		q.uNight.value = sstep(2.45, 2.95, n)
	}
	// Seasons and weather ease in rather than snap.
	const stepSeason = (n: number, snap: boolean) => {
		const p = propsRef.current; const st = [0, 0, 0, 0]; st[Math.max(0, SEASONS.indexOf(p.season))] = 1
		const rainT = p.weather.kind === "rain" ? 1 : 0, snowT = p.weather.kind === "snow" ? 1 : 0
		const i = snap ? 1 : 1 - Math.exp(-n * 1.15)
		for (let c = 0; c < 4; c++) se.s[c] += (st[c] - se.s[c]) * i
		const s = snap ? 1 : 1 - Math.exp(-n * 0.75); se.rain += (rainT - se.rain) * s; se.snow += (snowT - se.snow) * s
		se.over = Math.min(1, se.rain + se.snow)
		if (se.rain + se.snow > 0.001) se.mixS = se.snow / (se.rain + se.snow)
		const r = Math.max(se.s[3], snowT * 0.85), a = r > se.cover, o = se.s[3] >= r - 0.02
		se.cover = snap ? r : se.cover + (r - se.cover) * (1 - Math.exp(-n * (a ? (o ? 1.1 : 0.09) : 0.22)))
		se.wet = snap ? rainT : se.wet + (rainT - se.wet) * (1 - Math.exp(-n * (rainT > se.wet ? 0.45 : 0.07)))
	}
	const setV = (v: THREE.Vector3, c: RGB) => v.set(c[0], c[1], c[2])
	const seasonColors = () => {
		const p = propsRef.current, g = p.grass, sc = p.sc
		const blend = (keys: [string, string, string, string]) => {
			const e: RGB = [0, 0, 0]
			keys.forEach((t, i) => {
				const c = lin(t, "#405e2b")
				for (let r = 0; r < 3; r++) e[r] += c[r] * se.s[i]
			})
			return e
		}
		setV(q.uBlade.value, blend([sc.springBlade, g.bladeColor, sc.autumnBlade, sc.winterBlade]))
		setV(q.uTip.value, blend([sc.springTip, g.tipColor, sc.autumnTip, sc.winterTip]))
		const t = clamp(g.dry, 0, 60) / 100
		q.uDry.value = clamp(se.s[0] * Math.min(t, 0.03) + se.s[1] * t + se.s[2] * Math.max(t, 0.42) + se.s[3] * Math.max(t, 0.55), 0, 0.92)
		q.uSeason.value.set(se.s[0], se.s[1], se.s[2], se.s[3]); q.uSnow.value = se.cover; q.uWet.value = se.wet
		q.uRain.value = se.rain * clamp(p.weather.rain / 100, 0, 2)
		q.uSnowFall.value = se.snow * clamp(p.weather.snow / 100, 0, 2); q.uOver.value = se.over
		q.uWxMix.value = se.mixS; q.uYellow.value = se.s[0] * 0.8
	}
	const weatherGrade = (n: number) => {
		const e = Math.floor(clamp(n, 0, 3)), t = Math.min(3, e + 1), i = clamp(n - e, 0, 1)
		const s = lerp(OVER_GAIN[e], OVER_GAIN[t], i) * (1 + se.mixS * 0.35 * sstep(1.5, 3, n))
		const r = [0, 1, 2].map((c) => lerp(OVER_TINT[e][c], OVER_TINT[t][c], i) * s)
		q.uOverGain.value.set(r[0], r[1], r[2]); const a = se.over, o = ki.uniforms
		o.uWarm.value += 0.035 * se.s[2] - 0.03 * se.s[3]; o.uSat.value *= 1 + 0.04 * se.s[0] - 0.05 * se.s[3]
		o.uExposure.value *= 1 - 0.12 * se.cover; const l = q.uSH.value
		if (a > 0.001) {
			const d = se.mixS
			for (let h = 0; h < 9; h++) {
				const f = l[h]
				f.set(
					lerp(f.x, lerp(SH_RAIN[h * 3], SH_SNOW[h * 3], d) * r[0], a),
					lerp(f.y, lerp(SH_RAIN[h * 3 + 1], SH_SNOW[h * 3 + 1], d) * r[1], a),
					lerp(f.z, lerp(SH_RAIN[h * 3 + 2], SH_SNOW[h * 3 + 2], d) * r[2], a)
				)
			}
			q.uSunCol.value.multiplyScalar(1 - 0.9 * a); q.uShadowStr.value *= 1 - 0.85 * a; q.uSunDisc.value.w *= 1 - a
			q.uMoonDisc.value.w *= 1 - a; q.uStars.value *= 1 - a; q.uRayAmt.value *= 1 - a; q.uCloud.value *= 1 - a
			q.uFog.value *= 1 + a * lerp(2.8, 1.7, d); q.uFogTint.value.lerp(V3(1, 1, 1), a)
			o.uSat.value *= 1 - 0.16 * a; o.uContrast.value = lerp(o.uContrast.value, 0.98, a)
			o.uWarm.value = lerp(o.uWarm.value, -0.02, a * 0.6); o.uExposure.value *= 1 + 0.32 * a * (1 - d)
			k.windBase *= 1 + a * lerp(0.6, -0.3, d)
		}
		const avg = (u: number) => Math.max(0, 0.886227 * l[0].getComponent(u) + 1.023327 * l[1].getComponent(u)) / Math.PI
		q.uSkyAvg.value.set(avg(0), avg(1), avg(2))
		if (se.cover > 0.001) {
			const c = q.uSunDir.value, u = q.uSunCol.value
			const d = [0, 1, 2].map((f) => Math.max(0, 3.141593 * 0.282095 * l[0].getComponent(f) + 2.094395 * 0.488603 * l[1].getComponent(f)) + u.getComponent(f) * Math.max(c.y, 0))
			const h = lin(propsRef.current.sc.snow, DEFAULT_SEASON_COLORS.snow)
			for (let f = 0; f < 3; f++) {
				const g = (se.cover * (h[f] * 0.85 - 0.08) * d[f]) / Math.PI
				l[0].setComponent(f, l[0].getComponent(f) + g * 1.7725); l[1].setComponent(f, l[1].getComponent(f) - g * 1.535)
			}
		}
	}
	const fx = () => {
		const p = propsRef.current
		const n = clamp(q.uRain.value * 0.55, 0, 1), e = clamp(q.uSnowFall.value * 0.8, 0, 1)
		Tt.rain.material.uniforms.uAmt.value = n; Tt.rain.visible = n > 0.002; Tt.snow.material.uniforms.uAmt.value = e
		Tt.snow.visible = e > 0.002; const t = fall.material.uniforms, i = clamp(p.weather.leafFall / 100, 0, 2)
		t.uLeafAmt.value = clamp((se.s[2] * 0.7 + se.s[1] * 0.025 + se.s[3] * 0.04) * i, 0, 1)
		t.uPetalAmt.value = clamp(se.s[0] * 0.5 * i, 0, 1); t.uPetalShare.value = se.s[0]
		fall.visible = !!Q.tree && t.uLeafAmt.value + t.uPetalAmt.value > 0.002
		const nn = (se.s[0] + se.s[1] + 0.35 * se.s[2]) * (1 - se.cover)
		const cnt = Math.round((clamp(p.meadow.dandelions / 100, 0, 2) * nn * pi.length) / 2)
		On.puffs.geometry.instanceCount = cnt; On.stems.geometry.instanceCount = cnt; On.count = cnt
		const w = (se.s[0] + 0.3 * se.s[1] + 0.06 * se.s[2]) * (1 - se.cover) * clamp(p.meadow.wildflowers / 100, 0, 2) * 0.75
		const wi = Math.round(Tt.wild.n * clamp(w, 0, 1)); Tt.wild.stems.geometry.instanceCount = wi
		Tt.wild.heads.geometry.instanceCount = wi; Tt.wild.stems.visible = Tt.wild.heads.visible = wi > 0
	}

	// ── camera ──
	const wx = V3()
	const jc = (n: number) => {
		const p = propsRef.current, pl = p.placement, adv = p.adv
		const e = k.time, t = heightAt(HOME.x, HOME.z), i = ease3(clamp(k.intro, 0, 1))
		const lk = Math.min(1, n * 1.8); k.look.x += (k.ptr.x - 0.5 - k.look.x) * lk
		k.look.y += (k.ptr.y - 0.5 - k.look.y) * lk; const r = k.look.x, a = k.look.y
		const l = t + clamp(adv.camHeight, 0.3, 6), u = t + 0.18; const d = lerp(u, l, i)
		const h = HOME.x + r * 0.35 + Math.sin(e * 0.21) * 0.04; Xe.position.set(h, d, HOME.z)
		const _ = 2.2 + r * 2.8, m = -36
		const pp = heightAt(_, m) + lerp(7.5, 2.6, i) - a * 1.6 + Math.sin(e * 0.17) * 0.06
		Xe.lookAt(wx.set(_, pp, m)); Xe.rotateY((-adv.camYaw * Math.PI) / 180)
		Xe.rotateX((-clamp(pl.tilt, -90, 90) * Math.PI) / 180)
		// Rolling the lens counter-clockwise turns the picture clockwise.
		Xe.rotateZ(Math.sin(e * 0.13) * 0.002 + (clamp(pl.angle, -180, 180) * Math.PI) / 180)
		k.zoom += (k.zoomT - k.zoom) * Math.min(1, n * 4); k.aim.lerp(k.aimT, Math.min(1, n * 4))
		const M = 1 - 1 / k.zoom, T = (k.baseFov * Math.PI) / 360
		Xe.rotateY(-k.aim.x * Math.atan(Math.tan(T) * Xe.aspect) * M); Xe.rotateX(k.aim.y * T * M)
		const E = k.baseFov / k.zoom
		// Placement offsets shift the lens, so the view slides without
		// the perspective swinging round.
		const ox = (-clamp(pl.x, -50, 50) / 100) * W, oy = (-clamp(pl.y, -50, 50) / 100) * H
		const vk = `${ox}|${oy}|${W}|${H}`
		if (Math.abs(Xe.fov - E) > 1e-4 || vk !== viewKey) {
			Xe.fov = E; viewKey = vk
			if (ox || oy) Xe.setViewOffset(W, H, ox, oy, W, H)
			else Xe.clearViewOffset()
			Xe.updateProjectionMatrix(); pixAng()
		}
	}
	let viewKey = ""
	const pixAng = () => {
		const I = (2 * Math.tan((Xe.fov * Math.PI) / 360)) / cs; q.uPixAng.value = Math.max(I, 35e-5)
		for (const A of grassMeshes) A.material.uniforms.uPix.value = I
	}
	const lookAtPoint = (n: THREE.Vector3, e: number) => {
		const t = clamp(e, 1, 6), i = k.zoom, s = k.aim.clone(); k.zoom = 1; k.aim.set(0, 0); jc(0)
		Xe.updateMatrixWorld(); const r = n.clone().project(Xe); k.zoom = i; k.aim.copy(s)
		const a = 1 - 1 / t, o = Math.atan(Math.tan((k.baseFov * Math.PI) / 360) * Xe.aspect), l = (k.baseFov * Math.PI) / 360
		k.zoomT = t
		k.aimT.set(Math.atan(r.x * Math.tan(o)) / (o * a), Math.atan(r.y * Math.tan(l)) / (l * a))
	}

	// ── pointer ──
	let rect = vn.getBoundingClientRect(); let rectDirty = true
	const readRect = () => {
		if (rectDirty) {
			rect = vn.getBoundingClientRect(); rectDirty = false
		}
		return rect
	}
	const ndc = (x: number, y: number) => {
		const t = readRect()
		return new THREE.Vector2(((x - t.left) / Math.max(1, t.width)) * 2 - 1, -((y - t.top) / Math.max(1, t.height)) * 2 + 1)
	}
	const Ur = { o: V3(), d: V3() }
	const groundUnder = (x: number, y: number, lift = 0.28) => {
		const i = ndc(x, y), s = V3(i.x, i.y, 0.5); s.unproject(Xe); Ur.o.copy(Xe.position)
		Ur.d.copy(s).sub(Xe.position).normalize()
		return rayGround(Ur.o, Ur.d, lift)
	}
	const ray = new THREE.Raycaster()
	const hitTree = (x: number, y: number) => {
		if (!Q.tree) return null
		ray.setFromCamera(ndc(x, y), Xe)
		const s = Ot.uCanopyC.value, r = Ot.uCanopyR.value, a = ray.ray.origin, o = ray.ray.direction
		const l = a.clone().sub(s).divide(r), c = o.clone().divide(r)
		const u = c.dot(c), d = 2 * l.dot(c), h = l.dot(l) - 0.8, f = d * d - 4 * u * h
		if (f > 0) {
			const pp = (-d - Math.sqrt(f)) / (2 * u)
			if (pp > 0) return a.clone().addScaledVector(o, pp)
		}
		const g = Ot.uTreeBase.value, _ = (g.z - a.z) / o.z, m = a.clone().addScaledVector(o, _)
		return _ > 0 && Math.abs(m.x - g.x) < 1.2 && m.y > g.y && m.y < s.y ? m : null
	}
	const hitVan = (x: number, y: number) => {
		if (!Q.van || !vanMesh.visible) return false
		ray.setFromCamera(ndc(x, y), Xe)
		return ray.intersectObject(vanMesh, false).length > 0
	}
	const blow = (n: number) => {
		const e = pi[n]
		if (k.time - e.blown < 26) return
		e.blown = k.time; ;(On.blownAttr.array as Float32Array)[n] = k.time; On.blownAttr.needsUpdate = true
		spawnSeeds(e.x, e.y + e.h, e.z, 26 + Math.floor(Math.random() * 14))
	}
	const timers = new Set<number>()
	const later = (fn: () => void, ms: number) => {
		const id = window.setTimeout(() => {
			timers.delete(id); fn()
		}, ms)
		timers.add(id)
	}
	const sendGust = (n: number, e: number, t: number) => {
		k.ripples[k.rippleIdx % 6] = { x: n, z: e, t: k.time, a: t }
		k.rippleIdx++
		k.gust = Math.min(1.6, k.gust + 0.9 * t)
		pi.forEach((s, r) => {
			if (r >= On.count) return
			const a = Math.hypot(s.x - n, s.z - e)
			if (a < 9 && Math.random() < 0.85 - a * 0.06) later(() => blow(r), (a / 7.5) * 1e3)
		})
	}
	const Go = { slot: 0, next: 4 }
	const meteor = (az: number, el: number, bright?: number) => {
		const i = Go.slot++ % 4
		const s = Math.random() < 0.5 ? -Math.PI * (0.62 + Math.random() * 0.22) : -Math.PI * (0.16 + Math.random() * 0.22)
		q.uMet.value[i].set(az, el, s, k.time)
		q.uMetB.value[i].set(26 + Math.random() * 22, 0.55 + Math.random() * 0.6, 7 + Math.random() * 10, bright ?? 2.5 + Math.random() * 6)
	}
	const meteorShower = () => {
		const m = propsRef.current.sky.meteors / 100
		if (q.uNight.value < 0.5 || m <= 0) {
			Go.next = k.time + 2
			return
		}
		if (k.time > Go.next) {
			meteor(-55 + Math.random() * 120, 26 + Math.random() * 40)
			if (Math.random() < 0.25) later(() => meteor(-40 + Math.random() * 100, 30 + Math.random() * 35), 300 + Math.random() * 700)
			Go.next = k.time + (2.5 + Math.random() * 6.5) / m
		}
	}
	let awake = 0; const wake = () => (awake = performance.now())
	const onMove = (n: PointerEvent) => {
		if (n.clientX === k.ptr.px && n.clientY === k.ptr.py && k.ptr.on) return
		k.ptr.px = n.clientX; k.ptr.py = n.clientY; k.ptr.on = true; k.ptr.moved = true; rectDirty = true; wake()
	}
	const onLeave = () => {
		k.ptr.on = false
	}
	const onDown = (n: PointerEvent) => {
		if (n.defaultPrevented) return
		rectDirty = true; k.ptr.down = true; k.ptr.px = n.clientX; k.ptr.py = n.clientY; k.ptr.on = true; wake()
		const act = propsRef.current.act
		// The tree and the van take their own taps; nothing passes through
		// them to the grass behind.
		if (hitTree(n.clientX, n.clientY)) {
			if (act.zoom && k.zoomT < 1.5) {
				const i = Ot.uTreeBase.value; lookAtPoint(V3(i.x, i.y + 4.2 * Q.treeScale, i.z), 3.4)
			}
			return
		}
		if (hitVan(n.clientX, n.clientY)) {
			le.manual = !le.manual
			return
		}
		if (!act.gusts) return
		// A gust only from a tap that lands on the grass itself. The sky
		// and the bare far hills do nothing, except a shooting star at night.
		const e = groundUnder(n.clientX, n.clientY)
		if (e) {
			if (onGrass(e.x, e.z)) sendGust(e.x, e.z, 1)
		} else if (q.uNight.value > 0.5) {
			const t = Ur.d
			meteor((Math.atan2(t.x, -t.z) * 180) / Math.PI - 4, (Math.asin(clamp(t.y, -1, 1)) * 180) / Math.PI + 6, 9)
		}
	}
	// The grass field: a 128° fan out to where the blades fade (64–92 m),
	// plus the patch round the tree.
	const onGrass = (x: number, z: number) => {
		const dx = x - HOME.x, dz = z - HOME.z, r = Math.hypot(dx, dz)
		if (r < 80 && Math.abs(Math.atan2(dx, -dz)) < (64 * Math.PI) / 180) return true
		return !!Q.tree && Math.hypot(x - Q.treeX, z - Q.treeZ) < 9
	}
	const onUp = () => {
		k.ptr.down = false
	}
	const scrub = (dy: number) => {
		const p = propsRef.current.day; const before = k.modeTarget
		k.modeTarget = clamp(k.modeTarget + dy * 0.0011 * (p.sensitivity / 5), 0, MODES.length - 1)
		wake()
		return k.modeTarget !== before
	}
	const onWheel = (n: WheelEvent) => {
		if (n.ctrlKey) {
			if (!propsRef.current.act.zoom) return
			n.preventDefault(); const e = k.zoomT; k.zoomT = clamp(k.zoomT * Math.exp(-n.deltaY * 0.0016), 1, 6)
			const t = ndc(n.clientX, n.clientY)
			if (k.zoomT > e) k.aimT.lerp(t.clone().multiplyScalar(1 / Math.max(0.35, 1 - 1 / k.zoomT)).clampScalar(-1, 1), 0.35)
			if (k.zoomT <= 1.02) k.aimT.set(0, 0)
			wake()
			return
		}
		if (propsRef.current.day.scroll !== "wheel") return
		// Scrub the day; at noon or night the wheel goes back to the page.
		const dy = n.deltaMode === 1 ? n.deltaY * 16 : n.deltaMode === 2 ? n.deltaY * 400 : n.deltaY
		if (scrub(dy)) n.preventDefault()
	}
	let touchY: number | null = null
	const onTouchStart = (n: TouchEvent) => {
		touchY = n.touches.length === 1 ? n.touches[0].clientY : null
	}
	const onTouchMove = (n: TouchEvent) => {
		if (touchY === null || n.touches.length !== 1 || propsRef.current.day.scroll !== "wheel") return
		const e = n.touches[0].clientY; scrub((touchY - e) * 2.2); touchY = e
	}
	const onTouchEnd = () => {
		touchY = null
	}
	const onDbl = () => {
		k.zoomT = 1; k.aimT.set(0, 0); wake()
	}
	const onKey = (n: KeyboardEvent) => {
		if (n.key === "Escape" && k.zoomT !== 1) onDbl()
	}
	let scrollDirty = true
	const onScroll = () => {
		scrollDirty = true; rectDirty = true
	}
	host.addEventListener("pointermove", onMove); host.addEventListener("pointerleave", onLeave)
	host.addEventListener("pointerdown", onDown); window.addEventListener("pointerup", onUp)
	window.addEventListener("pointercancel", onUp); host.addEventListener("wheel", onWheel, { passive: false })
	host.addEventListener("touchstart", onTouchStart, { passive: true })
	host.addEventListener("touchmove", onTouchMove, { passive: true }); host.addEventListener("touchend", onTouchEnd)
	host.addEventListener("dblclick", onDbl); window.addEventListener("keydown", onKey)
	window.addEventListener("scroll", onScroll, { passive: true, capture: true })

	// ── sizing ──
	let W = 0, H = 0, shown = 1
	const resize = () => {
		W = Math.max(1, host.clientWidth); H = Math.max(1, host.clientHeight); const r = host.getBoundingClientRect()
		shown = clamp(r.width / W, 1, 2); rectDirty = true
		// Pixel budget: about 3 M multisampled pixels before the quality
		// ladder steps in, so a large retina hero does not start out slow.
		const base = Math.min(window.devicePixelRatio || 1, clamp(propsRef.current.adv.pixelRatio, 0.75, 2)) * shown
		const dpr = Math.min(base, Math.sqrt(3e6 / (W * H))) * zt.dpr
		at.setPixelRatio(1); at.setSize(Math.round(W * dpr), Math.round(H * dpr), false); vn.style.width = "100%"
		vn.style.height = "100%"; Or = Math.round(W * dpr); cs = Math.round(H * dpr); Xe.aspect = W / H
		// Contain: a frame narrower than the 16:10 design frame keeps its
		// horizontal view (van to tree) by widening the lens.
		const f0 = (clamp(propsRef.current.adv.fov, 20, 90) * Math.PI) / 360
		k.baseFov = (Math.atan(Math.tan(f0) * Math.max(1, REF_W / REF_H / Xe.aspect)) * 360) / Math.PI
		Xe.fov = k.baseFov / k.zoom; Xe.updateProjectionMatrix(); buildTargets()
		;(ki.uniforms.uRes.value as THREE.Vector2).set(Or, cs); pixAng(); wake()
	}
	let sizeKey = ""
	const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => (sizeKey = "")) : null
	ro?.observe(host); let visible = true
	const io = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver((en) => (visible = en.some((e) => e.isIntersecting)), { rootMargin: "64px" }) : null
	io?.observe(host)

	// ── quality ladder ──
	// The display cadence is learned only downward (from rAF ticks), so
	// a GPU-bound start cannot talk it up. A drawn-frame interval well
	// past the target steps quality down; a step that buys no speed means
	// the display itself is slow (Framer's canvas can tick at 30 Hz), so
	// it is undone and the ladder stops. Quick frames win quality back.
	const spans: number[] = []
	let period = 16.7, level = 0, lastDrawn = -1, goodSince = 0, lockDown = false, lockUp = false
	let probe: { at: number; med: number; down: boolean } | null = null; const tickGaps: number[] = []
	const quality = (now: number, every: number) => {
		const span = lastDrawn < 0 ? 16.7 : now - lastDrawn; lastDrawn = now; spans.push(span)
		if (spans.length > 40) spans.shift()
		if (spans.length < 40 || k.time < 3) return
		const med = spans.slice().sort((a, b) => a - b)[20]; const target = Math.max(16.7, period * every)
		const late = med > Math.max(22, target * 1.4)
		if (probe) {
			if (now - probe.at < 1500) return
			if (probe.down && med > probe.med * 0.88) {
				level--
				lockDown = true; applyLevel()
			} else if (!probe.down && late) {
				level++
				lockUp = true; applyLevel()
			}
			probe = null; spans.length = 0
			return
		}
		if (late && level < 4 && !lockDown) {
			probe = { at: now, med, down: true }
			level++
			goodSince = 0; applyLevel(); spans.length = 0
		} else if (!late && med < target * 1.15) {
			if (!goodSince) goodSince = now
			if (now - goodSince > 8000 && level > 0 && !lockUp) {
				probe = { at: now, med, down: false }
				level--
				goodSince = 0; applyLevel(); spans.length = 0
			}
		} else goodSince = 0
	}
	const applyLevel = () => {
		zt.dpr = level >= 3 ? 0.64 : level >= 1 ? 0.8 : 1
		zt.grass = (coarse ? 0.6 : 1) * (level >= 4 ? 0.45 : level >= 2 ? 0.65 : 1); sizeKey = ""; applyDensity()
	}
	const applyDensity = () => {
		const dens = clamp(propsRef.current.grass.density / 100, 0.15, 1); const base = coarse ? 0.6 : 1
		for (const n of [nt.near, nt.mid, nt.far, nt.stems, nt.patch]) n.geometry.instanceCount = Math.floor(n.geometry.userData.full * (zt.grass / base) * dens)
	}

	// ── apply panel values ──
	let lastKey = ""
	const applyProps = () => {
		const p = propsRef.current
		const key = JSON.stringify([p.tree.x, p.tree.z, p.tree.size, p.tree.turn, p.meadow.tree, p.vehicle.x, p.vehicle.z, p.vehicle.size, p.vehicle.turn, p.vehicle.show, p.vehicle.type, p.grass.density, p.adv.fov, p.adv.pixelRatio])
		setV(q.uDryC.value, lin(p.grass.dryColor, DEFAULT_GRASS.dryColor))
		q.uGrassH.value = clamp(p.grass.height / 100, 0.2, 3); Ot.uSway.value = clamp(p.tree.sway, 0, 10) / 5
		setV(Ot.uLeafTint.value, lin(p.tree.leafTint, DEFAULT_TREE.leafTint))
		setV(Ot.uBarkTint.value, lin(p.tree.barkTint, DEFAULT_TREE.barkTint))
		setV(Ot.uBlossom.value, lin(p.sc.blossom, DEFAULT_SEASON_COLORS.blossom))
		setV(Ot.uAutA.value, lin(p.sc.leafA, DEFAULT_SEASON_COLORS.leafA))
		setV(Ot.uAutB.value, lin(p.sc.leafB, DEFAULT_SEASON_COLORS.leafB))
		setV(Ot.uAutC.value, lin(p.sc.leafC, DEFAULT_SEASON_COLORS.leafC))
		setV(q.uSnowCol.value, lin(p.sc.snow, DEFAULT_SEASON_COLORS.snow))
		setV(q.uFlowerA.value, lin(p.meadow.flowerA, DEFAULT_MEADOW.flowerA))
		setV(q.uFlowerB.value, lin(p.meadow.flowerB, DEFAULT_MEADOW.flowerB))
		setV(q.uFlowerC.value, lin(p.meadow.flowerC, DEFAULT_MEADOW.flowerC))
		// Each vehicle keeps its own pair of paint colours.
		const vt = p.vehicle.type, D = DEFAULT_VEHICLE
		const [pa, pb] = vt === "car" ? [lin(p.vehicle.carPaint, D.carPaint), lin(p.vehicle.carRoof, D.carRoof)] : vt === "bike" ? [lin(p.vehicle.bikePaint, D.bikePaint), lin(p.vehicle.bikeFrame, D.bikeFrame)] : [lin(p.vehicle.body, D.body), lin(p.vehicle.roof, D.roof)]
		setV(vanMat.uniforms.uBody.value, pa); setV(vanMat.uniforms.uRoof.value, pb)
		const s = (num(p.wind.direction, 51.5) * Math.PI) / 180; q.uWindDir.value.set(Math.cos(s), Math.sin(s))
		Cc.uniforms.uSpring.value = clamp(Math.pow(2, (clamp(p.act.spring, 0, 10) - 5) / 2.5), 0.2, 4)
		Fc.visible = !!p.meadow.motes
		if (key === lastKey) return
		const prev = lastKey ? (JSON.parse(lastKey) as unknown[]) : null; lastKey = key; Q.treeX = p.tree.x
		Q.treeZ = p.tree.z; Q.treeScale = clamp(p.tree.size, 20, 300) / 100; Q.treeTurn = p.tree.turn
		Q.tree = p.meadow.tree; Q.vanX = p.vehicle.x; Q.vanZ = p.vehicle.z; Q.vanScale = clamp(p.vehicle.size, 20, 300) / 100
		Q.vanTurn = p.vehicle.turn; Q.van = p.vehicle.show; Q.vtype = p.vehicle.type
		const changed = (i: number, j: number) => !prev || prev.slice(i, j).some((v, n) => v !== JSON.parse(key)[i + n])
		if (changed(0, 5)) placeTree()
		if (changed(5, 11)) placeVan()
		if (changed(11, 12)) applyDensity()
		if (changed(12, 14)) sizeKey = ""
	}

	// ── one frame ──
	const ed = new THREE.Matrix4(); const sunTmp = V3(), fwdTmp = V3(); let lastShadow = -1
	const step = (n: number) => {
		const p = propsRef.current; k.time += n; const e = k.time; q.uTime.value = e; k.intro = Math.min(1, k.intro + n / 5.2)
		if (p.day.scroll === "page" && scrollDirty) {
			scrollDirty = false
			// Noon (or Start) while the meadow is in place, night once
			// it has scrolled nine-tenths of its height away.
			const r = readRect(); const prog = clamp(-r.top / Math.max(1, r.height * 0.9), 0, 1)
			k.modeTarget = clamp(clamp(p.day.start, 0, 3) + prog * (3 - clamp(p.day.start, 0, 3)), 0, 3)
		} else if (p.day.scroll === "off") k.modeTarget = clamp(p.day.start, 0, 3)
		const t = k.modeTarget - k.mode; k.mode += t * Math.min(1, n * 2.6)
		if (Math.abs(t) < 1e-4) k.mode = k.modeTarget
		propsRef.current.onModeChange?.(k.mode, k.modeTarget)
		stepSeason(n, false); Lc(k.mode); seasonColors(); weatherGrade(k.mode); fx(); hi(fogMat, Hc)
		k.gust *= Math.exp(-n * 0.55)
		q.uWind.value = (k.windBase * sstep(0, 1, k.intro * 1.3) * (clamp(p.wind.strength, 0, 10) / 5) + k.gust * 0.55) * (0.85 + 0.15 * Math.sin(e * 0.21))
		jc(n); Xe.updateMatrixWorld()
		if (k.ptr.on && k.intro > 0.35) {
			const r = readRect(); k.ptr.x = (k.ptr.px - r.left) / Math.max(1, r.width)
			k.ptr.y = (k.ptr.py - r.top) / Math.max(1, r.height); const s = groundUnder(k.ptr.px, k.ptr.py)
			if (s) {
				if (k.brush) {
					const dx = s.x - k.brush.x, dz = s.z - k.brush.z, o = Math.hypot(dx, dz)
					if (o > 1e-4) k.moveDir.set(dx / o, dz / o)
					k.brushSpeed = lerp(k.brushSpeed, o / Math.max(n, 0.001), 0.3)
					k.brushPrev = o > 3 ? null : { x: k.brush.x, z: k.brush.z }
				}
				k.brush = s
				for (let r2 = 0; r2 < On.count; r2++) {
					const a = pi[r2]
					if (Math.abs(a.x - s.x) < 0.7 && Math.abs(a.z - s.z) < 0.7 && Math.hypot(a.x - s.x, a.z - s.z) < 0.55 + s.t * 0.006 && !((a.r * 7.77 + 0.13) % 1 < q.uYellow.value)) blow(r2)
				}
			} else {
				k.brush = null; k.brushPrev = null
			}
		} else {
			k.brush = null; k.brushPrev = null
		}
		// pointer sim
		const ce = Cc.uniforms; ce.uDt.value = n; ce.uBrushOn.value = k.brush ? 1 : 0
		if (k.brush) {
			ce.uB1.value.set(k.brush.x, k.brush.z)
			if (k.brushPrev) ce.uB0.value.set(k.brushPrev.x, k.brushPrev.z)
			else ce.uB0.value.copy(ce.uB1.value)
			ce.uMoveDir.value.copy(k.moveDir); ce.uSpeed.value = k.brushSpeed
			ce.uBrushR.value = (0.72 + Math.min(0.6, k.brush.t * 0.014)) * (clamp(p.act.brush, 0, 10) / 5)
		}
		k.ripples.forEach((i, s) => i && ce.uRip.value[s].set(i.x, i.z, i.t, i.a))
		hi(fieldMat, sd); ce.uPrev.value = Xs[Fr].texture; Fr ^= 1; hi(Cc, Xs[Fr]); q.uSim.value = Xs[Fr].texture
		stepSeeds(n, e); meteorShower()
		// van lights
		{
			const vl = p.vehicle.lights; const want = vl === "on" ? true : vl === "off" ? false : q.uNight.value > 0.45
			const tt = !!Q.van && want !== le.manual
			if (tt !== (le.target === 1)) {
				le.target = tt ? 1 : 0; le.t0 = k.time
			}
			const i = k.time - le.t0
			if (le.target === 1) le.lights = i < 0.07 ? 0.85 : i < 0.16 ? 0.05 : i < 0.22 ? 0.7 : i < 0.3 ? 0.2 : Math.min(1, 0.2 + (i - 0.3) * 2.2)
			else le.lights = Math.max(0, le.lights - n * 3)
			const l = le.lights * (clamp(p.vehicle.power, 0, 10) / 5); vanMat.uniforms.uLights.value = l
			const c = lin(p.vehicle.headColor, DEFAULT_VEHICLE.headColor), u = lin(p.vehicle.windowColor, DEFAULT_VEHICLE.windowColor)
			setV(q.uHeadCol.value, c); setV(q.uWinCol.value, u); q.uHead.value.set(le.lamp.x, le.lamp.y, le.lamp.z, l * 34 * ride.beam)
			q.uHead2.value.set(le.lamp2.x, le.lamp2.y, le.lamp2.z, l * 34 * ride.beam)
			beams.forEach((d) => {
				d.visible = l > 0.001 && !!Q.van
				d.material.uniforms.uOn.value = l * ride.beam * (0.35 + 0.65 * q.uNight.value) * (1 + 1.6 * se.over)
				d.material.uniforms.uCol.value.set(c[0], c[1] * 0.97, c[2] * 0.95)
			})
			q.uVanGlow.value.set(le.inside.x, le.inside.y, le.inside.z, l * 1.4 * ride.glow)
			q.uVanPos.value.w = Q.van ? (0.55 * sstep(-1, 6, (Math.asin(clamp(q.uSunDir.value.y, -1, 1)) * 180) / Math.PI) + 0.2) * (1 - 0.6 * se.over) : 0
		}
		// birds, swallows, squirrel
		{
			const nb = Q.tree ? clamp(Math.round(clamp(p.meadow.birds, 0, Dc) * (1 - 0.6 * se.s[3])), 0, Dc) : 0
			while (qe.birds.length < Dc) {
				const i = Math.floor(Math.random() * 1e6), s = qe.perches[i % qe.perches.length]
				qe.birds.push({ state: "perch", pi: i, p: s.clone(), at: s.clone(), timer: 2 + Math.random() * 10, yaw: Math.random() * 6.28, path: null, s: 0, phase: Math.random() * 6 })
			}
			while (qe.swallows.length < 3) qe.swallows.push({ seed: Math.random() * 100, prev: V3() })
			qe.birdMesh.geometry.instanceCount = nb; qe.swMesh.visible = !!p.meadow.swallows && se.s[0] + se.s[1] > 0.5
			qe.sqMesh.visible = !!(p.meadow.squirrel && Q.tree)
			const t2 = Math.max(q.uNight.value, se.over * 0.9), i2 = (1 - sstep(1.7, 2.3, k.mode)) * (1 - se.over)
			const u = V3()
			qe.birds.forEach((o, l) => {
				if (l >= nb) return
				o.timer -= n; let c = 0.15; u.set(Math.sin(o.yaw), 0, Math.cos(o.yaw))
				if (o.state === "perch") {
					o.p.copy(o.at)
					if (Math.random() < n * 0.6) o.yaw += (Math.random() - 0.5) * 1.6
					u.set(Math.sin(o.yaw), 0, Math.cos(o.yaw)); c = 0.1 + 0.05 * Math.sin(e * 3 + l)
					if (o.timer < 0 && t2 < 0.3) {
						if (Math.random() < 0.45) {
							const d = qe.perches.filter((h) => h.distanceTo(o.at) < 2.2 && h !== o.at)
							if (d.length) {
								o.state = "hop"; o.from = o.at.clone()
								const h = d[Math.floor(Math.random() * d.length)]; o.pi = qe.perches.indexOf(h)
								o.at = h.clone(); o.s = 0
							}
							o.timer = 1 + Math.random() * 4
						} else {
							o.pi = Math.floor(Math.random() * qe.perches.length); const d = qe.perches[o.pi].clone()
							const tc = Ot.uCanopyC.value, nn = o.at; const ii = nn.clone().sub(tc).setY(0).normalize()
							const ss = V3(-ii.z, 0, ii.x).multiplyScalar(Math.random() < 0.5 ? -1 : 1)
							const rr = 14 + Math.random() * 18
							const a = nn.clone().addScaledVector(ii, rr * 0.6).addScaledVector(ss, rr * 0.5).setY(nn.y + 3 + Math.random() * 6)
							const oo = nn.clone().addScaledVector(ii, rr).addScaledVector(ss, -rr * 0.3).setY(nn.y + 1 + Math.random() * 5)
							const ll = d.clone().sub(tc).setY(0).normalize()
							const pts = [nn.clone(), nn.clone().addScaledVector(ii, 2.5).setY(nn.y + 1.2), a, oo, d.clone().addScaledVector(ll, 3).setY(d.y + 1.5), d.clone()]
							let len = 0
							for (let j = 1; j < pts.length; j++) len += pts[j].distanceTo(pts[j - 1])
							o.path = { pts, len: len * 1.15 }; o.at = d; o.s = 0; o.state = "fly"
						}
					}
				} else if (o.state === "hop" && o.from) {
					o.s += n / 0.35; const d = Math.min(1, o.s)
					o.p.lerpVectors(o.from, o.at, d).y += Math.sin(d * Math.PI) * 0.25
					u.copy(o.at).sub(o.from).setY(0).normalize(); o.yaw = Math.atan2(u.x, u.z); c = 0.9 * Math.sin(e * 40)
					if (o.s >= 1) {
						o.state = "perch"; o.timer = 2 + Math.random() * 8
					}
				} else if (o.path) {
					o.s += (n * (8 + 2 * Math.sin(l)) * (t2 > 0.3 ? 2.5 : 1)) / o.path.len
					const d = Math.min(1, o.s), h = catmull(o.path.pts, d), f = catmull(o.path.pts, Math.min(1, d + 0.01))
					u.copy(f).sub(h)
					if (u.lengthSq() < 1e-8) u.set(0, 0, 1)
					o.p.copy(h); o.yaw = Math.atan2(u.x, u.z)
					const g = sstep(0.2, 0.6, Math.sin(e * 0.9 + l * 2)) * (d > 0.15 && d < 0.8 ? 1 : 0)
					c = Math.sin(e * 13 + o.phase) * (0.95 - 0.8 * g) + 0.1
					if (d >= 1) {
						o.state = "perch"; o.timer = 4 + Math.random() * 14
					}
				} else o.state = "perch"
				setInst(qe.birdMesh, l, o.p, u.normalize(), Tc, c, 1.6)
			})
			if (nb) flush(qe.birdMesh)
			const s = sstep(2.2, 2.7, k.mode)
			qe.swallows.forEach((o, l) => {
				const c = o.seed, uu = s > 0.5 ? 0.55 : 0.32, d = e * uu + c
				const h = V3(2 + Math.sin(d * 1.3) * 14 + Math.sin(d * 3.1 + c) * 3, 0, -18 + Math.cos(d * 0.9 + c) * 10 + Math.sin(d * 2.3) * 3)
				h.y = heightAt(h.x, h.z) + (s > 0.5 ? 3.5 : 1.6) + Math.sin(d * 2.7 + c) * (s > 0.5 ? 1.5 : 0.8)
				const f = h.clone().sub(o.prev); o.prev.copy(h)
				if (f.lengthSq() < 1e-8) f.set(1, 0, 0)
				const g = i2 * (1 - s)
				const _ = s > 0.5 ? Math.sin(e * 22 + c) * 1.1 : Math.sin(e * 16 + c) * (Math.sin(d * 4) > 0 ? 0.9 : 0.15)
				setInst(qe.swMesh, l, h, f.normalize(), Tc, _, g > 0.3 ? (s > 0.5 ? 0.8 : 0.75) : 1e-4)
			})
			flush(qe.swMesh); const a = qe.trunk
			if (a.length > 3 && qe.sqMesh.visible) {
				qe.sq.t += n; const lp = (qe.sq.t % 26) / 26, cc = Math.max(1, a.length - 1.5), g = qe.sqFace
				let uu = 0, d = g - 0.9, h = "climb", f = 0
				if (lp < 0.3) {
					const U = ease3(lp / 0.3); uu = U * cc; d = g - 0.9 + Math.sin(U * 5) * 0.8
				} else if (lp < 0.42) {
					uu = cc; d = g - 0.9 + Math.sin(5) * 0.8; h = "look"
				} else if (lp < 0.66) {
					const U = ease3((lp - 0.42) / 0.24); uu = (1 - U) * cc; d = g - 0.9 + Math.sin(5 - U * 4) * 0.8
					h = "down"
				} else if (lp < 0.9) {
					d = g + 0.5; h = "ground"; f = Math.sin(((lp - 0.66) / 0.24) * Math.PI)
				} else {
					d = g - 0.9; h = "ground"
				}
				const _ = clamp(uu, 0, a.length - 1.001), m = Math.floor(_), pp = _ - m, M = a[m], T = a[Math.min(a.length - 1, m + 1)]
				const E = lerp(M.x, T.x, pp), I = lerp(M.z, T.z, pp), A = lerp(M.r, T.r, pp) + 0.02, D = lerp(M.y, T.y, pp)
				const x = V3(Math.cos(d), 0, Math.sin(d)); let b = V3(E + x.x * A, D, I + x.z * A)
				let P = V3(0, h === "down" ? -1 : 1, 0).addScaledVector(V3(-x.z, 0, x.x), 0.35); let S = x.clone()
				if (h === "ground") {
					const U = V3(Math.cos(d), 0, Math.sin(d))
					b = V3(E + U.x * (A + f * 2.2), heightAt(E, I) + 0.02, I + U.z * (A + f * 2.2))
					P = U.clone().multiplyScalar((lp - 0.66) / 0.24 < 0.5 ? 1 : -1); S = Tc.clone()
				}
				if (h === "look") P.applyAxisAngle(S, Math.sin(e * 2.2) * 0.5)
				b.addScaledVector(S, h === "look" ? 0 : Math.abs(Math.sin(e * 15)) * 0.02)
				setInst(qe.sqMesh, 0, b, P.normalize(), S, 0, t2 > 0.6 ? 1e-4 : 1.6); flush(qe.sqMesh)
			}
		}
		// shadow camera and maps
		{
			const sn = q.uSunDir.value, c = mi.center; cn.position.copy(c).addScaledVector(sn, 120); cn.up.set(0, 1, 0)
			cn.lookAt(c); const t3 = mi.radius; cn.left = -t3; cn.right = t3; cn.top = t3; cn.bottom = -t3
			cn.near = 120 - t3 * 1.6; cn.far = 120 + t3 * 1.6 + 140; cn.updateProjectionMatrix(); cn.updateMatrixWorld()
			q.uShadowMat.value.multiplyMatrices(cn.projectionMatrix, cn.matrixWorldInverse)
		}
		const diff = se.s.reduce((s, r, a) => s + Math.abs(r - se.cap[a]), 0) + Math.abs(se.cover - se.capCover)
		if (diff > 0.02 && k.time - se.capT > 0.25) {
			St.last = -9; se.cap = se.s.slice(); se.capCover = se.cover; se.capT = k.time
		}
		if (Math.abs(k.mode - St.last) > 0.03 && Q.tree) {
			at.setRenderTarget(Hr); at.setClearColor(0xffffff, 1); at.clear(true, true, false); at.render(qo, cn)
			captureImpostors(); St.last = k.mode
		}
		if (St.mesh) St.mesh.visible = !!Q.tree
		if ((++lastShadow & (level >= 3 ? 1 : 0)) === 0) {
			at.setRenderTarget(Hr); at.setClearColor(0xffffff, 1); at.clear(true, true, false)
			if (Q.tree) at.render(qo, cn)
		}
		ed.multiplyMatrices(Xe.projectionMatrix, Xe.matrixWorldInverse).invert()
		ad.uniforms.uInvVP.value.copy(ed); const ws = Ws as THREE.WebGLRenderTarget; at.setRenderTarget(ws)
		at.setClearColor(0, 1); at.clear(true, true, false); at.render(Bt, Xe)
		for (let s = 0; s < En.length; s++) {
			const r = s === 0 ? ws : En[s - 1]; Lr.uniforms.uSrc.value = r.texture
			Lr.uniforms.uTexel.value.set(1 / r.width, 1 / r.height); Lr.uniforms.uFirst.value = s === 0 ? 1 : 0
			hi(Lr, En[s])
		}
		for (let s = En.length - 1; s > 0; s--) {
			Ec.uniforms.uSrc.value = En[s].texture; Ec.uniforms.uTexel.value.set(1 / En[s].width, 1 / En[s].height)
			hi(Ec, En[s - 1])
		}
		{
			const sd2 = sunTmp.set(q.uSunDisc.value.x, q.uSunDisc.value.y, q.uSunDisc.value.z)
			Xe.getWorldDirection(fwdTmp); const a = Xe.position.clone().addScaledVector(sd2, 1e3).project(Xe)
			const o = fwdTmp.dot(sd2), l = Math.max(Math.abs(a.x), Math.abs(a.y))
			q.uSunUV.value.set(a.x * 0.5 + 0.5, a.y * 0.5 + 0.5, o > 0.1 && q.uRayAmt.value > 0.001 ? sstep(1.8, 1, l) * q.uSunDisc.value.w : 0)
			if (q.uSunUV.value.z > 0) {
				Zh.uniforms.uSrc.value = En[0].texture; hi(Zh, Zo)
			} else {
				at.setRenderTarget(Zo); at.setClearColor(0, 1); at.clear(true, false, false)
			}
		}
		ki.uniforms.uScene.value = ws.texture; ki.uniforms.uBloom.value = En[0].texture
		ki.uniforms.uFade.value = 1 - sstep(0, 0.35, k.intro); hi(ki, null)
	}

	// First paint: everything resolved, every program compiled, then run.
	stepSeason(0, true); applyProps(); resize()
	sizeKey = `${W}x${H}`
	Lc(k.mode); seasonColors(); weatherGrade(k.mode); fx(); hi(fogMat, Hc); Xs.forEach((l) => hi(clearMat, l))
	q.uSim.value = Xs[0].texture; jc(0.016)
	{
		const hidden = [Tt.rain, Tt.snow, fall, Tt.wild.stems, Tt.wild.heads, ...beams].filter((l) => !l.visible)
		hidden.forEach((l) => (l.visible = true)); at.compile(Bt, Xe); hidden.forEach((l) => (l.visible = false))
		at.compile(qo, cn)
	}

	let raf = 0, last = -1, alive = true; let lastProps: Resolved | null = null
	const frame = (now: number) => {
		if (!alive) return
		raf = requestAnimationFrame(frame); const gap = last < 0 ? 16.7 : now - last; last = now; tickGaps.push(gap)
		if (tickGaps.length > 9) tickGaps.shift()
		if (tickGaps.length === 9) period = Math.min(period, Math.max(4, tickGaps.slice().sort((a, b) => a - b)[4]))
		if (!visible || document.hidden) {
			lastDrawn = -1
			return
		}
		// Draw every Nth vsync so a 120/144 Hz panel still runs at ~60,
		// but never skip a tick that already came late: a GPU-bound frame
		// skipped on count alone would halve the rate.
		const every = Math.max(1, Math.floor(16.7 / Math.max(4, period) + 0.1))
		if (lastDrawn >= 0 && now - lastDrawn < (every - 0.5) * period) return
		const p = propsRef.current
		if (p !== lastProps) {
			lastProps = p; applyProps(); wake()
		}
		const key = `${host.clientWidth}x${host.clientHeight}`
		if (key !== sizeKey) {
			sizeKey = key; resize()
		}
		// Reduced motion: hold still, and draw only while something is being changed.
		if (reduce && now - awake > 1500) return
		const dt = Math.min(0.05, (now - (lastDrawn < 0 ? now - 16.7 : lastDrawn)) / 1000)
		quality(now, every); step(reduce ? Math.min(dt, 0.016) : dt)
	}
	raf = requestAnimationFrame(frame)

	const onLost = (e: Event) => {
		e.preventDefault(); alive = false; cancelAnimationFrame(raf)
	}
	const onRestored = () => restore(); vn.addEventListener("webglcontextlost", onLost)
	vn.addEventListener("webglcontextrestored", onRestored)

	return () => {
		alive = false; cancelAnimationFrame(raf); timers.forEach((id) => clearTimeout(id)); ro?.disconnect()
		io?.disconnect(); host.removeEventListener("pointermove", onMove)
		host.removeEventListener("pointerleave", onLeave); host.removeEventListener("pointerdown", onDown)
		window.removeEventListener("pointerup", onUp); window.removeEventListener("pointercancel", onUp)
		host.removeEventListener("wheel", onWheel); host.removeEventListener("touchstart", onTouchStart)
		host.removeEventListener("touchmove", onTouchMove); host.removeEventListener("touchend", onTouchEnd)
		host.removeEventListener("dblclick", onDbl); window.removeEventListener("keydown", onKey)
		window.removeEventListener("scroll", onScroll, true); vn.removeEventListener("webglcontextlost", onLost)
		vn.removeEventListener("webglcontextrestored", onRestored); Ws?.dispose(); En.forEach((t) => t.dispose())
		Zo.dispose(); Hr.depthTexture?.dispose(); disposables.forEach((d) => d.dispose()); at.dispose()
	}
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 1200
 * @framerIntrinsicHeight 750
 */
export default function MeadowSundown(props: MeadowSundownProps) {
	const { background = "#0b0d10", style } = props
	const live: Resolved = {
		meadow: { ...DEFAULT_MEADOW, ...props.meadow },
		season: props.season || DEFAULT_SEASON,
		weather: { ...DEFAULT_WEATHER, ...props.weather },
		grass: { ...DEFAULT_GRASS, ...props.grass },
		sc: { ...DEFAULT_SEASON_COLORS, ...props.seasonColors },
		tree: { ...DEFAULT_TREE, ...props.tree },
		vehicle: { ...DEFAULT_VEHICLE, ...props.vehicle },
		sky: { ...DEFAULT_SKY, ...props.sky },
		placement: { ...DEFAULT_PLACEMENT, ...props.placement },
		intro: props.intro ?? DEFAULT_INTRO,
		act: { ...DEFAULT_INTERACTION, ...props.interaction },
		day: { ...DEFAULT_DAY, ...props.day },
		wind: { ...DEFAULT_WIND, ...props.wind },
		adv: { ...DEFAULT_ADVANCED, ...props.advanced },
		onModeChange: props.onModeChange,
	}
	const hostRef = useRef<HTMLDivElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const propsRef = useRef(live)
	propsRef.current = live
	const [epoch, setEpoch] = useState(0)

	useEffect(() => {
		const host = hostRef.current, vn = canvasRef.current
		if (!host || !vn) return
		return runMeadow(host, vn, propsRef, () => setEpoch((v) => v + 1))
	}, [epoch])

	return (
		<div
			ref={hostRef}
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				aspectRatio: `${REF_W} / ${REF_H}`,
				overflow: "hidden",
				background,
				touchAction: "pan-y",
				...style,
			}}
		>
			<canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
		</div>
	)
}