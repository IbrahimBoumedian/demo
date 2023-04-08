/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px ",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "tw-first": "#3bf686",
      },
      maxWidth: {
        "my-container": "1050px",
      },
      gridTemplateColumns: {
        
      },
    },
  },
  plugins: [],
};
