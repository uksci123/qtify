/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34C94B',   
        secondry: '#121212',   
        main: '#FFFFFF',  
      },
    },
  },
  plugins: [],
}
