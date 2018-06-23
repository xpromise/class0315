//引入express模块
const express = require('express');
//引入cookieParser模块
const cookieParser = require('cookie-parser');
//引入集合
const Users = require('../model/Users');
//创建路由器对象
const router = express.Router();
//第三方中间件
router.use(cookieParser());
//业务逻辑
router.get('/login', (req, res) => {
  //返回login.html页面
  // res.sendFile(path.resolve(__dirname, '../public/login.html'));
  res.render('login', {errMsg: {}});
})
router.get('/register', (req, res) => {
  //返回register.html页面
  res.render('register', {errMsg: {}});
})

router.get('/userCenter', (req, res) => {
  //判断用户有无登录过
  //获取cookie
  const {_id} = req.cookies;
  //去数据库中查找是否有指定的id
  if (_id) {
    Users.findOne({_id}, (err, data) => {
      if (!err && data) {
        //如果方法没有问题并且找到了指定用户
        res.render('userCenter');
      } else {
        //没有找到指定用户
        res.redirect('/login');
      }
    })
  } else {
    //没有找到指定用户
    res.redirect('/login');
  }
  
})

//暴露出去
module.exports = router;