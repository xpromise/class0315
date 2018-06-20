/*
  node中使用的是commonjs的模块化规范
    - 引入模块
      require(模块的路径)
    - 暴露模块
      module.exports
      exports
 */
/*
  node中引入模块都是通过require函数引入，总结引入模块的规则：
    1. 自定义模块：用户自己写的模块，引入路径必须以 ./ 或者 ../开头  后面加上文件的完整路径，否则就会报错
    2. 核心模块：node中自带的模块  和 通过npm下载的模块 ，引入路径直接写模块名称就OK
  
  node中能够解析三种文件：
    .node  .js  .json
  当你通过require函数引入模块时，如果模块名没有后缀名，它会按上面的规则自动补全
 */
const m1 = require('./myModule01');
const m2 = require('./myModule02');

// console.log(m1(2, 3));  //函数
// console.log(m2.boy);  //对象

/*
  暴露模块的规则：
  exports 必须以对象点取添加要暴露出去的属性或方法
  module.exports  可以通过直接赋值 也可以等于一个对象，将要暴露出去的内容添加上去
  
  用法的区别：
    在es6出来以后  使用module.exports较多
    
  node中暴露模块的本质是什么？
    向外暴露的就是module.exports对象
    exports对象是对module.exports对象的引用
 */

// console.log(m1.add(2, 3), m1.mul(2, 3));
// console.log(m2.boy, m2.girl);

let person = {
  hobby: {}
}

let hobby = person.hobby;

hobby.drink = 'cola';

console.log(person.hobby);

hobby = {
  game: '吃鸡'
}

console.log(hobby, person.hobby);