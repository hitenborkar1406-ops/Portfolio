/* eslint-disable */
// Traffic Wave — Neon Hyperdrive Highway

import React, { useEffect, useRef } from "react"
import * as THREE from "three"

/** The corridor's depth in world units. Everything else is measured against it. */
const ROAD_LENGTH = 400

/**
 * Night air haze.
 */
const HAZE = 0x050608

export const NEON_DEFAULTS = {
    // Left Carriageway (Incoming Traffic / Warm Vibrant Neon Spectrum)
    leftLights: [
        "#FF007F", // Hot Neon Magenta
        "#FF3366", // Vivid Coral Pink
        "#FF0055", // Laser Crimson
        "#FF6B00", // Hyper Orange
        "#FFD600", // Solar Yellow
        "#9D00FF", // Ultraviolet Electric Purple
    ],
    // Right Carriageway (Outgoing Traffic / Cool Cyber Neon Spectrum)
    rightLights: [
        "#00F0FF", // High-Voltage Laser Cyan
        "#00E5FF", // Electric Aqua
        "#00FFB2", // Neon Mint / Spring Green
        "#38EF7D", // Acid Green
        "#4361EE", // Deep Neon Blue
        "#7209B7", // Neon Violet
    ],
    stickColor: "#39FF14", // Electric Neon Lime Guide Posts
    roadColor: "#060709",  // Deep Obsidian Asphalt
    lineColor: "#00F0FF",  // Neon Cyan Road Markings
    roadWidth: 22,
    lanes: 4,
    traffic: 20,
    sticks: 24,
    speed: 9,
    trailFade: 0,
    glow: 14,              // Enhanced bloom for radiant neon trails
    fov: 155,
    boostOn: true,
    boost: { amount: 3.2, fov: 145 },
}

export type Config = {
    leftLights: string[]
    rightLights: string[]
    stickColor: string
    roadColor: string
    lineColor: string
    roadWidth: number
    lanes: number
    traffic: number
    sticks: number
    speed: number
    trailFade: number
    glow: number
    fov: number
    boostOn: boolean
    boost?: { amount?: number; fov?: number }
}

function clamp(v: number, lo: number, hi: number, fallback: number): number {
    const n = typeof v === "number" && isFinite(v) ? v : fallback
    return Math.max(lo, Math.min(hi, n))
}

/** Panel values are whole numbers; the scene wants the real ones. */
function settingsFor(cfg: Config) {
    const traffic = clamp(cfg.traffic, 1, 20, NEON_DEFAULTS.traffic)
    const sticks = clamp(cfg.sticks, 1, 20, NEON_DEFAULTS.sticks)
    const boost = cfg.boost ?? NEON_DEFAULTS.boost
    const fov = clamp(cfg.fov, 40, 160, NEON_DEFAULTS.fov)
    return {
        roadWidth: clamp(cfg.roadWidth, 4, 30, NEON_DEFAULTS.roadWidth),
        lanes: clamp(cfg.lanes, 2, 6, NEON_DEFAULTS.lanes),
        lightPairs: Math.round(6 + traffic * traffic * 0.35),
        stickCount: Math.max(2, Math.round(5 + sticks * sticks * 0.28)),
        speedScale: clamp(cfg.speed, 0, 25, NEON_DEFAULTS.speed) / 10,
        fade: clamp(cfg.trailFade, 0, 20, NEON_DEFAULTS.trailFade) / 20,
        glow: clamp(cfg.glow, 0, 25, NEON_DEFAULTS.glow) / 10,
        fov,
        boostSpeed: cfg.boostOn ? clamp(boost?.amount ?? 3, 0, 10, 3) : 0,
        boostFov: cfg.boostOn ? clamp(boost?.fov ?? 145, 40, 200, 145) : fov,
    }
}

const random = (min: number, max: number) => Math.random() * (max - min) + min
const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

function approach(current: number, target: number, speed = 0.1, limit = 0.001) {
    let change = (target - current) * speed
    if (Math.abs(change) < limit) change = target - current
    return change
}

// ---------------------------------------------------------------------------
// Distortions
// ---------------------------------------------------------------------------

type Distortion = {
    uniforms: Record<string, THREE.IUniform>
    glsl: string
    camera?: (progress: number, time: number) => THREE.Vector3
}

