import React from 'react';
import { createRoot } from 'react-dom/client';
import PersimmonWaft from '../components/PersimmonWaft';

function mountPersimmonCompanion() {
  const mount = document.getElementById('persimmonWaftMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <PersimmonWaft
        variant="oranda"
        background="transparent"
        bubbles={true}
        size={18}
        follow={true}
        eagerness={2.8}
        speed={2.8}
        roam={8.5}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountPersimmonCompanion);
} else {
  mountPersimmonCompanion();
}
