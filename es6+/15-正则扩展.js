// i 忽略大小写
// m 多行匹配
// g 全局匹配
// y 粘连修饰符

// const str = 'aaa_aa_a'
const reg1 = /a+/g  // 每次匹配剩余
const reg2 = /a+/y  // 剩余的第一个开始

// console.log(reg1.exec(str))
// console.log(reg1.exec(str))
// console.log(reg1.exec(str))

// console.log(reg2.exec(str))
// console.log(reg2.exec(str))
// console.log(reg2.exec(str))

// u unicode模式
// const str = '\uD842\uDFB7'
// 下面这个是错误的
// console.log(/^\uD842/.test(str))
// 这个才是正确匹配
// console.log(/^\uD842/u.test(str))


// . 除了换行符意外的任意单个字符
// const str = '\uD842\uDFB7'
// console.log(/^.$/.test(str))
// console.log(/^.$/u.test(str))

// 码点匹配需要u
console.log(/\u{61}/.test('a'))
console.log(/\u{61}/u.test('a'))

console.log(/𠮷{2}/.test('𠮷𠮷'))
console.log(/𠮷{2}/u.test('𠮷𠮷'))