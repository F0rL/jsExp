// commonjs node.js
// 同步加载

// AMD require.js
// 依赖前置，同步执行
// CMD sea.js
// 依赖就近，延迟执行

// ES6
import saything, { a, b, sum, c as cc } from '../static/exp'
console.log(a, b)
console.log(sum(a,b))
console.log(cc)
saything()