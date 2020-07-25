// key value 值一样，可以简写
// 如果key是变量，加中括号
// 对象里方法不要使用箭头函数
// let name = 'xxx'
// let age = 18
// let s = 'male'
// let obj = {
//   name,
//   age,
//   [s]: 'famale',
//   study: function() {
//     console.log(this.name + ' study')
//   },
//   walk(){
//     console.log(this.name + ' walk')
//   }
// }
// console.log(obj)
// obj.study()
// obj.walk()

// Object.is 方法判断两个值是否为同一个值。
// 与== 运算不同。== 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 "" == false 判断为 true), 而 Object.is不会强制转换两边的值。
//与=== 运算也不相同。 === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等.
// console.log(2 == '2')
// console.log(Object.is(2, '2'))
// console.log(NaN == NaN)
// console.log(Object.is(NaN, NaN))

// let obj1 = {
//   name: 'xxx',
// }
// let obj2 = {
//   name: 'xxx',
// }
// console.log(obj1 == obj2)
// console.log(Object.is(obj1, obj2))

// Object.assiign合并对象
// let x = {
//   a: 1,
//   b: 2,
// }
// let y = {c: 3, ...x }
// console.log(y)

// 相同属性会覆盖
// let y = {
//   c: 3,
//   a: 4
// }
// Object.assign(y, x)
// console.log(y)

// in判断是否包含某个属性
// let x = {
//   a: 1,
//   b: 2,
// }
// console.log('a' in x)

// 数组用in判断下标位置是否有值
// let arr = [1, 2, 3]
// console.log(2 in arr)

// 对象遍历
// let obj = {
//   name: 'xxx',
//   age: '18',
//   sex: 'male',
// }

// for(let key in obj) {
//   console.log(obj[key])
// }

// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key])
// })

// Object.getOwnPropertyNames(obj).forEach((key) => {
//   console.log(key, obj[key])
// })

// Reflect.ownKeys(obj).forEach((key) => {
//   console.log(key, obj[key])
// })
