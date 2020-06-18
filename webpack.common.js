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
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'MC Wiki | Beranda',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/nav.html',
      filename: 'nav.html',
    }),
    new HTMLWebpackPlugin({
      title: 'MC Wiki | Beranda',
      template: './src/pages/home.html',
      filename: 'home.html',
    }),
    new HTMLWebpackPlugin({
      title: 'MC Wiki | Pertandingan',
      template: './src/pages/tanding.html',
      filename: 'tanding.html',
    }),
    new HTMLWebpackPlugin({
      template: './src/pages/pemain.html',
      filename: 'pemain.html',
    }),
  ],
};