const nsin = (v: number) => Math.sin(v) * 0.5 + 0.5

function makeDistortion(): Distortion {
    const uniforms = {
        uFreq: new THREE.Uniform(new THREE.Vector3(3, 6, 10)),
        uAmp: new THREE.Uniform(new THREE.Vector3(30, 30, 20)),
    }
    return {
        uniforms,
        glsl: /* glsl */ `
            uniform vec3 uAmp;
            uniform vec3 uFreq;
            #define PI 3.14159265358979
            float nsin(float val){ return sin(val) * 0.5 + 0.5; }
            vec3 getDistortion(float progress){
                float movementProgressFix = 0.02;
                return vec3(
                    cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
                    nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
                    nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
                );
            }
        `,
        camera: (progress, time) => {
            const f = uniforms.uFreq.value
            const a = uniforms.uAmp.value
            const fix = 0.02
            const d = new THREE.Vector3(
                Math.cos(progress * Math.PI * f.x + time) * a.x -
                    Math.cos(fix * Math.PI * f.x + time) * a.x,
                nsin(progress * Math.PI * f.y + time) * a.y - nsin(fix * Math.PI * f.y + time) * a.y,
                nsin(progress * Math.PI * f.z + time) * a.z - nsin(fix * Math.PI * f.z + time) * a.z
            )
            return d.multiply(new THREE.Vector3(2, 2, 2)).add(new THREE.Vector3(0, 0, -5))
        },
    }
}

const DISTORTION_INCLUDE = "#include <getDistortion_vertex>"

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------

const FOG_PARS_VERT = THREE.ShaderChunk["fog_pars_vertex"]
const FOG_VERT = THREE.ShaderChunk["fog_vertex"]
const FOG_PARS_FRAG = THREE.ShaderChunk["fog_pars_fragment"]
const FOG_FRAG = THREE.ShaderChunk["fog_fragment"]

const CAR_LIGHTS_VERTEX = /* glsl */ `
    #define USE_FOG
    ${FOG_PARS_VERT}
    attribute vec3 aOffset;
    attribute vec3 aMetrics;
    attribute vec3 aColor;

    uniform float uTravelLength;
    uniform float uTime;
    uniform float uSpeedScale;

    varying vec2 vUv;
    varying vec3 vColor;
    ${DISTORTION_INCLUDE}

    void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float trailLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= trailLength;

        transformed.z += trailLength - mod(uTime * speed * uSpeedScale + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${FOG_VERT}
    }
`

const CAR_LIGHTS_FRAGMENT = /* glsl */ `
    #define USE_FOG
    ${FOG_PARS_FRAG}
    varying vec3 vColor;
    varying vec2 vUv;
    uniform vec2 uFade;

    void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${FOG_FRAG}
    }
`

const SIDE_STICKS_VERTEX = /* glsl */ `
    #define USE_FOG
    ${FOG_PARS_VERT}
    attribute float aOffset;
    attribute vec3 aColor;
    attribute vec2 aMetrics;

    uniform float uTravelLength;
    uniform float uTime;
    uniform float uSpeedScale;

    varying vec3 vColor;

    mat4 rotationY(in float angle) {
        return mat4(cos(angle), 0, sin(angle), 0,
                    0, 1.0, 0, 0,
                    -sin(angle), 0, cos(angle), 0,
                    0, 0, 0, 1);
    }

    ${DISTORTION_INCLUDE}

    void main(){
        vec3 transformed = position.xyz;
        float stickWidth = aMetrics.x;
        float stickHeight = aMetrics.y;

        transformed.xy *= vec2(stickWidth, stickHeight);
        float travel = mod(uTime * 120. * uSpeedScale + aOffset, uTravelLength);

        transformed = (rotationY(3.14 / 2.) * vec4(transformed, 1.)).xyz;
        transformed.z += -uTravelLength + travel;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += stickHeight / 2.;
        transformed.x += -stickWidth / 2.;

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${FOG_VERT}
    }
`

const SIDE_STICKS_FRAGMENT = /* glsl */ `
    #define USE_FOG
    ${FOG_PARS_FRAG}
    varying vec3 vColor;
    void main(){
        gl_FragColor = vec4(vec3(vColor), 1.);
        ${FOG_FRAG}
    }
`

