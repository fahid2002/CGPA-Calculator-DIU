"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ResultCard from "@/components/ResultCard";
import { GRADES } from "@/data/grades";
import { uid, gpaColor } from "@/data/utils";

const newSemEntry = (n) => ({
  id: uid(),
  label: `Semester ${n}`,
  gpa: "",
  credits: "",
});

export default function CgpaPage() {
  const [sems, setSems] = useState([newSemEntry(1), newSemEntry(2)]);

  let wPts = 0,
    wCrs = 0;
  for (const s of sems) {
    const gpa = parseFloat(s.gpa);
    const cr = parseFloat(s.credits);
    if (!isNaN(gpa) && gpa >= 0 && gpa <= 4 && !isNaN(cr) && cr > 0) {
      wPts += gpa * cr;
      wCrs += cr;
    }
  }
  const cgpa = wCrs === 0 ? null : (wPts / wCrs).toFixed(2);
  const col = gpaColor(cgpa);
  const gradeObj = cgpa
    ? GRADES.find((g) => parseFloat(cgpa) >= g.point - 0.001) || null
    : null;
  const gradeLetter = gradeObj ? gradeObj.grade : null;

  const validSems = sems.filter((s) => {
    const g = parseFloat(s.gpa),
      c = parseFloat(s.credits);
    return !isNaN(g) && g >= 0 && g <= 4 && !isNaN(c) && c > 0;
  });

  const addSem = () =>
    setSems((s) => [...s, newSemEntry(s.length + 1)]);
  const remSem = (id) => setSems((s) => s.filter((x) => x.id !== id));
  const setSem = (id, f, v) =>
    setSems((s) => s.map((x) => (x.id === id ? { ...x, [f]: v } : x)));

  return (
    <>
      <Hero page="cgpa" displayGrade={gradeLetter} displayColor={col} />
      <div className="wrap">
        <ResultCard
          label="CUMULATIVE CGPA"
          value={cgpa ? { text: cgpa, color: col } : null}
          stats={[
            { value: gradeLetter || "—", label: "Grade", color: cgpa ? col : undefined },
            { value: validSems.length, label: "Semesters" },
            { value: wCrs || "0", label: "Total Credits" },
          ]}
        />

        {/* Formula Box */}
        <div className="avg-formula">
          <div className="avg-formula-title">HOW CGPA IS CALCULATED</div>
          <div className="avg-formula-body">
            CGPA is a credit-weighted average across all your semesters:
            <br />
            <br />
            <code>CGPA = Σ(SGPA × Credits) ÷ Σ(All Credits)</code>
            <br />
            <br />
            Each semester&apos;s GPA is multiplied by its credit hours. A
            semester with more credits contributes more weight.
            <br />
            <br />
            <span style={{ color: "#bbb", fontWeight: 700 }}>Example: </span>
            Sem 1 → SGPA <code>3.50</code> × <code>21</code> credits ={" "}
            <code>73.50</code> | Sem 2 → SGPA <code>3.75</code> ×{" "}
            <code>18</code> = <code>67.50</code>
            <br />
            CGPA = (73.50 + 67.50) ÷ (21 + 18) ={" "}
            <code>{(141 / 39).toFixed(2)}</code>
          </div>
        </div>

        <div className="sec-title">ENTER SEMESTER RESULTS</div>
        <div className="card">
          {/* Column Headers */}
          <div
            className="avg-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 130px 120px 32px",
              gap: "8px",
              marginBottom: "8px",
              padding: "0 2px",
            }}
          >
            <div className="col-hdr">Semester Name</div>
            <div className="col-hdr">SGPA (0 – 4.00)</div>
            <div className="col-hdr">Total Credits</div>
            <div />
          </div>

          {/* Rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            {sems.map((s) => {
              const gpa = parseFloat(s.gpa);
              const cr = parseFloat(s.credits);
              const valid =
                !isNaN(gpa) &&
                gpa >= 0 &&
                gpa <= 4 &&
                !isNaN(cr) &&
                cr > 0;
              const gCol = valid ? gpaColor(s.gpa) : "#666";
              const gObj = valid
                ? GRADES.find((g) => gpa >= g.point - 0.001) || null
                : null;
              return (
                <div
                  key={s.id}
                  className="avg-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 130px 120px 32px",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <input
                    className="inp"
                    style={{ fontSize: "13px" }}
                    placeholder="e.g. Spring 2024"
                    value={s.label}
                    onChange={(e) => setSem(s.id, "label", e.target.value)}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className="inp"
                      type="number"
                      min="0"
                      max="4"
                      step="0.01"
                      placeholder="3.75"
                      value={s.gpa}
                      onChange={(e) => setSem(s.id, "gpa", e.target.value)}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-head)",
                        fontSize: "13px",
                        color: gCol,
                        minWidth: "26px",
                      }}
                    >
                      {gObj ? gObj.grade : ""}
                    </span>
                  </div>
                  <input
                    className="inp"
                    type="number"
                    min="1"
                    max="200"
                    step="1"
                    placeholder="e.g. 21"
                    value={s.credits}
                    onChange={(e) =>
                      setSem(s.id, "credits", e.target.value)
                    }
                  />
                  <button
                    className="btn-danger-sm"
                    onClick={() => sems.length > 1 && remSem(s.id)}
                    disabled={sems.length <= 1}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
          <button className="avg-add-btn" onClick={addSem}>
            + Add Semester
          </button>
          <div
            style={{
              fontSize: "11px",
              color: "#555",
              letterSpacing: ".06em",
              marginTop: "12px",
              textAlign: "center",
            }}
          >
            Enter your SGPA from your official semester result sheet · Add
            total credit hours taken that semester
          </div>
        </div>

        {/* Breakdown Table */}
        {validSems.length > 0 && (
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>Semester</th>
                  <th>SGPA</th>
                  <th>Credits</th>
                  <th>× (Weighted)</th>
                  <th style={{ textAlign: "center" }}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {validSems.map((s) => {
                  const gpa = parseFloat(s.gpa);
                  const cr = parseFloat(s.credits);
                  const wp = (gpa * cr).toFixed(2);
                  const gObj =
                    GRADES.find((g) => gpa >= g.point - 0.001) || null;
                  const c = gpaColor(s.gpa);
                  return (
                    <tr key={s.id}>
                      <td>
                        <span
                          style={{
                            fontFamily: "var(--font-head)",
                            fontSize: "13px",
                            color: "#999",
                            letterSpacing: ".06em",
                          }}
                        >
                          {s.label}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{
                            fontFamily: "var(--font-head)",
                            fontSize: "16px",
                            color: c,
                          }}
                        >
                          {gpa.toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{
                            fontFamily: "var(--font-head)",
                            fontSize: "14px",
                            color: "#999",
                          }}
                        >
                          {cr}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{
                            fontFamily: "var(--font-head)",
                            fontSize: "14px",
                            color: "#777",
                          }}
                        >
                          {wp}
                        </span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span
                          className="grade-badge"
                          style={{ color: c, fontSize: "16px" }}
                        >
                          {gObj ? gObj.grade : "—"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <tr
                  style={{
                    background: "#0a0a0e",
                    borderTop: "2px solid #1e1e28",
                  }}
                >
                  <td>
                    <span
                      style={{
                        fontFamily: "var(--font-head)",
                        fontSize: "10px",
                        color: "#777",
                        letterSpacing: ".3em",
                      }}
                    >
                      CGPA
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        fontFamily: "var(--font-head)",
                        fontSize: "22px",
                        color: col,
                      }}
                    >
                      {cgpa || "—"}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        fontFamily: "var(--font-head)",
                        fontSize: "15px",
                        color: "#999",
                      }}
                    >
                      {wCrs}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        fontFamily: "var(--font-head)",
                        fontSize: "14px",
                        color: "#777",
                      }}
                    >
                      {wPts.toFixed(2)}
                    </span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span
                      className="grade-badge"
                      style={{ color: col, fontSize: "22px" }}
                    >
                      {gradeLetter || "—"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
