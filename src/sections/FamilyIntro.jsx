import "./FamilyIntro.css";

const family = [
  {
    initials: "RL",
    name: "Ricardo L. Lizardo",
    relation: "Father",
    color: "bg-navy",
    desc: "My father is the quiet pillar of our family. A hardworking man who has never missed a day of providing for us, he taught me the values of discipline, perseverance, and integrity. He may not always say it out loud, but I know he is my greatest cheerleader. Every time I felt like giving up, I thought of the pride I hope to one day see on his face."
  },
  {
    initials: "LL",
    name: "Lorena L. Lizardo",
    relation: "Mother",
    color: "bg-blue",
    desc: "My mother is the heart of our home. She is the one who dried my tears during difficult clinical rotations, stayed up with me through sleepless study nights, and always reminded me that I am capable of more than I think. Her strength and selflessness are the very definition of what it means to nurture — and she inspired me to become a nurse long before I knew that was my calling."
  },
  {
    initials: "JL",
    name: "[Sibling Name]",
    relation: "Sibling",
    color: "bg-teal",
    desc: "My sibling is my confidant and my source of laughter on even the hardest days. Growing up together has shaped my sense of empathy and my ability to understand others. We challenge each other to be better, and their unwavering support throughout my nursing journey has meant more to me than words can say."
  },
  {
    initials: "GG",
    name: "Lola & Lolo",
    relation: "Grandparents",
    color: "bg-gold",
    desc: "My grandparents represent the roots that ground me. Their stories of resilience, faith, and community have deeply influenced my values as a future healthcare provider. Caring for the elderly holds special meaning for me because of them — every elderly patient I serve reminds me of the people who first taught me what unconditional love looks like."
  },
];

export default function FamilyIntro() {
  return (
    <div className="family-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">The People Behind Me</p>
        <h2 className="section-title">Family Introduction</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Behind every nurse is a family that made her. Meet the people who have supported, inspired, and loved me unconditionally throughout this journey.
        </p>

        <div className="quote-block">
          "I am a nurse because of the love I learned at home first."
        </div>

        <div className="family-grid">
          {family.map(({ initials, name, relation, color, desc }) => (
            <div key={name} className="family-card card">
              <div className={`family-avatar ${color}`}>{initials}</div>
              <h3 className="family-name">{name}</h3>
              <span className="badge badge-blue family-relation">{relation}</span>
              <p className="family-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="family-footer">
          <p>
            To my family — thank you for being my reason, my refuge, and my greatest strength. This portfolio, and everything it represents, belongs to you just as much as it belongs to me.
          </p>
        </div>
      </div>
    </div>
  );
}
