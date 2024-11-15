/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "mini": "350px",
      "tablet": "685px",
      "desktop": "1024px"
    },
    extend: {

      colors: {
        "verde-normal": "#045914",
        "cinza": "#ccc",
      }
    },
  },
  plugins: [],
}

