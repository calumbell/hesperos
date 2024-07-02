/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/templates/**/*.{js,jsx}"
  ],
  theme: {
    colors: {
      'primary': '#306F8D',
      'primary-shade': '#5084A5',
      'primary-pale': '#91C2E3',
      'light': '#F8FAFC',
      'light-shade': '#E9F1F7',
      'dark': '#140A00',
    },
    fontFamily: {
      'serif': ["Bodoni Moda", "serif"],
      'sans': ["Josefin Sans", 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}

