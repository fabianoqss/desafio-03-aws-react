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
        primary_text: '#18191F',
        secondary_text: '#FCFAFA',
        tertiary_text: '#D1D5DB',
        primary_color: '#09BC8A',
        secondary_color: '#004346',
        card_color: '#508991',
        dark_green: '#172A3A',
        red: '#992020',
      },
    },
  },
  plugins: [],
};
