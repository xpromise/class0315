/*
  在node中使用mongodb数据库，借用mongoose来操作
 */
//引入mongoose模块
const mongoose = require('mongoose');

const promise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_test');
  //绑定事件监听数据库是否连接成功
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功了~~~');
      resolve(); //将promise状态改为成功的状态
    } else {
      reject(err); //将promise状态改为失败的状态
    }
  })
})

promise
  .then(() => {
    //对数据库进行操作
    //获取schema对象,用来创建约束对象
    const Schema = mongoose.Schema;
    const studentSchema = new Schema({
      //字段名: 数据类型
      name: String,
      age: Number,
      sex: String,
      address: String,
      phone: {
        type: String,
        unique: true,  //唯一性
        required: true  //必须的
      },
      info: Schema.Types.Mixed, //所有数据类型都允许
      hobby: [String], //数据类型是数组，数组里面必须是字符串
      meta: {
        createTime: {
          type: Date,  //日期类型
          default: Date.now()  //设置默认值
        },
        updateTime: {
          type: Date,
          default: Date.now()
        }
      }
    })
    //创建集合对象
    /*
      mongoose.model(集合名称, 约束对象)
        - 集合名称： 首字母大写，复数形式
        因为mongodb会自动将集合名称改为复数形式，为了防止今后使用错误，手动加上复数形式
        - 约束对象：通过Schema创建的
     */
    const Students = mongoose.model('Students', studentSchema);
    
    /*
      我可以通过操作集合来对文档进行CRUD的操作
        - Create  Model.create(文档对象, 回调函数)
        - Read    Model.find(查询条件[, 投影], 回调函数)  返回值是一个数组
                  Model.findOne(查询条件[, 投影], 回调函数)  返回值是一个对象
        - Update  Model.update(查询条件, 更新的内容 [, 配置对象], 回调函数)
        - Delete  Model.remove(查询条件, 回调函数)
     */
    Students.remove({}, err => {
      if (!err) {
        console.log('删除成功了~~~');
      }
    })
    
    /*Students.update({name: {$in: ['周鑫', '周永益']}}, {$inc: {age: 1}}, {multi: true}, err => {
      if (!err) {
        console.log('更新数据成功了~~~');
      }
    })*/
    
   /* Students.find({age: {$gte: 22}}, {phone: 0, __v: 0}, (err, data) => {
      if (!err) {
        console.log(data);
      }
    })*/
   
    /*Students.create({
      name: '周永益',
      age: 20,
      sex: '女',
      address: '广西',
      info: '性别女爱好男',
      hobby: ['喝喝喝', '买买买'],
      phone: '16666666666'
    }, err => {
      if (!err) {
        console.log('文档插入成功了~~');
      }
    })*/
    
  })
  .catch(err => {
    console.log(err);
  })