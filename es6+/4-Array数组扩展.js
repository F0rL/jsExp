// 类数组，不是真正意义上的数组
// 有length，但不能调用数组方法
// HTMLCollection
// let ele = document.getElementsByTagName('h1')
// console.log(ele)

// NodeList
// let ele = document.querySelectorAll('h1')
// console.log(ele)
// console.log(ele instanceof Array)
// ele.push(111)
// console.log(ele.length)

// slice转化数组
// let ele = document.querySelectorAll('h1')
// let arr = Array.prototype.slice.call(ele)
// console.log(arr)
// arr.push(3)
// console.log(arr)

// arguments
// function foo() {
//   console.log(arguments)
//   console.log(arguments instanceof Array)
// }
// foo(1,2,3)

// array.from
// let arrayLike = {
//   0: '1111',
//   1: '2222',
//   2: '3333',
//   length: 3
// }
// let arr = Array.from(arrayLike)
// arr.push('4444')
// console.log(arr)

// new Array数组构造器
// 如果一个参数时，传入的是数组的长度
// let arr = new Array(1, 2)
// console.log(arr)
// let arr = new Array(3)
// console.log(arr)

// Array.of
// 均表示数值
// let arr1 = Array.of(1,2)
// console.log(arr1)
// let arr2 = Array.of(3)
// console.log(arr2)
// let arr = Array.of(1, true, 'asdf', [1,2,3], { a: 4444})
// console.log(arr)

// copyWithin()
// 三个参数
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr.copyWithin(1, 3))

// fill
// let arr = new Array(3).fill(11)
// console.log(arr)
// let arr = [1, 2, 3, 4, 5, 6]
// arr.fill('x', 1, 3)
// console.log(arr)

// includes
// indexOf cant select NaN
// let arr = [1, 2, 3, 'x', 'iis', 'x', NaN]
// console.log(arr.includes('x'), arr.includes(NaN))

