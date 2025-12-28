/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D6A',   // soft green
        secondary: '#F6F4EC', // warm neutral background
        accent: '#FFB74D'     // warm accent
      }
    }
  },
  plugins: []
};
