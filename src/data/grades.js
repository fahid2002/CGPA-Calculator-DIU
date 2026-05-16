// DIU Grading System
export const GRADES = [
  { min: 80, grade: "A+", point: 4.0 },
  { min: 75, grade: "A", point: 3.75 },
  { min: 70, grade: "A-", point: 3.5 },
  { min: 65, grade: "B+", point: 3.25 },
  { min: 60, grade: "B", point: 3.0 },
  { min: 55, grade: "B-", point: 2.75 },
  { min: 50, grade: "C+", point: 2.5 },
  { min: 45, grade: "C", point: 2.25 },
  { min: 40, grade: "D", point: 2.0 },
  { min: 0, grade: "F", point: 0.0 },
];

export const GRADE_LETTERS = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"];

export const COMPONENTS = [
  { key: "attendance", label: "Attendance", pct: 7 },
  { key: "classTest", label: "Class Test", pct: 15 },
  { key: "assignment", label: "Assignment", pct: 5 },
  { key: "presentation", label: "Presentation", pct: 8 },
  { key: "midterm", label: "Mid Term", pct: 25 },
  { key: "final", label: "Final Exam", pct: 40 },
];

export const CREDIT_OPTIONS = ["1", "2", "3", "1.5"];
