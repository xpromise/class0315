/*
  通常针对大文件
  fs.createWriteStream(path[, options])
    - path 文件路径
    - options 可选值，配置对象
      flags <string>
      encoding <string>
      fd <integer>
      mode <integer>
      autoClose <boolean>  是否自动关闭，默认值true
      start <integer> 写入起始位置，默认值0
 */

const fs = require('fs');
//执行函数返回一个可写流
const ws = fs.createWriteStream('3.txt');
//绑定事件监听
ws.on('open', fd => {
  console.log('文件打开成功·~');
})

ws.on('close', err => {
  if (!err) {
    console.log('文件关闭成功·~');
  }
})

//写入内容
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');
ws.write('悯农');

//关闭流
// ws.close();
ws.end();