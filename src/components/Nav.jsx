import { useState } from "react";
import { 
  Home, 
  User, 
  Users, 
  ClipboardList, 
  Lightbulb, 
  Stars, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import "./Nav.css";

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { label: "Home", target: "home", icon: <Home size={20} /> },
    { label: "About Me", target: "about", icon: <User size={20} /> },
    { label: "Family", target: "family", icon: <Users size={20} /> },
    { label: "Activities", target: "activities", icon: <ClipboardList size={20} /> },
    { label: "Insights", target: "insights", icon: <Lightbulb size={20} /> },
    { label: "Dreams", target: "dreams", icon: <Stars size={20} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapsed && <span className="brand-name">Portfolio</span>}
        <button 
          className="toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.target}
            className="nav-item"
            onClick={() => scrollToSection(item.target)}
            title={isCollapsed ? item.label : ""}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;