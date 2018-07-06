/*
  webpack的配置文件，当你执行webpack默认找到配置文件webpack.config.js
  
  通过 webpack --display-modules 能查看所有任务执行情况
 */
const {resolve} = require('path');
//提取css成单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//创建一个html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, '../build'),   //输出目录
    filename: './js/built.js'            //输出文件名
  },
  //配置loader
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'less-loader']
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
    new ExtractTextPlugin("./css/built.css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',     //文件名
      template: 'src/index.html'  //以指定html文件为模板去创建html文件
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  //服务器实现热更新
  devServer: {
    contentBase: __dirname,
    compress: true,   //以gzip格式压缩
    port: 3000,       //端口号
    open: true,       //自动打开网页
    hot: true         //开启热模替换功能
  }
}