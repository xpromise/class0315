/*
  主模块/入口文件：用来启动项目
 */
//引入模块
const db = require('./database/db');
const Students = require('./models/Students');
const Teachers = require('./models/Teachers');

db
  .then(async () => {
    //保证数据库连接成功了~
    //创建了文档对象
    const stu = new Students({
      name: '邓超超',
      age: 22,
      address: '深圳',
      sex: '男',
      info: '帅~',
      phone: '1333333333',
      hobby: ['game', 'gay']
    })
    //保存文档对象
    await stu.save(err => {
      if (!err) console.log('文档插入成功了111~~');
    })
    
    await Teachers.create({
      name: '洪宝金',
      age: 22,
      address: '深圳',
      sex: '男',
      info: '帅~',
      phone: '14444444444',
      hobby: ['game', 'gay']
    }, err => {
      if (!err) console.log('文档插入成功了222~~');
    })
  })
  .catch(err => {
    //数据库连接失败了
    console.log(err);
  })