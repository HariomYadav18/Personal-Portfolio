import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: "#e5e5e7",
          900: "#18181b",
          950: "#fafafc",
        },
      },
      keyframes: {
        ambientPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1) translate(0px, 0px)" },
          "50%": { opacity: "0.7", transform: "scale(1.08) translate(10px, -20px)" },
        }
      },
      animation: {
        "ambient-pulse": "ambientPulse 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;