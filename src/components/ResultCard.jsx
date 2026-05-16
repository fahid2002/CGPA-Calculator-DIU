"use client";

export default function ResultCard({ label, value, subLabel, stats }) {
  return (
    <div className="result-card">
      <div className="rc-lbl">{label}</div>
      <div
        className="rc-num"
        style={{
          color: value?.color || "#888",
          textShadow: value?.color ? `0 0 50px ${value.color}60` : "none",
        }}
      >
        {value?.text || "—"}
      </div>
      <div className="rc-sub">{subLabel || "OUT OF 4.00"}</div>
      <div className="rc-row">
        {stats?.map((s, i) => (
          <div key={i} className="rc-stat">
            <div className="rc-stat-val" style={s.color ? { color: s.color } : {}}>
              {s.value}
            </div>
            <div className="rc-stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
