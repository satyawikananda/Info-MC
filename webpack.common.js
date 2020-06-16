const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Info Bola | Beranda',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/nav.html',
      filename: 'nav.html',
    }),
    new HTMLWebpackPlugin({
      title: 'Info Bola | Beranda',
      template: './src/pages/home.html',
      filename: 'home.html',
    }),
  ],
};
