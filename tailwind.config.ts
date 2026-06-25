import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Deep navy in the same hue family as the logo's blue — used for
        // dark surfaces (hero, footer) where white text needs strong contrast.
        navy: {
          DEFAULT: "#123B5F",
          50: "#f1f6fb",
          700: "#0E2D49",
          600: "#1a517f",
          500: "#246299",
        },
        // Single solid accent = the logo's cornflower blue. No gradients.
        accent: {
          DEFAULT: "#3D85C6",
          dark: "#2F6CA6",
        },
        // Neutral gray pulled from the logo's emblem, for subtle accents.
        steel: "#9CA3AB",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,42,71,0.06), 0 8px 24px -12px rgba(14,42,71,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
