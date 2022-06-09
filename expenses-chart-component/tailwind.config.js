/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarySoftRed: 'hsl(10, 79%, 65%)',
        primarySoftRedHover: 'hsl(10, 79%, 85%)',
        primaryCyan: 'hsl(186, 34%, 60%)',
        neutralDarkBrown: 'hsl(25, 47%, 15%)',
        neutralMediumBrown: 'hsl(28, 10%, 53%)',
        neutralCream: 'hsl(27, 66%, 92%)',
        neutralVeryPaleOrange: 'hsl(33, 100%, 98%)',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}