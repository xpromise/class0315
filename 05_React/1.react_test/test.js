/*
  1. 命令式：要去实现功能，要整个功能详细的描述全部写下来（过程很关键，结果也需要）
    简答题
  2. 声明式：要去实现功能，过程不重要，只要最后的结果
    填空题
 */

let arr1 = [1, 2, 3, 4];
let arr2 = [];
//命令式
arr1.forEach((item, index) => {
  // arr2.push(item + 10);
  arr2[index] = item + 10;
})
console.log(arr2);
//声明式
let arr3 = arr1.map(item => {
  return item + 10;
})
console.log(arr3);
