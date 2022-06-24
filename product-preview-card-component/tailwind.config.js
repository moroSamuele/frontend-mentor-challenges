/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkCyan: 'hsl(158, 36%, 37%)',
        primaryVeryDarkCyan: 'hsl(158, 36%, 17%)',
        primaryCream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif'],
        fraunces : ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}
