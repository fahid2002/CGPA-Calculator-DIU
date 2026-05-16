"use client";

import { useState } from "react";
import { GRADES } from "@/data/grades";

export default function GradeRef() {
  const [open, setOpen] = useState(false);
  return (
    <div className="ref-box">
      <div className="ref-toggle" onClick={() => setOpen((v) => !v)}>
        <span className="ref-toggle-lbl">DIU Grading Reference</span>
        <span className={`ref-arrow${open ? " open" : ""}`}>▼</span>
      </div>
      {open && (
        <div className="ref-grid">
          {GRADES.map((g, i) => {
            const maxV = i === 0 ? 100 : GRADES[i - 1].min - 1;
            return (
              <div key={g.grade} className="ref-cell">
                <span className="ref-range">{`${g.min}–${maxV}`}</span>
                <span className="ref-grade">{g.grade}</span>
                <span className="ref-pt">{g.point.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
