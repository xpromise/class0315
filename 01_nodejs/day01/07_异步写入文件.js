/*
  fs 文件系统, node中的核心模块
  
  异步写入文件：
    1. 打开文件
      fs.open(path, flags[, mode], callback)
        - path 文件路径
        - flags 要对文件进行的操作 w(write) r(read) a(add追加)
        - mode 可选值，默认值 0o666
          0o111 文件可执行
          0o222 文件可以写入
          0o444 文件可以读取
          0o666 文件可读可写
        - callback 回调函数
          - err 错误对象   ----  错误优先机制
            如果open方法出了问题，err就是错误信息
            如果方法没有出问题，err就是null
          - fd 文件描述符，唯一的
          
    2. 写入文件
      fs.write(fd, string[, position[, encoding]], callback)
        - fd 文件描述符
        - string 要写入的内容
        - position 写入文件的起始位置，可选值，默认值0
        - encoding 编码方法，可选值，默认值'utf8'
        - callback 回调函数
          - err 错误对象
          - written 要写入内容的字节数
          - string 写入的内容
          
    3. 关闭文件
      fs.close(fd, callback)
        - fd 文件描述符
        - callback 回调函数
          - err 错误对象
*/
const fs = require('fs');

//打开文件
fs.open('hello.txt', 'w', 0o666, (err, fd) => {
  //处理错误
  if (!err) {
    //open方法没有出错
    console.log('open方法执行成功了');
    fs.write(fd, '今天天气真情朗', 0, 'utf8', (err, written, string) => {
      //处理错误
      if (!err) {
        //write方法没有出错
        console.log('write方法执行成功了');
        console.log(written, string);
      } else {
        //write方法出错了
        console.log(err);
      }
      //不管write方法成不成功，我都要关闭文件
      fs.close(fd, err => {
        //处理错误
        if (!err) {
          console.log('close方法执行成功了');
        } else {
          console.log(err);
        }
      })
    })
  } else {
    //open方法出错了
    console.log(err);
  }
})

