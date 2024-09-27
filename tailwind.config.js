/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#1C002C',
        background: '#DECFF2',
        border: '#D0BCFF',
      },
    },
  },
  plugins: [],
}

