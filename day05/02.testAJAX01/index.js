const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/testAJAX', (req, res) => {
  setTimeout(function () {
    res.send('12306');
  }, 10000)
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~~');
})