/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {

      flexBasis: {
        '24/50': '48%',
      },
      width: {
        '24/50': '48%',
      },
      padding: {

        '1/2':'50%',

      }

    },
  },
  plugins: [],
}

