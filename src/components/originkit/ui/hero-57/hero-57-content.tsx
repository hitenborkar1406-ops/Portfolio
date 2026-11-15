// Delivered by Originkit · stack: nextjs · styling: tailwind
/* eslint-disable */
// @ts-nocheck
"use client";
import SunsetVelocity from "@/components/originkit/ui/hero-57/sunset-velocity"

const links = ['Work', 'Approach', 'Capabilities', 'Insights', 'Contact']

export default function App() {
  return (
    <section className="hero">
      <div className="hero-scene">
      <SunsetVelocity
        background="#ffffff"
        skyTop="#F7D3C8"
        skyHorizon="#F4A493"
        advanced={{ sunX: 1, sunY: 61, sunSize: 90, vignette: 0, hazeColor: '#F6C2B4', hazeOpacity: 60, turbineFar: '#D49AA2', cloudColor: '#E7A0A2' }}
        style={{ minWidth: 0, minHeight: 0 }}
      />
      </div>
      <div className="hero-fade" />

      <header className="nav">
        <a className="logo" href="#" aria-label="Afterglow home">
          {/* striped half-sun: echoes the sunset in the scene */}
          <svg viewBox="0 0 28 20" aria-hidden>
            <clipPath id="sun-bands"><rect width="28" height="9" /><rect y="11" width="28" height="3" /><rect y="16" width="28" height="2" /></clipPath>
            <circle cx="14" cy="18" r="13" clipPath="url(#sun-bands)" fill="currentColor" />
          </svg>
          Afterglow
        </a>
        <nav>
          {links.map((l, i) => (
            <a key={l} href="#" className={i === 0 ? 'active' : undefined}>{l}</a>
          ))}
        </nav>
        <a className="btn" href="#">Let’s talk</a>
      </header>

      <div className="hero-copy">
        <h1>A world <span>designed to</span> inspire.</h1>
        <p>We blend creativity, design, and technology to build distinctive digital experiences that move brands forward.</p>
        <a className="cta" href="#">Get Started <span aria-hidden>→</span></a>
      </div>
    </section>
  )
}
