module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "smaller": "200px",
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
        victory: "#914BFF",
        "modal-text": "#FBCE6B",
        banana: "#FBCE6B",
      },
      backgroundColor: {
        "modal-window": "#FF7E35",
        blueBtn: "#8A40FF",
      },
    },
  },
  plugins: [],
};
