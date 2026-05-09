import { useState, useEffect, useRef } from "react";
import Cover from "./sections/Cover";
import TableOfContents from "./sections/TableOfContents";
import AboutMe from "./sections/AboutMe";
import RecordedActivities from "./sections/RecordedActivities";
import Insights from "./sections/Insights";
import WhyPass from "./sections/WhyPass";
import FamilyIntro from "./sections/FamilyIntro";
import Dreams from "./sections/Dreams";
import Nav from "./components/Nav";
import "./index.css";

const sections = [
  { id: "cover", label: "Cover" },
  { id: "toc", label: "Table of Contents" },
  { id: "about", label: "About Me" },
  { id: "activities", label: "Recorded Activities" },
  { id: "insights", label: "Insights & Reflections" },
  { id: "why-pass", label: "Why Pass NCMCOA6" },
  { id: "family", label: "Family Introduction" },
  { id: "dreams", label: "Dreams in Life" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("cover");
  const [navOpen, setNavOpen] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="app">
      <Nav
        sections={sections}
        active={activeSection}
        onNav={scrollTo}
        open={navOpen}
        onToggle={() => setNavOpen(!navOpen)}
      />
      <main>
        <section id="cover"><Cover onEnter={() => scrollTo("toc")} /></section>
        <section id="toc"><TableOfContents sections={sections} onNav={scrollTo} /></section>
        <section id="about"><AboutMe /></section>
        <section id="activities"><RecordedActivities /></section>
        <section id="insights"><Insights /></section>
        <section id="why-pass"><WhyPass /></section>
        <section id="family"><FamilyIntro /></section>
        <section id="dreams"><Dreams /></section>
      </main>
    </div>
  );
}
