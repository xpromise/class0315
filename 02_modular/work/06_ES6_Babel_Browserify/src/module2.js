/*
  统一暴露：暴露的是一个对象，要暴露的数据添加为对象的属性/方法
 */

function fn1() {
  console.log('fn1()');
}

function fn2() {
  console.log('fn2()');
}

export {fn1, fn2};