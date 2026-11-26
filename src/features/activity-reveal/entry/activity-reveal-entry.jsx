import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import TapReveal from '../components/TapReveal';

function ActivityTapReveal() {
  const slotRef = useRef(null);

  useEffect(() => {
    const matrixEl = document.getElementById('activityMatrixSection');
    if (matrixEl && slotRef.current && matrixEl.parentElement !== slotRef.current) {
      slotRef.current.appendChild(matrixEl);
    }
  }, []);

  return (
    <TapReveal
      label="Tap to reveal GitHub & LeetCode Activity"
      hideLabel="Seal activity matrix"
      cellSize={9}
      duration={700}
      shimmer={true}
      hideable={true}
      className="activity-tap-reveal"
      contentClassName="activity-tap-reveal__inner"
    >
      <div ref={slotRef} className="activity-tap-reveal__slot" />
    </TapReveal>
  );
}

function mountActivityReveal() {
  const mount = document.getElementById('activityTapRevealMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(<ActivityTapReveal />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountActivityReveal);
} else {
  mountActivityReveal();
}
