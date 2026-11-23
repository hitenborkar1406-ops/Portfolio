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
├── index.html                    # Main portfolio (single-page experience)
├── 404.html                      # Custom 404 page
├── style.css                     # Main design system & custom component styling
├── base.css                      # Base resets, typography, and utility foundations
├── tokens.css                    # Design tokens & color variable system
├── main.js                       # Core interaction engine (dock, theme, 3D books, scroll)
├── package.json                  # Dependencies & esbuild build scripts
├── vercel.json                   # Deployment routing & redirect configurations
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # SEO crawlers directive
├── assets/
│   ├── avatar.jpg                # Cyber portrait profile image
│   ├── fonts.css                 # Self-hosted webfont declarations
│   ├── fonts/                    # WOFF2 subsets (Playfair Display, IBM Plex, JetBrains Mono)
│   ├── images/                   # Project screenshots & achievement certificates
│   ├── icons/                    # Technology & toolchain icons
│   ├── downloads/
│   │   └── HITEN_RESUME.pdf      # Latest downloadable CV
│   ├── three.min.js              # Three.js core 3D runtime
│   ├── qrcode.min.js             # Offline QR code generator
│   ├── ribbon-cursor.js          # Interactive ribbon trail cursor
│   ├── ink-theme.js              # Theme controller & storage
│   └── *.bundle.js               # Compiled client feature bundles
└── src/
    ├── features/
    │   ├── portfolio-intro/      # 3D procedural sedan intro animation (Three.js + GSAP)
    │   │   ├── components/       # PortfolioIntro, IntroStageScene, FuturisticSedan, GoldenTrails
    │   │   ├── config/           # introConfig.ts, motionTimeline.ts
    │   │   ├── styles/           # PortfolioIntro.css
    │   │   └── entry/            # portfolio-intro-entry.jsx
    │   ├── traffic-wave/         # Neon highway WebGL background scene
    │   │   └── entry/            # traffic-wave-entry.jsx
    │   ├── clay-robot/           # Interactive 3D clay robot mascot (SDF ray-marched WebGL2)
    │   │   └── entry/            # clay-robot.jsx
    │   └── spring-text/          # Spring physics typography engine
    │       └── entry/            # spring-text.jsx
    └── shared/
        └── utils/
            └── main.js           # Shared interactive utilities
```

---

## Sections (index.html)

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#hero` | Headline, one-liner, quick CTAs (Get in Touch, Resume, Share) |
| Tech Stack | `#stack` | Continuously streaming dual-row tech stack marquee |
| Activity | `#activity` | Interactive GitHub & LeetCode contribution grids with stats |
| Projects | `#projects` | 5 featured engineering projects with interactive 3D Clay Robot mascot & filter tabs |
| Achievements | `#achievements` | Interactive 3D book showcase (Hacksagon 2026 2nd Place, Ideathon) |
| About | `#about` | Education, 6G security research, certifications, and cyber card |
| Contact | `#contact` | Social flip buttons, direct communication channels, and interactive QR sheet |

---

## Built With

- **Core:** HTML5, CSS3, JavaScript (ES modules)
- **Design System:** Hallmark v2.0.0 (Cobalt & Obsidian theme)
- **3D & Shaders:** Three.js, WebGL2 (ray-marched SDF), React Three Fiber, GSAP
- **Text Animation:** spring-text-engine + @react-spring/web
- **Bundler:** esbuild (high-speed IIFE minification)
- **Typography:** Self-hosted Playfair Display, IBM Plex Sans, JetBrains Mono
- **Hosting:** Vercel (static edge deployment)

---

## Build & Development

```bash
# Install dependencies
npm install

# Build all production bundles
npm run build

# Watch mode for spring text
npm run dev
```

**Compiled Bundles** generated into `assets/`:
- `spring-text.bundle.js` — Dynamic spring typography
- `clay-robot.bundle.js` — Interactive 3D mascot agent
- `portfolio-intro.bundle.js` — 3D sedan intro sequence
- `traffic-wave.bundle.js` — Ambient neon highway backdrop

---

## Key Features

| Feature | Implementation |
|---------|----------------|
| 3D Sedan Intro | React + Three.js + GSAP procedural coupe with smooth curtain exit |
| Ambient Traffic Wave | Continuous night highway light trails running seamlessly in the background |
| Clay Robot Mascot | Interactive WebGL2 ray-marched SDF mascot reacting to cursor movements and hops |
| Live Activity Grids | Dynamic GitHub commit graph and LeetCode problem solving tracker |
| Streaming Tech Stack | Seamless infinite CSS marquee showcasing full-stack capabilities |
| 3D Book Shelf | Interactive Three.js books with page-turning modals and hackathon proof |
| Social Flip Grid | 3D CSS card flip interactions spelling out contact channels |

---

## Deployment

```bash
# Push to main to trigger automatic edge deployment
git push origin main
```

---

## License

ISC — see `package.json` for details.
