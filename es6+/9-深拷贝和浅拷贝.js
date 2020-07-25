// 浅拷贝 Object.assign 基础类型能替换
// 引用类型只是把地址指过去
// let target = {
//   a: {
//     b: {
//       c: 3
//     },
//     d: 4,
//     e: 5,
//     f: 6
//   }
// }
// let source = {
//   a: {
//     b: {
//       c: 3
//     },
//     d: 4,
//     e: 5
//   }
// }
// Object.assign(target, source)
// console.log(target)

// JSON深拷贝
// 缺陷
// 不能复制function、正则、Symbol
// 循环引用报错
// 相同的引用会被重复复制

// let obj1 = {
//   name: 'xxx',
//   age: 18
// }
// let obj2 = JSON.parse(JSON.stringify(obj1))
// obj1.age = 20
// console.log(obj1, obj2)

// 不完全版本
// 类型不全而且没有考虑循环引用的问题
// let checkType = data => {
//   return Object.prototype.toString.call(data).slice(8, -1)
// }
// let deepClone = target => {
//   let targetType = checkType(target)
//   let result
//   if (targetType === 'Object') {
//     result = {}
//   } else if (targetType === 'Array') {
//     result = []
//   } else {
//     return target
//   }
//   for (let i in target) {
//     let value = target[i]
//     let valueType = checkType(value)
//     if (valueType === 'Object' || valueType === 'Array') {
//       result[i] = deepClone(value)
//     } else {
//       result[i] = value
//     }
//   }
//   return result
// }

// let arr1 = [1,2, {age: 18}]
// let arr2 = deepClone(arr1)
// arr2[2].age = 20
// console.log(arr1, arr2)