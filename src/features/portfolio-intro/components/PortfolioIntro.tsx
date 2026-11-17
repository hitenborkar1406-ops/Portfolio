import React, { Component, useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { INTRO_CONFIG } from '../config/introConfig';
import { IntroStageScene } from './IntroStageScene';
import '../styles/PortfolioIntro.css';

export interface PortfolioIntroProps {
  onComplete?: () => void;
  isAppReady?: boolean;
  loadingLabel?: string;
  children?: React.ReactNode;
}

let hasIntroPlayedThisLoad = false;

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

class CanvasErrorBoundary extends Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export const PortfolioIntro: React.FC<PortfolioIntroProps> = ({
  onComplete,
  isAppReady = true,
  loadingLabel = 'INITIALIZING PORTFOLIO',
  children,
}) => {
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState<boolean>(() => !hasIntroPlayedThisLoad);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0);
  const [webglAvailable, setWebglAvailable] = useState<boolean>(() => checkWebGLSupport());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const progressRef = useRef<number>(0);
  const barFillRef = useRef<HTMLDivElement | null>(null);
  const lastPercentRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!shouldRenderOverlay) return;

    const timelineState = { progress: 0 };

    const syncProgress = (val: number) => {
      progressRef.current = val;
      if (barFillRef.current) {
        barFillRef.current.style.transform = `scaleX(${val})`;
      }
      const nextPercent = Math.min(100, Math.round(val * 100));
      if (nextPercent !== lastPercentRef.current) {
        lastPercentRef.current = nextPercent;
        setPercentage(nextPercent);
      }
    };

    if (prefersReducedMotion) {
      progressRef.current = 0.14;
      const tl = gsap.to(timelineState, {
        progress: 1,
        duration: 0.75,
        ease: 'power1.out',
        onUpdate: () => {
          if (barFillRef.current) {
            barFillRef.current.style.transform = `scaleX(${timelineState.progress})`;
          }
          const nextPercent = Math.min(100, Math.round(timelineState.progress * 100));
          if (nextPercent !== lastPercentRef.current) {
            lastPercentRef.current = nextPercent;
            setPercentage(nextPercent);
          }
        },
        onComplete: () => {
          setPercentage(100);
          setAnimationDone(true);
        },
      });
      return () => {
        tl.kill();
      };
    }

    const duration = webglAvailable ? INTRO_CONFIG.duration : 1.8;
    const tl = gsap.timeline({
      onComplete: () => {
        syncProgress(1);
        setAnimationDone(true);
      },
    });

    tl.to(timelineState, {
      progress: 1,
      duration,
      ease: 'none',
      onUpdate: () => syncProgress(timelineState.progress),
    });

    return () => {
      tl.kill();
    };
  }, [shouldRenderOverlay, prefersReducedMotion, webglAvailable]);

  useEffect(() => {
    if (!animationDone || !isAppReady || !shouldRenderOverlay) return;

    setIsFadingOut(true);
    const fadeTimer = window.setTimeout(() => {
      hasIntroPlayedThisLoad = true;
      setShouldRenderOverlay(false);
      onComplete?.();
    }, 620);

    return () => window.clearTimeout(fadeTimer);
  }, [animationDone, isAppReady, shouldRenderOverlay, onComplete]);

  const handleContextLoss = useCallback((e: Event) => {
    e.preventDefault();
    setWebglAvailable(false);
  }, []);

  const handleSkip = useCallback(() => {
    setAnimationDone(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  const formattedPercent = `${String(percentage).padStart(3, '0')}%`;

  const fallbackStage = (
    <div className="portfolio-intro__fallback" aria-hidden="true">
      <div className="portfolio-intro__fallback-line" />
    </div>
  );

  return (
    <>
      {children}
      {shouldRenderOverlay && (
        <div
          className={`portfolio-intro ${isFadingOut ? 'portfolio-intro--exiting' : ''}`}
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio, ${percentage} percent`}
        >
          <button
            type="button"
            className="portfolio-intro__skip"
            onClick={handleSkip}
            aria-label="Skip introduction"
          >
            Skip Intro →
          </button>
          <div className="portfolio-intro__content">
            <div className="portfolio-intro__stage">
              {webglAvailable ? (
                <CanvasErrorBoundary fallback={fallbackStage}>
                  <Canvas
                    dpr={[1, 2]}
                    gl={{
                      alpha: true,
                      antialias: true,
                      powerPreference: 'high-performance',
                      toneMapping: THREE.ACESFilmicToneMapping,
                      toneMappingExposure: 1.08,
                    }}
                    onCreated={({ gl }) => {
                      gl.setClearColor(0x000000, 0);
                      gl.domElement.addEventListener('webglcontextlost', handleContextLoss, false);
                    }}
                  >
                    <IntroStageScene progressRef={progressRef} />
                  </Canvas>
                </CanvasErrorBoundary>
              ) : (
                fallbackStage
              )}
            </div>

            <div className="portfolio-intro__hud">
              <div className="portfolio-intro__meta">
                <span className="portfolio-intro__label">{loadingLabel}</span>
                <span className="portfolio-intro__percent">{formattedPercent}</span>
              </div>
              <div className="portfolio-intro__track" aria-hidden="true">
                <div ref={barFillRef} className="portfolio-intro__fill" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioIntro;
