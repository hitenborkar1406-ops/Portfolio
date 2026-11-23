import React from 'react';
import { createRoot } from 'react-dom/client';
import TrafficWave from '../components/TrafficWave';

function mountTrafficWave() {
  const mountEl = document.getElementById('trafficWaveMount');
  if (!mountEl) return;

  const root = createRoot(mountEl);
  root.render(<TrafficWave />);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountTrafficWave);
} else {
  mountTrafficWave();
}

