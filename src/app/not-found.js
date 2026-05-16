import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        fontFamily: "var(--font-head)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(80px, 20vw, 160px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,215,0,0.15)",
          lineHeight: 1,
          letterSpacing: "0.05em",
        }}
      >
        404
      </div>
      <div
        style={{
          fontSize: "clamp(16px, 3vw, 24px)",
          letterSpacing: "0.3em",
          color: "#555",
          marginTop: "12px",
          marginBottom: "32px",
        }}
      >
        PAGE NOT FOUND
      </div>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "14px",
          letterSpacing: "0.25em",
          color: "#FFD700",
          border: "1px solid #FFD700",
          padding: "10px 24px",
          borderRadius: "2px",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
      >
        BACK TO CALCULATOR
      </Link>
    </div>
  );
}
