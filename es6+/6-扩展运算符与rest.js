// 扩展运算符
// 把数组或者类数组展开用逗号隔开的值
// function foo(a, b, c) {
//   console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// foo(...arr)
// console.log(...arr)

// 合并数组es5 es6
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// Array.prototype.push.apply(arr1, arr2)
// arr1.push(...arr2)
// console.log(arr1)

// let str = 'abcdef'
// let arr = [...str]
// console.log(arr)

// rest参数
// 把逗号隔开的值合成一个数组
// function foo(x, y, z) {
//   console.log(arguments)
//   let sum = 0
//   Array.prototype.forEach.call(arguments, function (item) {
//     sum += item
//   })
//   Array.from(arguments).forEach(item => {
//     sum += item
//   })
//   console.log(sum)
// }
// foo(1, 2)
// foo(1, 2, 3)

// function foo(...args) {
//   console.log(args)
//   let sum = 0
//   args.forEach(item => {
//     sum += item
//   })
//   console.log(sum)
// }
// foo(2,4,5,6,1)

// 剩余参数
// function foo(a, ...args) {
//   console.log(a)
//   console.log(args)
// }
// foo(2, 3, 4, 5, 7)

// 与解构合用
let [x, ...y] = [1, 2, 3, 4, 5]
console.log(x)
console.log(y)
