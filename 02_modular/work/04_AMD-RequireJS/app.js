/*
  主模块：
    define()   定义没有依赖/有依赖的模块
    require()  定义异步的模块，和define用法一致
    requirejs()  定义配置，定义主模块
*/
//配置模块的路径
require.config({
  baseUrl: './',    //所有模块的公共路径
  paths: {
    dataServer: 'modules/dataServer',   // 模块名称（一定要与引入的模块名称一一对应）: 模块的路径
    alerter: 'modules/alerter',    //一定不能写文件的后缀名，它会自动补全
    jquery: 'libs/jquery-1.10.1'   //库/框架自己实现模块化的功能，定义了暴露模块的名称
  }
})
//主模块
require(['jquery'], function ($) {
  $('#btn').click(function () {
    //异步加载你需要的模块，会缓存你加载的模块
    require(['alerter'], function (alerter) {
      alerter();
    })
  })
  $('body').css('background', 'deeppink');
})

console.log('1111111111111');