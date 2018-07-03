/*
  定义有依赖的模块
 */

define(function (require, exports, module) {
  //引入依赖的模块
  var m1 = require('./dataServer');
  //定义自己的数据/函数
  function alerter() {
    alert(m1.dataServer());
  }
  //暴露出去
  module.exports = alerter;
})