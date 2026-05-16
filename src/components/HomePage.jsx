"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ResultCard from "@/components/ResultCard";
import AssessmentCalc from "@/components/AssessmentCalc";
import GradeRef from "@/components/GradeRef";
import CreditField from "@/components/CreditField";
import BatSVG from "@/components/BatSVG";
import { GRADES, GRADE_LETTERS } from "@/data/grades";
import { uid, getGradeByMark, getGradeByLetter, gpaColor } from "@/data/utils";

const newCourse = () => ({ id: uid(), name: "", credits: "", marks: "", grade: "" });
const newSem = (n) => ({ id: uid(), name: `Semester ${n}`, courses: [newCourse()] });

export default function HomePage() {
  const [sems, setSems] = useState([newSem(1)]);
  const [semModes, setSemModes] = useState({});

  const getMode = (sid) => semModes[sid] || "mark";
  const setMode = (sid, m) => setSemModes((mm) => ({ ...mm, [sid]: m }));

  let totalPts = 0,
    totalCrs = 0;
  for (const s of sems) {
    const mode = getMode(s.id);
    for (const c of s.courses) {
      const g =
        mode === "mark" ? getGradeByMark(c.marks) : getGradeByLetter(c.grade);
      const cr = parseFloat(c.credits);
      if (g && !isNaN(cr) && cr > 0) {
        totalPts += g.point * cr;
        totalCrs += cr;
      }
    }
  }
  const semGpa = totalCrs === 0 ? null : (totalPts / totalCrs).toFixed(2);
  const semCol = gpaColor(semGpa);
  const semGradeObj = semGpa
    ? GRADES.find((g) => parseFloat(semGpa) >= g.point - 0.001) || null
    : null;
  const semGradeLetter = semGradeObj ? semGradeObj.grade : null;

  const addSem = () => setSems((s) => [...s, newSem(s.length + 1)]);
  const remSem = (id) => setSems((s) => s.filter((x) => x.id !== id));
  const setSemName = (id, v) =>
    setSems((s) => s.map((x) => (x.id === id ? { ...x, name: v } : x)));
  const addCourse = (sid) =>
    setSems((s) =>
      s.map((x) =>
        x.id === sid ? { ...x, courses: [...x.courses, newCourse()] } : x
      )
    );
  const remCourse = (sid, cid) =>
    setSems((s) =>
      s.map((x) =>
        x.id === sid
          ? { ...x, courses: x.courses.filter((c) => c.id !== cid) }
          : x
      )
    );
  const setCourse = (sid, cid, f, v) =>
    setSems((s) =>
      s.map((x) =>
        x.id === sid
          ? {
              ...x,
              courses: x.courses.map((c) =>
                c.id === cid ? { ...c, [f]: v } : c
              ),
            }
          : x
      )
    );

  return (
    <>
      <Hero
        page="home"
        displayGrade={semGradeLetter}
        displayColor={semCol}
      />
      <div className="wrap">
        <ResultCard
          label="SEMESTER GPA"
          value={semGpa ? { text: semGpa, color: semCol } : null}
          stats={[
            { value: semGpa || "—", label: "GPA", color: semGpa ? semCol : undefined },
            { value: totalCrs || "0", label: "Credits" },
            { value: sems.length, label: "Semesters" },
          ]}
        />

        <AssessmentCalc />
        <GradeRef />

        {sems.map((sem) => {
          const mode = getMode(sem.id);
          let pts = 0,
            crs = 0;
          for (const c of sem.courses) {
            const g =
              mode === "mark"
                ? getGradeByMark(c.marks)
                : getGradeByLetter(c.grade);
            const cr = parseFloat(c.credits);
            if (g && !isNaN(cr) && cr > 0) {
              pts += g.point * cr;
              crs += cr;
            }
          }
          const gpa = crs === 0 ? null : (pts / crs).toFixed(2);
          const gCol = gpaColor(gpa);
          const done = sem.courses.filter((c) => {
            const g =
              mode === "mark"
                ? getGradeByMark(c.marks)
                : getGradeByLetter(c.grade);
            return g && parseFloat(c.credits) > 0;
          }).length;

          return (
            <div key={sem.id} className="sem">
              <div className="sem-head">
                <input
                  className="sem-name"
                  value={sem.name}
                  placeholder="SEMESTER NAME"
                  onChange={(e) => setSemName(sem.id, e.target.value)}
                />
                <div className="mode-toggle">
                  <button
                    className={`mode-btn${mode === "mark" ? " active" : ""}`}
                    onClick={() => setMode(sem.id, "mark")}
                  >
                    Mark
                  </button>
                  <button
                    className={`mode-btn${mode === "grade" ? " active" : ""}`}
                    onClick={() => setMode(sem.id, "grade")}
                  >
                    Grade
                  </button>
                </div>
                <div className="sem-gpa" style={{ color: gCol }}>
                  GPA: {gpa || "—"}
                </div>
                {sems.length > 1 && (
                  <button
                    className="btn-x"
                    onClick={() => remSem(sem.id)}
                    title="Remove"
                  >
                    ×
                  </button>
                )}
              </div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Course Name</th>
                    <th style={{ width: "12%" }}>Credits</th>
                    <th style={{ width: "22%" }}>
                      {mode === "mark" ? "Marks (0–100)" : "Grade"}
                    </th>
                    <th style={{ width: "13%", textAlign: "center" }}>Grade</th>
                    <th style={{ width: "13%", textAlign: "center" }}>Point</th>
                    <th style={{ width: "6%" }} />
                  </tr>
                </thead>
                <tbody>
                  {sem.courses.map((c) => {
                    const g =
                      mode === "mark"
                        ? getGradeByMark(c.marks)
                        : getGradeByLetter(c.grade);
                    const mWarn =
                      mode === "mark" &&
                      c.marks !== "" &&
                      !getGradeByMark(c.marks);
                    return (
                      <tr key={c.id}>
                        <td>
                          <input
                            className="inp"
                            placeholder="e.g. Data Structures"
                            value={c.name}
                            onChange={(e) =>
                              setCourse(sem.id, c.id, "name", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <CreditField
                            value={c.credits}
                            onChange={(v) =>
                              setCourse(sem.id, c.id, "credits", v)
                            }
                          />
                        </td>
                        <td>
                          {mode === "mark" ? (
                            <input
                              className={`inp${mWarn ? " warn" : ""}`}
                              placeholder="75"
                              type="number"
                              min="0"
                              max="100"
                              value={c.marks}
                              onChange={(e) =>
                                setCourse(
                                  sem.id,
                                  c.id,
                                  "marks",
                                  e.target.value
                                )
                              }
                            />
                          ) : (
                            <select
                              className="grade-sel"
                              value={c.grade}
                              onChange={(e) =>
                                setCourse(
                                  sem.id,
                                  c.id,
                                  "grade",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">— Select Grade —</option>
                              {GRADE_LETTERS.map((gl) => {
                                const pt = (
                                  GRADES.find((g2) => g2.grade === gl) || {
                                    point: 0,
                                  }
                                ).point;
                                return (
                                  <option key={gl} value={gl}>
                                    {gl} ({pt.toFixed(2)})
                                  </option>
                                );
                              })}
                            </select>
                          )}
                        </td>
                        <td>
                          <span
                            className="grade-badge"
                            style={{ color: g ? "#FFD700" : "#383848" }}
                          >
                            {g ? g.grade : "—"}
                          </span>
                        </td>
                        <td>
                          <span
                            className="gp-text"
                            style={{ color: g ? "#bbb" : "#383848" }}
                          >
                            {g ? g.point.toFixed(2) : "—"}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn-rm"
                            onClick={() =>
                              sem.courses.length > 1 &&
                              remCourse(sem.id, c.id)
                            }
                            disabled={sem.courses.length === 1}
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="sem-foot">
                <button
                  className="btn-add-c"
                  onClick={() => addCourse(sem.id)}
                >
                  + Add Course
                </button>
                <span className="sem-count">
                  {done} / {sem.courses.length} COURSES ENTERED
                </span>
              </div>
            </div>
          );
        })}

        <button className="btn-add-s" onClick={addSem}>
          <BatSVG size={20} />
          ADD NEW SEMESTER
        </button>
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
