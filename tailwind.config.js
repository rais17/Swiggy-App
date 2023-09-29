/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
       screens: {
        from0: "0px",
        from480: "480px"
      },
    },
  },
  plugins: [],
};
