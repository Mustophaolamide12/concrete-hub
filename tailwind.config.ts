import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#000000",
        surface:  "#0d0d0d",
        surface2: "#1a1a1a",
        cborder:  "#2a2a2a",
        border2:  "#3d3d3d",
        accent:   "#4ade80",
        muted:    "#737373",
        muted2:   "#a3a3a3",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "6xl": "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
