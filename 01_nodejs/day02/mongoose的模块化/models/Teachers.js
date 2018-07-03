/*
  创建集合
 */
//引入mongoose模块
const mongoose = require('mongoose');
//获取模式对象
const Schema = mongoose.Schema;
//创建约束对象
const teacherSchema = new Schema({
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
//预设绑定save方法的函数
teacherSchema.pre('save', function (next) {
  if (!this.isNew) {
    this.meta.updateTime = Date.now();
  }
  next();
})
//创建模型对象
const Teachers = mongoose.model('Teachers', teacherSchema);
//暴露
module.exports = Teachers;