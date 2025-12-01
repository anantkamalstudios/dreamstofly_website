/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        arsenal: ["Arsenal", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        vollkorn: ["Vollkorn", "sans-serif"],
        bricolageGrotesque:["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
