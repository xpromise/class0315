const express = require('express');
const app = express();
/*
  ejs的使用：
    app.set('views', 模板资源目录)   设置模板资源目录
    app.set('view engine', 模板引擎) 设置使用的模板引擎
 */
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/ejs1', (req, res) => {
  const username = '<span>晓飞张</span>';
  const data = ['苹果', '香蕉', '牛奶']
  //res.render(模板文件, {渲染数据})  将数据渲染到指定模板页面上,并返回给用户
  res.render('index', {username, data});
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~');
})