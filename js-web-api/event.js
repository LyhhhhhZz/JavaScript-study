// 通用的事件绑定函数
const btn1 = document.getElementById('btn1')

function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}

// bindEvent(btn1, 'click', event => {
//     // console.log(event.target) //获取触发的元素
//     event.preventDefault() //阻止默认行为
//     alert('clicked')
// })

// // 事件冒泡
// const p1 = document.getElementById('p1')
// const body = document.body
// bindEvent(p1, 'click', e => {
//     e.stopPropagation() //阻止冒泡
//     alert('激活')
// })
// bindEvent(body, 'click', e => {
//     alert('取消')
// })

// 事件代理
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', event => {
    event.preventDefault()
    const target = event.target
    if (target.nodeName === 'A') {
        alert(target.innerHTML)
    }
})
