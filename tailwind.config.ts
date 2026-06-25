import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pistachio: {
          50: "#f4ffe8",
          100: "#e8ffd1",
          300: "#c9ff7a",
          400: "#b8ff5e",
          500: "#9ee63f",
          700: "#557f17",
        },
        ink: "#10130d",
        smoke: "#f5f6ef",
        mineral: "#3157ff",
        coral: "#ff6b55",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(184, 255, 94, 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
