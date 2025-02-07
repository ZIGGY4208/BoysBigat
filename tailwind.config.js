module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-section': "url('/hero-bg.jpg')",
        'about-img':"url('/about-img.jpg')",
      },  
    },
  },
  plugins: [],
};
