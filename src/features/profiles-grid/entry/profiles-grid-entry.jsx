import React from 'react';
import { createRoot } from 'react-dom/client';
import StaggeredGrid from '../components/StaggeredGrid';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const LeetcodeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.655c.299.034.6.051.9.051.445 0 .89-.037 1.33-.111l4.05-1.018a1.378 1.378 0 0 0 .688-2.228 1.38 1.38 0 0 0-1.637-.215l-3.86 1.012c-.225.048-.456.072-.686.072-.154 0-.308-.011-.461-.033a3.195 3.195 0 0 1-2.583-1.956 3.14 3.14 0 0 1-.186-.543 2.784 2.784 0 0 1-.033-1.267 2.827 2.827 0 0 1 .65-1.127l3.85-4.12 5.4-5.787a1.376 1.376 0 0 0-.25-2.073A1.374 1.374 0 0 0 13.483 0zm-2.88 5.39a1.376 1.376 0 0 0-.99.414l-3.666 3.92a1.38 1.38 0 0 0 .034 1.95 1.378 1.378 0 0 0 1.95-.034l3.667-3.92a1.377 1.377 0 0 0-.995-2.33zm7.098 7.411a1.374 1.374 0 0 0-.987.416l-3.854 4.126-1.04 1.114a1.38 1.38 0 0 0 2.012 1.88l1.04-1.114 3.854-4.126a1.378 1.378 0 0 0-1.025-2.416z" />
  </svg>
);

const StrokeIcon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const BENTO_ITEMS = [
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Explore Repositories',
    handle: '@hitenborkar1406-ops',
    description: 'Open-source systems, GIS traffic routing engine, and IoT telemetry prototypes.',
    href: 'https://github.com/hitenborkar1406-ops',
    accent: '#A855F7',
    badgeText: 'Active Commits',
    chips: ['492 Contribs', '11 Repos', '48d Streak'],
    icon: <GithubIcon />,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Connect & Collaborate',
    handle: 'Hiten Borkar',
    description: 'B.Tech CSE @ Ramdeobaba University • Co-authoring 6G Security Paper.',
    href: 'https://www.linkedin.com/in/hiten-borkar-153a29326',
    accent: '#38BDF8',
    badgeText: 'Open to SDE Roles',
    chips: ["B.Tech '28", '6G Security', 'Ideathon 2nd'],
    icon: <LinkedinIcon />,
  },
  {
    id: 'leetcode',
    title: 'LeetCode',
    subtitle: 'View Problem Record',
    handle: '@Hiten-1406',
    description: 'Algorithms, Dynamic Programming, Graphs & Data Structures.',
    href: 'https://leetcode.com/u/Hiten-1406/',
    accent: '#FFA116',
    badgeText: '61-Day Streak',
    chips: ['144 Solved', '82 Days Active', '76.4% Acc'],
    icon: <LeetcodeIcon />,
  },
];

const TILE_ICONS = [
  { label: '492 Contribs', color: '#A855F7', icon: <StrokeIcon d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9" /> },
  { label: '144 Solved', color: '#FFA116', icon: <StrokeIcon d="M16 18l6-6-6-6M8 6l-6 6 6 6" /> },
  { label: '48d Streak', color: '#34D399', icon: <StrokeIcon d="M12 2c1 4-2 6-2 10a4 4 0 0 0 8 0c0-3-2-5-2-8-1 2-2 3-4-2z" /> },
  { label: '11 Repos', color: '#A855F7', icon: <StrokeIcon d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z" /> },
  { label: '6G Security', color: '#38BDF8', icon: <StrokeIcon d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
  { label: 'Ideathon 2nd', color: '#F5C36C', icon: <StrokeIcon d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" /> },
  { label: '76.4% Acc', color: '#FFA116', icon: <StrokeIcon d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" /> },
  { label: 'GIS & ML', color: '#38BDF8', icon: <StrokeIcon d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0v20M2 12h20" /> },
  { label: 'Edge IoT', color: '#34D399', icon: <StrokeIcon d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /> },
  { label: 'C++ / DSA', color: '#F5C36C', icon: <StrokeIcon d="M4 17l6-6-6-6M12 19h8" /> },
  { label: 'FastAPI', color: '#34D399', icon: <StrokeIcon d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
  { label: 'B.Tech CSE', color: '#38BDF8', icon: <StrokeIcon d="M22 10v6M2 10l10-5 10 5-10 5z" /> },
  { label: '61d LC Streak', color: '#FFA116', icon: <StrokeIcon d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /> },
  { label: 'Open Source', color: '#A855F7', icon: <StrokeIcon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> },
];

function mountProfilesGrid() {
  const mount = document.getElementById('profilesStaggeredMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <StaggeredGrid
        bentoItems={BENTO_ITEMS}
        centerText=""
        tileIcons={TILE_ICONS}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountProfilesGrid);
} else {
  mountProfilesGrid();
}
