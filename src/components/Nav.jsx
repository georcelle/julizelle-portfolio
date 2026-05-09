import "./Nav.css";

export default function Nav({ sections, active, onNav, open, onToggle }) {
  return (
    <>
      <nav className={`nav ${open ? "nav--open" : ""}`}>
        <div className="nav-brand">
          <span className="nav-initials">JLL</span>
          <span className="nav-name">Julizelle L. Lizardo</span>
        </div>
        <button className="nav-toggle" onClick={onToggle} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className="nav-links">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${active === id ? "nav-link--active" : ""}`}
                onClick={() => onNav(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {open && <div className="nav-overlay" onClick={onToggle} />}
    </>
  );
}
