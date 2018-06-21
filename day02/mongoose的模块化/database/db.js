/*
  连接数据库
 */
//引入mongoose模块
const mongoose = require('mongoose');
//将异步操作包装一层promise
const promise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_test');
  //绑定事件监听
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功了~~~');
      resolve();
    }
    else reject(err);
  })
})
//暴露
module.exports = promise;