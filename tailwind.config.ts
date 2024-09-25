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
        purple: '#8247E5',
        'purple-secondary': '#7F5CFF',
        'gray-base': "#E5E5E5",
        'light-gray': '#D1D5DB',
        'dark-gray': '#4B5563',
        'gray-backgorund': '#ECF0F1',
        'off-white': '#fffff9'
      },
    },
  },
  plugins: [],
};
export default config;
