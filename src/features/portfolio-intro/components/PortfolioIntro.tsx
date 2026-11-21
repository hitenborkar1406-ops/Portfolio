import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MeadowSundown from '../../originkit/components/ui/meadow-sundown';
import '../styles/PortfolioIntro.css';

gsap.registerPlugin(ScrollTrigger);

export interface PortfolioIntroProps {
  onComplete?: () => void;
  children?: React.ReactNode;
}

export const PortfolioIntro: React.FC<PortfolioIntroProps> = ({
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const barFillRef = useRef<HTMLDivElement | null>(null);

  const handleSkip = useCallback(() => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.bottom;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const trigger = ScrollTrigger.create({
      trigger: track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        const prog = self.progress;
        setScrollProgress(prog);

        if (barFillRef.current) {
          barFillRef.current.style.transform = `scaleX(${prog})`;
        }

        // Seamless dissolve & scale transition into the hero as scroll approaches bottom of track
        if (prog > 0.7) {
          const norm = (prog - 0.7) / 0.3;
          stage.style.opacity = String(Math.max(0, 1 - norm));
          stage.style.transform = `scale(${1 - norm * 0.08}) translateY(-${norm * 50}px)`;
          stage.style.pointerEvents = norm > 0.85 ? 'none' : 'auto';
        } else {
          stage.style.opacity = '1';
          stage.style.transform = 'scale(1) translateY(0)';
          stage.style.pointerEvents = 'auto';
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const percentage = Math.min(100, Math.round(scrollProgress * 100));

  return (
    <div className="portfolio-intro__track-wrapper" ref={trackRef}>
      {children}
      <div className="portfolio-intro__pinned-stage" ref={stageRef}>
        <button
          type="button"
          className="portfolio-intro__skip"
          onClick={handleSkip}
          aria-label="Skip to portfolio content"
        >
          Skip to Content ↓
        </button>

        <div className="portfolio-intro__canvas-wrap">
          <MeadowSundown
            season="autumn"
            meadow={{ birds: 28, swallows: true }}
            vehicle={{ type: 'car' }}
            day={{ scroll: 'off' }}
            modeProgress={scrollProgress}
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

        <div
          className="portfolio-intro__hud-minimal"
          style={{
            opacity: scrollProgress > 0.8 ? Math.max(0, 1 - (scrollProgress - 0.8) / 0.15) : 1,
          }}
        >
          <div className="portfolio-intro__hud-row">
            <span className="portfolio-intro__hud-text">
              {scrollProgress >= 0.75 ? 'Entering Portfolio...' : 'Scroll to explore'}
            </span>
            <span className="portfolio-intro__hud-percent">{percentage}%</span>
          </div>
          <div className="portfolio-intro__track" aria-hidden="true">
            <div ref={barFillRef} className="portfolio-intro__fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioIntro;
