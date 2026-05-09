import { useState } from "react";
import "./RecordedActivities.css";

const periods = {
  prelims: {
    label: "Prelims",
    color: "badge-blue",
    activities: [
      { title: "Long Quiz: Nursing Fundamentals", type: "Assessment", desc: "Demonstrated comprehensive understanding of core nursing concepts and theoretical frameworks through a summative long examination." },
      { title: "Individual Quiz Series", type: "Assessment", desc: "Maintained consistent academic performance across multiple individual assessments focusing on clinical knowledge and nursing ethics." },
      { title: "Group Collaborative Quiz", type: "Collaborative", desc: "Worked effectively within a clinical group to solve complex nursing scenarios and case-based questions, fostering teamwork and peer learning." },
    ],
  },
  midterms: {
    label: "Midterms",
    color: "badge-teal",
    activities: [
      { title: "NDA Jingle Composition", type: "Creative Output", desc: "Developed a creative educational jingle for the Nursing Department, focusing on health advocacy and professional identity." },
      { title: "Endocrine & GI Pathology Maze", type: "Interactive Learning", desc: "Designed and navigated an educational maze covering complex conditions: SIADH, Pheochromocytoma, Crohn's Disease, and Neurofibromatosis Type 1." },
      { title: "Clinical Presentation: Crohn's Disease", type: "Presentation", desc: "Created a detailed presentation on the pathophysiology, clinical manifestations, and nursing management of Crohn's Disease." },
      { title: "Syndrome of Inappropriate Antidiuretic Hormone (SIADH)", type: "Research", desc: "Developed an educational overview of SIADH, emphasizing electrolyte imbalances and critical nursing interventions." },
      { title: "Pheochromocytoma & Neurofibromatosis Overview", type: "Presentation", desc: "Synthesized complex oncological and endocrine data into visual presentations to explain rare adrenal and genetic disorders." },
    ],
  },
  finals: {
    label: "Finals",
    color: "badge-gold",
    activities: [
      { title: "Major Clinical Reporting - Phase I", type: "Reporting", desc: "Presented an in-depth clinical case study, defending nursing care plans and evidence-based interventions to faculty and peers." },
      { title: "Major Clinical Reporting - Phase II", type: "Reporting", desc: "Facilitated a second comprehensive report focusing on specialized nursing care and patient outcomes in a complex clinical setting." },
      { title: "Professional Nursing Portfolio", type: "Documentation", desc: "Compiled a comprehensive digital portfolio documenting clinical growth, academic achievements, and the evolution of my nursing philosophy." },
    ],
  },
};

export default function RecordedActivities() {
  const [active, setActive] = useState("prelims");
  const period = periods[active];

  return (
    <div className="activities-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">Documentation</p>
        <h2 className="section-title">Recorded Activities</h2>
        <div className="divider" />
        <p className="section-subtitle">
          A documented record of all nursing activities completed across three grading periods, reflecting hands-on learning and community engagement.
        </p>

        <div className="activities-tabs">
          {Object.entries(periods).map(([key, { label, color }]) => (
            <button
              key={key}
              className={`activities-tab ${active === key ? "activities-tab--active" : ""}`}
              onClick={() => setActive(key)}
            >
              <span className={`badge ${color}`}>{label}</span>
            </button>
          ))}
        </div>

        <div className="activities-header">
          <h3 className="activities-period-title">{period.label} Period Activities</h3>
          <span className="activities-count">{period.activities.length} items documented</span>
        </div>

        <div className="activities-list">
          {period.activities.map((act, i) => (
            <div key={i} className="activity-card card card-accent">
              <div className="activity-top">
                <div className="activity-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4 className="activity-title">{act.title}</h4>
                  <span className="tag">{act.type}</span>
                </div>
              </div>
              <p className="activity-desc">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}