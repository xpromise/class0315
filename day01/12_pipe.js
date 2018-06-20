/*
  fs.createReadStream(path[, options])
 */

const fs = require('fs');
//创建可读流
const rs = fs.createReadStream('C:\\Users\\web\\Desktop\\1.mp4');
//创建可写流
const ws = fs.createWriteStream('1.mp4');
//管道
rs.pipe(ws);