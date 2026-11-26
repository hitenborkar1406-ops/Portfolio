import React from 'react';
import { createRoot } from 'react-dom/client';
import LightShaftText from '../components/LightShaftText';

function HeroNameLightShaft() {
  return (
    <div className="light-shaft-name-stack">
      <div className="light-shaft-name-row">
        <LightShaftText
          text="HITEN"
          font={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 900,
            fontSize: 190,
            letterSpacing: '-0.02em',
          }}
          background="transparent"
          textColor="#182238"
          lineColor="#7DD3FC"
          speed={54}
          offsetY={0}
          interactive={true}
          pointerIntensity={34}
          transparent={true}
          fitWidth={true}
          lines={{
            density: 150,
            width: 34,
            softness: 80,
            depth: 52,
            overshoot: 28,
            flicker: 62,
          }}
        />
      </div>
      <div className="light-shaft-name-row">
        <LightShaftText
          text="BORKAR"
          font={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 900,
            fontSize: 190,
            letterSpacing: '-0.02em',
          }}
          background="transparent"
          textColor="#1f1b14"
          lineColor="#F5C36C"
          speed={50}
          offsetY={0}
          interactive={true}
          pointerIntensity={34}
          transparent={true}
          fitWidth={true}
          lines={{
            density: 150,
            width: 34,
            softness: 80,
            depth: 52,
            overshoot: 28,
            flicker: 62,
          }}
        />
      </div>
    </div>
  );
}

function mountLightShaftName() {
  const mount = document.getElementById('lightShaftNameMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(<HeroNameLightShaft />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountLightShaftName);
} else {
  mountLightShaftName();
}
