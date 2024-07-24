module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#6B21A8',
        'primary-dark': '#5B21B6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}