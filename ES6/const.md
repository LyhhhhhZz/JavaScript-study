### const 常量标识
```js
    const NUM = 10
    const OBJ_MAP = {
        a: 'A',
        A: 'a'
    }
```
### 1. 不允许重复声明，重新赋值

```js
    //ES5 实现不允许重新赋值
    var a = 1
    Object.definProperty(window, 'a', {
        value: 1,
        writable: false
    })
```

### 2. 块级作用域
```js
    if(true) {
        var arg1 =1
    }
    console.log(`arg1=${arg1}`)

    if(true) {
        const arg2 =1
    }
    console.log(`arg2=${arg2}`)
    // 变量提升 + 块级作用域
```

### 3. const 无变量提升
```js
    // 无变量提升，先声明再使用
    console.log(arg2)
    const arg2 = 1  // ReferenceError: arg2 is not defined
```

```js
    var arg1 = 1
    console.log(window.arg1)

    // const不在window中
    const arg2 = 1
    console.log(window.arg2) // undefined
```

### 4. dead zone 死区
```js
    {
        console.log(arg1)
        const arg1 = 1
    }
    // ReferenceError: Cannot access 'arg1' before initialization
```

### 5. let or const
    当前约定引用类型使用const声明
```js
    // 引用类型的原理 --- 指向地址 因此obj中的内容可以改变
    // 如何使obj内容不可改变呢？ --- Object.freeze()

    const obj = {
        a: 1,
        b: 2,
        c: [1,2,3]
    }
    Object.freeze(obj)
    obj.c[0] = 100 // 可以改变

    // freeze 只能冻结第一层，嵌套引用类型需要遍历递归
    const deepFreeze = obj => {
        Object.freeze(obj)

        // 如果用 for...in 记得加hasOwnProperty 一般都是成对出现的
        (Object.keys(obj) || []).forEach(key => {
            if(typeof obj[key] === 'object') {
                deepFreeze(obj[key])
            }
        })
    }

    // loadsh： clone, deepclone, equal, deepEqual
    // 多看loadsh的实现

```

