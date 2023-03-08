/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '3.75rem',
          xl: '5rem',
        },
      },

      colors: {
        main: '#FFFFFF',
        bg: '#181818',
        black: '#080808',
        accent: '#3b3bff',
      },

      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
  ],
};