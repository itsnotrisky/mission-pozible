var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/template.html',
  filename: __dirname + '/index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [HTMLWebpackPluginConfig],
  watchOptions: {
    poll: 1000 //https://github.com/webpack/webpack-dev-server/issues/143#issuecomment-219147351
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      // http://jaketrent.com/post/pushstate-webpack-dev-server/
      index: __dirname + '/index.html'
    }
  }
}