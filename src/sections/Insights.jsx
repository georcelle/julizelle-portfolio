import "./Insights.css";

const reflections = [
  {
    period: "Prelims",
    badge: "badge-blue",
    icon: "🌱",
    title: "First Steps into the Community",
    content: "The preliminary period was an awakening. Stepping out of the controlled hospital environment and into the barangay, I realized how much nursing extends beyond hospital walls. Conducting a windshield survey and performing health assessments reminded me that health is deeply tied to one's environment, livelihood, and culture. I learned to listen — truly listen — to the stories of the families I visited. There were moments of self-doubt, especially when I encountered health problems far beyond what I could solve. But I came to understand that our role is not to solve everything; it is to empower communities to help themselves.",
    key: "Humility in practice, therapeutic communication, and the importance of cultural sensitivity."
  },
  {
    period: "Midterms",
    badge: "badge-teal",
    icon: "🌿",
    title: "Growing Confidence, Deepening Purpose",
    content: "By the midterm period, I began to feel more at ease in the community. Home visits became more meaningful — I was no longer just a student observer but someone the families recognized and welcomed. Delivering health teachings on TB and dengue to real community members was both nerve-wracking and deeply fulfilling. I noticed my confidence in patient education growing steadily. One moment that stood out was when an elderly lola told me that our visit made her feel seen and cared for. That single sentence reminded me exactly why I chose nursing.",
    key: "Patient-centered care, effective health education, and therapeutic nurse-patient relationships."
  },
  {
    period: "Finals",
    badge: "badge-gold",
    icon: "🌸",
    title: "Emerging as a Community Health Advocate",
    content: "The final period marked the most significant transformation in my nursing identity. Leading the community health program implementation required not only clinical knowledge but also leadership, coordination, and adaptability. Presenting our community diagnosis was a proud moment — seeing months of hard work compiled into a meaningful action plan felt validating. I also learned that sustainable community health change requires more than a single intervention; it requires trust, consistency, and genuine partnership with the community. As I near graduation, I feel equipped with not just skills but a deeper sense of purpose.",
    key: "Leadership, systems thinking, advocacy, and commitment to sustainable community health."
  },
];

export default function Insights() {
  return (
    <div className="insights-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">Reflection</p>
        <h2 className="section-title">Insights & Reflections</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Honest reflections on personal and professional growth across each grading period of NCMCOA6.
        </p>

        <div className="insights-list">
          {reflections.map(({ period, badge, icon, title, content, key }) => (
            <div key={period} className="insight-card card">
              <div className="insight-header">
                <span className={`badge ${badge}`}>{period}</span>
                <span className="insight-icon">{icon}</span>
              </div>
              <h3 className="insight-title">{title}</h3>
              <p className="insight-content">{content}</p>
              <div className="insight-key">
                <span className="insight-key-label">Key Insight</span>
                <p className="insight-key-text">{key}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
