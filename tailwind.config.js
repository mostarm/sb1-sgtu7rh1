/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-750': '#2d374d',
        'text-primary': '#ffffff',
        'text-secondary': '#e2e8f0',
        'text-tertiary': '#cbd5e1',
      },
      backgroundColor: {
        'gray-850': '#1a1f2e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};