const ROAD_VERTEX = /* glsl */ `
    #define USE_FOG
    ${FOG_PARS_VERT}
    uniform float uTime;
    uniform float uTravelLength;
    varying vec2 vUv;
    ${DISTORTION_INCLUDE}

    void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${FOG_VERT}
    }
`

const ROAD_MARKINGS_VARS = /* glsl */ `
    uniform float uLanes;
    uniform vec3 uBrokenLinesColor;
    uniform vec3 uShoulderLinesColor;
    uniform float uShoulderLinesWidthPercentage;
    uniform float uBrokenLinesWidthPercentage;
    uniform float uBrokenLinesLengthPercentage;
    uniform float uSpeedScale;
    highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
    }
`

const ROAD_MARKINGS_FRAGMENT = /* glsl */ `
    uv.y = mod(uv.y + uTime * 0.1 * uSpeedScale, 1.);
    float brokenLineWidth = 1. / uLanes * uBrokenLinesWidthPercentage;
    float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

    float brokenLines = step(1. - brokenLineWidth * uLanes, fract(uv.x * uLanes)) * step(laneEmptySpace, fract(uv.y * 100.));
    brokenLines *= step(uv.x * uLanes, uLanes - 1.);
    color = mix(color, uBrokenLinesColor, brokenLines);

    float shoulderLinesWidth = 1. / uLanes * uShoulderLinesWidthPercentage;
    float shoulderLines = step(1. - shoulderLinesWidth, uv.x) + step(uv.x, shoulderLinesWidth);
    color = mix(color, uShoulderLinesColor, shoulderLines);

    vec2 noiseFreq = vec2(4., 7000.);
    float roadNoise = random(floor(uv * noiseFreq) / noiseFreq) * 0.02 - 0.01;
    color += roadNoise;
`

const ROAD_BASE_FRAGMENT = /* glsl */ `
    #define USE_FOG
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uTime;
    #include <roadMarkings_vars>
    ${FOG_PARS_FRAG}
    void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${FOG_FRAG}
    }
`

const ROAD_FRAGMENT = ROAD_BASE_FRAGMENT.replace(
    "#include <roadMarkings_fragment>",
    ROAD_MARKINGS_FRAGMENT
).replace("#include <roadMarkings_vars>", ROAD_MARKINGS_VARS)

const QUAD_VERTEX = /* glsl */ `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`

const BRIGHT_FRAGMENT = /* glsl */ `
    uniform sampler2D tScene;
    uniform float uThreshold;
    varying vec2 vUv;
    void main() {
        vec4 c = texture2D(tScene, vUv);
        float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
        gl_FragColor = vec4(c.rgb * step(uThreshold, luma), 1.0);
    }
`

const BLUR_FRAGMENT = /* glsl */ `
    uniform sampler2D tSource;
    uniform vec2 uDirection;
    varying vec2 vUv;
    void main() {
        float weights[5];
        weights[0] = 0.2270270270;
        weights[1] = 0.1945945946;
        weights[2] = 0.1216216216;
        weights[3] = 0.0540540541;
        weights[4] = 0.0162162162;
        vec3 sum = texture2D(tSource, vUv).rgb * weights[0];
        for (int i = 1; i < 5; i++) {
            vec2 offset = uDirection * float(i);
            sum += texture2D(tSource, vUv + offset).rgb * weights[i];
            sum += texture2D(tSource, vUv - offset).rgb * weights[i];
        }
        gl_FragColor = vec4(sum, 1.0);
    }
`

const COMPOSITE_FRAGMENT = /* glsl */ `
    uniform sampler2D tScene;
    uniform sampler2D tBloom;
    uniform float uStrength;
    varying vec2 vUv;
    vec3 linearToSRGB(vec3 c) {
        vec3 lo = c * 12.92;
        vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(0.4166666)) - 0.055;
        return mix(lo, hi, step(vec3(0.0031308), c));
    }
    void main() {
        vec4 base = texture2D(tScene, vUv);
        vec3 bloom = texture2D(tBloom, vUv).rgb * uStrength;
        vec3 lit = base.rgb + bloom;
        float alpha = clamp(base.a + max(bloom.r, max(bloom.g, bloom.b)), 0.0, 1.0);
        gl_FragColor = vec4(linearToSRGB(lit), alpha);
    }
`

// ---------------------------------------------------------------------------
// Scene
// ---------------------------------------------------------------------------

