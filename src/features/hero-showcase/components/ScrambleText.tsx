/* eslint-disable */
// Scramble Text — Originkit

import React, { useState, useEffect, useRef, useLayoutEffect, Fragment } from "react"

const GLITCH_CHARS_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const GLITCH_CHARS_LOWER = "abcdefghijklmnopqrstuvwxyz"
const WAVE_CURSOR_CHARS = "░▒▓█"

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
    const cx = 3 * x1
    const bx = 3 * (x2 - x1) - cx
    const ax = 1 - cx - bx
    const cy = 3 * y1
    const by = 3 * (y2 - y1) - cy
    const ay = 1 - cy - by
    const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t
    const sampleY = (t: number) => ((ay * t + by) * t + cy) * t
    const sampleDX = (t: number) => (3 * ax * t + 2 * bx) * t + cx
    return (x: number) => {
        let t = x
        for (let i = 0; i < 8; i++) {
            const dx = sampleX(t) - x
            const d = sampleDX(t)
            if (Math.abs(dx) < 1e-6) break
            if (d === 0) break
            t -= dx / d
        }
        return sampleY(Math.max(0, Math.min(1, t)))
    }
}

function makeEaseFn(ease: any): (t: number) => number {
    if (Array.isArray(ease) && ease.length === 4)
        return cubicBezier(ease[0], ease[1], ease[2], ease[3])
    switch (ease) {
        case "linear":
            return (t) => t
        case "easeIn":
            return (t) => t * t
        case "easeOut":
            return (t) => 1 - (1 - t) * (1 - t)
        case "easeInOut":
            return (t) => (t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t))
        default:
            return (t) => 1 - (1 - t) * (1 - t)
    }
}

type EnterMode = "none" | "oneLine" | "multiLine" | "random"
type HoverMode = "none" | "diffusionOneLine" | "diffusionMultiLine" | "waveOneLine" | "waveMultiLine"
type CharState = { char: string; locked: boolean; flickering: boolean }
type WordEntry = { text: string; gap: string; pi: number; wiInPara: number; globalWi: number }
type CharInfo = { id: string; cx: number; lineTop: number }

