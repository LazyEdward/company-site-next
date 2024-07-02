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
        "default-text": "#16205F",
        "orange-gradient-st": "#FF9900",
        "orange-gradient-ed": "#F2CB00",
        "pale-yellow": "#FFF856",
      }
    },
  },
  plugins: [],
};
export default config;
