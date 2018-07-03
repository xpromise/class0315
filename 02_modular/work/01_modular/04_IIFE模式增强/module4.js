/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

(function (w, $) {
  function fn1() {
    console.log('fn1()');
    $('body').css('background', 'pink');
  }
  function fn2() {
    console.log('fn2()');
  }
  window.fn1 = fn1;
  window.fn2 = fn2;
})(window, jQuery)
