// async 是Generator语法糖
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
      // reject(3)
    }, 2000)
  })
}

// async function foo() {
//   const res = await timeout()
//   console.log(res)
//   console.log(2)
// }
// foo()

async function foo(){
  return await timeout()
}
foo().then(res => {
  console.log(res)
}).catch(err => [
  console.log(err)
])
