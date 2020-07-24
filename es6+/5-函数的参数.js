// 函数默认值

// 0 为false，y本该为0
// function foo(x, y) {
//   y = y || 'world'
//   console.log(x, y)
// }
// foo('hello', 0)

// function foo(x, y = 'world') {
//   console.log(x, y)
// }
// foo('hello', 0)

// 注意顺序
// function foo(x, z, y) {
//   console.log(x, y, z)
// }
// foo(1, 2)

// 与解构赋值结合，需完全匹配
// function foo({x, y = 5}) {
//   console.log(x, y)
// }
// foo({x: 1})

// function ajax(url, {
//   body = '',
//   method = 'GET',
//   headers = {}
// } = {}) {
//   console.log(method)
// }
// ajax('https://www.baidu.com')
// ajax('https://www.baidu.com', {method: 'POST'})

// length属性
// 返回没有指定默认值的参数个数
// function foo(x, y, z = 3) {
//   console.log(x, y)
// }
// console.log(foo.length)

// 作用域
// let x = 1
// function foo(x, y = x) {
//   console.log(y)
// }
// foo(2)

// 作用域链
// let x = 1
// function foo(y = x) {
//   let x = 2
//   console.log(y)
// }
// foo(2)

// 函数name属性
// 第一个输出foo，第二个输出anonymous (匿名)
// function foo() {}
// console.log(foo.name)
// console.log(new Function().name)

// bind后不立即执行
// function foo(x, y) {
//   console.log(this, x, y)
// }
// foo.bind({ name: 'xxx' }, 1, 2)()
// foo

// console.log(foo.bind({}).name)
// bound foo

// console.log((function(){}).bind({}).name)
// bound
