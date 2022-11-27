/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontSize: {
        title: [
          "1.125rem",
          {
            lineHeight: "40px",
            letterSpacing: "4px",
            fontWeight: "400",
          },
        ],
        "subtitle-1": [
          "1rem",
          {
            lineHeight: "24px",
            letterSpacing: "2px",
            fontWeight: "400",
          },
        ],
        "subtitle-2": [
          ".875rem",
          {
            lineHeight: "20px",
            letterSpacing: "2px",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "1rem",
          {
            lineHeight: "24px",
          },
        ],
        "body-md": [
          ".875rem",
          {
            lineHeight: "24px",
          },
        ],
        "body-sm": [
          ".75rem",
          {
            lineHeight: "18px",
          },
        ],
      },
      fontFamily: {
        bondi: "Bodoni Moda, serif",
      },
      colors: {
        primary: "#A8715A",
        secondary: "#DD8560",
        light: "#888888",
        gray: {
          DEFAULT: "#333333",
        },
        offWhite: "#F2F2F2",
      },
      backgroundImage: {
        icons: "url('./assets/images/Icon.png')",
        "home-sm1": "url('./assets/images/home-page.png')",
        "home-sm2": "url('./assets/images/home-page-2.png')",
        "home-sm3": "url('./assets/images/home-page-3.png')",
        "home-md": "url('./assets/images/home-m.jpg')",
        "home-md1": "url('./assets/images/home-m1.jpg')",
        "home-md2": "url('./assets/images/home-m2.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
  corePlugins: {
    aspectRatio: false,
  },
};
