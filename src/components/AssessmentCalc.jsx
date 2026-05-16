"use client";

import { useState } from "react";
import { COMPONENTS } from "@/data/grades";
import { getGradeByMark, gpaColor } from "@/data/utils";

export default function AssessmentCalc() {
  const init = {};
  COMPONENTS.forEach((c) => {
    init[c.key] = "";
  });
  const [vals, setVals] = useState(init);

  let total = 0;
  let anyEntered = false;
  const warns = {};

  for (const c of COMPONENTS) {
    const v = parseFloat(vals[c.key]);
    if (!isNaN(v) && v >= 0 && v <= c.pct) {
      total += v;
      anyEntered = true;
      warns[c.key] = false;
    } else if (vals[c.key] !== "") {
      warns[c.key] = true;
    } else {
      warns[c.key] = false;
    }
  }

  const displayTotal = anyEntered ? total.toFixed(2) : null;
  const gradeObj = displayTotal ? getGradeByMark(total) : null;
  const col = gradeObj ? gpaColor(gradeObj.point.toString()) : "#777";

  return (
    <div className="assess-card">
      <div className="assess-head">
        <div>
          <div className="assess-head-lbl">Assessment Components</div>
          <div
            style={{
              fontSize: "11px",
              color: "#555",
              letterSpacing: ".08em",
              marginTop: "2px",
            }}
          >
            Enter your actual marks for each component
          </div>
        </div>
        <div className="assess-result-wrap">
          <div>
            <div
              className="assess-total-num"
              style={{ color: displayTotal ? col : "#444" }}
            >
              {displayTotal || "—"}
            </div>
            <div className="assess-total-of">/ 100</div>
          </div>
          {displayTotal && gradeObj && (
            <div>
              <div className="assess-grade-badge" style={{ color: col }}>
                {gradeObj.grade}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: col,
                  letterSpacing: ".1em",
                  textAlign: "center",
                }}
              >
                {gradeObj.point.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="assess-body">
        <div className="assess-grid">
          {COMPONENTS.map((c) => {
            const v = parseFloat(vals[c.key]);
            const valid = !isNaN(v) && v >= 0 && v <= c.pct;
            const fillPct = valid ? (v / c.pct) * 100 : 0;
            return (
              <div key={c.key} className="assess-item">
                <div className="assess-item-top">
                  <span className="assess-item-lbl">{c.label}</span>
                  <span className="assess-item-pct">/ {c.pct}</span>
                </div>
                <input
                  className={`inp inp-sm${warns[c.key] ? " warn" : ""}`}
                  type="number"
                  min="0"
                  max={c.pct}
                  step="0.5"
                  placeholder={`0 – ${c.pct}`}
                  value={vals[c.key]}
                  onChange={(e) =>
                    setVals((vv) => ({ ...vv, [c.key]: e.target.value }))
                  }
                />
                <div className="assess-bar">
                  <div
                    className="assess-bar-fill"
                    style={{ width: `${fillPct}%` }}
                  />
                </div>
                <div className="assess-item-contrib">
                  {valid ? (
                    <span style={{ color: "#bbb" }}>
                      {vals[c.key]} / {c.pct} marks
                    </span>
                  ) : warns[c.key] ? (
                    <span style={{ color: "#e06060" }}>Max is {c.pct}</span>
                  ) : (
                    <span style={{ color: "#555" }}>max {c.pct} marks</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="assess-note">
          Enter your marks within each component&apos;s limit · All marks add
          up directly to your total out of 100
        </div>
      </div>
    </div>
  );
}
