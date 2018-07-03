/*
  默认暴露：只能暴露一个内容
    默认暴露的本质：定义了default变量，将后面的值赋值给default变量，暴露出去
 */

function Person(name) {
  this.name = name;
}

export default Person;