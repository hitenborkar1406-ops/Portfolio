/* eslint-disable */
// Staggered Grid — VengeanceUI (adapted for vanilla CSS + GSAP)

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface BentoItem {
  id: number | string;
  title: string;
  subtitle: string;
  handle: string;
  description: string;
  href: string;
  accent: string;
  chips: string[];
  badgeText: string;
  icon: React.ReactNode;
}

export interface StaggeredGridProps {
  bentoItems: BentoItem[];
  centerText?: string;
  tileIcons: { label: string; icon: React.ReactNode; color: string }[];
  className?: string;
}

export function StaggeredGrid({
  bentoItems,
  centerText = "",
  tileIcons,
  className = "",
}: StaggeredGridProps) {
  const gridFullRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeBento, setActiveBento] = useState<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll(".staggered-char");
        gsap.from(chars, {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "center 60%",
            scrub: 1,
          },
          ease: "sine.out",
          yPercent: 180,
          autoAlpha: 0,
          stagger: { each: 0.04, from: "center" },
        });
      }

      if (gridFullRef.current) {
        const items = gridFullRef.current.querySelectorAll(".staggered-tile");
        items.forEach((item, idx) => {
          const col = idx % 7;
          const distFromCenter = Math.abs(col - 3);
          gsap.from(item, {
            scrollTrigger: {
              trigger: gridFullRef.current,
              start: "top 92%",
              end: "center 62%",
              scrub: 1.1,
            },
            yPercent: 40 + distFromCenter * 18,
            autoAlpha: 0,
            ease: "sine.out",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // 21 slots in a 7-column x 3-row grid; indices 8..12 (center 5 cols of row 2) hold the Bento Group
  const slots = Array.from({ length: 21 }, (_, i) => i);

  return (
    <div className={`staggered-grid-root ${className}`}>
      {centerText ? (
        <div ref={textRef} className="staggered-grid__headline" aria-hidden="true">
          {centerText.split("").map((char, i) => (
            <span key={i} className="staggered-char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ) : null}

      <div ref={gridFullRef} className="staggered-grid__matrix">
        {slots.map((slotIdx) => {
          if (slotIdx === 8) {
            return (
              <div key="bento-group" className="staggered-bento-group">
                {bentoItems.map((item, idx) => {
                  const isActive = activeBento === idx;
                  return (
                    <div
                      key={item.id}
                      className={`staggered-bento-card ${isActive ? "is-active" : ""}`}
                      style={{ "--bento-accent": item.accent } as React.CSSProperties}
                      onMouseEnter={() => setActiveBento(idx)}
                      onClick={() => setActiveBento(idx)}
                    >
                      <div className="staggered-bento-card__border" aria-hidden="true" />

                      {/* Expanded Active View */}
                      <div className="staggered-bento-card__expanded">
                        <div className="staggered-bento-card__top">
                          <div className="staggered-bento-card__icon-box">{item.icon}</div>
                          <span className="staggered-bento-card__status">{item.badgeText}</span>
                        </div>
                        <div className="staggered-bento-card__body">
                          <h3 className="staggered-bento-card__title">{item.title}</h3>
                          <div className="staggered-bento-card__handle">{item.handle}</div>
                          <p className="staggered-bento-card__desc">{item.description}</p>
                        </div>
                        <div className="staggered-bento-card__chips">
                          {item.chips.map((c) => (
                            <span key={c} className="staggered-bento-chip">
                              {c}
                            </span>
                          ))}
                        </div>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="staggered-bento-card__cta"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>{item.subtitle}</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>

                      {/* Compact Inactive View */}
                      <div className="staggered-bento-card__compact">
                        <div className="staggered-bento-card__compact-icon">{item.icon}</div>
                        <span className="staggered-bento-card__compact-title">{item.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          if (slotIdx >= 9 && slotIdx <= 12) return null;

          const tile = tileIcons[slotIdx % tileIcons.length];
          return (
            <div
              key={`tile-${slotIdx}`}
              className="staggered-tile"
              style={{ "--tile-color": tile.color } as React.CSSProperties}
            >
              <div className="staggered-tile__inner">
                <div className="staggered-tile__icon">{tile.icon}</div>
                <span className="staggered-tile__label">{tile.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StaggeredGrid;
