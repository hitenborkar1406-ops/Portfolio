import * as React from "react";
import { createRoot } from "react-dom/client";
import MoneyRain from "./money-rain";

const host = document.getElementById("introRain");

if (host && !host.dataset.moneyRainMounted) {
  const root = createRoot(host);
  host.dataset.moneyRainMounted = "true";

  root.render(
    React.createElement(MoneyRain, {
      background: "transparent",
      baseColor: "#eaaa00",
      density: 125,
      speed: 32,
      interaction: 0,
      bill: {
        itemWidth: 118,
        itemHeight: 68,
      },
      motion: {
        sway: 48,
        tumble: 35,
        flutter: 28,
      },
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        background: "transparent",
      },
    })
  );

  window.__introGenesisUnmount = () => {
    root.unmount();
    delete host.dataset.moneyRainMounted;
    window.__introGenesisUnmount = undefined;
  };
}
