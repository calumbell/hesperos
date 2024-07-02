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
      'light': '#F8FAFC',
    },
    fontFamily: {
      'serif': ["Bodoni Moda", "serif"],
      'sans': ["Josefin Sans", 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}

