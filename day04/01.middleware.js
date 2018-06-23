const express = require('express');
//引入解析请求体的模块
const bodyParser = require('body-parser');
const app = express();

/*
  中间件：
    是一个函数，包含request，response，next
    
    应用：
      第三方中间件
        解析请求的请求参数（请求体、cookie...）
      应用级中间件
        对接下来的路由/中间件函数做一些前置处理，过滤非法的请求
      路由级中间件
        router 路由器
      错误处理中间件
        专门用来处理服务器产生的错误的
      内置中间件
        用来暴露静态资源
          服务器的代码对外不可见，暴露出去我想要给外部看见的资源
      
      当请求进入服务器中，
        所有的路由和中间件都会放在一个数组中，按照顺序依次排列。
        根据请求地址遍历数组，
          中间件通常会匹配所有请求，
            中间件调用next()时，他继续去匹配其他的路由或者中间件
          路由会匹配指定的请求
            通常直接返回响应
 */
//内置的中间件
/*
  express.static(暴露出去的资源目录)
    http://localhost:3000/资源路径 访问暴露出去的资源
    http://localhost:3000/index.html
    http://localhost:3000/js/资源名称
 */
app.use(express.static('public'));

//第三方中间件，用来解析请求体
app.use(bodyParser.urlencoded({extended: true}));
//所有中间件都是通过app.use()
// app.use((req, res, next) => {})

//应用级中间件
function middleWare(req, res, next) {
  console.log('应用级中间件执行了');
  //正则验证
  next();
}

//应用级中间件
app.post('/', middleWare, (req, res) => {
  //获取post请求请求参数
  console.log(req.body);
  throw('post路由出问题了');
})
//错误处理中间件
/*
  err 错误对象
  四个参数必须写全
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~');
  else throw(err);
})