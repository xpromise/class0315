//引入express模块
const express = require('express');
//引入sha1加密模块
const sha1 = require('sha1');
//引入模型对象模块
const Users = require('../model/Users');
//引入body-parser模块，用来解析请求体的
const bodyParser = require('body-parser');
//创建路由器对象
const router = express.Router();
//写路由器的业务逻辑
//第三方中间件
router.use(bodyParser.urlencoded({extended: true}));

//应用级中间件
function middleWare(req, res, next) {
  //获取请求参数
  const {username, password, email} = req.body;
  // 2. 正则的验证，验证用户填写的信息是否符合规范
  const usernameReg = /^[a-zA-Z0-9_]{5,12}$/;  //用户名可以是大小字母、数字、下划线，长度为5-12
  const passwordReg = /^[a-zA-Z0-9]{6,18}$/; //密码可以是大小字母、数字，长度为6-18
  const emailReg = /^[a-z0-9_-]{3,9}@[a-z0-9]{2,6}\.com$/  //邮箱的正则
  //定义errMsg对象
  let errMsg = {
    username,
    email
  };
  //验证用户名是否符合规范
  if (!usernameReg.test(username)) {
    //用户名不符合规范
    errMsg.usernameErr = '用户名不符合规范，用户名可以是大小字母、数字、下划线，长度为5-12';
  }
  //验证密码是否符合规范
  if (!passwordReg.test(password)) {
    //密码不符合规范
    errMsg.passwordErr = '密码不符合规范，密码可以是大小字母、数字，长度为6-18';
  }
  //验证邮箱是否符合规范
  /*
    email 有值： register
          没有值： login  不会进去
   */
  if (!emailReg.test(email)) {
    //邮箱不符合规范
    errMsg.emailErr = '邮箱不符合规范，请重新输入';
  }
  res.errMsg = errMsg;
  //调用next方法，执行堆栈中的下一个中间件
  next();
}
//登录路由
router.post('/login', middleWare, (req, res) => {
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
  const {username, password} = req.body;
  const errMsg = res.errMsg;
  //判断用户的信息是否有误
  if (errMsg.usernameErr || errMsg.passwordErr) {
    //用户的信息有误，返回响应给用户，不往下走了
    res.render('login', {errMsg});
    return
  }
  
  // 3. 去数据库中查是否有指定的用户
  Users.findOne({username}, (err, data) => {
    if (!err && data && data.password === sha1(password)) {
      //说明方法没有错误并且找到了指定用户
      //设置cookie
      res.cookie('_id', data.id, {maxAge: 1000 * 3600 * 24 * 7});
      res.redirect('/userCenter');
    } else {
      //说明方法出错了或者没有找到指定用户
      errMsg.err = '用户名或密码错误';
      res.render('login', {errMsg});
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
router.post('/register', middleWare, (req, res) => {
  /*
    1. 获取用户填写信息（获取请求参数）
    2. 正则的验证，验证用户填写的信息是否符合规范
    3. 验证密码和确认密码是否一致
    4. 去数据库检查用户名是否存在
    5. 将用户信息保存在数据库中
   */
  // 1. 获取用户填写信息（获取请求参数）
  const {username, password, rePassword, email} = req.body;
  const errMsg = res.errMsg;
  
  // 3. 验证密码和确认密码是否一致
  if (password !== rePassword) {
    //密码和确认密码不一致
    errMsg.rePasswordErr = '两次输入密码不一致，请重新输入';
  }
  
  //判断用户的信息是否有误
  if (errMsg.usernameErr || errMsg.passwordErr || errMsg.rePasswordErr || errMsg.emailErr) {
    //用户的信息有误，返回响应给用户，不往下走了
    res.render('register', {errMsg});
    return
  }
  
  //4. 去数据库检查用户名是否存在
  Users.findOne({username}, (err, data) => {
    if (!err) {
      //方法没有出问题
      if (data) {
        //找到了指定用户
        errMsg.usernameErr = '不好意思，用户名已被注册';
        res.render('register', {errMsg});
      } else {
        // console.log(data); //null
        //用户名没有被注册过，可以注册
        // 5. 将用户信息保存在数据库中
        console.log(sha1(password)); // 601f1889667efaebb33b8c12572835da3f027f78
        Users.create({
          username,
          password: sha1(password),
          email
        }, err => {
          if (!err) res.redirect('/login');
          else {
            errMsg.err = '由于网络超时，注册失败';
            res.render('register', {errMsg});
          }
        })
      }
    } else {
      //方法出问题了
      errMsg.err = '由于网络超时，注册失败';
      res.render('register', {errMsg});
    }
  })
  
})

//暴露路由器对象
module.exports = router;