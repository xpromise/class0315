//引入express模块
const express = require('express');
//引入数据库模块
const db = require('./database/db');
//引入模型对象模块
const Users = require('./model/Users');
//创建应用对象
const app = express();

db
  .then(() => {
    //登录路由
    app.get('/login', (req, res) => {
    
    })

    //注册路由
    app.get('/register', (req, res) => {
      /*
        1. 获取用户填写信息（获取请求参数）
        2. 正则的验证，验证用户填写的信息是否符合规范
        3. 验证密码和确认密码是否一致
        4. 去数据库检查用户名是否存在
        5. 将用户信息保存在数据库中
       */
      // 1. 获取用户填写信息（获取请求参数）
      const {username, password, rePassword, email} = req.query;
      // 2. 正则的验证，验证用户填写的信息是否符合规范
      // 3. 验证密码和确认密码是否一致
      if (password !== rePassword) {
        //密码和确认密码不一致
        res.send('两次输入密码不一致，请重新输入');
        return
      }
      //4. 去数据库检查用户名是否存在
      Users.find({username}, (err, data) => {
        if (!err) {
          //方法没有出问题
          if (data.length) {
            //找到了指定用户
            res.send('不好意思，用户名已被注册');
          } else {
            //用户名没有被注册过，可以注册
            // 5. 将用户信息保存在数据库中
            Users.create({
              username,
              password,
              email
            }, err => {
              if (!err) res.send('恭喜您，注册成功了~~');
              else res.send('由于网络超时，注册失败');
            })
          }
        } else {
          //方法出问题了
          res.send('由于网络超时，注册失败');
        }
      })
    
    })
  })
  .catch(err => {
    console.log(err);
  })


//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~·');
})