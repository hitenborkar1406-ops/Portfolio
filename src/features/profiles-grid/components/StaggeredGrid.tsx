/* eslint-disable */
import React, { useEffect, useRef } from "react";
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
  tileIcons?: { label: string; icon: React.ReactNode; color: string }[];
  className?: string;
}

export function StaggeredGrid({
  bentoItems,
  className = "",
}: StaggeredGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll(".profile-spotlight-card");
      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 88%",
          once: true,
        },
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 100;
    const y = ((e.clientY - rect.top) / Math.max(rect.height, 1)) * 100;
    el.style.setProperty("--mx", `${x.toFixed(1)}%`);
    el.style.setProperty("--my", `${y.toFixed(1)}%`);
  };

  return (
    <div ref={gridRef} className={`profiles-spotlight-grid ${className}`}>
      {bentoItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-spotlight-card"
          style={{ "--card-accent": item.accent } as React.CSSProperties}
          onPointerMove={handlePointerMove}
          aria-label={`Visit ${item.title} Profile`}
        >
          <div className="profile-spotlight-card__top-bar" aria-hidden="true" />
          <div className="profile-spotlight-card__glow" aria-hidden="true" />

          <div className="profile-spotlight-card__head">
            <div className="profile-spotlight-card__icon">{item.icon}</div>
            <span className="profile-spotlight-card__status">
              <span className="profile-spotlight-card__dot" aria-hidden="true" />
              <span>{item.badgeText}</span>
            </span>
          </div>

          <div className="profile-spotlight-card__body">
            <h3 className="profile-spotlight-card__title">{item.title}</h3>
            <div className="profile-spotlight-card__handle">{item.handle}</div>
            <p className="profile-spotlight-card__desc">{item.description}</p>
          </div>

          <div className="profile-spotlight-card__chips">
            {item.chips.map((chip) => (
              <span key={chip} className="profile-spotlight-card__chip">
                {chip}
              </span>
            ))}
          </div>

          <div className="profile-spotlight-card__footer">
            <span>{item.subtitle}</span>
            <span className="profile-spotlight-card__arrow" aria-hidden="true">→</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default StaggeredGrid;
