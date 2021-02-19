const obj1 = {
  age: '25',
  name: 'xxx',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
console.log(obj1.address.city)


function deepClone(obj) {
  // 判读值类型和引用类型
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 判断数组还是对象
  let result
  if (obj instanceof Array) {
    result = []
  }else {
    result = {}
  }
  
  // 递归
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}