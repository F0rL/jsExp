// Object 一些内部方法转移到 reflect 更规范
// let obj = {}
// let newVal = ''
// Reflect.defineProperty(obj, 'name', {
//   get() {
//     return newVal
//   },
//   set(val) {
//     console.log('set')
//     newVal = val
//   }
// })

// obj.name = 'es'
// console.log(obj.name)

// 可以返回布尔值，让其更为合理
// if (Reflect.defineProperty()) {
// } else {
// }

//  object操作变为函数行为
// console.log('assign' in Object)
// console.log(Reflect.has(Object, 'assigns'))

// Reflet对象的方法与Proxy对象的方法一一对应
let user = {
  name: 'xxx',
  age: 18,
  _password: '****'
}

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('can not visit')
    } else {
      // return target[prop]
      return Reflect.get(target, prop)
    }
  },
  set(target, prop, val) {
    if (prop.startsWith('_')) {
      throw new Error('can not visit')
    } else {
      // target[prop] = val
      Reflect.set(target, prop, val)
      return true
    }
  },
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('can not visit')
    } else {
      // delete target[prop]
      Reflect.deleteProperty(target, prop)
      return true
    }
  },
  ownKeys(target) {
    // return Object.keys(target).filter(key => {
    //   return !key.startsWith('_')
    // })
    return Reflect.ownKeys(target).filter(key => {
      return !key.startsWith('_')
    })
  }
})
console.log(user.age)
user.age = 22
console.log(user.age)
try {
  user._password = 'dfdf'
} catch (e) {
  console.log(e.message)
}

delete user.age
console.log(user)

for (const key in user) {
  console.log(key)
}
