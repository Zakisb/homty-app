/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
  theme: {
    extend: {
      colors:{
        'brand-primary': "#4f46e5",
        'brand-secondary': "#100A55",
        brandDark: "#000929",
        brandPrimary: "#7065F0",
        brandSecondary: "#7065F0",
        purpleOne:"#F7F7FD",
        formBg:"#F5F7FB",
        "border-base": "#e2e2e2",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        // Complex site-specific column configuration
        'header': '3fr 1fr 3fr',
      }
    },
  },
}
