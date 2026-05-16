import { GRADES } from "@/data/grades";

let _uid = 1;
export const uid = () => _uid++;

export function getGradeByMark(m) {
  if (m === "" || m === null || m === undefined) return null;
  const v = parseFloat(m);
  if (isNaN(v) || v < 0 || v > 100) return null;
  for (const g of GRADES) if (v >= g.min) return g;
  return null;
}

export function getGradeByLetter(l) {
  if (!l) return null;
  return GRADES.find((g) => g.grade === l) || null;
}

export function gpaColor(v) {
  const n = parseFloat(v);
  if (isNaN(n) || !v) return "#888";
  if (n >= 3.75) return "#FFD700";
  if (n >= 3.0) return "#7ec87e";
  if (n >= 2.5) return "#e0a020";
  return "#e06060";
}
