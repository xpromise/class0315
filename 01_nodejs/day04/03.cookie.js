const express = require('express');
//引入解析cookie的模块
const cookieParser = require('cookie-parser');
const app = express();
//第三方中间件
app.use(cookieParser());

app.get('/cookie01', (req, res) => {
  //发送cookie给浏览器, 作为响应头
  res.cookie('username', 'sunwukong', {maxAge: 1000 * 3600 * 24 * 7});
  res.send('cookie发送成功~~~');
})

app.get('/cookie02', (req, res) => {
  //接受cookie,位于请求头
  console.log(req.cookies.username);
  res.send('您的cookie是：' + req.cookies.username);
})

app.get('/cookie03', (req, res) => {
  //删除cookie
  // res.clearCookie('username');
  res.cookie('username', 'xx', {maxAge: 0});
  res.send('清除cookie');
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~');
})