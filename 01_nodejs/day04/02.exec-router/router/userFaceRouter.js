//引入express模块
const express = require('express');
//引入node核心模块 path
const path = require('path');
//创建路由器对象
const router = express.Router();
//业务逻辑
router.get('/login', (req, res) => {
  //返回login.html页面
  res.sendFile(path.resolve(__dirname, '../public/login.html'));
})
router.get('/register', (req, res) => {
  //返回register.html页面
  res.sendFile(path.resolve(__dirname, '../', './public/register.html'));
})

//暴露出去
module.exports = router;