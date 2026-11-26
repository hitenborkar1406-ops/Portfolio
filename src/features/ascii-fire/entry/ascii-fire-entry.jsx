import React from 'react';
import { createRoot } from 'react-dom/client';
import AsciiFire from '../components/AsciiFire';

function mountFooterAsciiFire() {
  const mount = document.getElementById('footerAsciiFireMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(
      <AsciiFire
        intensity={96}
        windDirection="right"
        windForce={14}
        decay={15}
        turbulence={32}
        thickness={1}
        embers={true}
        sparks={true}
        pulse={true}
        palette="custom"
        shades={[
          '#2b0d04',
          '#5e1905',
          '#9a2c07',
          '#d4510b',
          '#f28518',
          '#f5c36c',
          '#fff0b8',
        ]}
        sparkColor="#ff5a26"
        charset="dense"
        backgroundColor="transparent"
      />
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountFooterAsciiFire);
} else {
  mountFooterAsciiFire();
}
