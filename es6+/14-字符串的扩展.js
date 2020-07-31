// 加强对unicode的支持
// 码点范围 0000 ~ ffff
// 加大括号，取值范围扩大 \u{20BB7}
// console.log('\z' === 'z')

// 遍历
// for (let i of 'asdfqewr') {
//   console.log(i)
// }

// 模板字符串
// const str1 = 'asdfsdaf\n' + 'asdfdsf\n' + 'asdfdsf\n'
// console.log(str1)
// console.log(`sadfdsf
// dafsdf
// asdfsadf`)

// const a = 'asdf'
// const b = 'werewr'
// const c = 1
// const d = 44
// console.log(`${a} xxxx ${b} ${c+d}`)

// 模板
// const isLarge = () => {
//   return true
// }
// let class1 = 'icon'
// class1 += isLarge() ? '-big' : '-small'
// console.log(class1)

// const class2 =  `icon-${isLarge() ? 'big' : 'small'}`
// console.log(class2)

// 带标签的模板
// const foo = (a,b,c,d) => {
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
// }
// const name = 'xxx'
// const age = 17
// foo`这是${name}的${age}`

// 方法
// unicode 码点转换
// console.log(String.fromCharCode(0x20bb7))
// console.log(String.fromCodePoint(0x20bb7))

// indexOf
const str = 'sadf'
console.log(str.indexOf('d'))
console.log(str.includes('f'))
console.log(str.startsWith('e'))
console.log(str.endsWith('f'))

const newStr = str.repeat(10)
console.log(newStr)