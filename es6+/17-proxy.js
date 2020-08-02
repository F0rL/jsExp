// Object.defineProperty
// let obj = {}
// let newValue = ''
// Object.defineProperty(obj, 'name', {
//   get(){
//     console.log('get')
//     return newValue
//   },
//   set(value){
//     console.log('set')
//     newValue = value
//   }
// })
// obj.name = 'newName'
// console.log(obj.name)

// proxy
// let obj = {}
// let p = new Proxy(obj, {})
// p.name = 'xxx'
// console.log(obj.name)
// for (const key in obj) {
//   console.log(key)
// }

// get
// let arr = [5, 4, 3]
// arr = new Proxy(arr, {
//   get(target, prop) {
//     return prop in target ? target[prop] : 'error'
//   }
// })
// console.log(arr[1])
// console.log(arr[4])

// let dict = {
//   hello: '你好',
//   world: '世界'
// }
// dict = new Proxy(dict, {
//   get(target, prop) {
//     return prop in target ? target[prop] : 'prop'
//   }
// })
// console.log(dict['world'])

// set
// let arr = []
// arr = new Proxy(arr, {
//   set(target, prop, val) {
//     if (typeof val == 'number') {
//       target[prop] = val
//       return true
//     } else {
//       return false
//     }
//   }
// })
// arr.push(4)
// arr.push(6)
// console.log(arr)

// has
// let range = {
//   start: 1,
//   end: 5
// }
// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= target.start && prop <= target.end
//   }
// })
// console.log(2 in range)
// console.log(9 in range)

// ownKeys
// let obj = {
//   name: 'xxx',
//   [Symbol('es')]: 'es6'
// }
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Object.keys(obj))
// for(let key in obj) {
//   console.log(key)
// }

// let userInfo = {
//   username: 'xxxx',
//   age: 18,
//   _password: '****'
// }
// userInfo = new Proxy(userInfo, {
//   ownKeys(target) {
//     return Object.keys(target).filter(key => {
//       return !key.startsWith('_')
//     })
//   }
// })
// for (let key in userInfo) {
//   console.log(key)
// }

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
      return target[prop]
    }
  },
  set(target, prop, val) {
    if (prop.startsWith('_')) {
      throw new Error('can not visit')
    } else {
      target[prop] = val
      return true
    }
  },
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('can not visit')
    } else {
      delete target[prop]
      return true
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter(key => {
      return !key.startsWith('_')
    })
  }
})
// console.log(user.age)
// console.log(user._password)
// user.age = 22
// console.log(user.age)

// try{
//   uer._password = 222
// }catch(e) {
//   console.log(e.message)
// }

// try{
//   delete user.age
//   delete user._password
// }catch(e) {
//   console.log(e.message)
// }

// console.log(user)

// for (let key in user) {
//   console.log(key)
// }

// apply
// let sum = (...args) => {
//   let num = 0
//   args.forEach(item => {
//     num += item
//   })
//   return num
// }
// sum = new Proxy(sum, {
//   apply(target, ctx, args) {
//     return target(...args) * 2
//   }
// })
// console.log(sum(1, 2))
// console.log(sum.call(null, 1, 4))
// console.log(sum.apply(null, [1, 4]))

// construct 拦截new 返回一个对象
let User = class {
  constructor(name) {
    this.name = name
  }
}
User = new Proxy(User, {
  construct(target, args, newTarget) {
    return new target(...args)
  }
}) 
console.log(new User('sss'))
