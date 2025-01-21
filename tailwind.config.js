/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xlg: '1111px',
      },
      container: {
        center: true, 
      },
    },
  },
  plugins: [],
}

