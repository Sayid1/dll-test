const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var bundleConfig = require('./bundle-config.json')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DllReferencePlugin({
        manifest: require('./dll/manifest.json')
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        filename: 'index.html',
        vendorJsName: bundleConfig.vender.js
      })
    ]
  }
}
