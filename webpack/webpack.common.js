const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 注意这里的先后顺序
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      // 打包后的文件名
      filename: 'index.html',
      // 压缩
      minify: {
        // 是否删除属性的双引号
        removeAttributeQuotes: true,
        // 是否折叠空白
        collapseWhitespace: true
      },
      // 其他配置
      config: {
        title: '0511/webpack'
      }
    })
  ]
}
