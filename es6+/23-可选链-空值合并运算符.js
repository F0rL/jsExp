const user = {
  address: {
    street: 'xx街道',
    getNum(){
      return '50'
    }
  }
}

const street  = user && user.address && user.address.street

const num = user && user.address && user.address.getNum && user.address.getNum()

const newNum = user?.address?.getNum?.()
console.log(num, newNum)


// 只有当前面的值undefined null才会取后面的值
// ||有缺陷，如果为0 false null 回取后面的值
const b = 0
const a = b ?? 6
console.log(a)