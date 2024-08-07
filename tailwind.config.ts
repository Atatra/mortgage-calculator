import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      slate: {
        100: "hsl(202, 86%, 94%)",
        300: "hsl(203, 41%, 72%)",
        500: "hsl(200, 26%, 54%)",
        700: "hsl(200, 24%, 40%)",
        900: "hsl(201, 54%, 16%)",
        1100: "hsl(202, 56%, 12%)",
      },
      white: "hsl(0, 0%, 100%)",
      lime: "hsl(61, 70%, 52%)",
      "lime-light": "hsl(61, 51%, 76%)",
      red: "hsl(4, 69%, 50%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        plusJakartaSans: ["var(--font-plusJakartaSans)"],
      },
      screens: {
        rm: "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
