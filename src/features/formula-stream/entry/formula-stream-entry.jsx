import React from 'react';
import { createRoot } from 'react-dom/client';
import FormulaStream from '../components/FormulaStream';

function mountAboutFormulaStream() {
  const mount = document.getElementById('aboutFormulaStreamMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <FormulaStream
        background="transparent"
        textColor="rgba(232, 228, 220, 0.22)"
        accent="#f5c36c"
        density={15}
        speed={52}
        curve={42}
        gap={88}
        hover={120}
        reach={220}
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAboutFormulaStream);
} else {
  mountAboutFormulaStream();
}
