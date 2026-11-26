import React from 'react';
import { createRoot } from 'react-dom/client';
import FormulaStream from '../components/FormulaStream';

function mountProfilesFormulaStream() {
  const mount = document.getElementById('profilesFormulaStreamMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <FormulaStream
        background="transparent"
        textColor="rgba(232, 228, 220, 0.24)"
        accent="#f5c36c"
        density={15}
        speed={50}
        curve={42}
        gap={90}
        hover={125}
        reach={230}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountProfilesFormulaStream);
} else {
  mountProfilesFormulaStream();
}