class TrafficWaveScene {
    private container: HTMLElement
    private cfg: Config
    private renderer: THREE.WebGLRenderer
    private scene = new THREE.Scene()
    private camera: THREE.PerspectiveCamera
    private fog: THREE.Fog
    private fogUniforms: Record<string, THREE.IUniform>

    private distortion!: Distortion
    private uTime = new THREE.Uniform(0)
    private uSpeedScale = new THREE.Uniform(1)
    private uTravelLength = new THREE.Uniform(ROAD_LENGTH)
    private uLeftFade = new THREE.Uniform(new THREE.Vector2(0, 0.6))
    private uRightFade = new THREE.Uniform(new THREE.Vector2(1, 0.4))
    private roadUniforms: Record<string, THREE.IUniform>[] = []

    private meshes: THREE.Mesh[] = []
    private quadCamera = new THREE.Camera()
    private quadScene = new THREE.Scene()
    private quad: THREE.Mesh
    private rtScene: THREE.WebGLRenderTarget
    private rtBlurA: THREE.WebGLRenderTarget
    private rtBlurB: THREE.WebGLRenderTarget
    private brightMat: THREE.ShaderMaterial
    private blurMat: THREE.ShaderMaterial
    private compositeMat: THREE.ShaderMaterial

    private width = 1
    private height = 1
    private frameId = 0
    private lastT = 0
    private elapsed = 0
    private timeOffset = 0
    private speedUp = 0
    private speedUpTarget = 0
    private fovTarget: number
    private disposed = false
    private lookTarget = new THREE.Vector3()

    private onDown: () => void
    private onUp: () => void

    constructor(container: HTMLElement, cfg: Config) {
        this.container = container
        this.cfg = cfg
        const S = settingsFor(cfg)

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
        this.renderer.setClearColor(0x000000, 0)
        this.renderer.outputColorSpace = THREE.SRGBColorSpace
        const canvas = this.renderer.domElement
        canvas.style.position = "absolute"
        canvas.style.inset = "0"
        canvas.style.width = "100%"
        canvas.style.height = "100%"
        canvas.style.display = "block"
        container.appendChild(canvas)

        this.camera = new THREE.PerspectiveCamera(S.fov, 1, 0.1, 10000)
        this.camera.position.set(0, 8, -5)
        this.fovTarget = S.fov

        this.fog = new THREE.Fog(new THREE.Color(HAZE), ROAD_LENGTH * 0.2, ROAD_LENGTH * 500)
        this.scene.fog = this.fog
        this.fogUniforms = {
            fogColor: { value: this.fog.color },
            fogNear: { value: this.fog.near },
            fogFar: { value: this.fog.far },
        }

        this.brightMat = new THREE.ShaderMaterial({
            vertexShader: QUAD_VERTEX,
            fragmentShader: BRIGHT_FRAGMENT,
            uniforms: { tScene: { value: null }, uThreshold: { value: 0.18 } },
            depthTest: false,
            depthWrite: false,
        })
        this.blurMat = new THREE.ShaderMaterial({
            vertexShader: QUAD_VERTEX,
            fragmentShader: BLUR_FRAGMENT,
            uniforms: {
                tSource: { value: null },
                uDirection: { value: new THREE.Vector2() },
            },
            depthTest: false,
            depthWrite: false,
        })
        this.compositeMat = new THREE.ShaderMaterial({
            vertexShader: QUAD_VERTEX,
            fragmentShader: COMPOSITE_FRAGMENT,
            uniforms: {
                tScene: { value: null },
                tBloom: { value: null },
                uStrength: { value: S.glow },
            },
            transparent: true,
            depthTest: false,
            depthWrite: false,
        })
        this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.brightMat)
        this.quad.frustumCulled = false
        this.quadScene.add(this.quad)

        const rtOpts = { colorSpace: THREE.LinearSRGBColorSpace }
        this.rtScene = new THREE.WebGLRenderTarget(1, 1, rtOpts)
        this.rtBlurA = new THREE.WebGLRenderTarget(1, 1, rtOpts)
        this.rtBlurB = new THREE.WebGLRenderTarget(1, 1, rtOpts)

        this.build()

