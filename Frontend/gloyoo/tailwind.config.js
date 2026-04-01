const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#3e868e",
          tealDark: "#2c5f63",
          tealDeep: "#044343",
          tealNight: "#093030",
          tealInk: "#0d2626",
          navy: "#36476f",
          navyDark: "#1f2a44",
          steel: "#1a2c3d",
          sand: "#d1b896",
          brownDark: "#8c7355",
          gray: "#6f6f6f",
          grayLight: "#cccccc",
          graySoft: "#bbbbbb",
          grayMuted: "#aaaaaa",
          charcoal: "#181717",
          coal: "#222222",
          slate: "#4a5568",
          slateDark: "#393e46",
          cloud: "#e6eaed",
          gold: "#e9a444",
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
