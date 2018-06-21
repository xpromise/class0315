/*
  浏览器中有一个全局对象 window
 */

// console.log(window);  //node 中没有
// console.log(global);
/*
  console
  setTimeout
  setInterval
  setImmediate 立即执行函数
  Buffer
  process.nextTick 立即执行函数
 */
/*
  三者执行顺序：
    事件轮询机制：主要研究6个阶段
    ** timers  定时器阶段  开始计时，执行相应回调函数
    pending callbacks  准备阶段
    idle, prepare  错误处理阶段  tcp协议错误...
    ** poll 轮询阶段
      如果事件队列有内容
        轮询事件队列，依次取出队列中第一个回调函数并执行，直到所有的事件队列为空或者达到系统最大限制
      如果事件队列为空
        如果之前定义过setImmediate函数
          直接到check阶段
        如果没有定义过setImmediate函数
          等待，继续轮询事件队列（当定时器到点了，它也会继续下一个阶段，开启新的轮询）
   ** check 检查阶段 执行setImmediate函数的回调
    close callbacks 关闭阶段
    
    process.nextTick() 此函数能在任意阶段执行
 */

const fs = require('fs');



process.nextTick(function () {
  console.log('process.nextTick()函数执行了');
})

setTimeout(function () {
  console.log('外面的定时器');
}, 0)

fs.readFile('package.json', err => {
  if (!err) {
    setTimeout(function () {
      console.log('setTimeout()函数执行了');
    }, 0)
    setImmediate(function () {
      console.log('setImmediate()函数执行了');
    })
    console.log('readFile()方法执行成功了');
  }
})
