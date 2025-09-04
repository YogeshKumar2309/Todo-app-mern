export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],           // 📱 Clean & modern font (default for mobile)
        poppins: ['Poppins', 'sans-serif'],       // 💻 Stylish font (default for desktop)
        roboto: ['Roboto', 'sans-serif'],         // 📱 Android optimized font
        montserrat: ['Montserrat', 'sans-serif'], // 💻 Geometric font, great for headings
        opensans: ['Open Sans', 'sans-serif'],    // 💻 Clean and professional text font
        lato: ['Lato', 'sans-serif'],             // 📱 Smooth, rounded, friendly UI font
      },
    },
  },
  plugins: [],
};