/*
  主模块：
 */
//配置模块的路径
requirejs.config({
  baseUrl: './',    //所有模块的公共路径
  paths: {
    dataServer: 'modules/dataServer',   // 模块名称（一定要与引入的模块名称一一对应）: 模块的路径
    alerter: 'modules/alerter',    //一定不能写文件的后缀名，它会自动补全
    jquery: 'libs/jquery-1.10.1'   //库/框架自己实现模块化的功能，定义了暴露模块的名称
  }
})
//主模块
requirejs(['alerter', 'jquery'], function (alerter, $) {
  alerter();
  $('body').css('background', 'deeppink');
})