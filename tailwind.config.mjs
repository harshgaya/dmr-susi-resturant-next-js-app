module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(closest-side, rgba(0, 0, 0, 0.6) 0%, rgba(30, 30, 30, 0.8) 48%, rgba(30, 30, 30, 1) 100%)",
      },
      colors: {
        customYellow1: "#F5BE32",
        customYellow2: "#F3D382",
        customTextColor: "#D9D9D9",
        customBgColor: "#1E1E1E",
        customBgColor2: "#2E2E2E",
      },
      boxShadow: {
        "yellow-glow": "0 0 10px rgba(255, 221, 51, 0.7)",
      },
    },
  },
  plugins: [],
};
