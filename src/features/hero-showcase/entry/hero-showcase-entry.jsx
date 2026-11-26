import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import SmokyText from '../components/SmokyText';
import ScrambleText from '../components/ScrambleText';
import LinkPreview from '../components/LinkPreview';
import PixelReveal from '../components/PixelReveal';

function HeroNameShowcase() {
  return (
    <div className="hero-smoky-name">
      <SmokyText
        text="HITEN"
        color="#F8F5EF"
        intensity={9}
        position="bottomLeft"
        animationMode="singleLine"
        appearTrigger="default"
        appearTransition={{ type: 'tween', ease: 'easeOut', duration: 1.15, delay: 0 }}
        font={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: 'clamp(3.6rem, 6.8vw, 5.8rem)',
          fontWeight: 700,
          lineHeight: 0.92,
          letterSpacing: '0.02em',
          textAlign: 'left',
        }}
      />
      <SmokyText
        text="BORKAR"
        color="#F5C36C"
        intensity={10}
        position="bottomLeft"
        animationMode="singleLine"
        appearTrigger="default"
        appearTransition={{ type: 'tween', ease: 'easeOut', duration: 1.25, delay: 0.14 }}
        font={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: 'clamp(3.6rem, 6.8vw, 5.8rem)',
          fontWeight: 700,
          lineHeight: 0.96,
          letterSpacing: '0.02em',
          textAlign: 'left',
        }}
      />
      <div className="hero-scramble-roles">
        <ScrambleText
          words="SYSTEMS ARCHITECT  /  6G RESEARCHER  /  HACKATHON FINALIST"
          color="#F5C36C"
          font={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: '0.76rem',
            fontWeight: 600,
            letterSpacing: '0.13em',
            textAlign: 'left',
          }}
        />
      </div>
    </div>
  );
}

function HeroProofStrip() {
  return (
    <div className="hero-proof-strip">
      <span className="hero-proof-item">
        ⚡{' '}
        <LinkPreview
          title="2nd @ Hacksagon"
          link="https://github.com/hitenborkar1406-ops"
          previewTitle="Smart City Traffic Management"
          previewSub="2,100+ competitors · Nagpur GIS + XGBoost"
          accent="#F5C36C"
        />
      </span>
      <span className="hero-proof-sep" aria-hidden="true">·</span>
      <span className="hero-proof-item">
        🔬{' '}
        <LinkPreview
          title="6G Security Co-Author"
          link="https://www.linkedin.com/in/hiten-borkar-153a29326"
          previewTitle="6G Network Security Research"
          previewSub="Ramdeobaba University · Active Paper"
          accent="#38BDF8"
        />
      </span>
      <span className="hero-proof-sep" aria-hidden="true">·</span>
      <span className="hero-proof-item">
        🐧{' '}
        <LinkPreview
          title="144+ LeetCode · Arch Linux"
          link="https://leetcode.com/u/Hiten-1406/"
          previewTitle="LeetCode @Hiten-1406"
          previewSub="144 Solved · 61-Day Streak · 76.4% Acc"
          accent="#FFA116"
        />
      </span>
    </div>
  );
}

function HeroRightCard() {
  const [mode, setMode] = useState<'portrait' | 'terminal'>('portrait');

  return (
    <div className="hero-auth-card">
      <div className="hero-auth-card__bar">
        <div className="hero-auth-card__tabs" role="tablist" aria-label="Hero card mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'portrait'}
            className={`hero-auth-tab ${mode === 'portrait' ? 'is-active' : ''}`}
            onClick={() => setMode('portrait')}
          >
            Builder
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'terminal'}
            className={`hero-auth-tab ${mode === 'terminal' ? 'is-active' : ''}`}
            onClick={() => setMode('terminal')}
          >
            hiten@arch ~
          </button>
        </div>
        <span className="hero-auth-status">
          <span className="hero-auth-dot" aria-hidden="true" />
          <span>SDE &apos;26</span>
        </span>
      </div>

      {mode === 'portrait' ? (
        <div className="hero-auth-portrait-wrap">
          <div className="hero-auth-pixel-stage">
            <PixelReveal
              imageSrc="assets/avatar.jpg"
              gridSize={14}
              transitionColor="#0a0d16"
              edgeHeight={18}
              transition={{ type: 'tween', duration: 1.35, ease: 'easeInOut' }}
              direction="up"
            />
          </div>
          <div className="hero-auth-caption">
            <div>
              <strong>Hiten Borkar</strong>
              <span>Nagpur, IN · B.Tech CSE &apos;28</span>
            </div>
            <span className="hero-auth-cgpa">8.53 CGPA</span>
          </div>
        </div>
      ) : (
        <div className="hero-auth-terminal" aria-label="System telemetry">
          <div className="hero-term-line">
            <span className="hero-term-prompt">$</span> neofetch --profile
          </div>
          <div className="hero-term-kv">
            <span>os</span><strong>Arch Linux x86_64</strong>
            <span>focus</span><strong>Distributed Backends &amp; 6G</strong>
            <span>stack</span><strong>FastAPI · React · C++ · ESP32</strong>
            <span>shipped</span><strong>Traffic ML (Nagpur) · IV IoT</strong>
            <span>rank</span><strong>2nd @ Hacksagon (2.1k+)</strong>
            <span>practice</span><strong>144+ LeetCode · 492 Contribs</strong>
          </div>
          <div className="hero-term-foot">
            <span className="hero-term-live">● telemetry online</span>
            <span>RBU CSE</span>
          </div>
        </div>
      )}
    </div>
  );
}

function mountHeroShowcase() {
  const nameEl = document.getElementById('heroSmokyNameMount');
  if (nameEl && !nameEl.dataset.mounted) {
    nameEl.dataset.mounted = 'true';
    createRoot(nameEl).render(<HeroNameShowcase />);
  }

  const proofEl = document.getElementById('heroProofStripMount');
  if (proofEl && !proofEl.dataset.mounted) {
    proofEl.dataset.mounted = 'true';
    createRoot(proofEl).render(<HeroProofStrip />);
  }

  const cardEl = document.getElementById('heroRightCardMount');
  if (cardEl && !cardEl.dataset.mounted) {
    cardEl.dataset.mounted = 'true';
    createRoot(cardEl).render(<HeroRightCard />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountHeroShowcase);
} else {
  mountHeroShowcase();
}
