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
        'primary': '#1D1D1D',
        'secondary': '#2D2D2D',
        'accent': '#F56F36',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        fadein: 'fadein .3s linear forwards',
        fadeout: 'fadeout .3s linear forwards'
      }
    },
  },
  plugins: [],
}
