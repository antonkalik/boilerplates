const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  entry: './src/index.ts',
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
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.gql', '.graphql'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  externals: [webpackNodeExternals()],
};
