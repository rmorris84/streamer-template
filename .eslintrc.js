module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["import"],
  env: {
    browser: true,
    node: true
  },
  rules: {
    validateLineBreaks: 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        // added for React Router Usage
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ]
  }
};
