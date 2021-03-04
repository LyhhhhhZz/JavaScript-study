const arr = [10, 20, 30, 40]

// pop 返回数组最后一个值 裁剪数组除去最后一个值的数组
// const popRes = arr.pop()
// console.log(popRes, arr)

//shift  返回数组最前面一个值 裁剪数组除去最前面一个值的数组
// const shiftRes = arr.shift()
// console.log(shiftRes, arr);


//push 返回改变后数组的长度 将数值传入到数组最后
// const pushRes = arr.push(50)
// console.log(pushRes, arr);

//unshift 返回改变后数组的长度 将数值传入到数组最前面
// const unshiftRes = arr.unshift(50)
// console.log(unshiftRes, arr);

// 纯函数：1 不改变源数组 2 返回一个数组

// concat
const arr1 = arr.concat([50, 60, 70])

// map
const arr2 = arr.map(num => num * 10)

// filter
const arr3 = arr.filter(num => num > 20)

// slice 类似于深拷贝
const arr4 = arr.slice()

const arr5 = arr.forEach( e => console.log(e))