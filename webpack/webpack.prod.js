const merge = require('webpack-merge')
const common = require('./webpack.common')

// 自动清除dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin()
  ]
})
