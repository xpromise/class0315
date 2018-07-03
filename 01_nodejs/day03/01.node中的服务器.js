//引入http模块
const http = require('http');
//引入查询字符串模块
const querystring = require('querystring');
//通过http模块创建服务
const server = http.createServer((request, response) => {
  /*
    request 请求信息
    response 响应信息
   */
  //获取请求参数
  let query = request.url;
  console.log(query); //  /?username=sunwukong&password=123132 查询字符串
  query = query.split('?')[1];
  console.log(querystring.parse(query)); //{ username: 'sunwukong', password: '123132' }
  //设置响应头
  response.setHeader('Content-Type', 'text/html;charset=utf8');
  //返回响应给用户
  response.end('<h1>这是服务器返回的响应</h1>');
})
//监听端口号
server.listen(3000, err => {
  if (!err) {
    console.log('服务器启动成功了~~~');
  }
})