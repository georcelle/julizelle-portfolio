import "./Dreams.css";

const dreams = [
  {
    icon: "🎓",
    title: "Pass the Nursing Licensure Examination",
    category: "Professional",
    desc: "My most immediate dream is to pass the Philippine Nursing Licensure Examination on my first take. It is the threshold between being a student nurse and a Registered Nurse — and crossing it will be one of the proudest moments of my life.",
  },
  {
    icon: "🏥",
    title: "Work in a Public Health Setting",
    category: "Career",
    desc: "I dream of working in a community hospital or rural health unit where I can serve those who need healthcare the most. Public health nursing has shown me that the greatest impact is made not in grand hospitals but in the heart of underserved communities.",
  },
  {
    icon: "✈️",
    title: "Work Abroad and Uplift My Family",
    category: "Personal",
    desc: "Like many Filipino nurses, I aspire to work internationally — not just for personal growth, but to uplift my family who have sacrificed so much for my education. I want to give them a comfortable and secure life.",
  },
  {
    icon: "📚",
    title: "Pursue Advanced Studies in Nursing",
    category: "Academic",
    desc: "I dream of earning a Master's degree in Nursing, specializing in Public Health or Community Health Nursing. I believe that education does not end at graduation — it is a lifelong pursuit for those who truly love their profession.",
  },
  {
    icon: "🌍",
    title: "Become a Community Health Advocate",
    category: "Advocacy",
    desc: "One day, I envision myself leading community health programs, training future nurses, and advocating for policies that prioritize the health of marginalized communities. I want to be part of the change that Filipino public health desperately needs.",
  },
  {
    icon: "💛",
    title: "Make My Family Proud",
    category: "Personal",
    desc: "Above all professional and academic dreams, my deepest wish is simple: to stand one day in front of my family as a Registered Nurse and see pride in their eyes. That moment — more than any credential — will be my greatest achievement.",
  },
];

export default function Dreams() {
  return (
    <div className="dreams-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">Aspirations</p>
        <h2 className="section-title">Dreams in Life</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Nursing is not just what I do — it is the foundation from which all my dreams are built. Here are the aspirations that fuel my every step forward.
        </p>

        <div className="dreams-grid">
          {dreams.map(({ icon, title, category, desc }) => (
            <div key={title} className="dream-card card">
              <div className="dream-icon">{icon}</div>
              <span className="tag dream-category">{category}</span>
              <h3 className="dream-title">{title}</h3>
              <p className="dream-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="dreams-closing">
          <div className="dreams-closing-inner">
            <div className="dreams-cross" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 8v32M8 24h32" stroke="#1a6fb5" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="dreams-closing-title">To the Future Nurse in Me</h3>
            <p className="dreams-closing-text">
              This portfolio is proof that I showed up — to every class, every home visit, every challenge, and every moment of doubt. Whatever the future holds, I carry forward the same heart that led me to nursing: a heart that chooses to serve, to heal, and to hope.
            </p>
            <p className="dreams-closing-sig">Julizelle L. Lizardo · BSN 4th Year · 2024–2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