export default function ScrambleText(props: any) {
    const {
        words = "SYSTEMS ARCHITECT  ·  6G RESEARCHER  ·  HACKATHON FINALIST",
        enterAnimation = {
            mode: "oneLine",
            restState: "solid",
            replay: false,
            position: "above",
            scrambleIntensity: 80,
            ease: { type: "tween", duration: 1.5, ease: "easeOut" },
            flickerEnabled: true,
            flickerColor: "#f5c36c",
            flickerIntensity: 65,
            flickerSpeed: 10,
        },
        hoverAnimation = {
            type: "wave",
            lines: "oneLine",
            radius: 2,
            collapse: false,
            collapseTime: 1,
            glitchChars: "abcdefghijklmnopqrstuvwxyz0123456789",
            glitchShuffle: true,
            flickerEnabled: true,
            flickerColor: "#f5c36c",
            flickerIntensity: 55,
            flickerSpeed: 10,
            waveEase: { type: "tween", duration: 1.1, ease: "easeOut" },
            waveShuffleLimitEnabled: true,
            waveShuffleLimitValue: 8,
        },
        color = "#F5C36C",
        font = {
            fontFamily: "JetBrains Mono, ui-monospace, monospace",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textAlign: "left",
        },
        tag = "div",
    } = props

    const Tag = (tag ?? "div") as any
    const glitchColor = color

    const enterMode: EnterMode = enterAnimation?.mode ?? "oneLine"
    const enterEase: any = enterAnimation?.ease ?? { type: "tween", duration: 1.5, ease: "easeOut" }
    const enterDuration: number = enterEase?.duration ?? 1.5
    const enterEaseCurve: any = enterEase?.ease ?? "easeOut"
    const enterScrambleIntensity: number = enterAnimation?.scrambleIntensity ?? 80
    const enterReplay: boolean = enterAnimation?.replay ?? false
    const enterPosition: string = enterAnimation?.position ?? "above"
    const enterRestState: string = enterAnimation?.restState ?? "solid"
    const enterFlickerEnabled: boolean = enterAnimation?.flickerEnabled ?? true
    const enterFlickerColor: string = enterAnimation?.flickerColor ?? "#f5c36c"
    const enterFlickerIntensity: number = enterAnimation?.flickerIntensity ?? 65
    const enterFlickerSpeed: number = enterAnimation?.flickerSpeed ?? 10

    const hoverType: string = hoverAnimation?.type ?? "wave"
    const hoverLines: string = hoverAnimation?.lines ?? "oneLine"
    const hoverMode: HoverMode =
        hoverType === "diffusion"
            ? hoverLines === "oneLine"
                ? "diffusionOneLine"
                : "diffusionMultiLine"
            : hoverType === "wave"
              ? hoverLines === "oneLine"
                  ? "waveOneLine"
                  : "waveMultiLine"
              : "none"

    const hoverRadius: number = hoverAnimation?.radius ?? 2
    const hoverCollapse: boolean = hoverAnimation?.collapse ?? false
    const hoverCollapseTime: number = hoverAnimation?.collapseTime ?? 1
    const hoverGlitchChars: string = hoverAnimation?.glitchChars ?? "abcdefghijklmnopqrstuvwxyz"
    const hoverGlitchShuffle: boolean = hoverAnimation?.glitchShuffle ?? true
    const hoverFlickerEnabled: boolean = hoverAnimation?.flickerEnabled ?? false
    const hoverFlickerColor: string = hoverAnimation?.flickerColor ?? "#f5c36c"
    const hoverFlickerIntensity: number = hoverAnimation?.flickerIntensity ?? 50
    const hoverFlickerSpeed: number = hoverAnimation?.flickerSpeed ?? 10
    const waveEase: any = hoverAnimation?.waveEase ?? { type: "tween", duration: 1.1, ease: "linear" }
    const waveDuration: number = waveEase?.duration ?? 1.1
    const waveEaseCurve: any = waveEase?.ease ?? "linear"
    const waveShuffleLimitEnabled: boolean = hoverAnimation?.waveShuffleLimitEnabled ?? true
    const waveShuffleLimitValue: number = hoverAnimation?.waveShuffleLimitValue ?? 8

    const typeface = font
    const textAlign: string = (typeface as any)?.textAlign ?? "left"
    const spanStyle = typeface
        ? Object.fromEntries(Object.entries(typeface).filter(([k]) => k !== "textAlign"))
        : {}

    const paragraphs: { text: string; gap: string }[][] = (words as string)
        .split("\n")
        .map((line) => {
            const tokens = line.match(/\s+|\S+/g) ?? []
            const out: { text: string; gap: string }[] = []
            let pendingGap = ""
            for (const tok of tokens) {
                if (/^\s+$/.test(tok)) pendingGap += tok
                else {
                    out.push({ text: tok, gap: pendingGap })
                    pendingGap = ""
                }
            }
            return out
        })
        .filter((p) => p.length > 0)

    const allWords: WordEntry[] = []
    paragraphs.forEach((paraWords, pi) => {
        paraWords.forEach(({ text, gap }, wiInPara) => {
            allWords.push({ text, gap, pi, wiInPara, globalWi: allWords.length })
        })
    })

    const containerRef = useRef<HTMLDivElement | null>(null)
    const ghostRefs = useRef<(HTMLSpanElement | null)[]>([])
    const charRefs = useRef<Record<string, HTMLSpanElement | null>>({})

    const hoverModeRef = useRef(hoverMode)
    const hoverRadiusRef = useRef(hoverRadius)
    const hoverCollapseRef = useRef(hoverCollapse)
    const hoverCollapseTimeRef = useRef(hoverCollapseTime)
    const hoverFlickerEnabledRef = useRef(hoverFlickerEnabled)
    const hoverFlickerIntensityRef = useRef(hoverFlickerIntensity)
    const hoverFlickerSpeedRef = useRef(hoverFlickerSpeed)
    const hoverGlitchCharsRef = useRef(hoverGlitchChars)
    const hoverGlitchShuffleRef = useRef(hoverGlitchShuffle)
    const waveDurationRef = useRef(waveDuration)
    const waveEaseCurveRef = useRef(waveEaseCurve)
    const waveShuffleLimitEnabledRef = useRef(waveShuffleLimitEnabled)
    const waveShuffleLimitValueRef = useRef(waveShuffleLimitValue)

    hoverModeRef.current = hoverMode
    hoverRadiusRef.current = hoverRadius
    hoverCollapseRef.current = hoverCollapse
    hoverCollapseTimeRef.current = hoverCollapseTime
    hoverFlickerEnabledRef.current = hoverFlickerEnabled
    hoverFlickerIntensityRef.current = hoverFlickerIntensity
    hoverFlickerSpeedRef.current = hoverFlickerSpeed
    hoverGlitchCharsRef.current = hoverGlitchChars
    hoverGlitchShuffleRef.current = hoverGlitchShuffle
    waveDurationRef.current = waveDuration
    waveEaseCurveRef.current = waveEaseCurve
    waveShuffleLimitEnabledRef.current = waveShuffleLimitEnabled
    waveShuffleLimitValueRef.current = waveShuffleLimitValue

    const [lineGroups, setLineGroups] = useState<number[][]>([])
    const [displays, setDisplays] = useState<Record<string, CharState>>({})
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const [enterAnimComplete, setEnterAnimComplete] = useState(false)
    const [hoverDisplays, setHoverDisplays] = useState<Record<string, string>>({})
    const [hoverFlickerSet, setHoverFlickerSet] = useState<Set<string>>(new Set())

    const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const hoverFlickerTimersRef = useRef<ReturnType<typeof setTimeout>[]>([])
    const lastMidIdRef = useRef<string>("")
    const multiWaveTriggeredRef = useRef(false)
    const oneWaveTriggeredLinesRef = useRef<Set<number>>(new Set())
    const lastOneWaveLineRef = useRef<number | null>(null)
    const hasPlayedRef = useRef(false)
    const hoverRandomCharsRef = useRef<Record<string, string>>({})
    const hoverSceneRef = useRef<any>(null)
    const lineWaveRafsRef = useRef<Map<number, number>>(new Map())
    const lineWavePlayingRef = useRef<Set<number>>(new Set())

    const detectLines = () => {
        const allLines: number[][] = []
        paragraphs.forEach((_, pi) => {
            const paraEntries = allWords.filter((w) => w.pi === pi)
            const measured = paraEntries
                .map((w) => ({
                    globalWi: w.globalWi,
                    top: ghostRefs.current[w.globalWi]
                        ? Math.round(ghostRefs.current[w.globalWi]!.getBoundingClientRect().top)
                        : -1,
                }))
                .filter((m) => m.top >= 0)
            const tops = [...new Set(measured.map((m) => m.top))].sort((a, b) => a - b)
            tops.forEach((top) =>
                allLines.push(measured.filter((m) => m.top === top).map((m) => m.globalWi))
            )
        })
        setLineGroups(allLines)
    }

    useLayoutEffect(() => {
        detectLines()
    }, [words, font])

    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        const obs = new ResizeObserver(() => detectLines())
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    useEffect(() => {
        if (enterMode === "none") return
        const el = containerRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayedRef.current) {
                    hasPlayedRef.current = true
                    setShouldAnimate(true)
                    if (!enterReplay) obs.disconnect()
                }
            },
            { threshold: enterPosition === "middle" ? 0.5 : 0 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [enterMode, lineGroups, enterReplay, enterPosition, enterRestState])

    useEffect(() => {
        if (enterMode === "none" || !shouldAnimate || lineGroups.length === 0) return
        let cancelled = false
        setDisplays({})
        setEnterAnimComplete(false)

        const durationMs = enterDuration * 1000
        const sequentialSteps = Math.max(1, allWords.reduce((s, w) => s + w.text.length, 0))
        const animStart = performance.now()
        const animEndTime = animStart + durationMs
        const easeFn = makeEaseFn(enterEaseCurve)
        const targetAt = (step: number) => animStart + durationMs * easeFn(step / sequentialSteps)
        const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, Math.max(0, ms)))

        const nextGlitchChar = (char: string) => {
            const isLower = char === char.toLowerCase() && char !== char.toUpperCase()
            const pool = isLower ? GLITCH_CHARS_LOWER : GLITCH_CHARS_UPPER
            return pool[Math.floor(Math.random() * pool.length)]
        }

        const animateChar = async (globalWi: number, ci: number, char: string, targetEnd: number) => {
            if (cancelled) return
            const id = `${globalWi}-${ci}`
            if (char === "." || char === " " || char === "·") {
                setDisplays((p) => ({ ...p, [id]: { char, locked: true, flickering: false } }))
                await sleep(targetEnd - performance.now())
                return
            }
            const desiredFrames = Math.max(1, Math.round(enterScrambleIntensity / 16))
            const windowMs = Math.max(15, targetEnd - performance.now())
            const delay = Math.max(15, Math.floor((windowMs * 0.8) / desiredFrames))
            for (let i = 0; i < desiredFrames; i++) {
                if (cancelled) return
                setDisplays((p) => ({
                    ...p,
                    [id]: { char: nextGlitchChar(char), locked: false, flickering: false },
                }))
                await sleep(delay)
            }
            if (!cancelled) {
                setDisplays((p) => ({ ...p, [id]: { char, locked: true, flickering: false } }))
            }
        }

        const run = async () => {
            let idx = 0
            for (const group of lineGroups) {
                for (const gWi of group) {
                    if (cancelled) return
                    const word = allWords[gWi].text
                    for (let ci = 0; ci < word.length; ci++) {
                        if (cancelled) return
                        await animateChar(gWi, ci, word[ci], targetAt(++idx))
                    }
                }
            }
        }

        ;(async () => {
            await run()
            if (!cancelled && performance.now() <= animEndTime + 2000) setEnterAnimComplete(true)
        })()
        return () => {
            cancelled = true
        }
    }, [lineGroups, enterMode, enterScrambleIntensity, enterDuration, enterEaseCurve, shouldAnimate])

    useEffect(
        () => () => {
            if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
            lineWaveRafsRef.current.forEach((id) => cancelAnimationFrame(id))
            hoverFlickerTimersRef.current.forEach(clearTimeout)
        },
        []
    )

    const buildWaveTick = (
        orderedChars: CharInfo[],
        fi: number,
        glitchState: Record<string, string>,
        GLITCH_RATE: number
    ) => {
        const limitEnabled = waveShuffleLimitEnabledRef.current
        const limitValue = waveShuffleLimitValueRef.current
        const frontierIdx = Math.floor(fi)
        const frac = fi - frontierIdx
        const n = orderedChars.length

        const rndGlitch = () => GLITCH_CHARS_UPPER[Math.floor(Math.random() * GLITCH_CHARS_UPPER.length)]
        const rndCursor = () => WAVE_CURSOR_CHARS[Math.floor(Math.random() * WAVE_CURSOR_CHARS.length)]

        const toAdd: Record<string, string> = {}
        const toRemove: string[] = []

        for (let i = 0; i < n; i++) {
            const { id } = orderedChars[i]
            if (i === frontierIdx) {
                glitchState[id] = rndCursor()
                toAdd[id] = glitchState[id]
            } else if (i === frontierIdx + 1 && i < n && Math.random() < frac) {
                toAdd[id] = rndCursor()
            } else if (i > fi || (limitEnabled && fi - i > limitValue)) {
                delete glitchState[id]
                toRemove.push(id)
            } else {
                if (!glitchState[id] || Math.random() < GLITCH_RATE) glitchState[id] = rndGlitch()
                toAdd[id] = glitchState[id]
            }
        }
        return { toAdd, toRemove }
    }

    const startLineWave = (lineTop: number, orderedChars: CharInfo[]) => {
        if (lineWaveRafsRef.current.has(lineTop)) {
            cancelAnimationFrame(lineWaveRafsRef.current.get(lineTop)!)
            lineWaveRafsRef.current.delete(lineTop)
        }
        lineWavePlayingRef.current.add(lineTop)
        const n = orderedChars.length
        if (n === 0) {
            lineWavePlayingRef.current.delete(lineTop)
            return
        }
        const durMs = waveDurationRef.current * 1000
        const totalSteps = waveShuffleLimitEnabledRef.current ? n + waveShuffleLimitValueRef.current : n
        const glitchState: Record<string, string> = {}
        const waveStart = performance.now()
        const easeFn = makeEaseFn(waveEaseCurveRef.current)

        const tick = () => {
            if (!lineWavePlayingRef.current.has(lineTop)) return
            const t = Math.min(1, (performance.now() - waveStart) / durMs)
            const fi = easeFn(t) * totalSteps
            const { toAdd, toRemove } = buildWaveTick(orderedChars, fi, glitchState, 0.4)
            setHoverDisplays((prev) => {
                const u = { ...prev }
                toRemove.forEach((id) => delete u[id])
                return Object.assign(u, toAdd)
            })
            if (fi < totalSteps) {
                lineWaveRafsRef.current.set(lineTop, requestAnimationFrame(tick))
            } else {
                lineWavePlayingRef.current.delete(lineTop)
                lineWaveRafsRef.current.delete(lineTop)
                setHoverDisplays((prev) => {
                    const u = { ...prev }
                    orderedChars.forEach(({ id }) => delete u[id])
                    return u
                })
            }
        }
        lineWaveRafsRef.current.set(lineTop, requestAnimationFrame(tick))
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (hoverMode === "none") return
        const chars: CharInfo[] = []
        for (const [id, el] of Object.entries(charRefs.current)) {
            if (!el) continue
            const rect = el.getBoundingClientRect()
            if (rect.width === 0 && rect.height === 0) continue
            chars.push({ id, cx: rect.left + rect.width / 2, lineTop: Math.round(rect.top) })
        }
        if (chars.length === 0) return

        const lineTopValues = [...new Set(chars.map((c) => c.lineTop))].sort((a, b) => a - b)
        const lineMap = new Map<number, CharInfo[]>()
        for (const lt of lineTopValues)
            lineMap.set(lt, chars.filter((c) => c.lineTop === lt).sort((a, b) => a.cx - b.cx))

        let targetLineTop: number | null = null
        for (const lt of lineTopValues) {
            const lc = lineMap.get(lt)!
            const sampleEl = charRefs.current[lc[0].id]
            if (!sampleEl) continue
            const rect = sampleEl.getBoundingClientRect()
            if (e.clientY >= rect.top - 6 && e.clientY <= rect.bottom + 6) {
                targetLineTop = lt
                break
            }
        }
        if (lastOneWaveLineRef.current !== null && lastOneWaveLineRef.current !== targetLineTop) {
            oneWaveTriggeredLinesRef.current.delete(lastOneWaveLineRef.current)
        }
        lastOneWaveLineRef.current = targetLineTop
        if (targetLineTop === null) return
        if (lineWavePlayingRef.current.has(targetLineTop)) return
        if (oneWaveTriggeredLinesRef.current.has(targetLineTop)) return
        oneWaveTriggeredLinesRef.current.add(targetLineTop)
        startLineWave(targetLineTop, (lineMap.get(targetLineTop) ?? []).slice().sort((a, b) => a.cx - b.cx))
    }

    const handleMouseLeave = () => {
        multiWaveTriggeredRef.current = false
        oneWaveTriggeredLinesRef.current.clear()
        lastOneWaveLineRef.current = null
    }

    const isInsertEnter = enterMode === "oneLine" || enterMode === "multiLine"

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                width: "100%",
                position: "relative",
                background: "transparent",
                cursor: "default",
            }}
        >
            {paragraphs.map((_, pi) => {
                const paraEntries = allWords.filter((w) => w.pi === pi)
                return (
                    <Tag key={pi} style={{ position: "relative", width: "100%", margin: 0, padding: 0 }}>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                visibility: "hidden",
                                pointerEvents: "none",
                                textAlign: textAlign as any,
                            }}
                        >
                            {paraEntries.map((wordEntry) => (
                                <Fragment key={wordEntry.globalWi}>
                                    {wordEntry.gap && (
                                        <span style={{ ...spanStyle, whiteSpace: "pre" }}>{wordEntry.gap}</span>
                                    )}
                                    <span
                                        ref={(el) => {
                                            ghostRefs.current[wordEntry.globalWi] = el
                                        }}
                                        style={{ ...spanStyle, display: "inline-block", whiteSpace: "nowrap" }}
                                    >
                                        {wordEntry.text}
                                    </span>
                                </Fragment>
                            ))}
                        </div>

                        <div style={{ width: "100%", textAlign: textAlign as any }}>
                            {paraEntries.map((wordEntry) => (
                                <Fragment key={wordEntry.globalWi}>
                                    {wordEntry.gap && (
                                        <span style={{ ...spanStyle, color, whiteSpace: "pre" }}>{wordEntry.gap}</span>
                                    )}
                                    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                                        {wordEntry.text.split("").map((char, ci) => {
                                            const id = `${wordEntry.globalWi}-${ci}`
                                            const hoverChar = hoverDisplays[id]
                                            const enterState = displays[id]
                                            const isHF = hoverFlickerSet.has(id)

                                            let displayChar = char
                                            let charColor = color
                                            if (hoverChar !== undefined) {
                                                displayChar = hoverChar
                                                charColor = isHF && hoverFlickerEnabled ? hoverFlickerColor : glitchColor
                                            } else if (enterMode !== "none") {
                                                if (!enterState) {
                                                    charColor =
                                                        !shouldAnimate && enterRestState === "solid"
                                                            ? color
                                                            : "transparent"
                                                } else {
                                                    displayChar = enterState.char
                                                    charColor = enterState.flickering
                                                        ? enterFlickerEnabled
                                                            ? enterFlickerColor
                                                            : color
                                                        : enterState.locked
                                                          ? color
                                                          : glitchColor
                                                }
                                            }
                                            const hideChar =
                                                isInsertEnter &&
                                                shouldAnimate &&
                                                !enterAnimComplete &&
                                                !enterState &&
                                                hoverChar === undefined

                                            return (
                                                <span
                                                    key={ci}
                                                    ref={(el) => {
                                                        charRefs.current[id] = el
                                                    }}
                                                    style={{
                                                        ...spanStyle,
                                                        color: charColor,
                                                        display: hideChar ? "none" : undefined,
                                                    }}
                                                >
                                                    {displayChar}
                                                </span>
                                            )
                                        })}
                                    </span>
                                </Fragment>
                            ))}
                        </div>
                    </Tag>
                )
            })}
        </div>
    )
}
