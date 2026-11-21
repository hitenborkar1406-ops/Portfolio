import React from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioIntro from '../components/PortfolioIntro';

function mountIntro() {
  let mount = document.getElementById('portfolioIntroMount');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'portfolioIntroMount';
    document.body.prepend(mount);
  }
  if (!mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(<PortfolioIntro />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountIntro);
} else {
  mountIntro();
}
