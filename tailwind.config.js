/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'nvidia-black': '#000000',
      //   'nvidia-green': '#76B900',
      // },
      colors: {
        'primary': '#22c55e', // Your preferred primary color
        'secondary': '#3b82f6', // Your preferred secondary color
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}