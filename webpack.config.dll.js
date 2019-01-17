const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const pkg = require('./package.json')
let dependencies = Object.keys(pkg.dependencies) || []
dependencies = dependencies.filter(item => item !== 'vue')
dependencies.unshift('vue/dist/vue.runtime.common.js')

module.exports = {
  entry: {
    vender: dependencies
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: 'dll.[name]_[hash].js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dll', 'manifest.json')
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './'
    })
  ]
}
