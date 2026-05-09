import "./Cover.css";

export default function Cover({ onEnter }) {
  return (
    <div className="cover">
      <div className="cover-bg" aria-hidden="true">
        <div className="cover-grid" />
        <div className="cover-blob cover-blob--1" />
        <div className="cover-blob cover-blob--2" />
      </div>

      <div className="cover-content">
        <div className="cover-badge fade-up">
          <span className="badge badge-blue">Nursing Portfolio · A.Y. 2024–2025</span>
        </div>

        <div className="cover-emblem fade-up delay-1" aria-hidden="true">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="36" fill="#e8f3fc"/>
            <path d="M36 18v36M18 36h36" stroke="#1a6fb5" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="cover-name fade-up delay-2">Julizelle L. Lizardo</h1>
        <p className="cover-title fade-up delay-3">Bachelor of Science in Nursing</p>
        <p className="cover-subtitle fade-up delay-3">4th Year · NCMCOA6 Portfolio</p>

        <div className="cover-meta fade-up delay-4">
          <span>Community Health Nursing</span>
          <span className="sep">·</span>
          <span>Academic Year 2024–2025</span>
        </div>

        <div className="cover-actions fade-up delay-5">
          <button className="btn-primary" onClick={onEnter}>
            View Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="cover-scroll fade-up delay-5" aria-hidden="true">
        <div className="cover-scroll-dot" />
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}
