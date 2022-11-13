/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFCE",
          secondary: "#19D3AE",
          "base-100": "#FFFFFF",
          neutral: "#3D4451",
          accent: "#3A4256",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/src/assets/images/bg.png')",
        appointment: "url('/src/assets/images/appointment.png')",
        contact: "url('/src/assets/images/appointment.png')",
        footer: "url('/src/assets/images/footer.png')",
      },
      fontFamily: {
        "Open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
