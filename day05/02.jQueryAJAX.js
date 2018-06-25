const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/ajax', (req, res) => {
  res.send('服务器返回的响应');
})

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send('服务器返回的响应');
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~~');
})