"use client";

import { useState } from "react";
import BatSVG from "./BatSVG";

const LINKS = [
  { key: "home", label: "Home" },
  { key: "course", label: "Course Grade" },
  { key: "cgpa", label: "Average CGPA" },
];

export default function Navbar({ page, onNavigate }) {
  const [mobOpen, setMobOpen] = useState(false);

  const navTo = (p) => {
    onNavigate(p);
    setMobOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-brand" onClick={() => navTo("home")}>
          <BatSVG size={20} />
          DIU CGPA
        </div>
        <div className="nav-links">
          {LINKS.map((l) => (
            <button
              key={l.key}
              className={`nav-link${page === l.key ? " active" : ""}`}
              onClick={() => navTo(l.key)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          className={`ham-btn${mobOpen ? " open" : ""}`}
          onClick={() => setMobOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mob-menu${mobOpen ? " open" : ""}`}>
        {LINKS.map((l) => (
          <button
            key={l.key}
            className={`mob-link${page === l.key ? " active" : ""}`}
            onClick={() => navTo(l.key)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}
