/*
  简单写入文件：
    fs.writeFile(file, data[, options], callback)
      - file 要写入的文件
      - data 要写入的内容（buffer/string）
      - options 可选值 配置对象
        - encoding
        - mode
        - flag
      - callback
        - err 错误对象
 */
const fs = require('fs');

//创建要写入的内容
let buf = Buffer.from('hello atguigu');
// console.log(buf.toString());
fs.writeFile('2.txt', buf, err => {
  if (!err) {
    console.log('文件写入成功~');
  } else {
    console.log(err);
  }
})