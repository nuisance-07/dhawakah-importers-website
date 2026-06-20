import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        foreground: "#f3f4f6",
        primary: {
          DEFAULT: "#d4af37",
          hover: "#eab308",
        },
        secondary: {
          DEFAULT: "#c0c0c0",
          hover: "#e5e7eb",
        },
        dark: {
          DEFAULT: "#000000",
          surface: {
            DEFAULT: "#121214",
            hover: "#1c1c1f",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
