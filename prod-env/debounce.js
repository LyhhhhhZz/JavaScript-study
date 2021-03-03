const input1 = document.getElementById("input1")
// let timer
// input1.addEventListener('keyup', function() {
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         console.log(input1.value)
//         timer = null
//     }, 500)
// })

 function debounce (fn, delay = 500) {
     // timer 是闭包的
     let timer = null

     return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
     }
 }

 input1.addEventListener('keyup', debounce(function () {
     console.log(input1.value)
 }), 600)