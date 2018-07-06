/*
  webpack的配置文件，当你执行webpack默认找到配置文件webpack.config.js
  
  通过 webpack --display-modules 能查看所有任务执行情况
 */
const {resolve} = require('path');
//提取css成单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, 'build'),   //输出目录
    filename: './js/built.js'            //输出文件名
  },
  //配置loader
  module: {
    rules: [
    /*  {     //配置规则
      test: /\.less$/,   //规则处理的文件
      use: [{            //遇到要处理的文件，通过use中的loader处理指定文件（执行顺序从右往左）
        loader: "style-loader" // 会在html文件中，将js中css样式生成一个style标签插入页面中去
      }, {
        loader: "css-loader" // 将css变成js中一个模块（commonjs的模块化语法）
      }, {
        loader: "less-loader" // 将less编译成css
      }]
    },*/
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'less-loader']
        })
      },
      /*{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './build/images',  //样式中图片的路径
              outputPath: './images'   //输出的文件路径
            }
          }
        ]
      }*/
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
  ]
}