const merge = require('webpack-merge')
const common = require('./webpack.common')

// 自动清除dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 压缩从js文件中分离出来的css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = merge(common, {
  // mode有什么用？这里即使设置了production，可分离的css并没有压缩，还是需要手动设置optimize-css-assets-webpack-plugin插件
  // mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin()
  ]
})
