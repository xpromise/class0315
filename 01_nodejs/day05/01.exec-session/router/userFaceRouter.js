//引入express模块
const express = require('express');
//引入Users模块
const Users = require('../model/Users');
//创建路由器对象
const router = express.Router();
//业务逻辑
router.get('/login', (req, res) => {
  //返回login.html页面
  // res.sendFile(path.resolve(__dirname, '../public/login.html'));
  res.render('login', {errMsg: {}});
})
router.get('/register', (req, res) => {
  //返回register.html页面
  // res.sendFile(path.resolve(__dirname, '../', './public/register.html'));
  res.render('register', {errMsg: {}});
})

router.get('/userCenter', (req, res) => {
  //判断用户是否登录过
  //自动解析cookie中的内容，如果是session_id的话，他会将你保存的数据挂载到req.session
  // console.log(req.session._id);
  const {_id} = req.session;
  if (_id) {
    //说明用户登录过
    Users.findOne({_id}, (err, data) => {
      if (!err && data) {
        res.render('userCenter', {username: data.username});
      } else {
        res.redirect('/login');
      }
    })
  } else {
    //说明用户没有登录过或者清除过cookie
    res.redirect('/login');
  }
})

//暴露出去
module.exports = router;