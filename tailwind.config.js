/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["'Bebas Neue'", "sans-serif"],
        body: ["'Rajdhani'", "sans-serif"],
      },
      colors: {
        bg: "#07070a",
        bg2: "#0d0d11",
        bg3: "#111117",
        bg4: "#16161e",
        yellow: "#FFD700",
        yellow2: "#b89a00",
        muted: "#888888",
        border: "#1e1e28",
        danger: "#e05050",
        green: "#7ec87e",
        orange: "#e0a020",
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.3em",
        widest4: "0.4em",
      },
    },
  },
  plugins: [],
};
