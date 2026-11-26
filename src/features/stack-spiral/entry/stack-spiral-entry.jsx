import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import SpiralImages from '../components/SpiralImages';

const REAL_STACK = [
  { name: 'C++', role: 'Systems & DSA', badge: 'C++', color: '#00599C' },
  { name: 'Python', role: 'ML & Backend', badge: 'PY', color: '#3776AB' },
  { name: 'React', role: 'Frontend UI', badge: '⚛', color: '#61DAFB' },
  { name: 'FastAPI', role: 'REST APIs', badge: '⚡', color: '#10B981' },
  { name: 'JavaScript', role: 'Web & Async', badge: 'JS', color: '#F7DF1E' },
  { name: 'Google Cloud', role: 'Compute & VPC', badge: 'GCP', color: '#4285F4' },
  { name: 'Linux', role: 'OS & Shell', badge: '>_', color: '#FCC624' },
  { name: 'Git & GitHub', role: 'Version Control', badge: 'GIT', color: '#F05032' },
  { name: 'XGBoost', role: 'Traffic ML', badge: 'XG', color: '#EAAA00' },
  { name: 'Leaflet & OSRM', role: 'GIS Routing', badge: 'GIS', color: '#22C55E' },
  { name: 'Java', role: 'OOP & Core', badge: 'JV', color: '#EA2D2E' },
  { name: 'SQL & DBMS', role: 'Relational Data', badge: 'SQL', color: '#38BDF8' },
  { name: 'ESP32 & IoT', role: 'Sensors', badge: 'IoT', color: '#F97316' },
  { name: 'MQTT', role: 'Telemetry', badge: 'MQ', color: '#A855F7' },
  { name: 'C', role: 'Low-Level', badge: 'C', color: '#659AD2' },
  { name: 'pandas', role: 'DataFrames', badge: 'PD', color: '#E70488' },
  { name: 'NumPy', role: 'Arrays', badge: 'NP', color: '#4D77CF' },
  { name: 'Matplotlib', role: 'Visualization', badge: 'PLT', color: '#0EA5E9' },
  { name: 'DSA & GoF', role: 'Algorithms', badge: 'DSA', color: '#34D399' },
  { name: 'Networks & 6G', role: 'Protocols', badge: '6G', color: '#C084FC' },
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function makeTechCardDataUri(item) {
  const name = escapeXml(item.name);
  const role = escapeXml(item.role);
  const badge = escapeXml(item.badge);
  const color = item.color;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="190" viewBox="0 0 320 190">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#111624"/>
        <stop offset="100%" stop-color="#07090F"/>
      </linearGradient>
      <radialGradient id="glow" cx="20%" cy="25%" r="75%">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="320" height="190" rx="22" fill="url(#bg)"/>
    <rect width="320" height="190" rx="22" fill="url(#glow)"/>
    <rect x="1.5" y="1.5" width="317" height="187" rx="20.5" fill="none" stroke="${color}" stroke-opacity="0.45" stroke-width="2.5"/>
    <rect x="24" y="24" width="68" height="68" rx="16" fill="${color}" fill-opacity="0.16" stroke="${color}" stroke-opacity="0.55" stroke-width="2"/>
    <text x="58" y="67" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="${badge.length > 2 ? 22 : 26}" font-weight="800" fill="${color}">${badge}</text>
    <text x="24" y="134" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#F8FAFC">${name}</text>
    <text x="24" y="164" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="16" font-weight="500" fill="#94A3B8">${role}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function StackSpiralSection() {
  const spiralImages = useMemo(
    () => REAL_STACK.map((item) => ({ src: makeTechCardDataUri(item) })),
    []
  );

  return (
    <div className="stack-spiral-wrapper">
      <div className="stack-spiral-stage" aria-label="Interactive 2D spiral of technical skills">
        <SpiralImages
          images={spiralImages}
          turns={3.2}
          speed={2.1}
          spacing={5.6}
          spread={5.2}
          sizeAttenuation={1.45}
          imageSize={175}
          fadeIn={18}
          fadeOut={14}
          cornerRadius={6}
        />
      </div>

      <div className="stack-spiral-legend" aria-label="Complete technical stack list">
        {REAL_STACK.map((item) => (
          <div key={item.name} className="stack-spiral-pill">
            <span
              className="stack-spiral-pill__dot"
              style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
              aria-hidden="true"
            />
            <span className="stack-spiral-pill__name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function mountStackSpiral() {
  const mount = document.getElementById('stackSpiralMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(<StackSpiralSection />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountStackSpiral);
} else {
  mountStackSpiral();
}
