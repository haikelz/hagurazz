module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        cards: "10px 10px 0px -3px rgba(0,0,0,1)",
        dark: "10px 10px 0px -3px white",
      },
    },
  },
  plugins: [],
};
