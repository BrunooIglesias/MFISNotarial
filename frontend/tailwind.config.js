module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        notarial: {
          bg: '#d4d4ce',
          primary: '#aeb6a5',
          secondary: '#8e9b83',
          text: '#6b7b62',
          subtext: '#424c3b',
          service: {
            bg: '#f5f5f5',
            card: '#ffffff',
            hover: '#e8e8e8'
          },
          testimonial: {
            bg: '#e8e8e8',
            card: '#ffffff',
            quote: '#8e9b83'
          }
        }
      }
    },
  },
  plugins: []
};
