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