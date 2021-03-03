// function ajax(url, successFn) {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url, true)//true 表示允许异步
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 successFn(xhr.responseText)
//             }
//         }
//     }
//     xhr.send(null)
// }

function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url, true)//true 表示允许异步
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
const url = './data/text.json'
ajax(url).then(res => console.log(res))
.catch(err => console.log(err))