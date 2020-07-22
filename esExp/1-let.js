// 不属于顶层对象window
// let a = 1
// console.log(a)
// console.log(window.a)

// 不允许重复声明
// let a = 1
// let a = 2

// 不存在变量提升
// console.log(a)
// let a = 5

// 暂时性死区
// 防止声明前使用变量
// var a = 1
// if(true) {
//   a = 6
//   let a
// }

// 块级作用域
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log('i: ', i)
