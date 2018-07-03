//引入express模块
const express = require('express');
//创建应用对象
const app = express();
/*
  路由：
     HTTP 请求（GET、POST等）
     URI  请求地址/路径
        '/'  http://localhost:3000/
        'test'  http://localhost:3000/test
     若干个句柄组成 回调函数
  作用：
    接受请求，处理请求，返回响应
 */
app.get('/', (req, res) => {
  /*
    request   请求信息
      req.query  获取get请求参数
      req.headers  请求头的信息
      req.params  请求地址上参数
      req.get()   获取指定请求头的某个字段信息
    response  响应信息
      res.download(绝对路径)  返回响应，将指定文件传输过去，浏览器会立即下载
      res.sendFile(绝对路径)  返回响应，将指定文件传输过去，浏览器会直接显示
      
      res.end()   返回响应，快速返回没有内容响应
      res.json()  返回响应，会将传入的参数转化为json字符串响应
      res.send()  返回响应，会根据响应的内容设置不同的响应头
      
      res.status()    设置响应状态码
      res.redirect()  能将请求重定向到另外一个网址
      
      res.set()   设置响应头
      res.get()   获取响应头
   */
  // console.log(req.headers);
  /*
    { host: 'localhost:3000',
    connection: 'keep-alive',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,* /*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
      cookie: 'Webstorm-129da853=8726c2d8-3b88-48b8-8db0-dd82e62fb79a' }
   */
  // console.log(req.get('cookie'));  //Webstorm-129da853=8726c2d8-3b88-48b8-8db0-dd82e62fb79a
  // res.status(500);
  // res.download(__dirname + '/public/index.html');
  // res.sendFile(__dirname + '/public/index.html');
  // res.send('hello');
  
  res.set('Content-Type', 'text/plain');
  console.log(res.get('content-type'));
  
  res.redirect('https://www.baidu.com');
})

app.get('/test', (request, response) => {
  console.log(request.query);
  
  response.send('<h1>这是服务器返回的响应</h1>');
})

app.post('/', (request, response) => {

})

app.get('/meishi/:id', (req, res) => {
  console.log(req.params);  //{ id: '123456' } { id: '5678953' }
  
  res.send('这是meishi响应');
})

app.get(/^\/(food)\/(\d+)/, (req, res) => {
  //正则表达式可以实现自定义的路由  如 1-500 由这个路由解决
  console.log(req.params);  // { '0': 'food', '1': '123456' }
  
  res.send('这是正则表达式food响应');
})

//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
})