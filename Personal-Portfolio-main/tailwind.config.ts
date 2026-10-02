import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: "#1f1f22",
          900: "#18181b",
          950: "#09090b", // Deep zinc
        },
      },
      keyframes: {
        audioWave: {
          "0%, 100%": { height: "0.5rem" },
          "50%": { height: "2rem" },
        },
        ambientPulse: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.25", transform: "scale(1.05)" },
        }
      },
      animation: {
        "audio-wave": "audioWave 1.2s ease-in-out infinite",
        "ambient-pulse": "ambientPulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;