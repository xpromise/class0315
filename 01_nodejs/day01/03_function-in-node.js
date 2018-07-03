/*
  node中的js的组成：
    ES   基本全部实现了
    DOM  没有
    BOM  基本没有（除了console setTimeout setInterval）
    
  node中的模块默认对外不可见的，因为包裹了一层函数
 */

// console.log(this);  //空的对象
console.log(arguments.callee.toString());  //伪数组  有数组的一般属性  没有数组的方法

/*
function (exports, require, module, __filename, __dirname) {}

  exports 暴露模块
  require 引入模块
  module module.exports 暴露模块
  __filename 当前文件的完整路径 绝对路径
  __dirname 文件夹的完整路径 绝对路径
 */

console.log(__filename, __dirname);
//C:\Users\web\Desktop\class0315\day01\03_function-in-node.js
//C:\Users\web\Desktop\class0315\day01