import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./FamilyIntro.css";

const family = [
  {
    initials: "JL",
    name: "Julio Lizardo",
    relation: "Father",
    color: "bg-navy",
    desc: "My father is the quiet pillar of our family. A hardworking man who has never missed a day of providing for us, he taught me the values of discipline and integrity."
  },
  {
    initials: "IL",
    name: "Irene Lizardo",
    relation: "Mother",
    color: "bg-blue",
    desc: "The heart of our home. She is the one who dried my tears during difficult shifts and stayed up with me through sleepless study nights. Her strength inspired my calling."
  },
  {
    initials: "L",
    name: "My Siblings",
    relation: "Siblings",
    color: "bg-teal",
    desc: "Growing up among three brothers and one sister has shaped my resilience. Their unwavering support throughout my nursing journey has meant more than words can say."
  }
];

// Array for your 5 photos
const familyPhotos = [
  "/family1.jpg", 
  "/family2.jpg", 
  "/family3.jpg", 
  "/family4.jpg", 
  "/family5.jpg"
];

export default function FamilyIntro() {
  // Initialize Embla with Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div id="family" className="family-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">The People Behind Me</p>
        <h2 className="section-title">Family Introduction</h2>
        <div className="divider" />
        
        {/* Carousel Section */}
        <div className="family-carousel">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {familyPhotos.map((src, index) => (
                <div className="embla__slide" key={index}>
                  <img src={src} alt={`Family memory ${index + 1}`} className="carousel-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

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
            To my family — thank you for being my reason, my refuge, and my greatest strength.
          </p>
        </div>
      </div>
    </div>
  );
}