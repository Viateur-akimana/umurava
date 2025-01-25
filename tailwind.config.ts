import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#2B71F0',
      },
    },
  },
  plugins: [],
} satisfies Config;
