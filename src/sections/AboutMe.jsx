import "./AboutMe.css";

const timeline = [
  { year: "2021", label: "Started BSN Program", desc: "Began my nursing journey with determination and a passion for helping others, stepping into my first year of the Bachelor of Science in Nursing program." },
  { year: "2022", label: "2nd Year — Fundamentals of Nursing", desc: "Deepened my clinical skills through laboratory practice, mastering fundamental nursing procedures and patient assessment techniques." },
  { year: "2023", label: "3rd Year — Clinical Rotations Begin", desc: "Entered the hospital setting for the first time, rotating through medical-surgical wards, pediatric units, and the emergency room." },
  { year: "2024", label: "4th Year — Community Health Nursing", desc: "Expanded my practice into community settings, applying public health principles and advocating for underserved populations as part of NCMCOA6." },
];

const skills = ["Patient Assessment", "Health Education", "Community Nursing", "IV Therapy", "Vital Signs Monitoring", "Care Planning", "Medical Documentation", "First Aid & BLS"];

export default function AboutMe() {
  return (
    <div className="about-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">My Nursing Journey</h2>
        <div className="divider" />

        <div className="about-layout">
          <div className="about-left">
            <div className="about-profile-card card">
              <div className="about-avatar">JLL</div>
              <h3 className="about-name">Julizelle L. Lizardo</h3>
              <p className="about-role">BSN Student · 4th Year</p>
              <div className="about-tags">
                {["Community Health", "NCMCOA6", "4th Year"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="about-details">
                <div className="about-detail-row">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1a5 5 0 100 10A5 5 0 008 1zM1 8a7 7 0 1114 0A7 7 0 011 8z" stroke="currentColor" strokeWidth="1.4"/></svg>
                  <span>Bachelor of Science in Nursing</span>
                </div>
                <div className="about-detail-row">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.4"/><path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  <span>Philippines</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 20 }}>
              <h4 className="about-skills-title">Core Competencies</h4>
              <div className="about-skills">
                {skills.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="quote-block">
              "Nursing is not just a profession — it is a calling to serve with compassion, competence, and courage."
            </div>

            <p className="about-bio">
              My name is Julizelle L. Lizardo, and nursing is the path I chose with both my heart and my mind. Growing up, I witnessed firsthand how dedicated healthcare workers can change lives — and that sparked in me an unquenchable desire to be one of them.
            </p>
            <p className="about-bio">
              Throughout four years of nursing school, I have faced late-night study sessions, challenging clinical rotations, and moments that tested my resilience. But every difficult day has only deepened my commitment to this profession. I believe that a good nurse listens before she speaks, observes before she acts, and always puts the patient's dignity first.
            </p>
            <p className="about-bio">
              Today, as a 4th-year nursing student, I carry with me the lessons of every patient I've cared for, every skill I've practiced, and every mentor who guided me. This portfolio is a reflection of that journey.
            </p>

            <h3 className="about-timeline-title">Journey Timeline</h3>
            <div className="timeline">
              {timeline.map(({ year, label, desc }) => (
                <div key={year} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: 6, display: "inline-block" }}>{year}</span>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", marginBottom: 4 }}>{label}</h4>
                    <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
