import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import BookshelfCoverFlip, { ADVANCED_DEFAULTS } from '../components/BookshelfCoverFlip';

const PROJECTS = [
  {
    index: '01 / 02',
    badge: 'Deployed GIS Platform',
    title: 'Smart City Traffic Management',
    label: 'GIS & ML',
    subtitle: 'React · FastAPI · XGBoost',
    spineColor: '#131C31',
    coverColor: '#16223C',
    textColor: '#F8FAFC',
    artVariant: 2,
    summary:
      'Deployed GIS traffic platform for Nagpur, delivering dynamic routing, congestion heatmaps, and civic alerts. Compares real-time route alternatives via OpenStreetMap and OSRM.',
    highlights: [
      'XGBoost classifier predicts congestion 15 minutes ahead with high precision',
      'Interactive geospatial routing engine utilizing Leaflet & FastAPI microservices',
      'Multi-modal routing tested alongside 2,100+ competitors at Hacksagon 2026',
    ],
    tags: ['React', 'FastAPI', 'Leaflet', 'XGBoost', 'OSRM'],
    githubUrl: 'https://github.com/hitenborkar1406-ops',
  },
  {
    index: '02 / 02',
    badge: 'Hacksagon 2nd Place • Ideathon 2nd Runner-up',
    title: 'Smart IV Drip Monitoring',
    label: 'Healthcare IoT',
    subtitle: 'ESP32 · C++ · MQTT',
    spineColor: '#7C2D12',
    coverColor: '#69220D',
    textColor: '#F8FAFC',
    artVariant: 3,
    summary:
      'Contributed to an IoT prototype for automated IV monitoring that improves patient safety through real-time alerts. Designed modules for fluid-level sensing, blood backflow detection, automatic valve control, and vital-sign monitoring.',
    highlights: [
      'Continuous weight & flow tracking via ESP32 microcontroller and load cells',
      'Automated nurse station buzzer alerts and threshold notification pipeline',
      'Web monitoring dashboard with live telemetry graph visualization',
    ],
    tags: ['IoT', 'ESP32', 'C++', 'MQTT'],
    liveUrl: 'https://clever-halva-75f827.netlify.app/',
    githubUrl: 'https://github.com/hitenborkar1406-ops',
  },
];

function ProjectSpreadContent({ project }) {
  return (
    <div className="book-spread-inner">
      <div>
        <div className="book-spread__eyebrow">
          <span>{project.index}</span>
          <span className="detailed-card__badge">{project.badge}</span>
        </div>
        <h3 className="book-spread__title">{project.title}</h3>
        <p className="book-spread__summary">{project.summary}</p>
        <ul className="book-spread__highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="book-spread__footer">
        <div className="book-spread__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="detailed-card__links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener"
              className="card-link-btn"
              style={{ background: 'var(--color-accent)', color: 'var(--color-accent-ink)' }}
              aria-label={`View Live Demo for ${project.title}`}
            >
              <span>View Live</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener"
            className="card-link-btn"
            aria-label={`View Code on GitHub for ${project.title}`}
          >
            <span>GitHub</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsBookshelfSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = PROJECTS[activeIdx] || PROJECTS[0];

  return (
    <div className="projects-bookshelf-layout">
      <div className="projects-bookshelf-tabs" role="tablist" aria-label="Select project volume">
        {PROJECTS.map((p, idx) => (
          <button
            key={p.title}
            type="button"
            role="tab"
            aria-selected={idx === activeIdx}
            className={`projects-bookshelf-tab ${idx === activeIdx ? 'is-active' : ''}`}
            onClick={() => setActiveIdx(idx)}
          >
            <span className="projects-bookshelf-tab__num">0{idx + 1}</span>
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      <div className="projects-bookshelf-stage">
        <BookshelfCoverFlip
          books={PROJECTS}
          monogram="HB"
          size={560}
          spineWidth={15}
          speed={50}
          background="#00000000"
          activeIndex={activeIdx}
          onActiveBookChange={(idx) => setActiveIdx(idx)}
          onBookClick={(idx) => setActiveIdx(idx)}
          renderDetail={(project) => <ProjectSpreadContent project={project} />}
          advanced={{
            ...ADVANCED_DEFAULTS,
            coverScale: 120,
            coverAspect: 72,
            floorColor: '#EAAA00',
            floorOpacity: 20,
            starColor: '#EAAA00',
            holdMs: 3800,
          }}
        />
      </div>

      {/* Mobile-only fallback detail card when viewport < 720px */}
      <div className="projects-bookshelf-mobile-detail">
        <div className="book-spread-page book-spread-page--mobile">
          <ProjectSpreadContent project={activeProject} />
        </div>
      </div>
    </div>
  );
}

function mountProjectsBookshelf() {
  const mount = document.getElementById('projectsBookshelfMount');
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = 'true';
    const root = createRoot(mount);
    root.render(<ProjectsBookshelfSection />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountProjectsBookshelf);
} else {
  mountProjectsBookshelf();
}
