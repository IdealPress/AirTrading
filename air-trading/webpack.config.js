
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
        }
      },
    ]
  },
  output: {
    filename: 'bundle.js'
  }
};
