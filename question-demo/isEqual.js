const obj1 = {
    a : 100,
    b : {
        x : 200,
        y : 300
    }
}

const obj2 = {
    a : 100,
    b : {
        x : 200,
        y : 400
    }
}

const obj3 = {}

console.log(Object.keys(obj1));
function isObject (obj) {
    return typeof obj === 'object' && obj !== null
}

function isEqual (obj1, obj2) {
    // 1 判断传入的是不是对象
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2
    }
    // 2 判断传入的是不是同一个对象
    if (obj1 === obj2) {
        return true
    }
    // 此时传入的一定是数组或者对象
    // 判断对象k的个数是否相等
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    // 此时k值个数相等 以obj1为模板和obj2 进行递归比较
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }
    return true
}

console.log(isEqual(obj1, obj2));
