"use client";

import BatSVG from "./BatSVG";

const SUBS = {
  home: "SEMESTER RESULT",
  course: "COURSE GRADE",
  cgpa: "AVERAGE CGPA",
};

export default function Hero({ page, displayGrade, displayColor }) {
  const c = displayColor || "rgba(255,215,0,0.07)";
  return (
    <div className="hero">
      <div className="bat-wrap">
        <BatSVG size={52} />
      </div>
      <div className="hero-title">CGPA CALCULATOR DIU</div>
      <div className="hero-sub">{SUBS[page]}</div>
      <div className="hero-uni">
        Daffodil International University
      </div>
      <div className="hero-dev">
        Developed by Fahid Hasan · Computer Science &amp; Engineering
      </div>
      <div
        className={`hero-grade-bg${displayGrade ? " lit" : ""}`}
        style={{
          WebkitTextStroke: `1px ${
            displayGrade ? c + "44" : "rgba(255,215,0,0.07)"
          }`,
        }}
      >
        {displayGrade || "A+"}
      </div>
    </div>
  );
}

