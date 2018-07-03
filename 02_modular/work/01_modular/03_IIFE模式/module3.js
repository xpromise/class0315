/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */
//IIFE模式

(function (window) {
  var msg = 'atguigu';
  function fn1() {
    console.log('fn1()' + msg);
  }
  function fn2() {
    console.log('fn2()' + msg);
  }
  window.fn1 = fn1;
  window.fn2 = fn2;
})(window)



