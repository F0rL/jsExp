// let

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

// const

// 不属于顶层对象window
// const a = 1
// console.log(window.a)

// 定义基础类型不可更改
// 类似于writable: false,
// Object.defineProperty(window, 'PI', {
//   value: 3.14,
//   writable: false,
// })
// console.log(PI)
// PI = 5
// console.log(PI)

// const a
// a = 5
// console.log(a)

// 引用数据类型内部属性可以更改，const只限定指向的内存空间
// const obj = {
//   a: 1111,
//   b: 2222
// }
// console.log(obj)
// obj.c = 3333
// console.log(obj)
// obj = {ddd: 4444}
// console.log(obj)

// 如果要限定对象不变，只做浅层冻结，如都要冻结，需手动
// const obj = {
//   a: 1111,
//   b: 2222,
//   c: {
//     d: 4444
//   }
// }
// Object.freeze(obj)
// obj.c = 3333
// console.log(obj)
// obj.c.e = 5555
// console.log(obj)


// 不允许声明一个可以改变的常量
// 不允许重复声明
// 其余同let，不存在变量提升，有暂时性死区和块级作用域
