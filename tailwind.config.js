/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// NOTE:
// Adding the font family in tailwind.config.js only creates the utility class (e.g., 'font-poppins').
// To actually see the Poppins font, you must also import the Poppins font in your project.
// For example, add this line to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
// Or import it in your CSS using @import:
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
//
// Without importing the font, the browser will fall back to the default sans-serif font.
