import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./FamilyIntro.css";

const family = [
  {
    initials: "JL",
    name: "Julio Lizardo",
    relation: "Father",
    color: "bg-navy",
    desc: "My father is the quiet pillar of our family. A hardworking man who has never missed a day of providing for us, he taught me the values of discipline and integrity. Every time I felt like giving up during my clinical rotations, I thought of the pride I hope to see on his face."
  },
  {
    initials: "IL",
    name: "Irene Lizardo",
    relation: "Mother",
    color: "bg-blue",
    desc: "The heart of our home. She is the one who dried my tears during difficult shifts and stayed up with me through sleepless study nights. Her selflessness and strength inspired me to become a nurse long before I realized it was my calling."
  },
  {
    initials: "L",
    name: "My Siblings",
    relation: "Siblings",
    color: "bg-teal",
    desc: "Growing up among three brothers and one sister has shaped my resilience and my ability to lead with patience. From our shared laughter to their protective support, they are my constant reminders of why I strive to provide the best care for others."
  }
];

// Updated with your exact file names from the screenshot
const familyPhotos = [
  "/19f776ed-f1c8-40a7-a8e3-36d0fac5ee19.jpeg",
  "/265e9d58-cd11-43c8-8380-9d11b27e113a.jpeg",
  "/772efff8-2882-421a-89b1-01e0e488e48e.jpeg",
  "/aca46de8-05aa-4656-b2a0-aa400d2a411d.jpeg",
  "/afa6e7fb-82c8-4c06-a512-323cd9e181a1.jpeg"
];

export default function FamilyIntro() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <div id="family" className="family-section">
      <div className="page-wrapper">
        <p className="section-eyebrow">The People Behind Me</p>
        <h2 className="section-title">Family Introduction</h2>
        <div className="divider" />
        
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
            To my family — thank you for being my reason, my refuge, and my greatest strength. This portfolio, and everything it represents, belongs to you just as much as it belongs to me.
          </p>
        </div>
      </div>
    </div>
  );
}