/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'fira_code': ['Fira Code', 'monospace'],
      },
      colors: {
        'beige': '#F9F8F6',
      }
    },
  },
  plugins: [require("daisyui")],
}

