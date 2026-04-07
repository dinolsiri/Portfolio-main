import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#020617",
        surface: "#0a0a0a",
        glass: "rgba(255, 255, 255, 0.08)",
        accent: "#3b82f6",
        accent2: "#1e40af",
        text: "#ffffff",
        muted: "#a0a0a0"
      },
      boxShadow: {
        glow: "0 0 35px rgba(59, 130, 246, 0.4)",
        glass: "0 18px 45px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top right, rgba(59, 130, 246, 0.2), transparent 55%), radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.15), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
