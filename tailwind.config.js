/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandDark: "#000929",
        brandPrimary: "#7065F0",
        purpleOne:"#F7F7FD",
        formBg:"#F5F7FB"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        // Complex site-specific column configuration
        'header': '3fr 1fr 3fr',
      }
    },
  },
}
