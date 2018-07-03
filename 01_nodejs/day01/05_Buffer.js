/*
  Buffer是一个类数组对象
 */

// let buf = new Buffer(10);  //废弃了 性能差
// console.log(buf);

let buf1 = Buffer.allocUnsafe(10);  //方法是不安全的，可能包含敏感数据 但是性能最好
buf1.fill(0);//将内部的数据全部用0填充
console.log(buf1);  //<Buffer 98 d5 ef 98 f7 7f 00 00 01 00>
/*
  显示16进制数据
    00 - ff
    0 - 255
    0000 0000  - 1111 1111
    
    1 byte（字节） = 8 bit（位）
    1 kb = 1024 byte
    1 mb = 1024 kb
    1 gb = 1024 mb
    
    英文字母和数字  占1个字节
    汉字  占3个字节
 */

let buf2 = Buffer.alloc(10);  //方法安全的，不包含敏感数据 但是性能较差
console.log(buf2);

// let buf3 = Buffer.from('hello atguigu');
let buf3 = Buffer.from('尚硅谷');
console.log(buf3);

console.log(buf3[2], buf3.length);
buf3.forEach(item => {
  console.log(item);
})
