const a = 5
const b = 6
const c = 7
const sum = (x, y) => x + y
const say = () =>{
  console.log('say something')
}

export { a, b, c, sum }

// export default 只能有一个
export default (say)
