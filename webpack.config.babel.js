// @flow

'use strict';

// core modules
import path from 'path';

// variables
const webpackPort = 7000;
const production = process.env.NODE_ENV === 'production';

export default {
  entry: [
    './src/client'
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'live'),
    publicPath: production ? '/static/' : `http://localhost:${webpackPort}/live/`
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: production ? false : 'source-map',
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    port: webpackPort
  }
};
