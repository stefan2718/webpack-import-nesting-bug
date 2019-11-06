const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './index.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
  },
  output: {
    pathinfo: true,
    publicPath: 'testo/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "index.html")
    ]),
  ],
  mode: 'development'
};
