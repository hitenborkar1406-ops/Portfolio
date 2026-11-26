import React from 'react';
import { createRoot } from 'react-dom/client';
import PixelRunGame from '../components/PixelRunGame';

function mountFooterPixelRun() {
  const mount = document.getElementById('footerPixelRunMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <PixelRunGame
        background="rgba(6, 9, 16, 0.52)"
        ink="#f5c36c"
        startSpeed={420}
        maxSpeed={980}
        gravity={4780}
        jump={1480}
        showHud={true}
        showClouds={false}
        attract={true}
        farDashSpeed={65}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountFooterPixelRun);
} else {
  mountFooterPixelRun();
}
