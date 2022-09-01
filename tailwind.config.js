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
        'roboto': ['Roboto'],
      },
      textColor: {
        'primary': '#FFFFFF',
        'secondary': '#8D8D8D',
        'accent': '#F56F36',
        'html-tag': '#515151'
      },
      backgroundColor: {
        'primary': '#1D1D1D'
      }
    },
  },
  plugins: [],
}
