// i 忽略大小写
// m 多行匹配
// g 全局匹配
// y 粘连修饰符

// const str = 'aaa_aa_a'
const reg1 = /a+/g // 每次匹配剩余
const reg2 = /a+/y // 剩余的第一个开始

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
// console.log(/\u{61}/.test('a'))
// console.log(/\u{61}/u.test('a'))

// console.log(/𠮷{2}/.test('𠮷𠮷'))
// console.log(/𠮷{2}/u.test('𠮷𠮷'))

// dot .
// 使.能够匹配任意单个字符
const reg = /./
console.log(reg.test('5'))
console.log(reg.test('x'))
console.log(reg.test('\n')) //false
console.log(reg.test('\r')) //false

const regall = /./s
console.log(regall.test('5'))
console.log(regall.test('x'))
console.log(regall.test('\n'))
console.log(regall.test('\r'))

// 具名匹配
// const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-01-02')
// console.log(date)
// console.log(date[1])

// const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
// const group = reg.exec('2020-01-02')
// console.log(group)
// let { year, month, day } = group.groups
// console.log(year, month, day)

// 先行断言
const str = 'ecmascript'
console.log(str.match(/ecma(?=script)/))
// 后行断言
console.log(str.match(/(?<=ecma)script/))
