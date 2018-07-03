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
      /*
        1. 获取用户填写数据/请求参数
        2. 正则验证
        3. 去数据库中查是否有指定的用户
          - 如果有
            4. 验证密码是否正确
          - 如果没有
            用户名或密码错误
       */
      // 1. 获取用户填写数据/请求参数
      const {username, password} = req.query;
      // 2. 正则验证
      const usernameReg = /^[a-zA-Z0-9_]{5,12}$/;  //用户名可以是大小字母、数字、下划线，长度为5-12
      const passwordReg = /^[a-zA-Z0-9]{6,18}$/; //密码可以是大小字母、数字，长度为6-18
      //验证用户名是否符合规范
      if (!usernameReg.test(username)) {
        //用户名不符合规范
        res.send('用户名不符合规范，用户名可以是大小字母、数字、下划线，长度为5-12');
        return
      }
      //验证密码是否符合规范
      if (!passwordReg.test(password)) {
        //密码不符合规范
        res.send('密码不符合规范，密码可以是大小字母、数字，长度为6-18');
        return
      }
      // 3. 去数据库中查是否有指定的用户
      Users.findOne({username}, (err, data) => {
        if (!err && data && data.password === password) {
          //说明方法没有错误并且找到了指定用户
          res.send('登录成功');
        } else {
          //说明方法出错了或者没有找到指定用户
          res.send('用户名或密码错误');
        }
      })
      /*Users.findOne({username, password}, (err, data) => {
        if (!err && data) {
          //说明方法没有错误并且找到了指定用户
          res.send('登录成功');
        } else {
          //说明方法出错了或者没有找到指定用户
          res.send('用户名或密码错误');
        }
      })*/
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
      const usernameReg = /^[a-zA-Z0-9_]{5,12}$/;  //用户名可以是大小字母、数字、下划线，长度为5-12
      const passwordReg = /^[a-zA-Z0-9]{6,18}$/; //密码可以是大小字母、数字，长度为6-18
      const emailReg = /^[a-z0-9_-]{3,9}@[a-z0-9]{2,6}\.com$/  //邮箱的正则
      //验证用户名是否符合规范
      if (!usernameReg.test(username)) {
        //用户名不符合规范
        res.send('用户名不符合规范，用户名可以是大小字母、数字、下划线，长度为5-12');
        return
      }
      //验证密码是否符合规范
      if (!passwordReg.test(password)) {
        //密码不符合规范
        res.send('密码不符合规范，密码可以是大小字母、数字，长度为6-18');
        return
      }
      //验证邮箱是否符合规范
      if (!emailReg.test(email)) {
        //邮箱不符合规范
        res.send('邮箱不符合规范，请重新输入');
        return
      }
      
      // 3. 验证密码和确认密码是否一致
      if (password !== rePassword) {
        //密码和确认密码不一致
        res.send('两次输入密码不一致，请重新输入');
        return
      }
      //4. 去数据库检查用户名是否存在
      Users.findOne({username}, (err, data) => {
        if (!err) {
          //方法没有出问题
          if (data) {
            //找到了指定用户
            res.send('不好意思，用户名已被注册');
          } else {
            console.log(data); //null
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