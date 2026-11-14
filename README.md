# Hiten Borkar — Portfolio

Personal portfolio website built with the [Hallmark](https://github.com/Nutlope/hallmark) design system.

**Live:** [View Portfolio](https://hitenborkar1406-ops.github.io/Portfolio/)

## Theme & Palette

- **Ice Silver (`#DDE3E8`)** — Main paper, light grounds, card contrast, subtle borders.
- **Deep Aubergine (`#3A0F34`)** — Primary ink, deep headings, terminal/graphite panels, dark brand accents.
- **Marigold (`#EAAA00`)** — Radiant minor accent for buttons, signals, hover highlights, active states.

## Structure

```
├── index.html      # Single-page portfolio
├── tokens.css      # Cobalt theme design tokens
├── base.css        # Scaffold: floor rules, keys, cuts, graphite
├── style.css       # Page-specific styles + responsive
├── main.js         # Nav, share sheet, 3D achievements, scroll motion engine
├── ribbon-cursor.js# Ribbon trails cursor effect (fine pointers only)
├── favicon.svg     # SVG favicon
└── assets/
    ├── avatar.jpg  # Profile image
    ├── fonts.css   # Self-hosted Playfair Display / IBM Plex Sans / JetBrains Mono
    └── fonts/      # WOFF2 subsets (no external font requests)
```

## Sections

- **Hero** — headline, one-liner, CTA
- **Projects** — Smart City Traffic Optimization, Smart IV Monitoring, CarbonTrack SME
- **Skills** — Languages, Core Concepts, Tools & Platforms, AI/ML & Simulation as keycaps
- **Profiles** — GitHub, LinkedIn, LeetCode, Codeforces, CodeChef, Kaggle
- **Achievements** — Hacksagon 2026 (2nd/2100+), Ideathon (2nd runner up)
- **About** — Education (Ramdeobaba University, CGPA 8.53/10), 6G Security Research, Blockchain Chapter
- **Contact** — Email, Phone, GitHub, LinkedIn, LeetCode, Location

## Intro loader (Money Rain)

On load, a full-screen intro plays for **5 seconds**: the Money Rain WebGL animation (`src/money-rain.tsx`, bundled to `assets/money-rain.bundle.js` by `npm run build`) with a brand mark and a loading bar that fills in real time over 5000 ms, then the curtain lifts to the page.

- Timing lives in `intro-loader.js` (`DURATION = 5000`) and does not depend on the React bundle.
- Styles in `intro-loader.css`; markup is `#introLoader` at the top of `index.html`.
- **Skip** button / `Esc` ends it early. Scroll is locked during the intro and the hero entrance waits for the curtain.
- Skipped automatically for `prefers-reduced-motion`, no WebGL2, or JS off. A 9 s failsafe removes the overlay if anything goes wrong.
- Rain tuning (density, speed, bill image, colors) are the props at the top of the component's default export in `src/money-rain.tsx`.

## Built with

- HTML, CSS, JavaScript (vanilla)
- Hallmark v2.0.0 design skill (Cobalt theme)
- No frameworks, no build tools

## Scroll motion

`main.js` contains a single scroll engine (one `requestAnimationFrame` loop that sleeps when nothing is moving):

- **Progress bar** across the top of the page
- **Hero parallax** — headline, portrait and scroll cue move at different speeds
- **Section rules** that draw in under each heading
- **Stacked cards** (`data-stack`) for Projects and Skills, with depth dimming and staggered code/tag reveals
- **Scrubbed reveals** (`data-scrub="rise|tilt|left|right|scale"`, optional `data-stagger`) that reverse when scrolling back up

Everything is skipped when the visitor prefers reduced motion.
