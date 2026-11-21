"use client";

import React from "react";
import { createRoot } from "react-dom/client";
import GauzeBlaze from "../../originkit/components/ui/gauze-blaze";

function mountGauzeBlaze() {
  const mountPoints = document.querySelectorAll(
    "#gauzeBlazeMount, #gauzeBlazeProjectsMount, [data-gauze-blaze]"
  );

  mountPoints.forEach((mount) => {
    if (mount.dataset.gauzeMounted) return;
    mount.dataset.gauzeMounted = "true";

    const bg = mount.getAttribute("data-bg") || "#0a030d";
    const scale = mount.getAttribute("data-scale") ? parseFloat(mount.getAttribute("data-scale")) : 95;
    const speed = mount.getAttribute("data-speed") ? parseFloat(mount.getAttribute("data-speed")) : 45;
    const centerY = mount.getAttribute("data-center-y") ? parseFloat(mount.getAttribute("data-center-y")) : 50;

    const root = createRoot(mount);
    root.render(
      <GauzeBlaze
        background={bg}
        baseColor="#4A4DFF"
        midColor="#FF2A7E"
        accentColor="#FF6A1A"
        particles={320}
        amplitude={36}
        scale={scale}
        speed={speed}
        pointer={{
          heat: 7,
          stir: 6,
          burst: 7,
        }}
        advanced={{
          sheets: 4,
          lineCount: 52,
          ribbonWidth: 13,
          centerY: centerY,
          waveLength: 46,
          twistLength: 130,
          lineWidth: 105,
          lineOpacity: 42,
          speckle: 45,
          backDim: 40,
          coreColor: "#FFD36A",
          coreGain: 320,
          edgeGlow: 180,
          glowSize: 26,
          exposure: 290,
          hazeColor: "#1D0726",
          haze: 45,
          vignette: 25,
          grain: 0,
          emberSize: 110,
          emberLife: 110,
          travel: 22,
          breathe: 18,
          hover: 60,
          pointerLift: 40,
          pointerRadius: 24,
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          minWidth: 0,
          minHeight: 0,
        }}
      />
    );
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountGauzeBlaze);
} else {
  mountGauzeBlaze();
}

export { GauzeBlaze };
