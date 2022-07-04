### 箭头函数

### 1.上下文
```js
    // ES6
    const obj = {
        a: 1,
        b: 2,
        c: [1,2,3],
        getA: function() {
            return this.a
        },
        getB: () => {
            return this.b
        }
    }
```
## 追问：上下文形成的原因 箭头函数不会形成独立的上下文，内部this指向window

### 什么时候用普通函数 什么时候用箭头函数
### 场景1：dom操作cb时
```js
    const btn = document.querySelector('#btn')
    btn.addEventLinstener('click', function() {
        this.style.color = '#fff'
    })
```

### 场景2：类操作---箭头函数无法构造原型方法，不可以当作构造函数
```js
    function Obj(arg1, arg2) {
        this.arg1 = arg1
        this.arg2 = arg2
    }

    Obj.property.fn = function() {
        console.log(this.arg1, this.arg2)
    }
    // 箭头函数无法构造原型方法
    Obj.property.fn = () => {
        console.log(this.arg1, this.arg2)
    }
```

### 2.箭头函数的参数特性 --- 无法使用arguments
```js
    const test = function(arg) {
        console.log(arguments)
    }

    const test = arg => {
        console.log(arguments)
    }//ReferenceError: arguments is not defined
```


