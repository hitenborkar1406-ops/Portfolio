/* eslint-disable */
// Rubber Spheres — Originkit

"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

const CAM_Z = 30
const CAM_FOV = 45
const EXPOSURE = 1.15
const SIZE_RANDOM = 0.22
const DAMPING = 0.92
const ATTRACTION = 0.005
const MOUSE_RADIUS = 8
const MOUSE_SCALE = 0.005
const MAX_SPEED = 4
const RELAX_ITERS = 3
const PRESETTLE_STEPS = 150
const FIXED_DT = 1 / 60
const MAX_STEPS_PER_FRAME = 6
const SPHERE_SEGMENTS = 48
const SHADOW_MAP = 2048

const AWAY = -9999

export type LightingPreset =
    | "Soft Studio"
    | "Bright Professional"
    | "Neutral Flat"
    | "Cinematic Drama"
    | "Neon Cyberpunk"
    | "Sunset Warmth"

export type GravityAnchor = "Center" | "Bottom" | "Top"

type FieldGroup = {
    spreadX?: number
    spreadY?: number
}

type MaterialGroup = {
    roughness?: number
    gloss?: number
    transparency?: number
}

type MotionGroup = {
    gravityAnchor?: GravityAnchor
    bounciness?: number
    mouseForce?: number
    parallax?: number
}

export type ImageFit = "Cover" | "Contain"

type ImageItem = {
    image?: string | { src?: string }
    fit?: ImageFit
    offsetX?: number
    offsetY?: number
}

export interface RubberSpheresProps {
    style?: React.CSSProperties
    background?: string
    baseColor?: string
    accentColor?: string
    colorMode?: "Single" | "Multi"
    balloonColor?: string
    balloonColors?: string[]
    density?: number
    dotSize?: number
    lighting?: LightingPreset
    field?: FieldGroup
    material?: MaterialGroup
    motion?: MotionGroup
    sourceMode?: "Images" | "Colors"
    images?: ImageItem[]
}

const DEFAULT_FIELD: Required<FieldGroup> = { spreadX: 150, spreadY: 100 }
const DEFAULT_MATERIAL: Required<MaterialGroup> = {
    roughness: 100,
    gloss: 100,
    transparency: 0,
}
const DEFAULT_MOTION: Required<MotionGroup> = {
    gravityAnchor: "Center",
    bounciness: 100,
    mouseForce: 100,
    parallax: 80,
}

interface Body {
    root: THREE.Object3D
    meshes: THREE.Mesh[]
    pos: THREE.Vector3
    vel: THREE.Vector3
    quat: THREE.Quaternion
    axis: THREE.Vector3
    spin: number
    jitter: number
    radius: number
    colorRoll: number
    baseSpin: number
}

interface Decal {
    texture: THREE.Texture
    aspect: number
    fit: ImageFit
    offsetX: number
    offsetY: number
}

interface DecalUniforms {
    uDecalMap: { value: THREE.Texture | null }
    uDecalHalf: { value: THREE.Vector2 }
    uDecalOffset: { value: THREE.Vector2 }
}

function decalHalfExtents(aspect: number, fit: ImageFit): [number, number] {
    if (fit === "Contain") {
        const d = Math.sqrt(1 + aspect * aspect) || 1
        return [aspect / d, 1 / d]
    }
    return aspect >= 1 ? [aspect, 1] : [1, 1 / aspect]
}

function imageSrc(v: ImageItem["image"]): string {
    if (!v) return ""
    return typeof v === "string" ? v : (v.src ?? "")
}

