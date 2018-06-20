/*
  fs.readFile(path[, options], callback)
   - path
   - options
    - mode
    - flag
  - callback
    - err
    - data 读取数据
 */

const fs = require('fs');

fs.readFile('package.json', (err, data) => {
  if (!err) {
    //文件读取成功
    console.log(data); //返回值是一个Buffer
    console.log(data.toString());
  } else {
    //文件读取失败
    console.log(err);
  }
})