        this.onDown = () => {
            const s = settingsFor(this.cfg)
            this.speedUpTarget = s.boostSpeed
            this.fovTarget = s.boostFov
        }
        this.onUp = () => {
            const s = settingsFor(this.cfg)
            this.speedUpTarget = 0
            this.fovTarget = s.fov
        }
        container.addEventListener("pointerdown", this.onDown)
        container.addEventListener("pointerleave", this.onUp)
        container.addEventListener("pointercancel", this.onUp)
        window.addEventListener("pointerup", this.onUp)
    }

    private withDistortion(material: THREE.ShaderMaterial) {
        const glsl = this.distortion.glsl
        material.onBeforeCompile = (shader) => {
            shader.vertexShader = shader.vertexShader.replace(DISTORTION_INCLUDE, glsl)
        }
        return material
    }

    private build() {
        const S = settingsFor(this.cfg)
        this.distortion = makeDistortion()
        this.uSpeedScale.value = S.speedScale
        this.uLeftFade.value.set(0, 1 - S.fade)
        this.uRightFade.value.set(1, 0 + S.fade)
        this.roadUniforms = []

        this.buildPlane(S, -1)
        this.buildPlane(S, 1)

        const left = this.buildCarLights(S, this.cfg.leftLights, 60, 80, this.uLeftFade)
        left.position.setX(-S.roadWidth / 2)
        const right = this.buildCarLights(S, this.cfg.rightLights, -120, -160, this.uRightFade)
        right.position.setX(S.roadWidth / 2)
        this.buildSticks(S, -1)
        this.buildSticks(S, 1)
    }

    private add(mesh: THREE.Mesh) {
        mesh.frustumCulled = false
        this.scene.add(mesh)
        this.meshes.push(mesh)
        return mesh
    }

    private buildCarLights(
        S: ReturnType<typeof settingsFor>,
        palette: string[],
        speedMin: number,
        speedMax: number,
        fade: THREE.Uniform
    ) {
        const curve = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1))
        const base = new THREE.TubeGeometry(curve, 40, 1, 8, false)
        const geometry = new THREE.InstancedBufferGeometry()
        geometry.index = base.index
        geometry.attributes = base.attributes

        const pairs = S.lightPairs
        geometry.instanceCount = pairs * 2

        const laneWidth = S.roadWidth / S.lanes
        const source = palette && palette.length ? palette : NEON_DEFAULTS.leftLights
        const colors = source.map((c) => new THREE.Color(c))

        const aOffset: number[] = []
        const aMetrics: number[] = []
        const aColor: number[] = []

        for (let i = 0; i < pairs; i++) {
            const radius = random(0.06, 0.16)
            const trailLength = random(ROAD_LENGTH * 0.06, ROAD_LENGTH * 0.18)
            const speed = random(speedMin, speedMax)

            const lane = i % S.lanes
            const carWidth = random(0.3, 0.5) * laneWidth
            const laneX =
                lane * laneWidth -
                S.roadWidth / 2 +
                laneWidth / 2 +
                random(-0.2, 0.2) * laneWidth
            const offsetY = random(0.05, 1) + radius * 1.3
            const offsetZ = -random(0, ROAD_LENGTH)

            aOffset.push(laneX - carWidth / 2, offsetY, offsetZ)
            aOffset.push(laneX + carWidth / 2, offsetY, offsetZ)

            aMetrics.push(radius, trailLength, speed)
            aMetrics.push(radius, trailLength, speed)

            const color = pickRandom(colors)
            aColor.push(color.r, color.g, color.b)
            aColor.push(color.r, color.g, color.b)
        }

        geometry.setAttribute(
            "aOffset",
            new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false)
        )
        geometry.setAttribute(
            "aMetrics",
            new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false)
        )
        geometry.setAttribute(
            "aColor",
            new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false)
        )

        const material = this.withDistortion(
            new THREE.ShaderMaterial({
                vertexShader: CAR_LIGHTS_VERTEX,
                fragmentShader: CAR_LIGHTS_FRAGMENT,
                transparent: true,
                uniforms: Object.assign(
                    {
                        uTime: this.uTime,
                        uTravelLength: this.uTravelLength,
                        uSpeedScale: this.uSpeedScale,
                        uFade: fade,
                    },
                    this.fogUniforms,
                    this.distortion.uniforms
                ),
            })
        )
        return this.add(new THREE.Mesh(geometry, material))
    }

    private buildSticks(S: ReturnType<typeof settingsFor>, side: number) {
        const base = new THREE.PlaneGeometry(1, 1)
        const geometry = new THREE.InstancedBufferGeometry()
        geometry.index = base.index
        geometry.attributes = base.attributes

        const total = S.stickCount
        geometry.instanceCount = total
        const spacing = ROAD_LENGTH / (total - 1)
        const color = new THREE.Color(this.cfg.stickColor || NEON_DEFAULTS.stickColor)

        const aOffset: number[] = []
        const aColor: number[] = []
        const aMetrics: number[] = []

        for (let i = 0; i < total; i++) {
            aOffset.push((i - 1) * spacing * 2 + spacing * Math.random())
            aColor.push(color.r, color.g, color.b)
            aMetrics.push(random(0.12, 0.5), random(1.3, 1.7))
        }

        geometry.setAttribute(
            "aOffset",
            new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 1, false)
        )
        geometry.setAttribute(
            "aColor",
            new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false)
        )
        geometry.setAttribute(
            "aMetrics",
            new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false)
        )

        const material = this.withDistortion(
            new THREE.ShaderMaterial({
                vertexShader: SIDE_STICKS_VERTEX,
                fragmentShader: SIDE_STICKS_FRAGMENT,
                side: THREE.DoubleSide,
                uniforms: Object.assign(
                    {
                        uTime: this.uTime,
                        uTravelLength: this.uTravelLength,
                        uSpeedScale: this.uSpeedScale,
                    },
                    this.fogUniforms,
                    this.distortion.uniforms
                ),
            })
        )
        const mesh = this.add(new THREE.Mesh(geometry, material))
        mesh.position.setX(side < 0 ? -S.roadWidth : S.roadWidth + 0.5)
        return mesh
    }

    private buildPlane(S: ReturnType<typeof settingsFor>, side: number) {
        const geometry = new THREE.PlaneGeometry(S.roadWidth, ROAD_LENGTH, 20, 100)
        const uniforms: Record<string, THREE.IUniform> = {
            uTravelLength: this.uTravelLength,
            uColor: { value: new THREE.Color(this.cfg.roadColor) },
            uTime: this.uTime,
            uLanes: { value: S.lanes },
            uBrokenLinesColor: { value: new THREE.Color(this.cfg.lineColor) },
            uShoulderLinesColor: { value: new THREE.Color(this.cfg.lineColor) },
            uShoulderLinesWidthPercentage: { value: 0.05 },
            uBrokenLinesLengthPercentage: { value: 0.5 },
            uBrokenLinesWidthPercentage: { value: 0.1 },
            uSpeedScale: this.uSpeedScale,
        }
        this.roadUniforms.push(uniforms)

        const material = this.withDistortion(
            new THREE.ShaderMaterial({
                vertexShader: ROAD_VERTEX,
                fragmentShader: ROAD_FRAGMENT,
                side: THREE.DoubleSide,
                uniforms: Object.assign(uniforms, this.fogUniforms, this.distortion.uniforms),
            })
        )
        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 2
        mesh.position.z = -ROAD_LENGTH / 2
        mesh.position.x += (S.roadWidth / 2) * side
        return this.add(mesh)
    }

    private teardown() {
        for (const mesh of this.meshes) {
            this.scene.remove(mesh)
            mesh.geometry.dispose()
            ;(mesh.material as THREE.Material).dispose()
        }
        this.meshes = []
    }

    start() {
        this.lastT = performance.now()
        const tick = () => {
            if (this.disposed) return
            this.step()
            this.frameId = requestAnimationFrame(tick)
        }
        this.frameId = requestAnimationFrame(tick)
    }

    setSize(width: number, height: number) {
        if (this.disposed) return
        this.width = Math.max(1, width)
        this.height = Math.max(1, height)
        this.renderer.setSize(this.width, this.height, false)
        const pr = this.renderer.getPixelRatio()
        const w = Math.max(1, Math.floor(this.width * pr))
        const h = Math.max(1, Math.floor(this.height * pr))
        this.rtScene.setSize(w, h)
        this.rtBlurA.setSize(Math.max(1, w >> 1), Math.max(1, h >> 1))
        this.rtBlurB.setSize(Math.max(1, w >> 1), Math.max(1, h >> 1))
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
    }

    updateConfig(next: Config) {
        if (this.disposed) return
        const prev = this.cfg
        this.cfg = next
        const S = settingsFor(next)

        const rebuild =
            next.roadWidth !== prev.roadWidth ||
            next.lanes !== prev.lanes ||
            next.traffic !== prev.traffic ||
            next.sticks !== prev.sticks ||
            next.stickColor !== prev.stickColor ||
            next.leftLights?.join(",") !== prev.leftLights?.join(",") ||
            next.rightLights?.join(",") !== prev.rightLights?.join(",")

        if (rebuild) {
            this.teardown()
            this.build()
        } else {
            this.uSpeedScale.value = S.speedScale
            this.uLeftFade.value.set(0, 1 - S.fade)
            this.uRightFade.value.set(1, 0 + S.fade)
            for (const u of this.roadUniforms) {
                ;(u.uColor.value as THREE.Color).set(next.roadColor)
                ;(u.uBrokenLinesColor.value as THREE.Color).set(next.lineColor)
                ;(u.uShoulderLinesColor.value as THREE.Color).set(next.lineColor)
            }
        }

        this.compositeMat.uniforms.uStrength.value = S.glow
        if (next.fov !== prev.fov && this.speedUpTarget === 0) {
            this.fovTarget = S.fov
            this.camera.fov = S.fov
            this.camera.updateProjectionMatrix()
        }
    }

    private step() {
        const now = performance.now()
        let dt = (now - this.lastT) / 1000
        this.lastT = now
        if (!isFinite(dt) || dt < 0) dt = 0
        if (dt > 0.05) dt = 0.05
        this.elapsed += dt

        const k = Math.exp(-(-60 * Math.log2(1 - 0.1)) * dt)
        this.speedUp += approach(this.speedUp, this.speedUpTarget, k, 0.00001)
        this.timeOffset += this.speedUp * dt
        const time = this.elapsed + this.timeOffset
        this.uTime.value = time

        let updateCamera = false
        const fovChange = approach(this.camera.fov, this.fovTarget, k)
        if (fovChange !== 0) {
            this.camera.fov += fovChange * dt * 6
            updateCamera = true
        }
        if (this.distortion.camera) {
            const d = this.distortion.camera(0.025, time)
            this.lookTarget.set(
                this.camera.position.x + d.x,
                this.camera.position.y + d.y,
                this.camera.position.z + d.z
            )
            this.camera.lookAt(this.lookTarget)
            updateCamera = true
        }
        if (updateCamera) this.camera.updateProjectionMatrix()

        this.render()
    }

    private render() {
        const r = this.renderer
        r.setRenderTarget(this.rtScene)
        r.clear()
        r.render(this.scene, this.camera)

        const strength = this.compositeMat.uniforms.uStrength.value as number
        if (strength > 0.001) {
            this.quad.material = this.brightMat
            this.brightMat.uniforms.tScene.value = this.rtScene.texture
            r.setRenderTarget(this.rtBlurA)
            r.render(this.quadScene, this.quadCamera)

            const stepX = 1.5 / this.rtBlurA.width
            const stepY = 1.5 / this.rtBlurA.height

            this.quad.material = this.blurMat
            this.blurMat.uniforms.tSource.value = this.rtBlurA.texture
            ;(this.blurMat.uniforms.uDirection.value as THREE.Vector2).set(stepX, 0)
            r.setRenderTarget(this.rtBlurB)
            r.render(this.quadScene, this.quadCamera)

            this.blurMat.uniforms.tSource.value = this.rtBlurB.texture
            ;(this.blurMat.uniforms.uDirection.value as THREE.Vector2).set(0, stepY)
            r.setRenderTarget(this.rtBlurA)
            r.render(this.quadScene, this.quadCamera)
        }

        this.quad.material = this.compositeMat
        this.compositeMat.uniforms.tScene.value = this.rtScene.texture
        this.compositeMat.uniforms.tBloom.value = this.rtBlurA.texture
        r.setRenderTarget(null)
        r.clear()
        r.render(this.quadScene, this.quadCamera)
    }

    dispose() {
        this.disposed = true
        cancelAnimationFrame(this.frameId)
        this.container.removeEventListener("pointerdown", this.onDown)
        this.container.removeEventListener("pointerleave", this.onUp)
        this.container.removeEventListener("pointercancel", this.onUp)
        window.removeEventListener("pointerup", this.onUp)
        this.teardown()
        this.quad.geometry.dispose()
        this.brightMat.dispose()
        this.blurMat.dispose()
        this.compositeMat.dispose()
        this.rtScene.dispose()
        this.rtBlurA.dispose()
        this.rtBlurB.dispose()
        this.renderer.dispose()
        const canvas = this.renderer.domElement
        if (canvas.parentNode === this.container) this.container.removeChild(canvas)
    }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export interface TrafficWaveProps {
    leftLights?: string[]
    rightLights?: string[]
    stickColor?: string
    roadColor?: string
    lineColor?: string
    roadWidth?: number
    lanes?: number
    traffic?: number
    sticks?: number
    speed?: number
    trailFade?: number
    glow?: number
    fov?: number
    boostOn?: boolean
    boost?: { amount?: number; fov?: number }
    style?: React.CSSProperties
    className?: string
}

