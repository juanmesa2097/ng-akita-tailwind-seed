module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        inherit: "inherit",
        transparent: "transparent",
        current: "currentColor",
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  variants: {},
  plugins: [],
};
