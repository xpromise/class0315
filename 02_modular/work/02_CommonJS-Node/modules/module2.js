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