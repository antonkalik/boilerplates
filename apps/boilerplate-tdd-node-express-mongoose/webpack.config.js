const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  entry: './src/index.js',
  watch: process.env.NODE_ENV === 'development',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  externals: [webpackNodeExternals()],
};
