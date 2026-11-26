import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import SpiralImages from '../components/SpiralImages';

const REAL_STACK = [
  {
    name: 'C++',
    color: '#38BDF8',
    svg: `<polygon points="64,18 104,41 104,87 64,110 24,87 24,41" fill="#00599C" fill-opacity="0.25" stroke="#38BDF8" stroke-width="4"/><text x="64" y="75" text-anchor="middle" font-family="ui-monospace,monospace" font-size="34" font-weight="800" fill="#E0F2FE">C++</text>`,
  },
  {
    name: 'Python',
    color: '#3776AB',
    svg: `<path d="M63 22c-13 0-24 2-24 11v11h24v4H30c-7 0-12 7-12 18 0 12 5 18 12 18h8V74c0-10 8-18 18-18h25c8 0 14-6 14-14V33c0-9-11-11-24-11z" fill="#3776AB"/><circle cx="49" cy="33" r="3.5" fill="#F8FAFC"/><path d="M65 106c13 0 24-2 24-11V84H65v-4h33c7 0 12-7 12-18 0-12-5-18-12-18h-8v10c0 10-8 18-18 18H47c-8 0-14 6-14 14v9c0 9 11 11 24 11z" fill="#FFD43B"/><circle cx="79" cy="95" r="3.5" fill="#0F172A"/>`,
  },
  {
    name: 'React',
    color: '#61DAFB',
    svg: `<g fill="none" stroke="#61DAFB" stroke-width="4"><ellipse cx="64" cy="64" rx="18" ry="44" transform="rotate(30 64 64)"/><ellipse cx="64" cy="64" rx="18" ry="44" transform="rotate(90 64 64)"/><ellipse cx="64" cy="64" rx="18" ry="44" transform="rotate(150 64 64)"/></g><circle cx="64" cy="64" r="8" fill="#61DAFB"/>`,
  },
  {
    name: 'FastAPI',
    color: '#10B981',
    svg: `<circle cx="64" cy="64" r="40" fill="#10B981" fill-opacity="0.18" stroke="#10B981" stroke-width="4"/><polygon points="68,28 40,68 62,68 58,100 88,60 66,60" fill="#10B981"/>`,
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: `<rect x="24" y="24" width="80" height="80" rx="14" fill="#F7DF1E"/><text x="88" y="92" text-anchor="end" font-family="system-ui,sans-serif" font-size="42" font-weight="900" fill="#0F172A">JS</text>`,
  },
  {
    name: 'Google Cloud',
    color: '#4285F4',
    svg: `<path d="M84 54a24 24 0 0 0-44-8 18 18 0 0 0-2 36h44a16 16 0 0 0 2-28z" fill="none" stroke="#4285F4" stroke-width="7" stroke-linejoin="round"/><path d="M40 46a24 24 0 0 1 36-6" fill="none" stroke="#EA4335" stroke-width="7" stroke-linecap="round"/><path d="M36 82h26" fill="none" stroke="#34A853" stroke-width="7" stroke-linecap="round"/>`,
  },
  {
    name: 'Linux',
    color: '#FCC624',
    svg: `<rect x="22" y="28" width="84" height="72" rx="12" fill="#18181B" stroke="#FCC624" stroke-width="4"/><polyline points="38,52 54,64 38,76" fill="none" stroke="#FCC624" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><line x1="62" y1="76" x2="86" y2="76" stroke="#FCC624" stroke-width="6" stroke-linecap="round"/>`,
  },
  {
    name: 'Git & GitHub',
    color: '#F05032',
    svg: `<g fill="none" stroke="#F05032" stroke-width="6" stroke-linecap="round"><line x1="42" y1="30" x2="42" y2="98"/><path d="M42 46c0 16 44 10 44 28"/><circle cx="42" cy="34" r="8" fill="#0B0E17"/><circle cx="42" cy="94" r="8" fill="#0B0E17"/><circle cx="86" cy="74" r="8" fill="#0B0E17"/></g>`,
  },
  {
    name: 'XGBoost',
    color: '#EAAA00',
    svg: `<g fill="none" stroke="#EAAA00" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><polyline points="24,90 48,66 68,76 100,34"/><polyline points="80,34 100,34 100,54"/><circle cx="48" cy="66" r="5" fill="#EAAA00"/><circle cx="68" cy="76" r="5" fill="#EAAA00"/></g>`,
  },
  {
    name: 'Leaflet',
    color: '#22C55E',
    svg: `<path d="M64 22c-18 14-30 32-30 50a30 30 0 0 0 60 0c0-18-12-36-30-50z" fill="#22C55E" fill-opacity="0.2" stroke="#22C55E" stroke-width="5"/><line x1="64" y1="38" x2="64" y2="98" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/><path d="M64 60l16-8M64 78l16-8" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>`,
  },
  {
    name: 'Java',
    color: '#EA2D2E',
    svg: `<path d="M40 56h42v20a21 21 0 0 1-42 0V56z" fill="#EA2D2E" fill-opacity="0.25" stroke="#EA2D2E" stroke-width="5"/><path d="M82 60h8a8 8 0 0 1 0 16h-8" fill="none" stroke="#EA2D2E" stroke-width="5"/><line x1="34" y1="102" x2="88" y2="102" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/><path d="M54 44c-4-8 6-12 2-20M68 44c-4-8 6-12 2-20" fill="none" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>`,
  },
  {
    name: 'SQL & DBMS',
    color: '#38BDF8',
    svg: `<g fill="none" stroke="#38BDF8" stroke-width="5"><ellipse cx="64" cy="36" rx="32" ry="12" fill="#38BDF8" fill-opacity="0.18"/><path d="M32 36v54c0 6.6 14.3 12 32 12s32-5.4 32-12V36"/><path d="M32 63c0 6.6 14.3 12 32 12s32-5.4 32-12"/></g>`,
  },
  {
    name: 'ESP32 & IoT',
    color: '#F97316',
    svg: `<g fill="none" stroke="#F97316" stroke-width="4.5" stroke-linecap="round"><rect x="36" y="36" width="56" height="56" rx="8" fill="#F97316" fill-opacity="0.16"/><rect x="50" y="50" width="28" height="28" rx="4"/><line x1="22" y1="48" x2="36" y2="48"/><line x1="22" y1="64" x2="36" y2="64"/><line x1="22" y1="80" x2="36" y2="80"/><line x1="92" y1="48" x2="106" y2="48"/><line x1="92" y1="64" x2="106" y2="64"/><line x1="92" y1="80" x2="106" y2="80"/><line x1="48" y1="22" x2="48" y2="36"/><line x1="64" y1="22" x2="64" y2="36"/><line x1="80" y1="22" x2="80" y2="36"/><line x1="48" y1="92" x2="48" y2="106"/><line x1="64" y1="92" x2="64" y2="106"/><line x1="80" y1="92" x2="80" y2="106"/></g>`,
  },
  {
    name: 'MQTT',
    color: '#A855F7',
    svg: `<circle cx="64" cy="90" r="8" fill="#A855F7"/><path d="M44 72a28 28 0 0 1 40 0M30 56a48 48 0 0 1 68 0M18 40a66 66 0 0 1 92 0" fill="none" stroke="#A855F7" stroke-width="5.5" stroke-linecap="round"/>`,
  },
  {
    name: 'C',
    color: '#659AD2',
    svg: `<polygon points="64,18 104,41 104,87 64,110 24,87 24,41" fill="#659AD2" fill-opacity="0.2" stroke="#659AD2" stroke-width="4"/><text x="64" y="79" text-anchor="middle" font-family="ui-monospace,monospace" font-size="44" font-weight="800" fill="#E0F2FE">C</text>`,
  },
  {
    name: 'pandas',
    color: '#E70488',
    svg: `<rect x="38" y="24" width="14" height="80" rx="4" fill="#818CF8"/><rect x="57" y="42" width="14" height="24" rx="4" fill="#E70488"/><rect x="76" y="24" width="14" height="80" rx="4" fill="#818CF8"/><rect x="57" y="72" width="14" height="14" rx="4" fill="#FACC15"/>`,
  },
  {
    name: 'NumPy',
    color: '#4D77CF',
    svg: `<g fill="none" stroke="#4D77CF" stroke-width="5" stroke-linejoin="round"><polygon points="64,22 102,42 64,62 26,42" fill="#4D77CF" fill-opacity="0.25"/><polyline points="26,64 64,84 102,64"/><polyline points="26,86 64,106 102,86"/></g>`,
  },
  {
    name: 'Matplotlib',
    color: '#0EA5E9',
    svg: `<g fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="24,28 24,98 102,98" stroke="#64748B" stroke-width="5"/><polyline points="30,86 52,52 72,68 98,32" stroke="#0EA5E9" stroke-width="6"/><circle cx="52" cy="52" r="5" fill="#F59E0B"/><circle cx="72" cy="68" r="5" fill="#F59E0B"/><circle cx="98" cy="32" r="5" fill="#F59E0B"/></g>`,
  },
  {
    name: 'DSA & GoF',
    color: '#34D399',
    svg: `<g fill="none" stroke="#34D399" stroke-width="4.5"><line x1="64" y1="34" x2="38" y2="74"/><line x1="64" y1="34" x2="90" y2="74"/><line x1="38" y1="74" x2="26" y2="98"/><line x1="38" y1="74" x2="50" y2="98"/><circle cx="64" cy="30" r="10" fill="#0B0E17"/><circle cx="38" cy="74" r="9" fill="#0B0E17"/><circle cx="90" cy="74" r="9" fill="#0B0E17"/><circle cx="26" cy="98" r="7" fill="#34D399"/><circle cx="50" cy="98" r="7" fill="#34D399"/></g>`,
  },
  {
    name: 'Networks 6G',
    color: '#C084FC',
    svg: `<g fill="none" stroke="#C084FC" stroke-width="4.5"><line x1="34" y1="38" x2="94" y2="38"/><line x1="34" y1="38" x2="64" y2="92"/><line x1="94" y1="38" x2="64" y2="92"/><circle cx="34" cy="38" r="10" fill="#0B0E17"/><circle cx="94" cy="38" r="10" fill="#0B0E17"/><circle cx="64" cy="92" r="10" fill="#0B0E17"/><text x="64" y="64" text-anchor="middle" font-family="ui-monospace,monospace" font-size="16" font-weight="800" fill="#E9D5FF">6G</text></g>`,
  },
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function makeTechCardWithSymbolDataUri(item) {
  const color = item.color;
  const name = escapeXml(item.name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="168" height="148" viewBox="0 0 168 148">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#13192B"/>
        <stop offset="100%" stop-color="#07090F"/>
      </linearGradient>
      <radialGradient id="gl" cx="50%" cy="38%" r="60%">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="168" height="148" rx="22" fill="url(#bg)"/>
    <rect width="168" height="148" rx="22" fill="url(#gl)"/>
    <rect x="1.5" y="1.5" width="165" height="145" rx="20.5" fill="none" stroke="${color}" stroke-opacity="0.48" stroke-width="2.5"/>
    <g transform="translate(36, 12) scale(0.75)">
      ${item.svg}
    </g>
    <text x="84" y="128" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#F8FAFC">${name}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function StackSpiralSection() {
  const spiralImages = useMemo(
    () => REAL_STACK.map((item) => ({ src: makeTechCardWithSymbolDataUri(item) })),
    []
  );

  return (
    <div className="stack-spiral-wrapper">
      <div className="stack-spiral-stage" aria-label="Interactive 2D spiral of technical skill cards">
        <SpiralImages
          images={spiralImages}
          turns={3.3}
          speed={2.1}
          spacing={5.0}
          spread={5.6}
          sizeAttenuation={1.45}
          imageSize={126}
          fadeIn={16}
          fadeOut={12}
          cornerRadius={7}
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
