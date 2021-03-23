const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const debounce = require('lodash.debounce');

module.exports = {
  entry: './source/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'nouislider.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
