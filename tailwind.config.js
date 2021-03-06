/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '15px',
    },
    extend: {
      colors: {
        'lightgray': '#181818',
        'gray': '#111111',
      },
    },
  },
  plugins: [],
}
