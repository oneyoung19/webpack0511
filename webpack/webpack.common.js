const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        // 注意这里的先后顺序 MiniCssExtractPlugin.loader取代style-loader
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // css 热更新
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          // 图片可以使用url-loader或者file-loader, 优先使用url-loader, 因为url-loader可以设置图片大小的limit, 来控制将图片是否转为dataURL。而file-loader不论大小，都将图片转为dataURL
          {
            loader: 'url-loader',
            options: {
              // 小于limit的话，会转为dataUrl, 此时需要安装file-loader
              limit: 102400,
              // 设置limit后，优化下name
              name: '[name]_[hash:6].[ext]',
              // 在支持esmodule的import的基础上，是否支持commonJs的require true(不支持，默认) false(支持)
              esModule: false,
              // 图片输出到dist文件夹的img目录下
              outputPath: 'img'
            },
          }
        ]
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
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    // 默认情况下，import语句只会在node_modules中寻找。可通过该配置增加默认的寻找文件。（从左至右）
    modules: [path.resolve(__dirname, '../src/components'), 'node_modules'],
    // 别名
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    // 自动解析扩展名 顺序从左至右
    extensions: ['.vue', '.js', '.json']
  }
}
