//引入express模块
const express = require('express');
//引入数据库模块
const db = require('./database/db');
//引入路由器对象
const userRouter = require('./router/userRouter');
const userFaceRouter = require('./router/userFaceRouter');
//引入express-session模块
const session = require('express-session');
//引如connect-mongo模块
const MongoStore = require('connect-mongo')(session);
//创建应用对象
const app = express();
//配置模板资源目录
app.set('views', 'views');
//配置使用的模板引擎
app.set('view engine', 'ejs');
//内置中间件  向外暴露出去public静态资源目录
// app.use(express.static('public'));

db
  .then(() => {
    //配置session对象的持久化存储方案
    app.use(session({
      secret: 'hello Atguigu',    //参与session_id的加密
      saveUninitialized: false, // 没有用上session时，不需要存储 don't create session until something stored
      resave: false, //没有修改session，也不保存 don't save session if unmodified
      store: new MongoStore({
        url: 'mongodb://localhost:27017/exec',
        ttl: 3600 * 24 * 7   //过期时间7天，默认是14天
      })
    }))
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