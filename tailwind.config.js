/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
            "FF7979": "#FF7979",
            "38CC8B": "#38CC8B",
            "5E54A4": "#5E54A4",
            "3D3B48": "#3D3B48"
        },
        fontFamily:{
            "poppins": ["Poppins", "sans-serif"]
        },
        backgroundImage:{
            'desktop': "url('../images/bg-intro-desktop.png')",
            'mobile': "url('../images/bg-intro-mobile.png')"
        }
      },
    },
    plugins: [],
  }