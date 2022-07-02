## const 常量标识
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