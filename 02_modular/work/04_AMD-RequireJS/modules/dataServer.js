/*
  定义没有依赖的模块
 */

define(function () {
  var msg = 'atguigu.com';
  
  function dataServer() {
    return msg.toUpperCase();
  }
  //暴露模块内容
  return dataServer;
})