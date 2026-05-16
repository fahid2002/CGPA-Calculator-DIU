"use client";

export default function CreditField({ value, onChange }) {
  return (
    <input
      className="inp"
      placeholder="3"
      list="credit-options"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: "100%" }}
    />
  );
}
