const path = require('path');

config = {
  entry: 'src/index.js',
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
        test: /\.jpe?g$/,
        use: [
          {
            loader: 'url-loader',
            options: 400000
          },
          'image-webpack-loader'
        ]
      }
    ]
  }
};

module.exports = config;
