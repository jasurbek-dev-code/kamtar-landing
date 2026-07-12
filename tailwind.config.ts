import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-nav": "#0c3d2e",
        "green-1": "#0f4634",
        "green-2": "#0a3326",
        "green-3": "#083020",
        "green-light": "#e7f4ef",
        red: {
          DEFAULT: "#c2362a",
          bright: "#ef4136",
        },
        teal: {
          DEFAULT: "#27b39b",
          50: "#edfaf7",
          700: "#1e9b86",
        },
        amber: "#f59e0b",
        ink: {
          DEFAULT: "#1c2630",
          2: "#3f4a55",
        },
        muted: "#8b96a0",
        faint: "#aab4bd",
        line: "#e7ebef",
        canvas: "#f4f6f8",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        hero: "0 40px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.05)",
      },
    },
  },
  plugins: [],
};

export default config;
