'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  统一暴露：暴露的是一个对象，要暴露的数据添加为对象的属性/方法
 */

function fn1() {
  console.log('fn1()');
}

function fn2() {
  console.log('fn2()');
}

exports.fn1 = fn1;
exports.fn2 = fn2;