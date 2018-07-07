(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var m1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入默认暴露

// foo1();
// console.log(name);
m1.foo1(); //引入统一暴露
/*
  引入模块
    import {模块中暴露内容} from '模块路径'
      动态加载，没有缓存
 */

// import {foo1, name} from './module1';  //引入分别暴露

console.log(m1.name);
(0, _module2.fn1)();
(0, _module2.fn2)();
var p = new _module4.default('Jack');
console.log(p.name);
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo1 = foo1;
/*
  分别暴露：后面完整的定义（变量或函数定义）
 */

function foo1() {
  console.log('foo1()');
}

var name = exports.name = 'atguigu';
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  默认暴露：只能暴露一个内容
    默认暴露的本质：定义了default变量，将后面的值赋值给default变量，暴露出去
 */

function Person(name) {
  this.name = name;
}

exports.default = Person;
},{}]},{},[1]);
