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
    
    //创建文档对象
    const s1 = new Students({
      name: '周鑫',
      age: 18,
      sex: '女',
      address: '贵州',
      info: '划水',
      hobby: ['吃吃吃', '睡睡睡'],
      phone: '18888888888'
    })
    //将文档对象保存数据库中
    s1.save(err => {
      if (!err) {
        console.log('文档对象插入成功了~~~~');
      } else {
        console.log(err);
      }
    })
    
  })
  .catch(err => {
    console.log(err);
  })