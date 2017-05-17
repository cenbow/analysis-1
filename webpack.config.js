var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
  	't.analysis-1.1': path.resolve('src', 'entry.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}