const path = require("path");
const MODE = "development";
const enabledSourceMap = MODE === "development";
module.exports = {
  mode: MODE,
  entry: ["./src/js/main.js", "./src/css/style.css"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  target: ["web", "es5"],
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist/js"),
    open: true,
  },
};
