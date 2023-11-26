/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '17': '1.0625rem'
      },
      textColor: {
        'orange-primary': '#EB6440'
      }
    },
  },
  plugins: [],
}

