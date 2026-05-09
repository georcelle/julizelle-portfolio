import { useState } from "react";
import "./RecordedActivities.css";

const periods = {
  prelims: {
    label: "Prelims",
    color: "badge-blue",
    activities: [
      { title: "Community Health Assessment", type: "Field Work", desc: "Conducted a comprehensive community health assessment in an assigned barangay, identifying prevalent health issues, environmental hazards, and existing healthcare resources." },
      { title: "Health History Taking", type: "Clinical Skills", desc: "Practiced systematic health history interviews with community members, applying therapeutic communication and culturally sensitive approaches." },
      { title: "Vital Signs Monitoring Drive", type: "Community Activity", desc: "Led a community vital signs monitoring activity targeting elderly residents, documenting findings and referring critical cases to the local health center." },
      { title: "Family Nursing Care Plan", type: "Written Output", desc: "Developed a comprehensive family nursing care plan for a selected indigent family, identifying health problems and formulating nursing interventions." },
      { title: "Windshield Survey", type: "Field Work", desc: "Performed a windshield survey of the community to observe social, environmental, and health determinants that affect the population's well-being." },
    ],
  },
  midterms: {
    label: "Midterms",
    color: "badge-teal",
    activities: [
      { title: "Home Visit — Case Study Family", type: "Clinical Skills", desc: "Conducted supervised home visits to a case-study family, providing health education on hygiene, nutrition, and medication adherence." },
      { title: "Maternal & Child Health Program", type: "Community Activity", desc: "Assisted in the implementation of the maternal and child health program at the barangay health center, monitoring pregnant women and immunizing children." },
      { title: "Health Teaching on Communicable Diseases", type: "Health Education", desc: "Delivered a health teaching session to community members on the prevention and control of tuberculosis and dengue fever." },
      { title: "Epidemiological Data Analysis", type: "Written Output", desc: "Analyzed morbidity and mortality data from the local health center and identified priority health problems for community intervention." },
      { title: "Nursing Bag Technique Demonstration", type: "Skills Lab", desc: "Demonstrated correct nursing bag technique during home visits, maintaining asepsis and infection control in community settings." },
    ],
  },
  finals: {
    label: "Finals",
    color: "badge-gold",
    activities: [
      { title: "Community Health Program Implementation", type: "Field Work", desc: "Spearheaded the implementation of a community health program addressing identified priority health problems, coordinating with local government and barangay health workers." },
      { title: "School Health Program", type: "Community Activity", desc: "Participated in school health screenings, deworming activities, and health education sessions targeting elementary school children." },
      { title: "Disaster Preparedness Seminar", type: "Health Education", desc: "Facilitated a community seminar on disaster preparedness, basic life support, and emergency response in alignment with the national disaster risk reduction framework." },
      { title: "Community Diagnosis Presentation", type: "Written Output", desc: "Presented the final community diagnosis, summarizing health assessments, nursing interventions implemented, and recommendations for sustained community health improvement." },
      { title: "Return Demonstration — Community Procedures", type: "Skills Lab", desc: "Performed return demonstrations of key community nursing procedures including wound care, growth monitoring, and diarrhea management using ORS." },
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
          <span className="activities-count">{period.activities.length} activities</span>
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
