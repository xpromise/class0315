/*
  定义有依赖的模块
  define(['模块1', '模块2'], function (m1, m2) {})
 */

define(['dataServer'], function (dataServer) {
  console.log('alerter模块被加载了');
  var msg = dataServer();
  
  function alerter() {
    alert(msg);
  }
  //向外暴露模块
  return alerter;
})