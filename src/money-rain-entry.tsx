/* Mounts the Money Rain animation inside the intro overlay (#introRain).
   The overlay, loading bar and 5-second timer live in intro-loader.js so
   the timing never depends on this bundle finishing. */
import * as React from "react"
import { createRoot } from "react-dom/client"
import MoneyRain from "./money-rain"

function mount() {
  const el = document.getElementById("introRain")
  if (!el || el.dataset.mounted) return
  el.dataset.mounted = "true"
  const root = createRoot(el)
  root.render(
    React.createElement(MoneyRain, {
      // The component floors itself at 1200x800; the overlay is full-screen.
      style: { minWidth: 0, minHeight: 0, width: "100%", height: "100%" },
    })
  )
  // intro-loader.js calls this when the 5 seconds are up, which frees the GL buffers.
  ;(window as unknown as Record<string, unknown>).__introRainUnmount = () => {
    try { root.unmount() } catch (e) {}
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount)
} else {
  mount()
}
