db
use test

show collections

db.students.insert({name: 'Tom', age: 18}) //向当前数据库指定集合中插入一条文档

db.students.find({})

/*
	CRUD 
	 - create 插入文档
	 db.collections.insert(文档对象)  向当前数据中指定集合内插入一条/多条文档  (一条文档 用对象插入  多条文档用数组，数组放对象)
	 db.collections.insertOne(文档对象)
	 db.collections.insertMany([文档对象])
*/

db.students.insert([{name: 'Jack', age: 19}, {name: 'Rose', age: 16}])
db.students.insertOne({name: 'Jerry', age: 20})

/*
	- read 查找文档
	db.collections.find(查询条件, 投影)
	操作符：
		1. > >= < <= != $gt $gte $lt $lte $ne
		2. $or $in $nin
		3. 正则表达式
		4. $where
	投影：过滤掉不想要字段
*/
db.students.find({age: 18})

db.students.find({age: {$gte: 18}})

db.students.find({name: {$in: ['Tom', 'Jerry']}})  //或者
db.students.find({$or: [{name: 'Tom'}, {name: 'Jerry'}]})  //或者
db.students.find({name: {$nin: ['Tom']}})

db.students.find({name: /^T/})

db.students.find({
  $where: function () {
  	return this.age >= 18 && this.name === 'Tom'
  }
})


db.students.find({}, {_id: 0, age: 0})


