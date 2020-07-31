// 键值对，key可以为对象
// let m = new Map()
// let obj = {
//   name: 'xxx'
// }
// m.set(obj, 'yyy')
// console.log(m)
// console.log(m.get(obj))
// m.delete(obj)
// console.log(m)
// console.log(m.has(obj))

let map = new Map([
  ['name', 'xxx'],
  ['age', '5']
])
console.log(map)
console.log(map.size)
console.log(map.has('age'))
map.set('name', 'yyy')
console.log(map)

// 遍历
map.forEach((value, key) => {
  console.log(value, key)
})

for (let [key, value] of map) {
  console.log(key, value)
}

for (let key of map.keys()) {
  console.log(key)
}

for (let value of map.values()) {
  console.log(value)
}

for (let [key, value] of map.entries()) {
  console.log(key, value)
}

// weakmap 键名只支持引用数据类型
// 不支持遍历
// let wm = new WeakMap()
// wm.set([1], 2)
// wm.set({name: 'xxx'}, 'yyyy')
// console.log(wm)

let wm = new WeakMap()
let ele = document.getElementsByTagName('h1')
wm.set(ele, 'info')
console.log(wm.get(ele))