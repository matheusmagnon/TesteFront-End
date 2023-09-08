/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshiRegular: ["satoshi-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
