var path = require('path')
var webpack = require('webpack')
var Clean = require('clean-webpack-plugin')

module.exports = {

  devtool: 'eval',

  entry: [
    './client/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public', 'scripts'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'client')
      ],
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  plugins: [
    new Clean(['public/scripts']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  watch: true

}
