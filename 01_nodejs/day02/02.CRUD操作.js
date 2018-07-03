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
	db.collections.findOne(查询条件, 投影)  当前数据库中指定集合内根据查询条件查找出第一个符合条件的文档
	db.collections.findMany(查询条件, 投影)
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

/*
	- update 更新文档
	db.collections.update(查询条件, 更新内容[, 配置对象]) 默认只能更新匹配到的一个文档对象
	db.collections.updateOne(查询条件, 更新内容[, 配置对象]) 默认只能更新匹配到的一个文档对象
	db.collections.updateMany(查询条件, 更新内容[, 配置对象]) 默认只能更新匹配到的一个文档对象
	
	$set: 只会更新指定的字段
	$inc: 增加指定字段的大小 ，针对于number
	
*/

db.students.find()

db.students.update({name: 'Tom'}, {$set: {age: 20}}) //只能匹配一个

db.students.update({}, {$inc: {age: 1}}, {multi: true}) //能够匹配多个

/*
	- delete 删除文档
	db.collections.remove(查询条件)
*/

db.students.remove({age: {$lt: 18}})

