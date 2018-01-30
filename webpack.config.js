const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: 'file-loader',
        test: /\.jpe?g$/
      }
    ]
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = config
