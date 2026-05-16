"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ResultCard from "@/components/ResultCard";
import GradeRef from "@/components/GradeRef";
import CreditField from "@/components/CreditField";
import { GRADES, GRADE_LETTERS } from "@/data/grades";
import { uid, getGradeByLetter, gpaColor } from "@/data/utils";

const newEntry = () => ({ id: uid(), name: "", grade: "", credits: "" });

export default function CourseGradePage() {
  const [entries, setEntries] = useState([newEntry()]);

  let pts = 0,
    crs = 0;
  for (const e of entries) {
    const g = getGradeByLetter(e.grade);
    const cr = parseFloat(e.credits);
    if (g && !isNaN(cr) && cr > 0) {
      pts += g.point * cr;
      crs += cr;
    }
  }
  const gpa = crs === 0 ? null : (pts / crs).toFixed(2);
  const col = gpaColor(gpa);
  const gradeObj = gpa
    ? GRADES.find((g) => parseFloat(gpa) >= g.point - 0.001) || null
    : null;
  const gradeLetter = gradeObj ? gradeObj.grade : null;

  const addEntry = () => setEntries((e) => [...e, newEntry()]);
  const remEntry = (id) => setEntries((e) => e.filter((x) => x.id !== id));
  const setEntry = (id, f, v) =>
    setEntries((e) => e.map((x) => (x.id === id ? { ...x, [f]: v } : x)));

  return (
    <>
      <Hero page="course" displayGrade={gradeLetter} displayColor={col} />
      <div className="wrap">
        <ResultCard
          label="COURSE GPA"
          value={gpa ? { text: gpa, color: col } : null}
          stats={[
            { value: gradeLetter || "—", label: "Grade", color: gpa ? col : undefined },
            { value: gpa || "—", label: "Grade Point", color: gpa ? col : undefined },
            { value: crs || "0", label: "Total Credits" },
          ]}
        />

        <div className="sec-title">ENTER COURSE GRADES</div>
        <div className="card">
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Course Name</th>
                <th style={{ width: "30%" }}>Grade</th>
                <th style={{ width: "22%" }}>Credits</th>
                <th style={{ width: "12%", textAlign: "center" }}>Point</th>
                <th style={{ width: "6%" }} />
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => {
                const g = getGradeByLetter(e.grade);
                return (
                  <tr key={e.id}>
                    <td>
                      <input
                        className="inp"
                        placeholder="e.g. Data Structures"
                        value={e.name}
                        onChange={(ev) => setEntry(e.id, "name", ev.target.value)}
                      />
                    </td>
                    <td>
                      <select
                        className="grade-sel"
                        value={e.grade}
                        onChange={(ev) =>
                          setEntry(e.id, "grade", ev.target.value)
                        }
                      >
                        <option value="">— Select Grade —</option>
                        {GRADE_LETTERS.map((gl) => {
                          const pt = (
                            GRADES.find((g2) => g2.grade === gl) || { point: 0 }
                          ).point;
                          return (
                            <option key={gl} value={gl}>
                              {gl} ({pt.toFixed(2)})
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>
                      <CreditField
                        value={e.credits}
                        onChange={(v) => setEntry(e.id, "credits", v)}
                      />
                    </td>
                    <td>
                      <span
                        className="gp-text"
                        style={{ color: g ? "#FFD700" : "#383848" }}
                      >
                        {g ? g.point.toFixed(2) : "—"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-rm"
                        onClick={() =>
                          entries.length > 1 && remEntry(e.id)
                        }
                        disabled={entries.length === 1}
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ paddingTop: "12px" }}>
            <button className="btn-add-c" onClick={addEntry}>
              + Add Course
            </button>
          </div>
        </div>
        <GradeRef />
      </div>
      <datalist id="credit-options">
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="1.5" />
      </datalist>
    </>
  );
}
