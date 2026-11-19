import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SunsetVelocity from '../../originkit/components/ui/sunset-velocity';
import '../styles/PortfolioIntro.css';

export interface PortfolioIntroProps {
  onComplete?: () => void;
  isAppReady?: boolean;
  loadingLabel?: string;
  children?: React.ReactNode;
}

function hasSeenIntro(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    return sessionStorage.getItem('portfolio_intro_seen') === '1';
  } catch {
    return false;
  }
}

export const PortfolioIntro: React.FC<PortfolioIntroProps> = ({
  onComplete,
  isAppReady = true,
  loadingLabel = 'INITIALIZING PORTFOLIO',
  children,
}) => {
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState<boolean>(() => !hasSeenIntro());
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>(loadingLabel);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const barFillRef = useRef<HTMLDivElement | null>(null);
  const lastPercentRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleSkip = useCallback(() => {
    try {
      sessionStorage.setItem('portfolio_intro_seen', '1');
    } catch {}
    setPercentage(100);
    setAnimationDone(true);
  }, []);

  useEffect(() => {
    if (!shouldRenderOverlay) return;

    if (prefersReducedMotion) {
      handleSkip();
      return;
    }

    const timelineState = { progress: 0 };

    const syncProgress = (val: number) => {
      if (barFillRef.current) {
        barFillRef.current.style.transform = `scaleX(${val})`;
      }
      const nextPercent = Math.min(100, Math.round(val * 100));
      if (nextPercent !== lastPercentRef.current) {
        lastPercentRef.current = nextPercent;
        setPercentage(nextPercent);

        if (nextPercent < 35) {
          setStatusText('INITIALIZING PORTFOLIO');
        } else if (nextPercent < 75) {
          setStatusText('SUNSET VELOCITY // ENGAGING');
        } else if (nextPercent < 99) {
          setStatusText('CALIBRATING TELEMETRY');
        } else {
          setStatusText('SYSTEM READY // WELCOME');
        }
      }
    };

    const duration = 3.0;
    const tl = gsap.timeline({
      onComplete: () => {
        syncProgress(1);
        setAnimationDone(true);
      },
    });

    tl.to(timelineState, {
      progress: 1,
      duration,
      ease: 'power1.inOut',
      onUpdate: () => syncProgress(timelineState.progress),
    });

    return () => {
      tl.kill();
    };
  }, [shouldRenderOverlay, prefersReducedMotion, handleSkip]);

  useEffect(() => {
    if (!animationDone || !isAppReady || !shouldRenderOverlay) return;

    setIsFadingOut(true);
    const fadeTimer = window.setTimeout(() => {
      try {
        sessionStorage.setItem('portfolio_intro_seen', '1');
      } catch {}
      setShouldRenderOverlay(false);
      onComplete?.();
    }, 600);

    return () => window.clearTimeout(fadeTimer);
  }, [animationDone, isAppReady, shouldRenderOverlay, onComplete]);

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
                  hazeColor: '#F6C2B4',
                  hazeOpacity: 55,
                  turbineFar: '#7E3D5A',
                  cloudColor: '#6E2636',
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  minWidth: 0,
                  minHeight: 0,
                }}
              />
              <div className="portfolio-intro__vignette" aria-hidden="true" />
            </div>

            <div className="portfolio-intro__hud">
              <div className="portfolio-intro__meta">
                <span className="portfolio-intro__label">{statusText}</span>
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
