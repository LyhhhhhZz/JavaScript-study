const obj = {
    a: 1,
    b: 2,
    c: [1,2,3]
}


const deepFreeze = obj => {
    Object.freeze(obj)
    (Object.keys(obj) || []).forEach(key => {
        if(typeof obj[key] === 'object') {
            deepFreeze(obj[key])
        }
    })
}

deepFreeze(obj)

obj.c = 1000
console.log(obj)


