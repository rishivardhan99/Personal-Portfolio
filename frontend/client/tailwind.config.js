/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',      // enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-600 like
          600: '#4f46e5',
          700: '#4338ca'
        },
        accent: {
          DEFAULT: '#06b6d4' // teal-ish
        },
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(16,24,40,0.08)'
      }
    },
  },
  plugins: [],
}
