// let s = new Set()
// console.log(s)

// 成员唯一
// let s = new Set([1, 2, 3, 4, 2])
// s.add('xxx')
// s.add('es').add('js')
// s.delete(2)
// console.log(s)
// s.clear()
// console.log(s)
// 是否包含
// console.log(s.has('xxx'))
// 元素个数
// console.log(s.size)
// 遍历
// s.forEach(item => console.log(item))

// for(let item of s ) {
//   console.log(item)
// }

// for(let item of s.keys()) {
//   console.log(item)
// }

// for(let item of s.values()) {
//   console.log(item)
// }

// key === value
// for(let item of s.entries()) {
//   console.log(item)
// }

// 数组去重
// let arr = [1,2,3,4,1,2,5,6]
// let s = new Set(arr)
// console.log(s)

// 合并去重
// let arr1 = [1,2,3,4]
// let arr2 = [1,2,6,8]
// let s = new Set([...arr1, ...arr2])
// console.log(s)
// console.log([...s])
// console.log(Array.from(s))

// 交集
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let result = new Set(arr1.filter(item => s2.has(item)))
// console.log(Array.from(result))

// 差集
// let arr3 = new Set(arr1.filter(item => !s2.has(item)))
// let arr4 = new Set(arr2.filter(item => !s1.has(item)))
// console.log([...arr3, ...arr4])

// WeakSet
// 只能放对象
// 不可遍历
let ws = new WeakSet()
const obj1 = { a: 1 }
const obj2 = { b: 2 }
ws.add(obj1)
ws.add(obj2)
ws.delete(obj1)
console.log(ws.has(obj2))
console.log(ws)

// 垃圾回收不会考虑weakset 弱引用
// 临时存放一些对象
