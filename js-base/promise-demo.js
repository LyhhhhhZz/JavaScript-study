function loadImg(src) {
  return new Promise(
    (resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图片加载失败 ${src}`)
        reject(err)
      }
      img.src = src
    }
  )
}  

const url1 = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1734871178,1488647290&fm=26&gp=0.jpg'
const url2 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F12%2F20171112220158_UHYMa.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616855503&t=e9f4429ced567276d52898cf452a3505'

loadImg(url1).then(img => {
  console.log(img.width)
  return img
}).then(img => {
  console.log(img.height)
  return loadImg(url2)
}).then(img => {
  console.log(img.src)
}).catch(ex => console.log(ex))