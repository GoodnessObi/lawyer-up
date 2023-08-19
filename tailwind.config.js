/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#333333',
          light: '#4F4F4F',
          dark: '#666666'
        },
        gold: {
          light: '#CABCA1',
          DEFAULT: '#A89164'
        },
        cream: '#FFFDF8',
        blue: {
          light: '#16243E',
          dark: '#2C2F3A'
        }
      }
    }
  },
  plugins: []
}
