const path = require('path')

module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill",'./client/index.js'],
  output: {
    filename: 'main.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
} 