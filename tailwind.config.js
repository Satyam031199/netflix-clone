/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['Nsans Light'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-bold': ['Nsans Bold'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}