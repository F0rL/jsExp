// es5类
// function People(name, age) {
//   // 实例属性
//   this.name = name
//   this.age = age
//   People.count++
// }
// 静态属性
// People.count = 0

// 静态方法
// People.getCount = function() {
//   console.log('the number of people is ' + this.count)
// }

// People.prototype.showName = function() {
//   console.log('my name is ' + this.name)
// }
// let p1 = new People('xxx', 18)
// console.log(p1)
// let p2 = new People('yyy', 20)
// console.log(p2)
// console.log(People.getCount())

// 继承

// 父类
// function Animal(name) {
//   this.name = name
// }
// Animal.prototype.showName = function () {
//   console.log('name is ' + this.name)
// }

// 子类
// function Dog(name, color) {
//   Animal.call(this, name)
//   this.color = color
// }

// new 做了什么
// 首先创建一个空对象
// 链接该对象（即设置该对象的构造函数）到另一个对象
// 将步骤1新创建的对象作为this的上下文
// 如果该函数没有返回对象，则返回this
// let f = function(){}
// f.prototype = Animal.prototype
// Dog.prototype = new f()
// Dog.prototype.constructor = Dog

// let d1 = new Dog('wangcai', 'white')
// console.log(d1)
// d1.showName()

// es6
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._sex = -1
  }
  get sex() {
    return this._sex
  }
  set sex(val) {
    this._sex = val
  }
  showName() {
    console.log('name is ' + this.name)
  }
  static getCount() {
    console.log(5)
  }
}

let p1 = new People('xxx', 18)
console.log(p1)
console.log(p1.sex)
p1.sex = 'female'
console.log(p1.sex)
// 静态方法不能被实例调用
People.getCount()

class Student extends People {
  constructor(name, age, classname) {
    super(name, age)
    this.classname = classname
  }
  showClassname() {
    console.log(`${this.name}'s classname is ${this.classname}`)
  }
}

let s1 = new Student('xiaoming', 12, 201)
console.log(s1)
Student.getCount()
