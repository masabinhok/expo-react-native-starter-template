/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
      },
      colors: {
        primary: {
          10: "#F3E9FF",
          20: "#E8D3FF",
          40: "#D0A7FF",
          60: "#B97CFF",
          80: "#A150FF",
          100: "#8A24FF",
        },
        black: {
           10: "#EAECF0",
          20: "#CDCDD0",
          40: "#9B9BA1",
          60: "#686873",
          80: "#363644",
          100: "#040415",
        },
        success: "#3BA935",
        danger: "#E3524F",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}