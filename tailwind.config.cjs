/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      minWidth: { 16: "4rem" },
      colors: {
        "brand-bg": "var(--color-bg)",
        "brand-text": "var(--color-text)",
        "brand-accent": "var(--color-accent)",
        "brand-footer": "var(--color-footer)",
        "brand-secondary": "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
