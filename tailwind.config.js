/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        truemarque: "truemarque 15s linear infinite",
        marque: "marque 15s linear infinite",
        project: "project 30s linear infinite",
      },

      keyframes: {
        truemarque: {
          "0%": {
            transform: "translateZ(0)",
          },
          "100%": {
            transform: "translate3d(100%,0,0)",
          },
        },
        project: {
          "0%": {
            transform: "translateZ(0)",
          },
          "100%": {
            transform: "translate3d(-100%,0,0)",
          },
        },
        marque: {
          "0%": {
            transform: "translateZ(0)",
          },
          "100%": {
            transform: "translate3d(-100%,0,0)",
          },
        },
      },
    },
  },
  plugins: [],
};
