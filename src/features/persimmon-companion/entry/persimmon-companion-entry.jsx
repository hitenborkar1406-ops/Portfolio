import React from 'react';
import { createRoot } from 'react-dom/client';
import TechRobotCompanion from '../components/TechRobotCompanion';

function mountTechRobotCompanion() {
  const mount = document.getElementById('persimmonWaftMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <TechRobotCompanion
        scale={0.92}
        followEase={0.042}
        idleSpeed={0.55}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountTechRobotCompanion);
} else {
  mountTechRobotCompanion();
}
