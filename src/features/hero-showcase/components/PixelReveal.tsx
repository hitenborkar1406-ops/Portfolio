/* eslint-disable */
// Pixel Reveal — Originkit

import * as React from "react"
import { useEffect, useLayoutEffect, useRef } from "react"

type Direction = "up" | "down" | "left" | "right"

type Props = {
    imageSrc: string
    gridSize?: number
    transitionColor?: string
    edgeHeight?: number
    transition?: {
        type?: "tween" | "spring"
        duration?: number
        ease?: string | number[]
    }
    direction?: Direction
    onRevealComplete?: () => void
    style?: React.CSSProperties
}

export default function PixelReveal({
    imageSrc,
    gridSize = 14,
    transitionColor = "#0a0d16",
    edgeHeight = 16,
    transition = { type: "tween", duration: 1.4, ease: "easeInOut" },
    direction = "up",
    onRevealComplete,
    style,
}: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

    const progressRef = useRef(0)
    const linearProgressRef = useRef(0)
    const startTimeRef = useRef<number | null>(null)
    const rafRef = useRef<number | null>(null)
    const runningRef = useRef(false)
    const completedRef = useRef(false)
    const triggeredOnceRef = useRef(false)

    const gridRef = useRef<{
        cols: number
        rows: number
        cellW: number
        cellH: number
        cssW: number
        cssH: number
        thresholds: Float32Array
    } | null>(null)

    const propsRef = useRef({
        gridSize,
        edgeHeight,
        direction,
        transition,
        transitionColor,
        onRevealComplete,
    })
    propsRef.current = {
        gridSize,
        edgeHeight,
        direction,
        transition,
        transitionColor,
        onRevealComplete,
    }

    const resolveEasingFn = (trans: Props["transition"]): ((t: number) => number) => {
        const ease = trans?.ease
        if (ease === "easeIn") return (t) => t * t
        if (ease === "easeOut") return (t) => 1 - (1 - t) * (1 - t)
        if (ease === "easeInOut")
            return (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
        return (t) => t
    }

    const resolveDuration = (trans: Props["transition"]): number =>
        typeof trans?.duration === "number" && trans.duration > 0 ? trans.duration : 1.4

    const rebuildGrid = (entry?: ResizeObserverEntry) => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const cr = entry?.contentRect
        const rectW = cr?.width || container.clientWidth || container.getBoundingClientRect().width
        const rectH = cr?.height || container.clientHeight || container.getBoundingClientRect().height
        const cssW = Math.max(1, Math.floor(rectW) || 340)
        const cssH = Math.max(1, Math.floor(rectH) || 380)
        const dpr = Math.min(window.devicePixelRatio || 1, 2)

        canvas.width = Math.floor(cssW * dpr)
        canvas.height = Math.floor(cssH * dpr)
        canvas.style.width = `${cssW}px`
        canvas.style.height = `${cssH}px`
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        ctxRef.current = ctx

        const gs = Math.max(1, propsRef.current.gridSize)
        const cols = Math.max(1, Math.ceil(cssW / gs))
        const rows = Math.max(1, Math.ceil(cssH / gs))
        const cellW = cssW / cols
        const cellH = cssH / rows

        const eh = Math.max(0, Math.min(1, propsRef.current.edgeHeight / 100))
        const dir = propsRef.current.direction
        const thresholds = new Float32Array(cols * rows)

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let base: number
                if (dir === "up") base = rows === 1 ? 0 : 1 - r / (rows - 1)
                else if (dir === "down") base = rows === 1 ? 0 : r / (rows - 1)
                else if (dir === "left") base = cols === 1 ? 0 : 1 - c / (cols - 1)
                else base = cols === 1 ? 0 : c / (cols - 1)
                thresholds[r * cols + c] = base * (1 - eh) + Math.random() * eh
            }
        }

        gridRef.current = { cols, rows, cellW, cellH, cssW, cssH, thresholds }
    }

    const draw = () => {
        const ctx = ctxRef.current
        const grid = gridRef.current
        if (!ctx || !grid) return

        const { cols, rows, cellW, cellH, cssW, cssH, thresholds } = grid
        ctx.clearRect(0, 0, cssW, cssH)
        ctx.fillStyle = propsRef.current.transitionColor

        const p = progressRef.current
        const padW = cellW + 1
        const padH = cellH + 1

        for (let r = 0; r < rows; r++) {
            const yBase = r * cellH
            const rowOff = r * cols
            for (let c = 0; c < cols; c++) {
                if (thresholds[rowOff + c] > p) {
                    ctx.fillRect(c * cellW, yBase, padW, padH)
                }
            }
        }
    }

    const stopRaf = () => {
        if (rafRef.current != null) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }
        runningRef.current = false
    }

    const loop = (now: number) => {
        if (!runningRef.current) return
        const dur = Math.max(0.0001, resolveDuration(propsRef.current.transition))
        const easeFn = resolveEasingFn(propsRef.current.transition)
        if (startTimeRef.current == null) startTimeRef.current = now
        const elapsed = (now - startTimeRef.current) / 1000
        const linear = Math.max(0, Math.min(1, elapsed / dur))
        linearProgressRef.current = linear
        progressRef.current = easeFn(linear)
        draw()

        if (linear >= 1) {
            stopRaf()
            if (!completedRef.current) {
                completedRef.current = true
                propsRef.current.onRevealComplete?.()
            }
            return
        }
        rafRef.current = requestAnimationFrame(loop)
    }

    const triggerFn = () => {
        completedRef.current = false
        stopRaf()
        progressRef.current = 0
        linearProgressRef.current = 0
        startTimeRef.current = performance.now()
        draw()
        runningRef.current = true
        rafRef.current = requestAnimationFrame(loop)
    }

    useLayoutEffect(() => {
        rebuildGrid()
        draw()
        const container = containerRef.current
        if (!container) return
        const ro = new ResizeObserver((entries) => {
            rebuildGrid(entries[0])
            draw()
        })
        ro.observe(container)
        return () => {
            ro.disconnect()
            stopRaf()
        }
    }, [])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting && !triggeredOnceRef.current) {
                        triggeredOnceRef.current = true
                        triggerFn()
                    }
                }
            },
            { threshold: 0 }
        )
        io.observe(container)
        return () => io.disconnect()
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                ...style,
            }}
        >
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt="Hiten Borkar"
                    draggable={false}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        userSelect: "none",
                        pointerEvents: "none",
                    }}
                />
            ) : null}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}
