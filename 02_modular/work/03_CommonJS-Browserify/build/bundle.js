(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const m2 = require('./module2');
const showData = require('./module3');


showData(m2.newsData);
showData(m2.commnetsData);
},{"./module2":3,"./module3":4}],2:[function(require,module,exports){


const prefix = 'http://loacalhost:3000/';

const newsUrl = prefix + 'news';
const commentsUrl = prefix + 'comments';

/*
  暴露模块中的内容，exports
 */
exports.newsUrl = newsUrl;
exports.commentsUrl = commentsUrl;
},{}],3:[function(require,module,exports){
/*
  引入依赖模块  require
    用户自己定义的模块（自定义模块）： 引入路径必须以 ./ 或者 ../ 开头
    第三方模块或者nodejs内置的模块： 引入路径直接以模块名引入
    
    查找模块的规则：
      路径以 ./  或者 ../开头的话，直接沿着路径去找
      路径如果直接是文件名，首先node中核心模块中找，如果找不到，去当前目录下node_modules找，层层遍历查找到根目录下

    会自动补全文件后缀名:
      .node
      .js
      .json
 */
const m1 = require('./module1');

function getNews(url) {
  console.log('发送请求，请求地址：' + url);
  return 'newsData';
}

function getComments(url) {
  console.log('发送请求，请求地址：' + url);
  return 'commnetsData';
}

const newsData = getNews(m1.newsUrl);
const commnetsData = getComments(m1.commentsUrl);

/*
  使用module.exports暴露模块
 */

module.exports = {
  newsData,
  commnetsData
}
},{"./module1":2}],4:[function(require,module,exports){


function showData(data) {
  console.log(data);
}

module.exports = showData;
},{}]},{},[1]);
