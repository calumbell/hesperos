/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/templates/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      'serif': ["Bodoni Moda", "serif"],
      'sans': ["Josefin Sans", 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}

