// 基础用法
// let arr =  [1,2,3]
// let [a, b, c] = arr
// console.log(a,b,c)

// 赋值规则
// let [a, b, c, [d, e], [f], g] = [1, 2, [3, 4], [5, 6], [7, 8]]
// console.log(a, b, c, d, e, f, g)

// 对象解构和别名
// let user = {
//   name: 'xx',
//   age: '18',
// }

// let { name: xname, age: xage } = user
// console.log(xname, xage)

// 字符串解构赋值
// let str = '1234567'
// let [a, b, c, d] = str
// console.log(a, b, c, d)

// 默认值
// let [a, b, c = 5] = [1, 2]
// console.log(a, b, c)

// 惰性
// fuanction foo() {
//   console.log(123)
// }
// let [a = foo()] = [1]
// console.log(a)

// 参数
// function foo([a, b, c]) {
//   console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// foo(arr)

// 返回值
// function foo() {
//   return {
//     a: 1111,
//     b: 2222,
//   }
// }
// let { a, b } = foo()
// console.log(a, b)

// JSON
// let json = '{"a": "1111", "b": "2222"}'
// let {a, b} = JSON.parse(json)
// console.log(a,b)
