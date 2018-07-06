import {add, mul} from './module1';
import sum from './module2';
import data from '../json/data';
import '../less/test1.less';
import '../less/test2.less';

console.log(add(3, 3));
console.log(add(10, 10));
console.log(add(20, 20));
console.log(mul(3, 3));
console.log(sum(2, 5, 8, 6 ,7));
console.log(data.name, data.age);

