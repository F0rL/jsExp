let arr = [1, 2, 2, 3, 4, 5]

// for
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// forEach
// 里面不支持break continue
// 循环中途无法跳出
// arr.forEach((el, index, arr) => {
//   console.log(el,index,arr)
// })

// map
// 返回值组成新的数组，不会改变原数组
// let result = arr.map((value) => {
//   value += 1
//   return value
// })
// console.log(arr, result)

// filter
// 过滤，不改变原数组
// let result = arr.filter(value => {
//   return value === 2
// })
// console.log('arr: ', arr, 'result: ', result)

// some
// 检测是否有满足条件
// let result = arr.some(value => {
//   return value === 2
// })
// console.log(arr, result)

// every
// 检测每一个是否满足条件
// let result = arr.every(value => {
//   return value === 2
// })
// console.log(arr, result)

// reduce
// 接受一个函数作为累加器
// 求和
// let sum = arr.reduce((pre, cur, index, arr) => {
//   console.log(pre, cur, index, arr)
//   return pre + cur
// }, 0)
// console.log(sum)
// 找最大
// let max = arr.reduce((pre, cur) => {
//   return Math.max(pre, cur)
// })
// console.log(max)
// 去重
// let result = arr.reduce((pre, cur) => {
//   pre.indexOf(cur) === -1 && pre.push(cur)
//   return pre
// }, [])
// console.log(result)

// for in ???
// 会遍历原型方法
// Array.prototype.foo = () => {
//   console.log('foo')
// }
// for( let index in arr) {
//   console.log(index, arr[index])
// }

// find
// 返回第一个符合的
// let result = arr.find(value => {
//   return value === 2
// })
// console.log(result, arr)

// findIndex
// let result = arr.findIndex((value) => {
//   return value === 2
// })
// console.log(result, arr)

// for of
// .values() .keys() .entries()方法
// for (const item of arr) {
//   console.log(item)
// }
// for (const item of arr.values()) {
//   console.log(item)
// }
// for (const item of arr.keys()) {
//   console.log(item)
// }
// for (const [index, item] of arr.entries()) {
//   console.log(index, item)
// }

