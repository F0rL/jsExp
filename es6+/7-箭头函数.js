// 函数声明
// function sum(x, y) {
//   return x + y
// }
// console.log(sum(1, 2))

// 这种声明需要先定义后调用
// let sum = function (x, y) {
//   return x + y
// }
// console.log(sum(1, 2))

// let sum = (x, y) => {
//   return x + y
// }
// let sum = (x, y) => x + y
// console.log(sum(1, 2))

// 箭头函数this指向上一层的this
let h1 = document.querySelector('h1')
// h1.addEventListener('click', function () {
//   setTimeout(function () {
//     console.log(this)
//   }, 1000)
//   setTimeout(
//     function () {
//       console.log(this)
//     }.bind(this),
//     2000
//   )
//   console.log(this)
// })

// h1.addEventListener('click', function () {
//   setTimeout( () => {
//     console.log(this)
//   }, 1000)
// })

// 不可以当做构造函数
// function People(name, age) {
//   this.name = name
//   this.age = age
// }

// let p1 = new People('xxxx', 18)
// console.log(p1)

// webpack会使用eval影响结果，复制到浏览器执行会报错
// let People = (name, age) => {
//   this.name = name
//   this.age = age
// }
// let p1 = new People('xxxx', 18)
// console.log(p1)

// 不可以使用arguments对象

// webpack会使用eval影响结果，复制到浏览器执行会报错
// let foo = () => {
//   console.log(arguments)
// }
// foo(1, 2, 3)

// 使用rest获取箭头函数参数
// let foo = (...args) => {
//   console.log(args)
// }
// foo(1, 2, 3)
