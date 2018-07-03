/*
  连接数据库的模块
 */
//引入mongoose模块
const mongoose = require('mongoose');
//创建promise对象
const promise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/exec');
  //绑定事件监听
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功了~~');
      resolve();
    } else {
      reject(err);
    }
  })
})
//暴露出去
module.exports = promise;