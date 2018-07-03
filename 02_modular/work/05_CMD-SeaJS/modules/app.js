/*
  定义主模块
 */

define(function (require, exports, module) {
  //异步引入依赖
  require.async(['./alerter'], function (alerter) {
    alerter();
  })
  console.log('**************');
})