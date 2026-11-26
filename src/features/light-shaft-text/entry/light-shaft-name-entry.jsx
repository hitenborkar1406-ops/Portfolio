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
          textColor="#090c14"
          lineColor="#FFFFFF"
          speed={52}
          offsetY={0}
          interactive={true}
          pointerIntensity={26}
          transparent={true}
          fitWidth={true}
          lines={{
            density: 155,
            width: 26,
            softness: 86,
            depth: 26,
            overshoot: 32,
            flicker: 96,
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
          textColor="#090c14"
          lineColor="#F5C36C"
          speed={48}
          offsetY={0}
          interactive={true}
          pointerIntensity={26}
          transparent={true}
          fitWidth={true}
          lines={{
            density: 155,
            width: 26,
            softness: 86,
            depth: 26,
            overshoot: 32,
            flicker: 96,
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
