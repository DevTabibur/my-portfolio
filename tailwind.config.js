/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0081C9",
          secondary: "#042954",
          accent: "#051f3e",
          neutral: "#7a8a9e",
          "base-100": "#e9f4f8",
          info: "#2ad7c5",
          success: "#28a745",
          warning: "#FBBD23",
          error: "#ff3131",
        },
      },
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#F3F4F6",
          "base-100": "#e9f4f8",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
