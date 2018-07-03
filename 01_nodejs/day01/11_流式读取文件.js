/*
  fs.createReadStream(path[, options])
 */

const fs = require('fs');
//创建可读流
const rs = fs.createReadStream('C:\\Users\\web\\Desktop\\1.mp4');
//创建可写流
const ws = fs.createWriteStream('1.mp4');
//绑定一次性事件
rs.once('open', () => {
  console.log('可读流打开了');
})
rs.once('close', () => {
  console.log('可读流关闭了');
  //可读流将所有数据都读取完毕了，所以要关闭可写流
  ws.end();
})

ws.once('open', () => {
  console.log('可写流打开了');
})
ws.once('close', () => {
  console.log('可写流关闭了');
})

//读取可读流的数据
rs.on('data', data => {
  // console.log(data);
  // console.log(data.length); //每次读取文件的最大值是 65536 = 64 * 1024  64kb
  ws.write(data);
})