const DECAL_VERT_DECL = "varying vec3 vDecalPos;"
const DECAL_FRAG_DECL = `uniform sampler2D uDecalMap;
uniform vec2 uDecalHalf;
uniform vec2 uDecalOffset;
varying vec3 vDecalPos;`
const DECAL_FRAG_BODY = `#include <map_fragment>
{
    vec3 dn = normalize(vDecalPos);
    float face = smoothstep(0.0, 0.35, dn.z);
    vec2 dUv = (vDecalPos.xy - uDecalOffset) / uDecalHalf;
    float inside = step(abs(dUv.x), 1.0) * step(abs(dUv.y), 1.0);
    vec4 slide = texture2D(uDecalMap, dUv * 0.5 + 0.5);
    diffuseColor.rgb = mix(diffuseColor.rgb, slide.rgb, face * inside * slide.a);
}`

function attachDecal(mat: THREE.MeshPhysicalMaterial, uniforms: DecalUniforms) {
    mat.userData.decal = uniforms
    mat.onBeforeCompile = (shader: any) => {
        const u = mat.userData.decal as DecalUniforms
        shader.uniforms.uDecalMap = u.uDecalMap
        shader.uniforms.uDecalHalf = u.uDecalHalf
        shader.uniforms.uDecalOffset = u.uDecalOffset
        shader.vertexShader = shader.vertexShader
            .replace("#include <common>", "#include <common>\n" + DECAL_VERT_DECL)
            .replace(
                "#include <begin_vertex>",
                "#include <begin_vertex>\nvDecalPos = position;"
            )
        shader.fragmentShader = shader.fragmentShader
            .replace("#include <common>", "#include <common>\n" + DECAL_FRAG_DECL)
            .replace("#include <map_fragment>", DECAL_FRAG_BODY)
    }
    ;(mat as any).customProgramCacheKey = () => "rubber-decal"
    mat.needsUpdate = true
}

function detachDecal(mat: THREE.MeshPhysicalMaterial) {
    if (!mat.userData.decal) return
    mat.userData.decal = null
    mat.onBeforeCompile = () => {}
    ;(mat as any).customProgramCacheKey = () => "rubber-plain"
    mat.needsUpdate = true
}

interface Live {
    baseColor: string
    accentColor: string
    colorMode: "Single" | "Multi"
    balloonColor: string
    balloonColors: string[]
    dotSize: number
    spreadX: number
    spreadY: number
    roughness: number
    gloss: number
    transparency: number
    gravityAnchor: GravityAnchor
    bounciness: number
    mouseForce: number
    parallax: number
    lighting: LightingPreset
}

interface GL {
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    hemi: THREE.HemisphereLight
    key: THREE.DirectionalLight
    fill: THREE.DirectionalLight
    rim: THREE.DirectionalLight
}

function disposeBodies(scene: THREE.Scene, bodies: Body[]) {
    for (const b of bodies) {
        scene.remove(b.root)
        for (const m of b.meshes) {
            const mat = m.material as THREE.Material | THREE.Material[]
            if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
            else mat.dispose()
        }
    }
}

