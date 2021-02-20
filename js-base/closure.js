// // 函数作为返回值
// function creat() {
//   let a = 100
//   return function () {
//     console.log(a)
//   }
// }
// let a = 200
// let fn = creat ()
// fn()

// 函数作为参数
function print(fn) {
  let a = 200
  fn()
}
let a = 100
function fn() {
  console.log(a);
}
print(fn)
