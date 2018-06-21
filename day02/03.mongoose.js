/*
  在node中使用mongodb数据库，借用mongoose来操作
 */
//引入mongoose模块
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/test');
//绑定事件监听数据库是否连接成功
mongoose.connection.once('open', err => {
  if (!err) {
    console.log('数据库连接成功了~~~');
  }
})