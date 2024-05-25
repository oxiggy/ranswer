/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      serif: ['"Merriweather"', 'serif'],
    },
    extend: {
      colors: {
        'surface': 'var(--colors-surface)',
        'primary': 'var(--colors-primary)',
      }
    },
  },
  plugins: [],
}