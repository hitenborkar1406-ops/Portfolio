"use client";

import React from "react";
import { createRoot } from "react-dom/client";
import SunsetVelocity from "./components/originkit/ui/hero-57/sunset-velocity";

function mountSunsetVelocity() {
  const mountPoint = document.getElementById("sunsetVelocityMount");
  if (mountPoint && !mountPoint.dataset.velocityMounted) {
    mountPoint.dataset.velocityMounted = "true";
    const root = createRoot(mountPoint);
    root.render(
      <SunsetVelocity
        background="#110813"
        skyTop="#F7D3C8"
        skyHorizon="#EF6759"
        carColor="#E53935"
        advanced={{
          sunX: 50,
          sunY: 48,
          sunSize: 110,
          vignette: 15,
          hazeColor: "#F6C2B4",
          hazeOpacity: 55,
          turbineFar: "#7E3D5A",
          cloudColor: "#6E2636",
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
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountSunsetVelocity);
} else {
  mountSunsetVelocity();
}

export { SunsetVelocity };

