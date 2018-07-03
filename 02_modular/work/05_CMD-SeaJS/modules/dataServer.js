/*
  定义没有依赖的模块
 */

define(function (require, exports, module) {
  var msg = 'atguigu.com';
  function dataServer() {
    return msg.toUpperCase();
  }
  //暴露模块
  exports.dataServer = dataServer;
})