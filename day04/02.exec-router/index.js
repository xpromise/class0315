//引入express模块
const express = require('express');
//引入数据库模块
const db = require('./database/db');
//引入路由器对象
const userRouter = require('./router/userRouter');
const userFaceRouter = require('./router/userFaceRouter');
//创建应用对象
const app = express();
//内置中间件  向外暴露出去public静态资源目录
app.use(express.static('public'));

db
  .then(() => {
    //应用路由器中间件
    app.use(userFaceRouter);
    app.use(userRouter);
  })
  .catch(err => {
    console.log(err);
  })


//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~·');
})