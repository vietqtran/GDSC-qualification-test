/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '11': '0.6875rem',
        '13': '0.8125rem',
        '17': '1.0625rem',
        '15': '0.9375rem',
        '28': '1.75rem',
        '32': '2rem',
        '54': '3.375rem',
        '50': '3.125rem',
      },
      textColor: {
        'orange-primary': '#EB6440'
      },
      backgroundColor: {
        'orange-primary': '#EB6440'
      },
      boxShadow: {
        'popup': 'rgba(17, 17, 26, 0.1) 0px -8px 16px, rgba(17, 17, 26, 0.05) 10px 16px 20px',
        'toast': '0 4px 4px rgba(0,0,0,0.25)'
      },
      borderColor: {
        'orange-primary': '#EB6440'
      }
    },
  },
  plugins: [],
}