export function TrafficWave(props: TrafficWaveProps) {
    const {
        leftLights = NEON_DEFAULTS.leftLights,
        rightLights = NEON_DEFAULTS.rightLights,
        stickColor = NEON_DEFAULTS.stickColor,
        roadColor = NEON_DEFAULTS.roadColor,
        lineColor = NEON_DEFAULTS.lineColor,
        roadWidth = NEON_DEFAULTS.roadWidth,
        lanes = NEON_DEFAULTS.lanes,
        traffic = NEON_DEFAULTS.traffic,
        sticks = NEON_DEFAULTS.sticks,
        speed = NEON_DEFAULTS.speed,
        trailFade = NEON_DEFAULTS.trailFade,
        glow = NEON_DEFAULTS.glow,
        fov = NEON_DEFAULTS.fov,
        boostOn = NEON_DEFAULTS.boostOn,
        boost = NEON_DEFAULTS.boost,
        style,
        className,
    } = props

    const containerRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<TrafficWaveScene | null>(null)
    const cfgRef = useRef<Config>(null as any)

    cfgRef.current = {
        leftLights,
        rightLights,
        stickColor,
        roadColor,
        lineColor,
        roadWidth,
        lanes,
        traffic,
        sticks,
        speed,
        trailFade,
        glow,
        fov,
        boostOn,
        boost,
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        let scene: TrafficWaveScene
        try {
            scene = new TrafficWaveScene(container, cfgRef.current)
        } catch (e) {
            console.error("TrafficWave WebGL init error:", e)
            return
        }
        sceneRef.current = scene
        scene.setSize(container.clientWidth, container.clientHeight)
        scene.start()

        const ro = new ResizeObserver(() => {
            if (container) {
                scene.setSize(container.clientWidth, container.clientHeight)
            }
        })
        ro.observe(container)
        return () => {
            ro.disconnect()
            scene.dispose()
            sceneRef.current = null
        }
    }, [])

    useEffect(() => {
        sceneRef.current?.updateConfig(cfgRef.current)
    }, [
        leftLights?.join?.(","),
        rightLights?.join?.(","),
        stickColor,
        roadColor,
        lineColor,
        roadWidth,
        lanes,
        traffic,
        sticks,
        speed,
        trailFade,
        glow,
        fov,
        boostOn,
        boost?.amount,
        boost?.fov,
    ])

    // Dynamic scroll velocity reaction
    useEffect(() => {
        let lastScrollY = window.scrollY
        let scrollTimeout: number | undefined

        const onScroll = () => {
            const currentScrollY = window.scrollY
            const delta = Math.abs(currentScrollY - lastScrollY)
            lastScrollY = currentScrollY

            const bonus = Math.min(10, delta * 0.12)
            if (sceneRef.current) {
                sceneRef.current.updateConfig({
                    ...cfgRef.current,
                    speed: (cfgRef.current.speed || NEON_DEFAULTS.speed) + bonus,
                })
            }

            window.clearTimeout(scrollTimeout)
            scrollTimeout = window.setTimeout(() => {
                if (sceneRef.current) {
                    sceneRef.current.updateConfig(cfgRef.current)
                }
            }, 120)
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.clearTimeout(scrollTimeout)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            role="img"
            aria-label="A neon night highway streaked with colorful head and tail lights"
            className={className}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                cursor: boostOn ? "pointer" : "default",
                ...style,
            }}
        />
    )
}

TrafficWave.displayName = "TrafficWave"
export default TrafficWave
