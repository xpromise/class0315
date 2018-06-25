const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/ajax', (req, res) => {
  //接受jsonp发送过来的请求参数
  const {callback} = req.query;
  const data = {
    username: '孙悟空'
  };
  //将其拼接成函数调用的方式，最终将拼接成的东西转化为json字符串
  // const data = JSON.stringify(data);
  res.send(callback + '(' +  JSON.stringify(data) + ')');  //fun({"username": "孙悟空"})
  // res.send("window.data = '服务器返回的响应'");
})

app.get('/cors', (req, res) => {
  //允许所有网址都可以跨域
  // res.setHeader('Access-Control-Allow-Origin', '*');
  //允许指定的网址进行跨域
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.send('cors返回的响应');
})

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send('服务器返回的响应');
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~~');
})