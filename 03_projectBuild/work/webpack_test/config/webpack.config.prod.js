/*
  webpack的配置文件，当你执行webpack默认找到配置文件webpack.config.js
  
  通过 webpack --display-modules 能查看所有任务执行情况
 */
const {resolve} = require('path');
//提取css成单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//创建一个html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除指定目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, '../dist'),   //输出目录
    filename: './js/dist.min.js'            //输出文件名
  },
  //配置loader
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true //启用压缩css
            }
          }, 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,   // 8 * 1024  8kb大小以下的图片转化为base64格式
              publicPath: '../images',  //样式中图片的路径
              outputPath: './images'   //输出的文件路径
            }
          }
        ]
      }
    ]
  },
  //配置插件
  plugins: [
    new ExtractTextPlugin("./css/dist.min.css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',     //文件名
      template: 'src/index.html'  //以指定html文件为模板去创建html文件
    }),
    new CleanWebpackPlugin('../dist', {  //不遵循output输出目录
      allowExternal: true   //允许清除根目录以外的文件夹
    })
  ]
}