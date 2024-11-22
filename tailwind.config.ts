import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A96E03",
          disabled: "rgba(226, 149, 7, 0.38)",
          active: "rgba(226, 149, 7, 0.5)",
          activeCard: "rgba(226, 149, 7, 0.1)",
          activeCardDark: "rgba(226, 149, 7, 0.2)",
          DEFAULT: "#E29507",
        },
        gray: {
          100: "#E9E9E9",
          200: "#BFBFBF",
          300: "#838383",
          400: "#1A1A1A",
        },
        black: {
          DEFAULT: "#191000",
        },
        white: {
          background: "#FFFAF0",
          DEFAULT: "#ffffff",
        },
        error: "#EB5555",
        success: "02C221",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
