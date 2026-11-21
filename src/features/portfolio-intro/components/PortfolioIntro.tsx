import React, { useCallback, useEffect, useRef, useState } from 'react';
import MeadowSundown from '../../originkit/components/ui/meadow-sundown';
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
    return sessionStorage.getItem('meadow_intro_v2') === '1';
  } catch {
    return false;
  }
}

export const PortfolioIntro: React.FC<PortfolioIntroProps> = ({
  onComplete,
  children,
}) => {
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState<boolean>(() => !hasSeenIntro());
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [timeMode, setTimeMode] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('SCROLL TO MOVE PORTFOLIO');
  const [timeLabel, setTimeLabel] = useState<string>('☀️ NOON MEADOW');
  const [nightReached, setNightReached] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const barFillRef = useRef<HTMLDivElement | null>(null);
  const nightTriggerTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleSkip = useCallback(() => {
    try {
      sessionStorage.setItem('meadow_intro_v2', '1');
    } catch {}
    setIsFadingOut(true);
    setTimeout(() => {
      setShouldRenderOverlay(false);
      onComplete?.();
    }, 600);
  }, [onComplete]);

  // Allow user to experience Meadow Sundown; reduced motion is handled gracefully within the 3D scene

  const handleModeChange = useCallback((mode: number) => {
    setTimeMode(mode);
    const progress = Math.min(1, Math.max(0, mode / 3));
    const nextPercent = Math.min(100, Math.round(progress * 100));
    setPercentage(nextPercent);

    if (barFillRef.current) {
      barFillRef.current.style.transform = `scaleX(${progress})`;
    }

    if (mode < 0.75) {
      setStatusText('SCROLL TO MOVE PORTFOLIO');
      setTimeLabel('☀️ NOON MEADOW');
    } else if (mode < 1.75) {
      setStatusText('SCROLLING TOWARD SUNSET');
      setTimeLabel('🌅 GOLDEN HOUR');
    } else if (mode < 2.65) {
      setStatusText('NIGHT IS FALLING • CAMPER LIGHTS ON');
      setTimeLabel('🌆 DUSK TWILIGHT');
    } else {
      setStatusText('NIGHT HAS FALLEN // ENTERING PORTFOLIO');
      setTimeLabel('🌌 STARLIT NIGHT');
    }

    if (mode >= 2.92 && !nightReached) {
      setNightReached(true);
    }
  }, [nightReached]);

  useEffect(() => {
    if (!nightReached || !shouldRenderOverlay) return;

    if (nightTriggerTimerRef.current) {
      window.clearTimeout(nightTriggerTimerRef.current);
    }

    nightTriggerTimerRef.current = window.setTimeout(() => {
      setIsFadingOut(true);
      window.setTimeout(() => {
        try {
          sessionStorage.setItem('meadow_intro_v2', '1');
        } catch {}
        setShouldRenderOverlay(false);
        onComplete?.();
      }, 700);
    }, 850);

    return () => {
      if (nightTriggerTimerRef.current) {
        window.clearTimeout(nightTriggerTimerRef.current);
      }
    };
  }, [nightReached, shouldRenderOverlay, onComplete]);

  useEffect(() => {
    if (!shouldRenderOverlay) return;

    const onWindowWheel = (e: WheelEvent) => {
      if (e.deltaY > 15 && timeMode >= 2.85) {
        setNightReached(true);
      }
    };

    window.addEventListener('wheel', onWindowWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWindowWheel);
  }, [shouldRenderOverlay, timeMode]);

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
          aria-label={`Introduction meadow, ${percentage} percent`}
        >
          <button
            type="button"
            className="portfolio-intro__skip"
            onClick={handleSkip}
            aria-label="Skip introduction"
          >
            Skip Intro →
          </button>

          <div className="portfolio-intro__fullscreen-stage">
            <MeadowSundown
              onModeChange={handleModeChange}
              day={{ start: 0, scroll: 'wheel', sensitivity: 5.5 }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                aspectRatio: 'unset',
              }}
            />
            <div className="portfolio-intro__vignette" aria-hidden="true" />
          </div>

          <div className="portfolio-intro__hud-float">
            <div className="portfolio-intro__banner">
              <span className="portfolio-intro__prompt-title">SCROLL TO MOVE PORTFOLIO</span>
              <span className="portfolio-intro__time-badge">{timeLabel}</span>
            </div>

            <div className="portfolio-intro__meta">
              <span className="portfolio-intro__label">{statusText}</span>
              <span className="portfolio-intro__percent">{formattedPercent}</span>
            </div>

            <div className="portfolio-intro__track" aria-hidden="true">
              <div ref={barFillRef} className="portfolio-intro__fill" />
            </div>

            <div className="portfolio-intro__cues">
              <span className="portfolio-intro__cue-node">☀️ Noon</span>
              <span className="portfolio-intro__cue-arrow">───────</span>
              <span className="portfolio-intro__cue-node">🌅 Dusk</span>
              <span className="portfolio-intro__cue-arrow">───────</span>
              <span className="portfolio-intro__cue-node">🌙 Night</span>
            </div>

            <div className="portfolio-intro__scroll-prompt">
              <span className="portfolio-intro__scroll-icon" aria-hidden="true">↓</span>
              <span className="portfolio-intro__scroll-text">Scroll wheel or drag vertically to shift day into night</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioIntro;
