# Hiten Borkar — Portfolio

Personal portfolio website built with the [Hallmark](https://github.com/Nutlope/hallmark) design system.

**Live:** [View Portfolio](https://hitenborkar1406-ops.github.io/Portfolio/)

---

## Theme & Palette

| Token | Value | Usage |
|-------|-------|-------|
| Ice Silver | `#DDE3E8` | Main paper, light grounds, card contrast, subtle borders |
| Deep Aubergine | `#3A0F34` | Primary ink, deep headings, terminal/graphite panels, dark brand accents |
| Marigold | `#EAAA00` | Radiant minor accent for buttons, signals, hover highlights, active states |

---

## Project Structure

```
├── index.html                    # Main portfolio (single-page)
├── projects.html                 # Projects listing page
├── narrative-index.html          # Narrative story portfolio (alt version)
├── 404.html                      # Custom 404 page
├── tokens.css                    # Design tokens (Cobalt theme)
├── base.css                      # Hallmark scaffold: floor rules, keys, cuts, graphite
├── style.css                     # Page-specific styles + responsive
├── narrative.css                 # Narrative portfolio styles
├── favicon.ico / favicon.png     # Favicons
├── package.json                  # Build config (esbuild)
├── vercel.json                   # Vercel deployment config
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # SEO robots
├── assets/
│   ├── avatar.jpg                # Profile image
│   ├── fonts.css                 # Self-hosted Playfair Display / IBM Plex Sans / JetBrains Mono
│   ├── fonts/                    # WOFF2 subsets (no external font requests)
│   ├── images/                   # Project screenshots (Hacksagon, Ideathon)
│   ├── icons/                    # Technology icons (C++)
│   ├── downloads/
│   │   └── HITEN_RESUME.pdf      # Resume PDF
│   ├── *.bundle.js               # Compiled entry points (generated)
│   └── *.bundle.css              # Compiled CSS (generated)
└── src/
    ├── features/
    │   ├── portfolio-intro/      # 3D procedural sedan intro (React + Three.js + GSAP)
    │   │   ├── components/       # PortfolioIntro, IntroStageScene, FuturisticSedan, GoldenTrails
    │   │   ├── config/           # introConfig.ts, motionTimeline.ts
    │   │   ├── styles/           # PortfolioIntro.css
    │   │   └── entry/            # portfolio-intro-entry.jsx (mount point)
    │   ├── originkit/            # Hero 57 / Sunset Velocity (React + Canvas)
    │   │   ├── components/
    │   │   │   ├── hero-57.tsx
    │   │   │   └── ui/           # section-hero, hero-57-content, sunset-velocity
    │   │   ├── styles/           # hero-57.css, originkit-section-theme.css
    │   ├── spring-text/          # Spring-driven text animation
    │   │   └── entry/            # spring-text.jsx (IntersectionObserver + spring-text-engine)
    │   ├── clay-robot/           # Interactive 3D clay robot mascot (WebGL2)
    │   │   └── entry/            # clay-robot.jsx (SDF ray-marched, theme-aware)
    │   └── sunset-velocity/      # Sunset Velocity standalone entry
    │       └── entry/            # sunset-velocity-entry.jsx
    └── shared/
        ├── lib/                  # Vendored libraries (no npm install needed)
        │   ├── three.min.js      # Three.js r158
        │   ├── qrcode.min.js     # QRCode generator
        │   └── ribbon-cursor.js  # Ribbon trail cursor effect
        └── utils/
            ├── main.js           # Nav, glass-dock, share sheet, 3D books, scroll motion
            └── narrative.js      # Narrative portfolio data & config
```

---

## Sections (index.html)

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#hero` | Headline, one-liner, CTA (Get in Touch, Resume, View Projects, Share) |
| Projects Callout | `#projects` | Banner linking to projects.html |
| Skills | `#skills` | 4 devi-folders: Languages, Fundamentals, Design & Tools, Data & Cloud |
| Profiles | `#profiles` | GitHub, LinkedIn, LeetCode cards |
| Achievements | `#achievements` | Interactive 3D book showcase (Hacksagon 2026, Ideathon) |
| About | `#about` | Education, Research, Certifications, Resume CTAs |
| Contact | `#contact` | Social flip buttons (GitHub, LeetCode, Email, LinkedIn, Location, Phone, Codeforces, Kaggle) |

---

## Built With

- **Core:** HTML, CSS, JavaScript (vanilla ES modules where possible)
- **Design System:** Hallmark v2.0.0 (Cobalt theme)
- **3D/Animation:** Three.js (react-three-fiber, drei), GSAP, WebGL2 (SDF ray-marching)
- **Text Animation:** spring-text-engine + @react-spring/web
- **Build:** esbuild (IIFE bundles, no framework)
- **Fonts:** Self-hosted Playfair Display, IBM Plex Sans, JetBrains Mono (WOFF2)
- **Deployment:** Vercel (static)

---

## Build & Development

```bash
# Install dependencies
npm install

# Development (watch spring-text)
npm run dev

# Production build (all 4 entry points)
npm run build
```

**Build outputs** to `assets/`:
- `spring-text.bundle.js` — Scroll-triggered spring text reveals
- `clay-robot.bundle.js` — 3D clay robot mascot
- `sunset-velocity.bundle.js` — Sunset Velocity hero animation
- `portfolio-intro.bundle.js` + `.bundle.css` — 3D sedan intro

---

## Scroll Motion Engine (`src/shared/utils/main.js`)

Single `requestAnimationFrame` loop that **sleeps when nothing moves**:

- **Progress bar** — top of page, updates on scroll
- **Hero parallax** — headline, badge, scroll cue at different speeds
- **Section rules** — animated underlines drawing in per section
- **Stacked cards** (`data-stack`) — Projects & Skills with depth dimming + staggered reveals
- **Scrubbed reveals** (`data-scrub="rise|tilt|left|right|scale"`, optional `data-stagger`) — reverse on scroll up
- **Respects `prefers-reduced-motion`** — all animation disabled when requested

---

## Key Features

| Feature | Implementation |
|---------|----------------|
| 3D Sedan Intro | React + Three.js + GSAP, procedural BMW M coupe, curtain reveal |
| Clay Robot Mascot | SDF ray-marched WebGL2, theme-aware (dark/light), interactive (walk, hop, wave, blink, follow pointer) |
| Sunset Velocity | Canvas 2D, parallax layers, configurable via props |
| Spring Text | IntersectionObserver lazy-mount, spring physics, auto-unmount to static DOM |
| Devi Folders | 3D CSS folders with arc badges, hover-to-inspect |
| 3D Book Showcase | Three.js bookshelf, click to open detail panel with photo gallery |
| Social Flip Buttons | CSS 3D flip cards spelling "CONTACT" |
| Glass Dock Nav | Magnetic tooltip, CTA button with eye animation |
| Dark/Light Theme | CSS custom properties + localStorage + system preference |

---

## Deployment

```bash
# Vercel (recommended)
vercel --prod

# Or push to main — Vercel auto-deploys from GitHub
git push origin main
```

**Vercel config** (`vercel.json`) rewrites all routes to `index.html` for SPA-like behavior on static pages.

---

## License

ISC — see `package.json` for details.