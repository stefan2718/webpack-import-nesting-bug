const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    libraryTarget: 'umd',
    library: 'testLib',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  mode: 'development'
};
