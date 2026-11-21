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
  const [nightReached, setNightReached] = useState<boolean>(false);

  const barFillRef = useRef<HTMLDivElement | null>(null);
  const nightTriggerTimerRef = useRef<number | null>(null);

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

  const handleModeChange = useCallback((mode: number) => {
    setTimeMode(mode);
    const progress = Math.min(1, Math.max(0, mode / 3));
    const nextPercent = Math.min(100, Math.round(progress * 100));
    setPercentage(nextPercent);

    if (barFillRef.current) {
      barFillRef.current.style.transform = `scaleX(${progress})`;
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
              vehicle={{ type: 'car' }}
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

          <div className="portfolio-intro__hud-minimal">
            <div className="portfolio-intro__hud-row">
              <span className="portfolio-intro__hud-text">
                {timeMode >= 2.85 ? 'Entering Portfolio...' : 'Scroll to move portfolio'}
              </span>
              <span className="portfolio-intro__hud-percent">{percentage}%</span>
            </div>
            <div className="portfolio-intro__track" aria-hidden="true">
              <div ref={barFillRef} className="portfolio-intro__fill" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioIntro;
