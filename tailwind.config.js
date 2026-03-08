/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#ff6b9d',
        'romantic-purple': '#c44569',
      },
      fontFamily: {
        'cursive': ['Pacifico', 'cursive'],
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
