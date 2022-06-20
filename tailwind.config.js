module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "extra-sm": "300px",
      sm: "420px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "sans-serif"],
      },
      colors: {
        "title-clr": "#fffea8",
        "dark-blue": "#012740",
        "custom-teal": "#127059",
        ocean: "#075875",
        riviera: "#17a0b3",
      },
    },
  },
  plugins: [],
};
