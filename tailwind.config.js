/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        goyal: {
          50: '#fef5f2',
          100: '#fde8e1',
          200: '#fad0c3',
          300: '#f5a58a',
          400: '#ed7d5a',
          500: '#e05a2d',
          600: '#c7421a',
          700: '#a33515',
          800: '#862e14',
          900: '#6d2812',
          950: '#2d0e05',
        },
        gold: '#d4a853',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
