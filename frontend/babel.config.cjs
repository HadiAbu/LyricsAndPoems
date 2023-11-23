module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: true } }],
    ["@babel/preset-react", { targets: { node: true } }], // add this
  ],
  plugins: [
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-proposal-class-properties",
  ],
};
