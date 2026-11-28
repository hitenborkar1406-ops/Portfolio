/* eslint-disable */
// Link Preview — Originkit (adapted for vanilla CSS spring transitions)

import React, { useRef, useState, type CSSProperties } from "react"

interface LinkPreviewProps {
    title: string
    link: string
    previewTitle?: string
    previewSub?: string
    accent?: string
    imageSrc?: string
    style?: CSSProperties
}

function originalImage(link: string): string {
    return `https://api.microlink.io/?url=${encodeURIComponent(link)}&embed=image.url`
}

export default function LinkPreview({
    title,
    link,
    previewTitle,
    previewSub,
    accent = "#F5C36C",
    imageSrc,
    style,
}: LinkPreviewProps) {
    const [hovered, setHovered] = useState(false)
    const [offsetX, setOffsetX] = useState(0)
    const containerRef = useRef<HTMLSpanElement>(null)

    const onMove = (e: React.MouseEvent) => {
        const el = containerRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const ratio = (e.clientX - rect.left) / Math.max(1, rect.width)
        setOffsetX((Math.max(0, Math.min(1, ratio)) - 0.5) * 44)
    }

    const resolvedImg = imageSrc || originalImage(link)

    return (
        <span
            ref={containerRef}
            className="ok-link-preview-wrap"
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={onMove}
        >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ok-link-preview-anchor"
                style={{ "--lp-accent": accent } as React.CSSProperties}
            >
                {title}
            </a>

            {hovered && (
                <span
                    className="ok-link-preview-card"
                    style={{
                        transform: `translateX(calc(-50% + ${offsetX.toFixed(1)}px)) translateY(0) scale(1)`,
                    }}
                    aria-hidden="true"
                >
                    <img
                        src={resolvedImg}
                        alt={title}
                        className="ok-link-preview-img"
                        draggable={false}
                    />
                    {(previewTitle || previewSub) && (
                        <span className="ok-link-preview-meta">
                            {previewTitle && <strong>{previewTitle}</strong>}
                            {previewSub && <span>{previewSub}</span>}
                        </span>
                    )}
                </span>
            )}
        </span>
    )
}

