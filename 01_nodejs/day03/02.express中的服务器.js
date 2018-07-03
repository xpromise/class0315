//引入express模块
const express = require('express');
//创建应用对象
/*
  在express中主要的方法或属性都在app应用对象上，保证它是唯一的（一个项目应该只有一个应用对象）
 */
const app = express();
//配置路由
/*
  响应浏览器发送过来的请求

  http://localhost:3000/
  http://127.0.0.1:3000/
  http://192.168.0.115:3000/
  协议://域名/ip地址:端口号/资源名

  ip地址：在互联网中会为每台机器分配地址
  域名：简化ip地址
    DNS解析：将域名解析为ip地址

  默认端口号
    http  80
    https 443

  默认资源名
    index.html
  
 */
app.get('/', (request, response) => {
  //  '/'  get请求  http://localhost:3000/
  //处理请求参数
  const query = request.query;
  console.log(query); //{ username: 'sunwukong', password: '123132' }
  //返回响应给用户
  response.send('<h1>这是express服务器返回的响应</h1>');
})
//监听端口号
/*
  每一个服务都得运行一台设备的某一个端口号下
 */
app.listen(80, err => {
  if (!err) {
    console.log('服务器启动成功了~~~');
  }
})