import { GraduationCap, MapPin } from "lucide-react";
import "./AboutMe.css";

const timeline = [
  { year: "2022-2023", label: "Started BSN Program", desc: "Began my nursing journey with determination and a passion for helping others, stepping into my first year of the Bachelor of Science in Nursing program." },
  { year: "2023-2024", label: "2nd Year — Fundamentals of Nursing", desc: "Deepened my clinical skills through laboratory practice, mastering fundamental nursing procedures and patient assessment techniques." },
  { year: "2024-2025", label: "3rd Year — Clinical Rotations Begin", desc: "Entered the hospital setting for the first time, rotating through medical-surgical wards, pediatric units, and the emergency room." },
  { year: "2025-2026", label: "4th Year — Community Health Nursing", desc: "Expanded my practice into community settings, applying public health principles and advocating for underserved populations as part of NCMCOA6." },
];

const skills = ["Patient Assessment", "Health Education", "Community Nursing", "IV Therapy", "Vital Signs Monitoring", "Care Planning", "Medical Documentation", "First Aid & BLS"];

export default function AboutMe() {
  return (
    <div id="about" className="about-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">My Nursing Journey</h2>
        <div className="divider" />

        <div className="about-layout">
          <div className="about-left">
            <div className="about-profile-card card">
              {/* Image replaces the JLL circle while keeping the class name for CSS styling */}
              <img 
                src="/julizelle.png" 
                alt="Julizelle L. Lizardo" 
                className="about-avatar" 
              />
              
              <h3 className="about-name">Julizelle L. Lizardo</h3>
              <p className="about-role">BSN Student · 4th Year</p>
              
              <div className="about-tags">
                {["Community Health", "NCMCOA6", "4th Year"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="about-details">
                <div className="about-detail-row">
                  <GraduationCap size={16} />
                  <span>Bachelor of Science in Nursing</span>
                </div>
                <div className="about-detail-row">
                  <MapPin size={16} />
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
              Throughout four years of nursing school, I have faced late-night study sessions, challenging clinical rotations, and moments that tested my resilience. But every difficult day has only deepened my commitment to this profession.
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
                    <h4 className="timeline-label">{label}</h4>
                    <p className="timeline-desc">{desc}</p>
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