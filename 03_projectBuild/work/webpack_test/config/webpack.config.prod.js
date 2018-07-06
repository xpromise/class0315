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
//压缩js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, '../dist'),   //输出目录
    filename: './js/[name].[hash:7].js'            //输出文件名
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
      },
      {
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 jshint loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [{
          loader: "jshint-loader",
          options: {
            // 查询 jslint 配置项，请参考 http://www.jshint.com/docs/options/
            // 例如
            camelcase: true,
            //jslint 的错误信息在默认情况下会显示为 warning（警告）类信息
            //将 emitErrors 参数设置为 true 可使错误显示为 error（错误）类信息
            emitErrors: true,
            //jshint 默认情况下不会打断webpack编译
            //如果你想在 jshint 出现错误时，立刻停止编译
            //请设置 failOnHint 参数为true
            failOnHint: true,
            esversion: 6
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  //配置插件
  plugins: [
    new ExtractTextPlugin("./css/[name].[hash:7].css"),
    new HtmlWebpackPlugin({
      filename: 'main.[hash:7].html',     //文件名
      template: 'src/index.html',  //以指定html文件为模板去创建html文件
      minify: {                   //压缩html
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin('../dist', {  //不遵循output输出目录
      allowExternal: true   //允许清除根目录以外的文件夹
    }),
    new UglifyJsPlugin()
  ],
}