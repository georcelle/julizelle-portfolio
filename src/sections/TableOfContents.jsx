import "./TableOfContents.css";

const items = [
  { num: "01", label: "Cover Page", id: "cover", desc: "Portfolio introduction and identity" },
  { num: "02", label: "About Me", id: "about", desc: "Nursing journey and personal background" },
  { num: "03", label: "Table of Contents", id: "toc", desc: "Portfolio navigation guide" },
  { num: "04", label: "Recorded Activities", id: "activities", desc: "Prelims, Midterms, and Finals activities" },
  { num: "05", label: "Insights & Reflections", id: "insights", desc: "Reflections for each grading period" },
  { num: "06", label: "Why Pass NCMCOA6", id: "why-pass", desc: "My motivation and commitment" },
  { num: "07", label: "Family Introduction", id: "family", desc: "Meet the people behind my journey" },
  { num: "08", label: "Dreams in Life", id: "dreams", desc: "My aspirations as a future nurse" },
];

export default function TableOfContents({ onNav }) {
  return (
    <div className="toc-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">Navigation</p>
        <h2 className="section-title">Table of Contents</h2>
        <div className="divider" />
        <p className="section-subtitle">
          A curated portfolio documenting my growth, experiences, and reflections throughout my fourth year of nursing education.
        </p>

        <div className="toc-grid">
          {items.map(({ num, label, id, desc }) => (
            <button key={id} className="toc-item" onClick={() => onNav(id)}>
              <span className="toc-num">{num}</span>
              <div className="toc-body">
                <span className="toc-label">{label}</span>
                <span className="toc-desc">{desc}</span>
              </div>
              <svg className="toc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
