var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'bundle.js',
  },
  externals: {
    'react': 'React'
},
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  devtool: 'inline-source-map',
};
