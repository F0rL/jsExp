// 原始数据类型 string number Boolean undefined null Symbol
// symbol象征；符号；标志
// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2, s1 == s2)

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// console.log(s1 === s2, s1 == s2)

// 会自动调用toString方法
// const obj = {
//   name: 'xxx',
//   toString(){
//     return this.name
//   }
// }
// let s = Symbol(obj)
// console.log(s)

// let s = Symbol('foo')
// console.log(s.description)

// symbol.for 相当于定义于全局的
// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2)

// Symbol.keyFor 查看是否在全局
// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1))
// const s2 = Symbol.for('bar')
// console.log(Symbol.keyFor(s2))

// 重复的key后面会替换前面的
// const grade = {
//   张三: {address: 'xxx', tel: '111'},
//   李四: {address: 'yyy', tel: '222'},
//   张三: {address: 'zzz', tel: '333'},
// }
// console.log(grade)

// 不会产生冲突，用作对象的key
// const stu1 = Symbol('李四')
// const stu2 = Symbol('李四')
// const grade = {
//   [stu1]: {address: 'xxx', tel: '111'},
//   [stu2]: {address: 'xxx', tel: '111'}
// }
// console.log(grade)
// console.log(grade[stu1])

// 遍历时symbol属性的差别
// const sym = Symbol('yyy')
// class User {
//   constructor(name) {
//     this.name = name
//     this[sym] = 'yyy sym'
//   }
//   getName() {
//     return this.name + this[sym]
//   }
// }
// const user = new User('xxxx')
// console.log(user)
// console.log(user.getName())

// for(let key in user) {
//   console.log(key)
// }

// for(let key of Object.keys(user)) {
//   console.log(key)
// }

// for(let key of Object.getOwnPropertySymbols(user)){
//   console.log(key)
// }

// for(let key of Reflect.ownKeys(user)) {
//   console.log(key)
// }

// 
// function getArea(shape) {
//   let area = 0
//   switch (shape) {
//     case 'Triangle':
//       area = 1
//       break
//     case 'Circle':
//       area = 2
//       break
//   }
//   return area
// }
// console.log(getArea('Triangle'))

// 消除魔术字符串（多次出现的）
const shapeType = {
  Triangle: Symbol(),
  Circle: Symbol()
}

function getArea(shape) {
  let area = 0
  switch (shape) {
    case shapeType.Triangle:
      area = 1
      break
    case shapeType.Circle:
      area = 2
      break
  }  
  return area
}
console.log(getArea(shapeType.Triangle))