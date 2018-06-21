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
    //this指向的坑~！！
    studentSchema.pre('save', function () {
      //this指向的是被操作的文档对象
      if (!this.isNew) {
        //更新过
        //更新文档对象的最近一次的更新时间
        this.meta.updateTime = Date.now();
      }
    })
    
    //创建集合对象
    const Students = mongoose.model('Students', studentSchema);
  
    Students.findOne({}, (err, data) => {
      if (!err) {
        data.address = '贵州';
        data.save(err => {
          if (!err) console.log('文档插入成功~~~');
          else console.log(err);
        });
      }
    })
    
  })
  .catch(err => {
    console.log(err);
  })