const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// require("@babel/polyfill");

module.exports = {
  entry: ['@babel/polyfill', './index.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlPlugin({
    	hash:  true,
	    template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }

}