export default function RubberSpheres(props: RubberSpheresProps) {
    const {
        style,
        background = "transparent",
        baseColor = "#FFFFFF",
        accentColor = "#EAAA00",
        colorMode = "Multi",
        balloonColor = "#13192B",
        balloonColors = ["#111626", "#151D33", "#1A243E", "#0D1220"],
        density = 26,
        dotSize = 165,
        lighting = "Cinematic Drama",
        field,
        material,
        motion,
        sourceMode = "Images",
        images = [],
    } = props

    const resolvedImages = sourceMode === "Images" ? images : []
    const fieldGroup = { ...DEFAULT_FIELD, ...(field ?? {}) }
    const materialGroup = { ...DEFAULT_MATERIAL, ...(material ?? {}) }
    const motionGroup = { ...DEFAULT_MOTION, ...(motion ?? {}) }

    const hostRef = useRef<HTMLDivElement>(null)
    const glRef = useRef<GL | null>(null)
    const bodiesRef = useRef<Body[]>([])
    const stepRef = useRef<(() => void) | null>(null)
    const sphereGeoRef = useRef<THREE.SphereGeometry | null>(null)
    const texturesRef = useRef<Map<string, THREE.Texture>>(new Map())
    const decalsRef = useRef<Decal[]>([])
    const [textureVersion, setTextureVersion] = useState(0)

    const live = useRef<Live>({} as Live)
    live.current = {
        baseColor,
        accentColor,
        colorMode,
        balloonColor,
        balloonColors,
        dotSize,
        spreadX: fieldGroup.spreadX,
        spreadY: fieldGroup.spreadY,
        roughness: materialGroup.roughness,
        gloss: materialGroup.gloss,
        transparency: materialGroup.transparency,
        gravityAnchor: motionGroup.gravityAnchor,
        bounciness: motionGroup.bounciness,
        mouseForce: motionGroup.mouseForce,
        parallax: motionGroup.parallax,
        lighting,
    }

    const applyMaterials = React.useCallback(() => {
        const l = live.current
        const palette =
            l.colorMode === "Multi" && l.balloonColors.length > 0
                ? l.balloonColors.map((c) => new THREE.Color(c))
                : [new THREE.Color(l.balloonColor)]
        const rough = l.roughness / 100
        const gloss = l.gloss / 100
        const trans = l.transparency / 100
        const size = l.dotSize / 100

        for (const b of bodiesRef.current) {
            for (let i = 0; i < b.meshes.length; i++) {
                const mat = b.meshes[i].material as THREE.MeshPhysicalMaterial
                const col =
                    l.colorMode === "Multi"
                        ? palette[Math.min(palette.length - 1, Math.floor(b.colorRoll * palette.length))]
                        : palette[0]
                mat.color.copy(col)
                mat.roughness = rough
                mat.metalness = 0.02 + gloss * 0.08
                mat.clearcoat = gloss
                mat.clearcoatRoughness = Math.max(0.15, 0.4 - gloss * 0.25)
                mat.sheen = 0.5 + gloss * 0.5
                mat.sheenColor.copy(col)
                mat.sheenRoughness = Math.max(0.2, 0.5 - gloss * 0.3)
                mat.reflectivity = 0.1 + gloss * 0.4
                mat.ior = 1.45 + gloss * 0.05
                mat.transparent = trans > 0
                mat.opacity = 1 - trans * 0.6
                mat.transmission = trans * 0.95
                mat.thickness = size * 1.5
                mat.needsUpdate = true
            }
        }
    }, [])

    const applyDecals = React.useCallback(() => {
        const decals = decalsRef.current
        const bodies = bodiesRef.current
        const active = decals.length > 0

        for (let i = 0; i < bodies.length; i++) {
            const b = bodies[i]
            const d = active ? decals[i % decals.length] : null

            for (const mesh of b.meshes) {
                const mat = mesh.material as THREE.MeshPhysicalMaterial
                if (!d) {
                    detachDecal(mat)
                    continue
                }
                const [hx, hy] = decalHalfExtents(d.aspect, d.fit)
                const pan = d.fit === "Cover"
                const ox = pan ? (d.offsetX / 100) * hx : 0
                const oy = pan ? (d.offsetY / 100) * hy : 0
                const u = mat.userData.decal as DecalUniforms | null | undefined
                if (u) {
                    u.uDecalMap.value = d.texture
                    u.uDecalHalf.value.set(hx, hy)
                    u.uDecalOffset.value.set(ox, oy)
                } else {
                    attachDecal(mat, {
                        uDecalMap: { value: d.texture },
                        uDecalHalf: { value: new THREE.Vector2(hx, hy) },
                        uDecalOffset: { value: new THREE.Vector2(ox, oy) },
                    })
                }
            }

            if (d) {
                if (b.spin !== 0) {
                    b.spin = 0
                    b.quat.identity()
                }
            } else if (b.spin === 0) {
                b.spin = b.baseSpin
            }
        }
    }, [])

    useEffect(() => {
        const host = hostRef.current
        if (!host) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(CAM_FOV, 1, 0.1, 1000)
        camera.position.set(0, 0, CAM_Z)

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
        renderer.setClearColor(0x000000, 0)
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = EXPOSURE
        renderer.outputColorSpace = THREE.SRGBColorSpace
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.domElement.style.display = "block"
        host.appendChild(renderer.domElement)

        const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.2)
        scene.add(hemi)
        const key = new THREE.DirectionalLight(0xffffff, 1.4)
        key.castShadow = true
        key.shadow.mapSize.width = SHADOW_MAP
        key.shadow.mapSize.height = SHADOW_MAP
        key.shadow.camera.near = 0.5
        key.shadow.camera.far = 150
        key.shadow.bias = -0.0005
        key.shadow.normalBias = 0.05
        key.shadow.radius = 4
        scene.add(key)
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
        scene.add(fillLight)
        const rim = new THREE.DirectionalLight(0xffffff, 0.6)
        scene.add(rim)

        const sphereGeo = new THREE.SphereGeometry(1, SPHERE_SEGMENTS, SPHERE_SEGMENTS)
        sphereGeoRef.current = sphereGeo

        const gl: GL = { scene, camera, renderer, hemi, key, fill: fillLight, rim }
        glRef.current = gl

        let visible = true
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) visible = e.isIntersecting
            },
            { threshold: 0 }
        )
        io.observe(host)

        const resize = () => {
            const w = host.clientWidth || host.offsetWidth
            const h = host.clientHeight || host.offsetHeight
            if (!w || !h) return
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }
        const ro = new ResizeObserver(resize)
        ro.observe(host)
        resize()

        const ndc = new THREE.Vector2()
        const mousePos = new THREE.Vector3(0, 0, AWAY)
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
        const ray = new THREE.Raycaster()

        const onPointerMove = (e: PointerEvent) => {
            const r = host.getBoundingClientRect()
            if (!r.width || !r.height) return
            if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
                mousePos.set(0, 0, AWAY)
                return
            }
            ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1
            ndc.y = -((e.clientY - r.top) / r.height) * 2 + 1
            ray.setFromCamera(ndc, camera)
            if (!ray.ray.intersectPlane(plane, mousePos)) mousePos.set(0, 0, AWAY)
        }
        const clearPointer = () => mousePos.set(0, 0, AWAY)
        host.addEventListener("pointermove", onPointerMove, { passive: true })
        host.addEventListener("pointerleave", clearPointer)
        window.addEventListener("blur", clearPointer)

        let targetCamY = 0
        const onScroll = () => {
            const r = host.getBoundingClientRect()
            const centre = r.top + host.offsetHeight / 2
            const offset = (centre - window.innerHeight / 2) * 0.015 * (live.current.parallax / 100)
            targetCamY = -offset
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()

        const anchor = new THREE.Vector3()
        const toCentre = new THREE.Vector3()
        const away = new THREE.Vector3()
        const delta = new THREE.Vector3()
        const relVel = new THREE.Vector3()
        const spinStep = new THREE.Quaternion()
        let shadowExtent = 0

        const step = () => {
            const l = live.current
            const bodies = bodiesRef.current
            const n = bodies.length
            const size = l.dotSize / 100
            const sx = Math.max(0.01, l.spreadX / 100)
            const sy = Math.max(0.01, l.spreadY / 100)
            const force = (l.mouseForce / 100) * 10 * MOUSE_SCALE
            const restitution = 0.3 + (l.bounciness / 100) * 0.7

            anchor.set(
                0,
                l.gravityAnchor === "Bottom" ? -15 : l.gravityAnchor === "Top" ? 15 : 0,
                0
            )

            const extent = Math.round(20 + 15 * Math.max(sx, sy))
            if (extent !== shadowExtent) {
                shadowExtent = extent
                const c = key.shadow.camera
                c.left = -extent
                c.right = extent
                c.top = extent
                c.bottom = -extent
                c.updateProjectionMatrix()
            }

            for (let i = 0; i < n; i++) {
                const b = bodies[i]
                b.radius = size * b.jitter

                toCentre.copy(anchor).sub(b.pos)
                toCentre.x /= sx
                toCentre.y /= sy
                b.vel.addScaledVector(toCentre, ATTRACTION)

                if (mousePos.z !== AWAY) {
                    const d = b.pos.distanceTo(mousePos)
                    if (d < MOUSE_RADIUS) {
                        away.copy(b.pos).sub(mousePos)
                        if (away.lengthSq() < 1e-8) away.set(0, 1, 0)
                        away.normalize()
                        b.vel.addScaledVector(away, (MOUSE_RADIUS - d) * force)
                    }
                }

                if (b.vel.length() > MAX_SPEED) b.vel.setLength(MAX_SPEED)
                b.vel.multiplyScalar(DAMPING)
                b.pos.add(b.vel)

                spinStep.setFromAxisAngle(b.axis, b.spin)
                b.quat.multiply(spinStep)
            }

            for (let iter = 0; iter < RELAX_ITERS; iter++) {
                for (let i = 0; i < n; i++) {
                    const a = bodies[i]
                    for (let j = i + 1; j < n; j++) {
                        const c = bodies[j]
                        const minDist = a.radius + c.radius
                        if (
                            Math.abs(a.pos.x - c.pos.x) > minDist ||
                            Math.abs(a.pos.y - c.pos.y) > minDist ||
                            Math.abs(a.pos.z - c.pos.z) > minDist
                        )
                            continue
                        const dist = a.pos.distanceTo(c.pos)
                        if (dist >= minDist) continue
                        delta.copy(a.pos).sub(c.pos)
                        if (delta.lengthSq() < 1e-8) delta.set(1, 0, 0)
                        delta.normalize()
                        const push = (minDist - dist) * 0.5
                        a.pos.addScaledVector(delta, push)
                        c.pos.addScaledVector(delta, -push)
                        relVel.copy(a.vel).sub(c.vel)
                        const approach = relVel.dot(delta)
                        if (approach < 0) {
                            a.vel.addScaledVector(delta, -approach * restitution)
                            c.vel.addScaledVector(delta, approach * restitution)
                        }
                    }
                }
            }

            camera.position.y += (targetCamY - camera.position.y) * 0.05
        }
        stepRef.current = step

        let raf = 0
        let last = typeof performance !== "undefined" ? performance.now() : Date.now()
        let acc = 0
        const tick = () => {
            raf = requestAnimationFrame(tick)
            const now = typeof performance !== "undefined" ? performance.now() : Date.now()
            let dt = (now - last) / 1000
            last = now
            if (!visible) return
            if (dt > 0.25) dt = 0.25
            acc += dt
            let steps = 0
            while (acc >= FIXED_DT && steps < MAX_STEPS_PER_FRAME) {
                step()
                acc -= FIXED_DT
                steps++
            }
            if (acc >= FIXED_DT) acc = 0
            for (const b of bodiesRef.current) {
                b.root.position.copy(b.pos)
                b.root.quaternion.copy(b.quat)
                b.root.scale.setScalar(b.radius)
            }
            renderer.render(scene, camera)
        }
        raf = requestAnimationFrame(tick)

        return () => {
            cancelAnimationFrame(raf)
            io.disconnect()
            ro.disconnect()
            host.removeEventListener("pointermove", onPointerMove)
            host.removeEventListener("pointerleave", clearPointer)
            window.removeEventListener("blur", clearPointer)
            window.removeEventListener("scroll", onScroll)
            stepRef.current = null
            disposeBodies(scene, bodiesRef.current)
            bodiesRef.current = []
            sphereGeoRef.current?.dispose()
            sphereGeoRef.current = null
            scene.clear()
            renderer.dispose()
            if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
            glRef.current = null
        }
    }, [])

    const srcList = sourceMode === "Images" ? resolvedImages.map((it) => imageSrc(it.image)).filter(Boolean) : []
    const srcKey = JSON.stringify(srcList)

    useEffect(() => {
        const srcs: string[] = JSON.parse(srcKey)
        const cache = texturesRef.current

        const wanted = new Set(srcs)
        for (const [url, tex] of Array.from(cache.entries())) {
            if (!wanted.has(url)) {
                tex.dispose()
                cache.delete(url)
            }
        }

        const missing = srcs.filter((u) => !cache.has(u))
        if (missing.length === 0) {
            setTextureVersion((v) => v + 1)
            return
        }

        let cancelled = false
        const loader = new THREE.TextureLoader()
        loader.setCrossOrigin("anonymous")
        const maxAniso = glRef.current?.renderer.capabilities.getMaxAnisotropy?.() ?? 1

        Promise.all(
            missing.map(
                (url) =>
                    new Promise<[string, THREE.Texture | null]>((resolve) => {
                        loader.load(
                            url,
                            (t: THREE.Texture) => resolve([url, t]),
                            undefined,
                            () => resolve([url, null])
                        )
                    })
            )
        ).then((loaded) => {
            if (cancelled) {
                for (const [, t] of loaded) t?.dispose()
                return
            }
            for (const [url, t] of loaded) {
                if (!t) continue
                t.colorSpace = THREE.SRGBColorSpace
                t.wrapS = THREE.ClampToEdgeWrapping
                t.wrapT = THREE.ClampToEdgeWrapping
                t.anisotropy = Math.min(8, maxAniso)
                t.needsUpdate = true
                cache.set(url, t)
            }
            setTextureVersion((v) => v + 1)
        })

        return () => {
            cancelled = true
        }
    }, [srcKey, sourceMode])

    const framingKey = JSON.stringify(
        (sourceMode === "Images" ? resolvedImages : [])
            .filter((it) => imageSrc(it.image))
            .map((it) => [
                imageSrc(it.image),
                it.fit === "Contain" ? "Contain" : "Cover",
                Math.round(it.offsetX ?? 0),
                Math.round(it.offsetY ?? 0),
            ])
    )

    useEffect(() => {
        const spec: [string, ImageFit, number, number][] = JSON.parse(framingKey)
        const cache = texturesRef.current
        const next: Decal[] = []
        for (const [url, fit, offsetX, offsetY] of spec) {
            const texture = cache.get(url)
            if (!texture) continue
            const img = texture.image as { width?: number; height?: number } | null
            next.push({
                texture,
                aspect: (img?.width || 1) / (img?.height || 1),
                fit,
                offsetX,
                offsetY,
            })
        }
        decalsRef.current = next
        applyDecals()
    }, [framingKey, textureVersion, applyDecals, sourceMode])

    useEffect(() => {
        const cache = texturesRef.current
        return () => {
            for (const t of cache.values()) t.dispose()
            cache.clear()
            decalsRef.current = []
        }
    }, [])

    useEffect(() => {
        const gl = glRef.current
        const geo = sphereGeoRef.current
        if (!gl || !geo) return

        const count = Math.max(1, Math.round(density))
        const bodies: Body[] = []
        for (let i = 0; i < count; i++) {
            const mat = new THREE.MeshPhysicalMaterial({ side: THREE.DoubleSide })
            const mesh = new THREE.Mesh(geo, mat)
            mesh.castShadow = true
            mesh.receiveShadow = true

            const jitter = 1 + (Math.random() - 0.5) * SIZE_RANDOM
            const spin = (Math.random() - 0.5) * 0.01
            bodies.push({
                root: mesh,
                meshes: [mesh],
                pos: new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10
                ),
                vel: new THREE.Vector3(),
                quat: new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
                ),
                axis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
                spin,
                baseSpin: spin,
                jitter,
                radius: (live.current.dotSize / 100) * jitter,
                colorRoll: Math.random(),
            })
            gl.scene.add(mesh)
        }

        disposeBodies(gl.scene, bodiesRef.current)
        bodiesRef.current = bodies
        applyMaterials()
        applyDecals()

        const step = stepRef.current
        if (step) for (let i = 0; i < PRESETTLE_STEPS; i++) step()

        return () => {
            const g = glRef.current
            if (g) disposeBodies(g.scene, bodies)
            if (bodiesRef.current === bodies) bodiesRef.current = []
        }
    }, [density, applyMaterials, applyDecals])

    useEffect(() => {
        const gl = glRef.current
        if (!gl) return
        const { hemi, key, fill, rim } = gl

        const hsl = { h: 0, s: 0, l: 0 }
        new THREE.Color(baseColor).getHSL(hsl)
        const ambient = new THREE.Color().setHSL(hsl.h, 1, Math.max(0.5, hsl.l * 0.8))
        hemi.color.copy(ambient)
        hemi.groundColor.copy(ambient).multiplyScalar(0.7)

        key.color.setHex(0xffffff)
        fill.color.setHex(0xffffff)
        rim.color.setHex(0xffffff)

        switch (lighting) {
            case "Bright Professional":
                hemi.intensity = 1.2
                key.intensity = 1.5
                key.position.set(10, 30, 20)
                fill.intensity = 0.5
                fill.position.set(-15, 0, 15)
                rim.intensity = 0.4
                rim.position.set(0, -10, -20)
                break
            case "Neutral Flat":
                hemi.intensity = 1.5
                key.intensity = 0.8
                key.position.set(0, 0, 10)
                fill.intensity = 0.3
                fill.position.set(0, 0, -10)
                rim.intensity = 0
                rim.position.set(0, 20, -20)
                break
            case "Cinematic Drama":
                hemi.intensity = 0.9
                key.intensity = 2
                key.position.set(-20, 20, 10)
                fill.intensity = 0.4
                fill.position.set(20, -10, 10)
                rim.intensity = 1.2
                rim.color.setHex(0xaaaaff)
                rim.position.set(0, 10, -30)
                break
            case "Neon Cyberpunk":
                hemi.intensity = 0.8
                hemi.color.setHex(0x0022ff)
                key.intensity = 1.8
                key.color.setHex(0xff0055)
                key.position.set(15, 10, 10)
                fill.intensity = 0.6
                fill.color.setHex(0x00ddee)
                fill.position.set(-15, -10, 15)
                rim.intensity = 1.5
                rim.color.setHex(0xaa00ff)
                rim.position.set(0, 20, -20)
                break
            case "Sunset Warmth":
                hemi.intensity = 1
                hemi.color.setHex(0xffaa55)
                key.intensity = 1.8
                key.color.setHex(0xffddaa)
                key.position.set(20, 5, 20)
                fill.intensity = 0.4
                fill.color.setHex(0x552255)
                fill.position.set(-20, 10, -10)
                rim.intensity = 0.8
                rim.color.setHex(0xff5522)
                rim.position.set(0, 15, -20)
                break
            case "Soft Studio":
            default:
                hemi.intensity = 1.2
                key.intensity = 1.3
                key.color.setHex(0xfff9f5)
                key.position.set(15, 20, 20)
                fill.intensity = 0.4
                fill.color.setHex(0xf0f7ff)
                fill.position.set(-15, -10, 15)
                rim.intensity = 0.6
                rim.position.set(0, 20, -20)
                break
        }
    }, [lighting, baseColor])

    useEffect(() => {
        applyMaterials()
    }, [
        applyMaterials,
        baseColor,
        accentColor,
        colorMode,
        balloonColor,
        balloonColors,
        dotSize,
        materialGroup.roughness,
        materialGroup.gloss,
        materialGroup.transparency,
    ])

    return (
        <div
            ref={hostRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                backgroundColor: background,
                ...style,
            }}
        />
    )
}
