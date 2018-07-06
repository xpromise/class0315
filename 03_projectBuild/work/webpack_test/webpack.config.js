/*
  webpack的配置文件，当你执行webpack默认找到配置文件webpack.config.js
  
  通过 webpack --display-modules 能查看所有任务执行情况
 */
const {resolve} = require('path');
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
    rules: [{     //配置规则
      test: /\.less$/,   //规则处理的文件
      use: [{            //遇到要处理的文件，通过use中的loader处理指定文件（执行顺序从右往左）
        loader: "style-loader" // 会在html文件中，将js中css样式生成一个style标签插入页面中去
      }, {
        loader: "css-loader" // 将css变成js中一个模块（commonjs的模块化语法）
      }, {
        loader: "less-loader" // 将less编译成css
      }]
    }]
  }
}