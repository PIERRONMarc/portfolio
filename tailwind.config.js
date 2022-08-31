/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'la-belle-aurore': ['La Belle Aurore'],
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
}
