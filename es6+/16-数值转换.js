// 十进制 => 二进制
// const a  = 5
// console.log(a.toString(2))

// 二进制 => 十进制
// const b = 101
// console.log(parseInt(b, 2))


// es6
// 0B二进制 0O八进制
// const c = 0B0101
// console.log(c)

// const d = 0O777
// console.log(d)

// 是否有限
// console.log(Number.isFinite(5))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite('xxxx'))

// NaN not a number
// console.log(Number.isNaN(15))
// console.log(Number.isNaN('a'/ 5))
// console.log(Number.isNaN(NaN))

// es6把全局方法模块化，减小全局对象
// console.log(Number.parseInt(5.5))
// console.log(Number.parseFloat(5.5))

// console.log(Number.isInteger(5.5))
// console.log(Number.isInteger(5))

// 精度缺失 超出存储空间的会被舍掉
// console.log(0.1 + 0.2)

// const max = Math.pow(2, 53)
// console.log(max)
// console.log(max+1)

// 转换整数
// console.log(Math.trunc(5.5))
// console.log(Math.trunc(-5.5))
// console.log(Math.trunc(true))
// console.log(Math.trunc(NaN))
// console.log(Math.trunc(undefined))

// console.log(Number.parseInt(true))

// 判断正负零
console.log(Math.sign(5))
console.log(Math.sign(-5))
console.log(Math.sign(0))
console.log(Math.sign(NaN))
console.log(Math.sign(true))

// 立方根
console.log(Math.cbrt(8))
console.log(Math.cbrt('df'))

