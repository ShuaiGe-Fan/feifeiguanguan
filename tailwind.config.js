/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b9d',
          dark: '#c44569',
        },
      },
      borderRadius: {
        'card': '20px',
      },
    },
  },
  plugins: [],
}

