/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      lineHeight: {
        130: '130%',
      },
      colors: {
        primary_text: '#151820',
        secondary_text: '#FFFFFF',
        tertiary_text: '#ccd6e0',
        primary_color: '#14c56e',
        secondary_color: '#002f36',
        card_color: '#5d7b85',
        dark_green: '#162b3f',
        red: '#a82222',
      },
    },
  },
  plugins: [],
};
