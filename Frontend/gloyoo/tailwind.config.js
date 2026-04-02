const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#8b5cf6",
          teal: "#7c3aed",
          tealDark: "#6d28d9",
          tealDeep: "#4c1d95",
          tealNight: "#312e81",
          tealInk: "#502274",
          navy: "#36476f",
          navyDark: "#1f2a44",
          steel: "#1a2c3d",
          gray: "#6f6f6f",
          grayLight: "#cccccc",
          graySoft: "#bbbbbb",
          grayMuted: "#aaaaaa",
          charcoal: "#181717",
          coal: "#222222",
          slate: "#4a5568",
          slateDark: "#393e46",
          cloud: "#e6eaed",
          petalPink: "#C179B9",
        },
      },
      boxShadow: {
        "brand-soft": "0 10px 30px rgba(0, 0, 0, 0.12)",
        "brand-camera": "0 0 0 1px rgba(255, 255, 255, 0.04)",
      },
      backgroundImage: {
        "brand-glass":
          "linear-gradient(160deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 12%, transparent 28%, transparent 100%)",
      },
    },
  },
};

export default config;
