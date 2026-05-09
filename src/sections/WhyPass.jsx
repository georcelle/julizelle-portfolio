import "./WhyPass.css";

const reasons = [
  { num: "01", title: "To Honor My Family's Sacrifices", desc: "Every tuition payment, every early morning my parents woke up to support me — passing NCMCOA6 is my way of converting their sacrifice into something tangible and meaningful." },
  { num: "02", title: "To Serve the Community with Competence", desc: "NCMCOA6 equips me with the foundational knowledge of community health nursing. Passing it means I am ready to serve not just individuals, but entire communities in a competent and evidence-based manner." },
  { num: "03", title: "To Take One Step Closer to Licensure", desc: "The NCLEX and Philippine Nursing Licensure Examination are my ultimate academic milestones. Every subject I pass — especially this one — brings me closer to becoming a Registered Nurse." },
  { num: "04", title: "To Fulfill My Calling as a Nurse", desc: "I did not choose nursing by accident. I chose it because I believe in healing, in compassion, and in service. Passing NCMCOA6 affirms that belief and validates my commitment to the nursing profession." },
  { num: "05", title: "To Make My Professors and Mentors Proud", desc: "The teachers and clinical instructors who invested time and knowledge in me deserve to see the fruits of their guidance. Passing is my way of saying: I listened, I learned, and I applied." },
];

export default function WhyPass() {
  return (
    <div className="why-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">Motivation</p>
        <h2 className="section-title">Why I Need to Pass NCMCOA6</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Passing this subject is not merely an academic requirement — it is a commitment to my patients, my family, and my future.
        </p>

        <div className="quote-block">
          "NCMCOA6 is more than a subject. It is the bridge between who I am today as a student nurse, and who I will become as a licensed professional serving the Filipino community."
        </div>

        <div className="why-grid">
          {reasons.map(({ num, title, desc }) => (
            <div key={num} className="why-card card">
              <div className="why-num">{num}</div>
              <h3 className="why-title">{title}</h3>
              <p className="why-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="why-closing card" style={{ marginTop: 32, background: "var(--navy)", border: "none" }}>
          <p className="why-closing-text">
            More than grades and transcripts, I need to pass NCMCOA6 because I owe it to every patient who will one day trust me with their health, their fears, and their lives. That responsibility is the most powerful motivation I carry.
          </p>
          <p className="why-closing-name">— Julizelle L. Lizardo</p>
        </div>
      </div>
    </div>
  );
}
