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
        background: "#2c2c2c",
        foreground: "var(--foreground)",
        'gray-base': "#C6C6C6",
        'off-white': '#fffff9'
      },
    },
  },
  plugins: [],
};
export default config;
