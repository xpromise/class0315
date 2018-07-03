const express = require('express');
const db = require('./database');
const Cities = require('./model/Cities');
const app = express();
app.use(express.static('public'));

function sendData(err, res, data) {
  if (!err && data.length) {
    //说明方法没有出问题并且找到了数据
    res.send({status: 'ok', data});
  } else {
    //说明方法除问题了或者没有找到数据
    console.log(err);
    res.send({status: 'err'});
  }
}

db
  .then(() => {
    //定义服务器路由
    //获取所有省份的信息
    app.get('/province', (req, res) => {
      //去数据库中找所有省份的信息
      Cities.find({level: 1}, {_id: 0, level: 0, code: 0}, (err, data) => {
        sendData(err, res, data);
      })
    })
    
    //获取指定省份的所有市的信息
    app.get('/city', (req, res) => {
      //获取请求参数
      const {province} = req.query;
      //如果用户没有传入指定的参数，返回错误给用户
      if (!province) {
        res.send({status: 'err'});
        return
      }
      //去数据库中找指定省份的所有市的信息
      Cities.find({province, level: 2}, {_id: 0, level: 0, code: 0}, (err, data) => {
        sendData(err, res, data);
      })
    })
  
    //获取指定省份指定市所有区/县的信息
    app.get('/county', (req, res) => {
        //获取请求参数
        const {province, city} = req.query;
        //如果用户没有传入指定的参数，返回错误给用户
        if (!province && !city) {
          res.send({status: 'err'});
          return
        }
        //去数据库中找指定省份指定市所有区/县的信息
        Cities.find({province, city, level: 3}, {_id: 0, level: 0, code: 0}, (err, data) => {
          sendData(err, res, data);
        })
    })
    
  })
  .catch(err => {
    console.log(err);
  })


app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~~~');
})