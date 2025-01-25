/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        ssm: '400px',
        xmd: '820px',
        xlg: '1150px'
      },
      container: {
        center: true, 
      },
    },
  },
  plugins: [],
}

